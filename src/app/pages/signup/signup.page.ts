import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.services';
import { ComponentService } from 'src/app/services/component.service';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;
  signUpFormSubmitted: boolean = false;

  constructor(private router: Router,private appService: AppService,private location: Location,private componentService: ComponentService,private apiService: ApiService, private navCtrl: NavController, private formBuilder: FormBuilder,) { }

  onClickBack() {
    this.location.back();
  }

  //signup
  onSignUpClick() {
    this.signUpFormSubmitted = true;
    if (this.signupForm.valid) {
      this.componentService.getLoader().then(
        (loader) => {
          loader.present().then(
            () => {
              this.apiService.signup(this.signupForm.value).subscribe(
                (res: any) => {
                  console.log(res);
                  if (res.status) {
                    this.appService.setProfile(res.user);
                    loader.dismiss();
                    this.navCtrl.navigateRoot('/entercode');
                    // this.navCtrl.navigateForward('/entercode', {
                    //   queryParams: {},
                    //   animated: false
                    // });
                    this.componentService.getToast(res.message, 3000, 'top', 'success').then(
                      (toast) => {
                        toast.present();
                      }
                    );
                  } else {
                    this.componentService.getToast(res.message, 3000, 'top', 'danger').then(
                      (toast) => {
                        toast.present();
                      }
                    );
                    loader.dismiss();
                  }
                }, (err: any) => {
                  console.log(err);
                  loader.dismiss();
                }
              );
            }
          );
        }
      );
    }
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      phone_number: ['', [Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/), Validators.minLength(11), Validators.maxLength(11)]]
      // password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

}

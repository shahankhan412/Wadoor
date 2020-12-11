import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.services';
import { ComponentService } from 'src/app/services/component.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;
  loginFormSubmitted: boolean = false;

  constructor(private appService: AppService,private location: Location,private componentService: ComponentService,private apiService: ApiService, private navCtrl: NavController, private formBuilder: FormBuilder,) { }

  onClickBack(){
    this.location.back();
  }

  //login
  onLoginClick() {
    this.loginFormSubmitted = true;
    if (this.loginForm.valid) {
      this.componentService.getLoader().then(
        (loader) => {
          loader.present().then(
            () => {
              this.apiService.login(this.loginForm.value).subscribe(
                (res: any) => {
                  console.log(res);
                  if (res.status) {
                    this.appService.setProfile(res.user);
                    this.navCtrl.navigateRoot('/entercode');
                    this.componentService.getToast(res.message, 3000, 'top', 'success').then(
                      (toast) => {
                        toast.present();
                      }
                    );
                    loader.dismiss();
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
    this.loginForm = this.formBuilder.group({
      phone_number: ['', [Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/), Validators.minLength(11), Validators.maxLength(11)]]
    });
  }

}

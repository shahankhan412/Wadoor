import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { ApiService } from 'src/app/services/api.services';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-entercode',
  templateUrl: './entercode.page.html',
  styleUrls: ['./entercode.page.scss'],
})
export class EntercodePage implements OnInit {

  verifyForm: FormGroup;
  verifyFormSubmitted: boolean = false;

  verification_code: any;
  num1: any;
  num2: any;
  num3: any;
  num4: any;

  constructor(private appService: AppService, private componentService: ComponentService, private apiService: ApiService, private navCtrl: NavController, private formBuilder: FormBuilder,) {
  }

  //verify
  onVerifyClick() {
    this.verifyFormSubmitted = true;

    if (this.verifyForm.valid) {
      this.componentService.getLoader().then(
        (loader) => {
          loader.present().then(
            () => {
              this.verification_code = "" + this.verifyForm.value.num1 + this.verifyForm.value.num2 + this.verifyForm.value.num3 + this.verifyForm.value.num4;
              this.apiService.otp(this.verification_code, this.appService.getProfile().number).subscribe(
                (res: any) => {
                  console.log(res);
                  if (res.status) {
                    this.navCtrl.navigateRoot('/store');
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

  ionViewDidEnter() {

  }

  ngOnInit() {
    this.verifyForm = this.formBuilder.group({
      num1: ['', [Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/), Validators.minLength(1), Validators.maxLength(1)]],
      num2: ['', [Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/), Validators.minLength(1), Validators.maxLength(1)]],
      num3: ['', [Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/), Validators.minLength(1), Validators.maxLength(1)]],
      num4: ['', [Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/), Validators.minLength(1), Validators.maxLength(1)]]
    });
  }

}

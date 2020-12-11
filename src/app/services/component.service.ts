import { Injectable } from '@angular/core';
import { ToastController, LoadingController, ModalController, AlertController, PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private toastCtrl: ToastController, private loadingCtrl: LoadingController,
    private modalCtrl: ModalController, private alertController: AlertController,
    private popoverCtrl: PopoverController) {
  }

  public getLoader(spnr = undefined, msg = '', css = '', bdd = false) {
    return this.loadingCtrl.create({
      spinner: spnr,
      message: msg,
      cssClass: css,
      backdropDismiss: bdd
    });
  }

  public getToast(msg: any, dur: any, pos: any, css = '') {
    return this.toastCtrl.create({
      message: msg,
      duration: dur,
      position: pos,
      cssClass: css,
    });
  }

  public getToastWithBtn(msg: any, pos: any, css = '') {
    return this.toastCtrl.create({
      message: msg,
      position: pos,
      cssClass: css,
      buttons: [
        {
          text: 'Show',
          role: 'true',
          handler: () => {
          }
        },
        {
          text: 'Cancel',
          role: 'false',
          handler: () => {
          }
        }
      ]
    });
  }

  public getConfirmToast(msg: any, pos: any, css = '') {
    return this.toastCtrl.create({
      message: msg,
      position: pos,
      cssClass: css,
      buttons: [
        {
          text: 'Agree',
          role: 'positive',
          handler: () => {
            this.toastCtrl.dismiss();
          }
        }, {
          text: 'Disagree',
          role: 'negative',
          handler: () => {
            this.toastCtrl.dismiss();
          }
        }
      ]
    });
  }

  public getModal(cmp: any, cmpProps: any, css = '', bdd = false) {
    return this.modalCtrl.create({
      component: cmp,
      componentProps: cmpProps,
      cssClass: css,
      backdropDismiss: bdd,
    });
  }

  getAlert(title: any, msg: any, css = '') {
    return this.alertController.create({
      header: title,
      message: msg,
      cssClass: css,
      buttons: ['OK']
    });
  }

  getCallAlert(title: any, msg: any, css: any, btn: any) {
    return this.alertController.create({
      header: title,
      message: msg,
      cssClass: css,
      backdropDismiss: false,
      buttons: [
        {
          text: btn,
          role: 'click'
        }
      ]
    });
  }

  getRemoveAdminAlert(title: any, msg: any, css?: any) {
    let alert = this.alertController.create({
      header: title,
      message: msg,
      cssClass: css,
      backdropDismiss: false,
      buttons: [
        {
          text: 'OKAY',
          role: 'true'
        }
      ]
    });
    return alert;
  }

  getVersionAlertRequired(title: any, msg: any, text1, text2, css?: any) {
    const alert = this.alertController.create({
      header: title,
      message: msg,
      cssClass: css,
      backdropDismiss: false,
      buttons: []
    });
    return alert;
  }

  getVersionAlert(title: any, msg: any, text1, text2, css?: any) {
    const alert = this.alertController.create({
      header: title,
      message: msg,
      cssClass: css,
      backdropDismiss: false,
      buttons: [
        {
          text: text1,
          role: 'positive',
          handler: () => {
            this.alertController.dismiss();
          }
        },
        {
          text: text2,
          role: 'negative',
          handler: () => {
            this.alertController.dismiss();
          }
        },
      ]
    });
    return alert;
  }

  getConfirmAlert(title: any, msg: any, css?: any) {
    let alert = this.alertController.create({
      header: title,
      message: msg,
      cssClass: css,
      buttons: [
        {
          text: 'Agree',
          role: 'true',
          handler: () => {
            this.alertController.dismiss();
          }
        },
        {
          text: 'Disagree',
          role: 'false',
          handler: () => {
            this.alertController.dismiss();
          }
        }
      ]
    });
    return alert;
  }

  getStatusAlert(title: any, msg: any, css?: any) {
    let alert = this.alertController.create({
      header: title,
      message: msg,
      cssClass: css,
      backdropDismiss: false,
      buttons: [
        {
          text: 'No',
          role: 'false',
          handler: () => {
            this.alertController.dismiss();
          }
        },
        {
          text: 'Yes',
          role: 'true',
          handler: () => {
            this.alertController.dismiss();
          }
        }
      ]
    });
    return alert;
  }

  getPopover(cmp: any, cmpProps: any, css: any, bdd = false, ev?: any) {
    return this.popoverCtrl.create({
      component: cmp,
      componentProps: cmpProps,
      cssClass: css,
      backdropDismiss: bdd,
      event: ev
    });
  }

  getLoginAlert(title: any, msg: any, css?: any) {
    let alert = this.alertController.create({
      header: title,
      message: msg,
      cssClass: css,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Login',
          role: 'true',
          handler: () => {
            this.alertController.dismiss();
          }
        },
        {
          text: 'Cancel',
          role: 'false',
          handler: () => {
            this.alertController.dismiss();
          }
        }
      ]
    });
    return alert;
  }

}

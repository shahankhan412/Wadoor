import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.page.html',
  styleUrls: ['./payment-success.page.scss'],
})
export class PaymentSuccessPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  rating(){
    this.navCtrl.navigateRoot('/rating');
  }

  ngOnInit() {
  }

}

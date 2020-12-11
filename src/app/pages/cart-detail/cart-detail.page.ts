import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.page.html',
  styleUrls: ['./cart-detail.page.scss'],
})
export class CartDetailPage implements OnInit {

  constructor(private location: Location,private navCtrl: NavController) { }

  onClickBack(){
    this.location.back();
  }

  pay(){
    this.navCtrl.navigateRoot('/payment-success');
  }
  
  navigate(){
    this.navCtrl.navigateRoot('/navigation');
  }
  ngOnInit() {
  }

}

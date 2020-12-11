import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private location: Location,private navCtrl: NavController) { }

  onClickBack(){
    this.location.back();
  }

  onClickDetail(){
    this.navCtrl.navigateRoot('/cart-detail');
  }

  onClick(){
    this.navCtrl.navigateRoot('/detailbutton');
  }

  ngOnInit() {
  }

}

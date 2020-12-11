import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  onClick(){
    this.navCtrl.navigateRoot('/bottledwater');
  }

  onCart(){
    this.navCtrl.navigateRoot('/cart');
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bottledwater',
  templateUrl: './bottledwater.page.html',
  styleUrls: ['./bottledwater.page.scss'],
})
export class BottledwaterPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  onClick(){
    this.navCtrl.navigateRoot('/detailbutton');
  }

  onCart(){
    this.navCtrl.navigateRoot('/cart');
  }

  

  ngOnInit() {
  }

}

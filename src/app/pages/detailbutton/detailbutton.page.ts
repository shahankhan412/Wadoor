import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location} from '@angular/common'

@Component({
  selector: 'app-detailbutton',
  templateUrl: './detailbutton.page.html',
  styleUrls: ['./detailbutton.page.scss'],
})
export class DetailbuttonPage implements OnInit {

  constructor(private location: Location,private navCtrl: NavController) { }

  onCart(){
    this.navCtrl.navigateRoot('/cart');
  }

  onClickBack(){
    this.location.back();
  }

  ngOnInit() {
  }

}

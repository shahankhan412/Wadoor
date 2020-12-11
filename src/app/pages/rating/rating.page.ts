import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goHome(){
     this.navCtrl.navigateRoot('/store');
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.page.html',
  styleUrls: ['./getstarted.page.scss'],
})
export class GetstartedPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  onSignUp(){
    this.navCtrl.navigateRoot('/signup');
  }

  onSignIn(){
    this.navCtrl.navigateRoot('/login');
  }

  ngOnInit() {
  }

}

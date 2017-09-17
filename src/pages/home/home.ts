import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToAboutPage(): void {
    this.navCtrl.push('AboutPage');
  }

  navigateToSecondPage(): void {
    this.navCtrl.push('SecondPage', {
      message: 'Hello from homepage'
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter fires as about to active');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter fires each time entered');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave fires as about to leave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave fires when left');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload fires when page is about to be destroyed');
  }

}

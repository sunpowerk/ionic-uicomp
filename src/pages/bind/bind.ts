import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()//{name:"bindPage"}<---빼도됨...
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html',
})
export class BindPage {

  userName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  userName2 = this.navParams.get("name");
  //Life cycle method 화면이 load 되고 난후에 바로 호출되는 메소드,
  ionViewDidLoad() {
    console.log('1.>>ionViewDidLoad BindPage' + this.navParams.get("name"));
  }

  goback() {
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
    console.log("2.>>Homepage ionViewWillEnter() 호출");
  }
  ionViewWillUnload() {
    console.log("3.>>Homepage ionViewWillUnload() 호출");
  }
}

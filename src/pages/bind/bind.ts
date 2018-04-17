import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"bindPage"})
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
    alert('ionViewDidLoad BindPage' + this.navParams.get("name"));
  }

  goback() {
    this.navCtrl.pop();
  }
}

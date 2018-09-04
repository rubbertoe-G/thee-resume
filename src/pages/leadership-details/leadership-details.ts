import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Experience } from '../../interfaces/common.interface';

/**
 * Generated class for the LeadershipDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leadership-details',
  templateUrl: 'leadership-details.html',
})
export class LeadershipDetailsPage {
  
  selectedLeadership: Experience;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.selectedLeadership = this.navParams.get('selectedLeadership')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadershipDetailsPage');
  }

  close(){
    this.viewCtrl.dismiss()
  }

}

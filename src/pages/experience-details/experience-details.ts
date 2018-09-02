import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Experience } from '../../interfaces/common.interface';

/**
 * Generated class for the ExperienceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experience-details',
  templateUrl: 'experience-details.html',
})
export class ExperienceDetailsPage {

  selectedExperience: Experience;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController

  ) {
    this.selectedExperience = this.navParams.get('selectedExperience')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperienceDetailsPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

}

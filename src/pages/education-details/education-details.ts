import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Education } from '../../interfaces/education.interface';
/**
 * Generated class for the EducationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 

@IonicPage()
@Component({
  selector: 'page-education-details',
  templateUrl: 'education-details.html',
})
export class EducationDetailsPage {

  selectedEducation: Education;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.selectedEducation = this.navParams.get('selectedEducation')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationDetailsPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

}

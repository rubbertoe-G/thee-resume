import { EducationDetailsPage } from './../education-details/education-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EducationProvider } from '../../providers/education/education';

/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eduPvdr: EducationProvider,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  }

  educations = this.eduPvdr.educations;

  educationDetails(edu: any){
    const modal = this.modalCtrl.create(EducationDetailsPage, {
      selectedEducation: edu
    });
    modal.present();
  }

}

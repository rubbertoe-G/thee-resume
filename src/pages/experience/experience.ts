import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ExperienceProvider } from '../../providers/experience/experience';
import { Experience } from '../../interfaces/common.interface';
import { ExperienceDetailsPage } from '../experience-details/experience-details';


@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html',
})
export class ExperiencePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public expericnePrvdr: ExperienceProvider,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperiencePage');
  }

  exps: Array<Experience> = this.expericnePrvdr.experiences;

  experienceDetails(exp: Experience){
    const modal = this.modalCtrl.create(ExperienceDetailsPage, {
      selectedExperience: exp
    });
    modal.present();
  }

}

import { Component } from '@angular/core';
import {  NavController, NavParams, ModalController } from 'ionic-angular';
import { ExperienceProvider } from '../../providers/experience/experience';
import { Experience } from '../../interfaces/common.interface';
import { ExperienceDetailsPage } from '../experience-details/experience-details';
import { LeadershipDetailsPage } from '../leadership-details/leadership-details';

/**
 * Generated class for the LeadershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-leadership',
  templateUrl: 'leadership.html',
})
export class LeadershipPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public expericnePrvdr: ExperienceProvider,
    public modalCtrl: ModalController
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadershipPage');
  }

  leaderExps: Array<Experience> = this.expericnePrvdr.leadershipExps;

  leadershipDetails(exp: Experience){
    const modal = this.modalCtrl.create(LeadershipDetailsPage, {
      selectedLeadership: exp
    });
    modal.present();
  }

}

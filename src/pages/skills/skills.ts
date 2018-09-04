import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { SkillGroup } from '../../interfaces/common.interface';
import { SkillsProvider } from '../../providers/skills/skills';

/**
 * Generated class for the SkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public skillPrdvr: SkillsProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }

  mySkillGroup: Array<SkillGroup> = [
    {
      name:'Languages',
      skills: this.skillPrdvr.languages
    }
  ]

}

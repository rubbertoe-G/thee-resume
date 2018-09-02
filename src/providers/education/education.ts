import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Education} from '../../interfaces/common.interface';

/*
  Generated class for the EducationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EducationProvider {

  constructor() {
    console.log('Hello EducationProvider Provider');
  }

  educations: Array<Education> = [
    {
      name:'University 1',
      degree:'Bachelor of Science in Something',
      place:'Place 1',
      time:'Time 1',
      image:'../../assets/imgs/education/uprm-logo.gif',
      backImage:'../../assets/imgs/backgrounds/uprm-background.jpeg',
      gpaGeneral: 3.85,
      gpaGrad: 3.95
    },

    {
      name:'University 1',
      degree:'Bachelor of Science in Something',
      place:'Place 1',
      time:'Time 1',
      image:'../../assets/imgs/education/uprm-logo.gif',
      backImage:'../../assets/imgs/backgrounds/uprm-background.jpeg',
      gpaGeneral: 3.85,
      gpaGrad: 3.95
    },

  ]

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Education} from '../../interfaces/education.interface';

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

  public educations: Array<Education> = [
    {
      name:'Universidad de Puerto Rico',
      place:'Mayagüez, Puerto Rico',
      time:'Aug 2013 - Present',
      image:'../../assets/imgs/education/uprm-logo.gif'
    },

    {
      name:'Université de Montréal',
      place:'Montréal, Canada',
      time:'Jan 2016 - May 2016',
      image:'../../assets/imgs/education/udem-logo.jpg'
    }

  ]

}

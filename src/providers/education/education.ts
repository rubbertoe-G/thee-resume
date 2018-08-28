import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  public educations = [
    {
      name:'Universidad de Puerto Rico',
      place:'Mayagüez, Puerto Rico',
      time:'Aug 2013 - Present',
      image:'../../assets/imgs/uprm-logo.gif'
    },

    {
      name:'Université de Montréal',
      place:'Montréal, Canada',
      time:'Jan 2016 - May 2016',
      image:'../../assets/imgs/udem-logo.jpg'
    }

  ]

}

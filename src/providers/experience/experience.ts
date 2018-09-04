import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from '../../interfaces/common.interface';

/*
  Generated class for the ExperienceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ExperienceProvider {

  constructor() {
    console.log('Hello ExperienceProvider Provider');
  }

  experiences: Array<Experience> =[
    {
      name:'Experience 1',
      place: 'Place 1',
      image:'../../assets/imgs/experiences/tummelier-background.png',
      position:'Position 1',
      dates:'Dates 1',
      description:{
        d1:'i did something',
        d2:'i did something'
      }
    },
    {
      name:'Experience 1',
      place: 'Place 1',
      image:'../../assets/imgs/experiences/tummelier-background.png',
      position:'Position 1',
      dates:'Dates 1',
      description:{
        d1:'i did something',
        d2:'i did something'
      }
    },
  ]

  leadershipExps: Array<Experience> = [
    {
      name:'Experience 1',
      place: 'Place 1',
      image:'../../assets/imgs/experiences/tummelier-logo.jpg',
      position:'Position 1',
      dates:'Dates 1',
      description:{
        d1:'i did something',
        d2:'i did something'
      }
    },
    {
      name:'Experience 1',
      place: 'Place 1',
      image:'../../assets/imgs/experiences/tummelier-logo.jpg',
      position:'Position 1',
      dates:'Dates 1',
      description:{
        d1:'i did something',
        d2:'i did something'
      }
    }
  ]

}

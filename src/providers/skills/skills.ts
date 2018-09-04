import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../../interfaces/common.interface';

/*
  Generated class for the SkillsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SkillsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SkillsProvider Provider');
  }

  languages: Array<Skill> =
    [
      {
        name: 'Spanish',
        points: 5
      },
      {
        name: 'English',
        points: 5
      },
      {
        name: 'French',
        points: 5
      },
      {
        name: 'Spanish',
        points: 5
      }
    ];

    
}

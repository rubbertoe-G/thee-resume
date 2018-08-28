import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ExperienceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExperienceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ExperienceProvider Provider');
  }

}

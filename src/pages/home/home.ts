import { SkillsPage } from './../skills/skills';
import { ExperiencePage } from './../experience/experience';
import { EducationPage } from './../education/education';
import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, ViewController } from 'ionic-angular';
import { LeadershipPage } from '../leadership/leadership';
import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  pages = {
    education: EducationPage,
    experience: ExperiencePage,
    leadership: LeadershipPage,
    skills: SkillsPage
  }

  user = {
    first_name:'Name',
    last_name: 'Lastname',
    profession:'Proffesion',
    location:'Location',
    background_image: '../../assets/img/user/background-5.jpg',
    image:'../../assets/imgs/user/girl-avatar.png',
    comment1:'Comment here ',
    comment2:'Comment here',
    comment3:'COmment Here',
    comment4:'comment here '
  }

  constructor(public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public imageViewerCtrl: ImageViewerController
  ) {
  }


  goTo(p: any){
    this.navCtrl.push(p);
  }

  showImage(image){
    const imageView = this.imageViewerCtrl.create(image,{
      enableBackdropDismiss: true
    });
    imageView.present();
  }

}

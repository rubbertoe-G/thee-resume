import { SkillsPage } from './../skills/skills';
import { ExperiencePage } from './../experience/experience';
import { EducationPage } from './../education/education';
import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  pages = {
    education: EducationPage,
    experience: ExperiencePage,
    skills: SkillsPage
  }

  user = {
    first_name:'Roberto',
    last_name: 'Guzmán-Ortiz',
    profession:'Computer Enginner Student',
    location:'Aguas Buenas, PR',
    backgroung_image: '../../assets/img/user/background/background-5.jpg',
    image:'../../assets/imgs/user/girl-avatar.png',
    comment1:'A Computer Egineering Student at '+
      'University of Puerto Rico at Mayagüez. Aspiring to become an expert in fields of computer and software engineering, also become a specialist in cyber security. I have devoted '+
      'my student carrer in doing so by participating in research, internships and co-op oportunities that have nourished my knowledge and personal experience',
    comment2:'Project Manager, musician, athlete, devotion and persistency. These are the traits that best define my persona. Currently, I am a project manager '+
      ' for the  Panda Hat: Cyber Security research group in which we engage the university and the public about cybersecurity awareness and more.',
    comment3:'Speaking 4 languages, learning and perforhming project management duties, knowing multiple programming languages are some of the many things I am able to do '
  }

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  goTo(p: any){
    this.navCtrl.push(p);
  }

}

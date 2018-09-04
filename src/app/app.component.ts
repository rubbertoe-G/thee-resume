import { SkillsPage } from './../pages/skills/skills';
import { LeadershipPage } from './../pages/leadership/leadership';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EducationPage } from '../pages/education/education';
import { ContactPage } from '../pages/contact/contact';
import { ExperiencePage } from '../pages/experience/experience';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string,component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', icon: 'home' ,  component: HomePage },
      { title: 'Education', icon:'custom-diploma' , component: EducationPage },
      { title: 'Experience', icon:'custom-experience', component: ExperiencePage },
      { title: 'Leadership', icon:'people', component: LeadershipPage },
      { title: 'Skills', icon:'star', component: SkillsPage },
      { title: 'Contact', icon:'mail', component: ContactPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    
  }
}

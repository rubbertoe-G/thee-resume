import { LeadershipPage } from './../pages/leadership/leadership';
import { SkillsPage } from './../pages/skills/skills';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EducationPage } from '../pages/education/education';
import { ContactPage } from '../pages/contact/contact';
import { ExperiencePage } from '../pages/experience/experience';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExperiencePage,
    EducationPage,
    ContactPage,
    SkillsPage,
    LeadershipPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExperiencePage,
    EducationPage,
    ContactPage,
    SkillsPage,
    LeadershipPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

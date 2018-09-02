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
import { EducationProvider } from '../providers/education/education';
import { ExperienceProvider } from '../providers/experience/experience';
import { EducationDetailsPage } from '../pages/education-details/education-details';
import { ExperienceDetailsPage } from '../pages/experience-details/experience-details';
import { LeadershipDetailsPage } from '../pages/leadership-details/leadership-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExperiencePage,
    ExperienceDetailsPage,
    EducationPage,
    EducationDetailsPage,
    ContactPage,
    SkillsPage,
    LeadershipPage,
    LeadershipDetailsPage
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
    ExperienceDetailsPage,
    EducationPage,
    EducationDetailsPage,
    ContactPage,
    SkillsPage,
    LeadershipPage,
    LeadershipDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EducationProvider,
    ExperienceProvider
  ]
})
export class AppModule {}

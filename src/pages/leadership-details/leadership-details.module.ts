import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeadershipDetailsPage } from './leadership-details';

@NgModule({
  declarations: [
    LeadershipDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LeadershipDetailsPage),
  ],
})
export class LeadershipDetailsPageModule {}

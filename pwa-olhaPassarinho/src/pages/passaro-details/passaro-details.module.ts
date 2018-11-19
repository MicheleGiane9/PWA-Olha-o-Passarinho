import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassaroDetailsPage } from './passaro-details';

@NgModule({
  declarations: [
    PassaroDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PassaroDetailsPage),
  ],
})
export class PassaroDetailsPageModule {}

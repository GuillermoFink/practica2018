import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCvAqOdPIPCsYogT5L_4VcKHDeCrcNjpFM'})
  ],
})
export class MainPageModule {}

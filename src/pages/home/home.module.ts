import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
// import { MenuListComponent } from '../../components/components.module';
// import { MenuListComponent } from '../../components/menu-list/menu-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsModule
  ]
})
export class HomePageModule {}

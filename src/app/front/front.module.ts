import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './components/splash/splash.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  { path: '', component: SplashComponent },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [
    SplashComponent
  ]
})
export class FrontModule { }

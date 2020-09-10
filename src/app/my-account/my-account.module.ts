import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: MyAccountComponent,
  }
];

@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class MyAccountModule { }

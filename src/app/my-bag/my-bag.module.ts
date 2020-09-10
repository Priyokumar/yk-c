import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyBagComponent } from './my-bag.component';

const routes: Routes = [
  {
    path: '',
    component: MyBagComponent,
  }
];

@NgModule({
  declarations: [MyBagComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MyBagModule { }

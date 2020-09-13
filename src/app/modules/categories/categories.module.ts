import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { IonicModule } from '@ionic/angular';
import { CategoryService } from './services/category.service';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  }
];

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ],
  providers: [CategoryService]
})
export class CategoriesModule { }

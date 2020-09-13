import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CategoryService } from '../categories/services/category.service';
import { HomeCategoriesComponent } from './components/home-categories/home-categories.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeCategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    MaterialModule
  ],
  providers: [CategoryService]
})
export class HomeModule { }

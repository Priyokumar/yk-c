import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';
import { ProductBattomBarComponent } from './components/product-battom-bar/product-battom-bar.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CategoryService } from '../categories/services/category.service';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  { path: '', component: ProductLayoutComponent }
]

@NgModule({

  declarations: [
    ProductLayoutComponent,
    ProductBattomBarComponent,
    ProductComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    MaterialModule
  ],

  providers: [ProductService, CategoryService]
})
export class ProductModule { }

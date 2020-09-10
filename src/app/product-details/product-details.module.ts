import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsLayoutComponent } from './components/product-details-layout/product-details-layout.component';
import { IonicModule } from '@ionic/angular';
import { ProductMediaComponent } from './components/product-media/product-media.component';
import { ProductService } from '../products/services/product.service';
import { ProductShortDetailsComponent } from './components/product-short-details/product-short-details.component';
import { ProductVendorDetailsComponent } from './components/product-vendor-details/product-vendor-details.component';
import { ProductCheckShippingComponent } from './components/product-check-shipping/product-check-shipping.component';
import { ProductAdditionalInfoComponent } from './components/product-additional-info/product-additional-info.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  { path: '', component: ProductDetailsLayoutComponent }
]

@NgModule({
  declarations: [
    ProductDetailsLayoutComponent,
    ProductMediaComponent,
    ProductShortDetailsComponent,
    ProductVendorDetailsComponent,
    ProductCheckShippingComponent,
    ProductAdditionalInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    MaterialModule
  ],
  providers: [ProductService]
})
export class ProductDetailsModule { }

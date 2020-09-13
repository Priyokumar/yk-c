import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MyAddressComponent } from './components/my-address/my-address.component';
import { CreateUpdateAddressComponent } from './components/create-update-address/create-update-address.component';

const routes: Routes = [
  { path: '', component: MyAccountComponent },
  { path: 'address', component: MyAddressComponent },
  { path: 'add/address', component: CreateUpdateAddressComponent },
  { path: 'edit/address/:id', component: CreateUpdateAddressComponent }
];

@NgModule({
  declarations: [
    MyAccountComponent,
    MyAddressComponent,
    CreateUpdateAddressComponent
  ],
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

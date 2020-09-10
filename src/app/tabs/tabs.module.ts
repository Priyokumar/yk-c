import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { TabsPageRoutingModule } from './tabs-routing.module';
import {MatButtonModule} from '@angular/material/button';


import { TabsPage } from './tabs.page';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

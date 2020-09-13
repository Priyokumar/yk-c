import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../auth/components/login/login.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(
    private bottomSheet: MatBottomSheet,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    if(!this.authService.getSkipAuth() && !this.authService.getUserData()){
      this.bottomSheet.open(LoginComponent, { disableClose: true });
    }

  }

}

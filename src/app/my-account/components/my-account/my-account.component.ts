import { Component, OnInit } from '@angular/core';
import { IRegitration } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  userData: IRegitration;

  constructor(
    private authService: AuthService,
    private bottomSheet: MatBottomSheet,
    private router: Router
  ) { }

  ngOnInit() {

    this.userData = this.authService.getUserData();
    if (!this.userData) {
      this.authService.setRedirectUrl(this.router.url);
      this.bottomSheet.open(LoginComponent, { disableClose: true });
    }

  }

  logout(){
    this.authService.clearLoginData();
    this.router.navigate(['']);
  }

}

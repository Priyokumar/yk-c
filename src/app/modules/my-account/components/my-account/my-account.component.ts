import { Component, OnInit } from '@angular/core';
import { IRegitration } from 'src/app/models/auth.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { Observable, empty } from 'rxjs';
import { IAddress } from 'src/app/models/my-account.model';
import { MyAccountService } from '../../services/my-account.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  userLocalData: IRegitration;
  defaultAddress$: Observable<IAddress> = empty();
  userData$: Observable<IRegitration> = empty();

  constructor(
    private myAccountService: MyAccountService,
    private authService: AuthService,
    private bottomSheet: MatBottomSheet,
    private router: Router
  ) { }

  ngOnInit() {

    this.userLocalData = this.authService.getUserData();
    if (!this.userLocalData) {
      this.authService.setRedirectUrl(this.router.url);
      this.bottomSheet.open(LoginComponent, { disableClose: true });
    } else{
      this.defaultAddress$ = this.myAccountService.getDefaultAddress(this.userLocalData.mobileNo);
      this.userData$ = this.myAccountService.getUserData(this.userLocalData.mobileNo);
    }

  }

  logout(){
    this.authService.clearLoginData();
    this.router.navigate(['']);
  }

  back() {
    window.history.back();
  }


}

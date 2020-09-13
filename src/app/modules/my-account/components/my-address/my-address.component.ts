import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress } from 'src/app/models/my-account.model';
import { MyAccountService } from '../../services/my-account.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { IRegitration } from 'src/app/models/auth.model';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateAddressComponent } from '../create-update-address/create-update-address.component';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.scss']
})
export class MyAddressComponent implements OnInit {

  addresses$: Observable<IAddress[]>;
  userLocalData: IRegitration;

  constructor(
    private myAccountService: MyAccountService,
    private authService: AuthService,
    private bottomSheet: MatBottomSheet,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    this.userLocalData = this.authService.getUserData();
    if (!this.userLocalData) {
      this.authService.setRedirectUrl(this.router.url);
      this.bottomSheet.open(LoginComponent, { disableClose: true });
    } else {
      this.addresses$ = this.myAccountService.getAddresses(this.userLocalData.mobileNo);

    }
  }

  add() {
    this.router.navigate(['/tabs/my-account/add/address'])
  }

  edit(address: IAddress) {
    this.router.navigate(['/tabs/my-account/edit/address/', address.id])
  }

  delete(address: IAddress) {
    this.myAccountService.deleteAddress(this.userLocalData.mobileNo, address.id).subscribe(data => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    }) 
  }

  makeDefaultAddress(address: IAddress){
    this.myAccountService.makeDefaultAddress(this.userLocalData.mobileNo, address.id).subscribe(data => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    }) 
  }

  back() {
    window.history.back();
  }

}

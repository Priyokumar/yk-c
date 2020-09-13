import { Component, OnInit, Inject } from '@angular/core';
import { MyAccountService } from '../../services/my-account.service';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAddress } from 'src/app/models/my-account.model';
import { IRegitration } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-update-address',
  templateUrl: './create-update-address.component.html',
  styleUrls: ['./create-update-address.component.scss']
})
export class CreateUpdateAddressComponent implements OnInit {

  id: string;
  userLocalData: IRegitration;

  addressLineFctrl = new FormControl('', Validators.required);
  mobileNoFctrl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
  landmarkFctrl = new FormControl('', Validators.required);
  pinFctrl = new FormControl('', Validators.required);
  districtFctrl = new FormControl('', Validators.required);
  stateFctrl = new FormControl('', Validators.required);
  defaultAddressFctrl = new FormControl('', Validators.required);

  yesNo = [{ name: 'Yes', value: true }, { name: 'No', value: false }];

  constructor(
    private activatedRoute: ActivatedRoute,
    private myAccountService: MyAccountService,
    private authService: AuthService,
    private bottomSheet: MatBottomSheet,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.activatedRoute.params.subscribe(data => {
      this.id = data.id;
      this.getAddress();
    })
  }

  ngOnInit() {

    this.userLocalData = this.authService.getUserData();

    if (!this.userLocalData) {
      this.authService.setRedirectUrl(this.router.url);
      this.bottomSheet.open(LoginComponent, { disableClose: true });
      return;
    }

    this.stateFctrl.setValue('Manipur');
    this.defaultAddressFctrl.setValue(false);

  }

  getAddress() {
    this.myAccountService.getAddress(this.id).subscribe(data => {
      if (data) {
        this.updateFormData(data);
      }
    }, error => {
      console.log(error);
    })
  }

  saveOrUpdate() {

    const address: IAddress = {
      defaultAddress: this.defaultAddressFctrl.value,
      district: this.districtFctrl.value,
      landmark: this.landmarkFctrl.value,
      mobileNo: this.mobileNoFctrl.value,
      addressLine: this.addressLineFctrl.value,
      pin: this.pinFctrl.value,
      state: this.stateFctrl.value,
      id: null
    }

    let obs$ = this.myAccountService.addAddress(this.userLocalData.mobileNo, address);

    if (this.id) {
      obs$ = this.myAccountService.updateAddress(this.userLocalData.mobileNo, this.id, address);
    }

    obs$.subscribe(data => {
      this.router.navigate(['tabs/my-account/address']);
    }, error => {
      console.log(error);

      let msg = 'We are not able to save the address. Try again after sometime.';

      if (this.id) {
        msg = 'We are not able to update the address. Try again after sometime.';
      }
      this.snackbar.open(msg, 'Ok');
    })

  }

  updateFormData(address: IAddress) {
    this.addressLineFctrl.setValue(address.addressLine);
    this.mobileNoFctrl.setValue(address.mobileNo);
    this.landmarkFctrl.setValue(address.landmark);
    this.pinFctrl.setValue(address.pin);
    this.districtFctrl.setValue(address.district);
    this.stateFctrl.setValue(address.state);
    this.defaultAddressFctrl.setValue(address.defaultAddress);
  }

  back() {
    window.history.back();
  }

}

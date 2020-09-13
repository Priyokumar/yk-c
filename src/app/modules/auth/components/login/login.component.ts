import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginInProcess = false;
  mobileNoFCtrl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);

  constructor(
    private bottomSheetRef: MatBottomSheetRef<LoginComponent>,
    private router: Router,
    private snackbar: MatSnackBar,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  login() {
   
    this.loginInProcess = true;
    this.authService.login(this.mobileNoFCtrl.value).subscribe(data => {
      this.router.navigate(["auth/otp-verification"], { queryParams: { mobileNo: this.mobileNoFCtrl.value } });
      this.close();
      this.loginInProcess = false;
    }, error => {
      this.snackbar.open("Sorry, we are not able create you account! Try again.", 'Ok');
      this.loginInProcess = false;
    });

  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  skip() {
    this.authService.setSkipAuth(true);
    this.close();
  }

}

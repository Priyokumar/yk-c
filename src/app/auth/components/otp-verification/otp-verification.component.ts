import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { IVerifyOTP } from 'src/app/models/auth.model';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent implements OnInit {

  otpFCtrl = new FormControl('', Validators.required);
  mobileNo: string;
  verifyInProcess = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private snackbar: MatSnackBar

  ) {
    this.activatedRoute.queryParams.subscribe(data=>{
      this.mobileNo = data.mobileNo
    })
   }

  ngOnInit() {
  }

  verify(){

    const payload: IVerifyOTP = {
      mobileNo: this.mobileNo,
      otp: this.otpFCtrl.value
    }
    this.verifyInProcess = true;

    this.authService.verifyOtp(payload).subscribe(data => {
      this.verifyInProcess = false;
      this.router.navigate([""]);
      this.authService.setUserData(data.data);
    }, error => {
      this.verifyInProcess = false;
      console.log(error);
      this.snackbar.open("Sorry, we are not able verify the otp! Try again.",'Ok');
      this.router.navigate([""]);
    });
  }

}

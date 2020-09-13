import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { IRegitration } from 'src/app/models/auth.model';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  nameFCtrl = new FormControl('', Validators.required);
  mobileNoFCtrl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
  emailFCtrl = new FormControl('', [Validators.required, Validators.email]);

  registerInProcess = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  create() {

    const payload: IRegitration = {
      email: this.emailFCtrl.value,
      mobileNo: this.mobileNoFCtrl.value,
      name: this.nameFCtrl.value
    }

    this.registerInProcess = true;

    this.authService.register(payload).subscribe(data => {
      this.router.navigate(["auth/otp-verification"], { queryParams: { mobileNo: payload.mobileNo } });
    }, error => {

      if(error.status === 409){
        this.snackbar.open("Mobile number already registerd",'Ok');
      } else{
        this.snackbar.open("Sorry, we are not able create you account! Try again.",'Ok');
      }
      
    });


  }

}

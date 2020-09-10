import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegitration, IVerifyOTP } from 'src/app/models/auth.model';
import { API } from 'src/app/constants/Api.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  skipAuth = "skipAuth";
  userData = "userData";

  constructor(
    private http: HttpClient
  ) { }

  register(data: IRegitration) {
    return this.http.post(API.REGISTRATION, data);
  }

  login(mobileNo: String) {
    return this.http.post(API.LOGIN, { mobileNo });
  }

  verifyOtp(data: IVerifyOTP) {
    return this.http.post<any>(API.VERIFY_OTP, data);
  }

  setSkipAuth(data: boolean) {
    localStorage.setItem(this.skipAuth, JSON.stringify(data));
  }

  getSkipAuth(): boolean {
    const skipAuth = localStorage.getItem(this.skipAuth);
    return skipAuth ? true : false;
  }

  setUserData(data: IRegitration) {
    localStorage.setItem(this.userData, JSON.stringify(data));
  }

  getUserData(): IRegitration {
    const userData = localStorage.getItem(this.userData);
    return userData ? JSON.parse(userData) : null;
  }

}

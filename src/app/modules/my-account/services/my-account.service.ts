import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddress } from 'src/app/models/my-account.model';
import { API } from 'src/app/constants/Api.constant';
import { map } from 'rxjs/operators';
import { IRegitration } from 'src/app/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  constructor(
    private http: HttpClient
  ) { }

  getUserData(mobileNo: string): Observable<IRegitration> {
    return this.http.get<any>(`${API.USERS}/mobileNo/${mobileNo}`).pipe(
      map(data => {
        return data.data;
      })
    );
  }

  getAddresses(mobileNo: string): Observable<IAddress[]> {
    return this.http.get<any>(API.ADDRESSES + '/user/' + mobileNo).pipe(
      map(data => {
        return data.data;
      })
    );
  }

  getAddress(id: string): Observable<IAddress> {
    return this.http.get<any>(API.ADDRESSES + '/' + id).pipe(
      map(data => {
        return data.data;
      })
    );
  }

  getDefaultAddress(mobileNo: string): Observable<IAddress> {
    return this.http.get<any>(API.ADDRESSES + '/default-address/' + mobileNo).pipe(
      map(data => {
        return data.data;
      })
    );
  }

  makeDefaultAddress(mobileNo: string, id: string): Observable<string> {
    return this.http.put<any>(`${API.ADDRESSES}/${id}/${mobileNo}/make-default-address`, null).pipe(
      map(data => {
        return data.actionMessage;
      })
    );
  } 

  addAddress(mobileNo: string, address: IAddress): Observable<string> {
    return this.http.post<any>(`${API.ADDRESSES}/${mobileNo}`, address).pipe(
      map(data => {
        return data.actionMessage;
      })
    );
  }

  updateAddress(mobileNo: string, id: string, address: IAddress): Observable<string> {
    return this.http.put<any>(`${API.ADDRESSES}/${id}/${mobileNo}`, address).pipe(
      map(data => {
        return data.actionMessage;
      })
    );
  }

  deleteAddress(mobileNo: string, id: string): Observable<string> {
    return this.http.delete<any>(API.ADDRESSES+'/' + id + '/' + mobileNo).pipe(
      map(data => {
        return data.actionMessage;
      })
    );
  }

}

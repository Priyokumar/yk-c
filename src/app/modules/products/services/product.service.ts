import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/constants/Api.constant';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(params?: any) {

    if (params) {
      return this.http.get<any>(API.PRODUCT_URL, { params: params });
    } else {
      return this.http.get<any>(API.PRODUCT_URL);
    }

  }

  getProduct(id?: string) {
    return this.http.get<any>(API.PRODUCT_URL + "/" + id);
  }

}

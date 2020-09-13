import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/constants/Api.constant';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(params: any) {
    return this.http.get<any>(API.CATEGORY_URL, { params: params });
  }

  getCategory(categoryId: string) {
    return this.http.get<any>(API.CATEGORY_URL + "/" + categoryId);
  }

}

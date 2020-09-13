import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ICategory } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/modules/categories/services/category.service';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss'],
})
export class ProductLayoutComponent implements OnInit {

  categoryId: string;
  category: ICategory;
  products: IProduct[] = [];
  products$: Observable<any>;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {

    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.categoryId = queryParams.categoryId
    });

  }

  ngOnInit() {
    this.getProducts();
    this.getCategory();
  }

  getCategory() {

    this.categoryService.getCategory(this.categoryId).subscribe(data => {
      this.category = data.data;
    }, error => {
      console.log(error);

    })

  }


  getProducts() {

    if (this.categoryId) {
      this.products$ = this.productService.getProducts({ categoryId: this.categoryId });
    } else {
      this.products$ = this.productService.getProducts();
    }

    this.products$.subscribe(data => {
      this.products = data.data;
    }, error => {
      console.log(error);
    })

  }

  toggleInfiniteScroll(){

  }

  loadData(event){
    this.products$.subscribe(data => {
      this.products = data.data;
      event.target.complete();
    }, error => {
      console.log(error);
      event.target.complete();
    })
  }

  back() {
    window.history.back();
  }


}

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { API } from 'src/app/constants/Api.constant';

@Component({
  selector: 'app-product-details-layout',
  templateUrl: './product-details-layout.component.html',
  styleUrls: ['./product-details-layout.component.scss'],
})
export class ProductDetailsLayoutComponent implements OnInit {

  id: string;
  product: IProduct;
  media: string[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRoute.params.subscribe(data => {
      this.id = data.id;
    })

  }

  ngOnInit() { 
    this.getProduct();
  }

  getProduct() {
    if (this.id) {
      this.productService.getProduct(this.id).subscribe(data => {
        this.product = data.data;
        this.getmedia();
      }, error => {
        console.log(error);

      })
    }
  }

  getmedia() {

    /* if (this.product.medias && this.product.medias.length > 0) {
      this.media = this.product.medias.map(media => {
        return API.PRODUCT_URL + '/medias/' + media.mediaId;
      })
    } */

  }

}

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct, IMedia } from 'src/app/models/product.model';
import { API } from 'src/app/constants/Api.constant';
import { Router } from '@angular/router';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() product: IProduct;

  media: string[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getmedia();
  }

  getmedia() {

   /*  if (this.product.medias && this.product.medias.length > 0) {
      this.media = this.product.medias.map(media => {
        return API.PRODUCT_URL + '/medias/' + media.mediaId
      })
    } */

  }

  getImageUrl(): string {
    return this.media.length > 0 ? this.media[0] : 'assets/icon/favicon.png';
  }

  add(){
    this.router.navigate(['/auth/login']);
  }

}

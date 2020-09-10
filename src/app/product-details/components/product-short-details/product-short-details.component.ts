import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: '[app-product-short-details]',
  templateUrl: './product-short-details.component.html',
  styleUrls: ['./product-short-details.component.scss'],
})
export class ProductShortDetailsComponent implements OnInit {

  @Input() product: IProduct;

  constructor() { }

  ngOnInit() {}

}

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: '[app-product-media]',
  templateUrl: './product-media.component.html',
  styleUrls: ['./product-media.component.scss'],
})
export class ProductMediaComponent implements OnInit, OnChanges {

  @Input() media: string[] = [];

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  onChangeSlide(event){
    console.log(event);
    
  }

}

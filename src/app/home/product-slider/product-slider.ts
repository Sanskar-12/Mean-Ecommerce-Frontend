import { Component, Input } from '@angular/core';
import { HomeProductCard } from '../home-product-card/home-product-card';

@Component({
  selector: 'app-product-slider',
  imports: [HomeProductCard],
  templateUrl: './product-slider.html',
  styleUrl: './product-slider.scss',
})
export class ProductSlider {
  // @Input() means it will accept the title from its parent component
  @Input() title: any;
  @Input() products: any;
}

import { Component } from '@angular/core';
import { MainCarousel } from '../main-carousel/main-carousel';
import { ProductSlider } from './product-slider/product-slider';
import { menJeans } from '../../Data/Men/men_jeans';

@Component({
  selector: 'app-home',
  imports: [MainCarousel, ProductSlider],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  menJeans: any;

  ngOnInit() {
    this.menJeans = menJeans.slice(0, 5);
  }
}

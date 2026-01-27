import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './component/home/home';
import { ProductSlider } from './component/home/product-slider/product-slider';
import { MainCarousel } from './component/main-carousel/main-carousel';
import { Feature } from './component/feature';
import { HomeProductCard } from './component/home/home-product-card/home-product-card';
import { Products } from './component/products/products';

@NgModule({
  declarations: [],
  imports: [CommonModule, Home, ProductSlider, MainCarousel, Feature, HomeProductCard, Products],
  exports: [Home, ProductSlider, MainCarousel, Feature, HomeProductCard, Products],
})
export class FeatureModule {}

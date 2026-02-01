import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './component/footer/footer';
import { Navbar } from './component/navbar/navbar';
import { NavbarContent } from './component/navbar/navbar-content/navbar-content';
import { ProductCard } from './component/product-card/product-card';
import { StarRating } from './component/star-rating/star-rating';

@NgModule({
  declarations: [],
  imports: [CommonModule, Footer, Navbar, NavbarContent, ProductCard, StarRating],
  exports: [Footer, Navbar, NavbarContent, ProductCard, StarRating],
})
export class SharedModule {}

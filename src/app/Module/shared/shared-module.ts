import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './component/footer/footer';
import { Navbar } from './component/navbar/navbar';
import { NavbarContent } from './component/navbar/navbar-content/navbar-content';
import { ProductCard } from './component/product-card/product-card';

@NgModule({
  declarations: [],
  imports: [CommonModule, Footer, Navbar, NavbarContent, ProductCard],
  exports: [Footer, Navbar, NavbarContent, ProductCard],
})
export class SharedModule {}

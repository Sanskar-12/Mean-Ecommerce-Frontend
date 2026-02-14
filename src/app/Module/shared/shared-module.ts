import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './component/footer/footer';
import { Navbar } from './component/navbar/navbar';
import { NavbarContent } from './component/navbar/navbar-content/navbar-content';
import { ProductCard } from './component/product-card/product-card';
import { StarRating } from './component/star-rating/star-rating';
import { CartItems } from './component/cart-items/cart-items';
import { AddressCard } from './component/address-card/address-card';
import { OrderTracker } from './component/order-tracker/order-tracker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Footer,
    Navbar,
    NavbarContent,
    ProductCard,
    StarRating,
    CartItems,
    AddressCard,
    OrderTracker,
  ],
  exports: [
    Footer,
    Navbar,
    NavbarContent,
    ProductCard,
    StarRating,
    CartItems,
    AddressCard,
    OrderTracker,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './component/home/home';
import { ProductSlider } from './component/home/product-slider/product-slider';
import { MainCarousel } from './component/main-carousel/main-carousel';
import { Feature } from './component/feature';
import { HomeProductCard } from './component/home/home-product-card/home-product-card';
import { Products } from './component/products/products';
import { Cart } from './component/cart/cart';
import { ProductDetails } from './component/product-details/product-details';
import { Checkout } from './component/checkout/checkout';
import { Payment } from './component/payment/payment';
import { PaymentSuccess } from './component/payment-success/payment-success';
import { Order } from './component/order/order';
import { OrderDetails } from './component/order-details/order-details';
import { ProductReviewCard } from './component/product-review-card/product-review-card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Home,
    ProductSlider,
    MainCarousel,
    Feature,
    HomeProductCard,
    Products,
    Cart,
    ProductDetails,
    Checkout,
    Payment,
    PaymentSuccess,
    Order,
    OrderDetails,
    ProductReviewCard,
  ],
  exports: [
    Home,
    ProductSlider,
    MainCarousel,
    Feature,
    HomeProductCard,
    Products,
    Cart,
    ProductDetails,
    Checkout,
    Payment,
    PaymentSuccess,
    Order,
    OrderDetails,
    ProductReviewCard,
  ],
})
export class FeatureModule {}

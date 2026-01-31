import { Routes } from '@angular/router';
import { Home } from './Module/feature/component/home/home';
import { Products } from './Module/feature/component/products/products';
import { Cart } from './Module/feature/component/cart/cart';
import { ProductDetails } from './Module/feature/component/product-details/product-details';
import { Checkout } from './Module/feature/component/checkout/checkout';
import { Payment } from './Module/feature/component/payment/payment';
import { PaymentSuccess } from './Module/feature/component/payment-success/payment-success';
import { Order } from './Module/feature/component/order/order';
import { OrderDetails } from './Module/feature/component/order-details/order-details';

export const routes: Routes = [
  // setup for Admin Routes
  {
    path: 'admin',
    loadChildren: () => import('../app/Module/admin/admin.routes').then((m) => m.adminRoutes),
  },
  // setup for Customer Routes
  {
    path: '',
    component: Home,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'product-details/:id',
    component: ProductDetails,
  },
  {
    path: 'checkout',
    component: Checkout,
  },
  {
    path: 'checkout/payment/:id',
    component: Payment,
  },
  {
    path: 'payment-success',
    component: PaymentSuccess,
  },
  {
    path: 'account/orders',
    component: Order,
  },
  {
    path: 'order/:id',
    component: OrderDetails,
  },
  {
    path: ':levelOne/:levelTwo/:levelThree',
    component: Products,
  },
];

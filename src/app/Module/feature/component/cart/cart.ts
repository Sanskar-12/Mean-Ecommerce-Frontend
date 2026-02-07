import { Component } from '@angular/core';
import { CartItems } from '../../../shared/component/cart-items/cart-items';
import { MatDivider } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  imports: [CartItems, MatDivider, MatAnchor],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cart = [1, 1, 1];

  constructor(private router: Router) {}

  navigateToCheckout() {
    this.router.navigate(['/checkout']);
  }
}

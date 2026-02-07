import { Component } from '@angular/core';
import { CartItems } from '../../../shared/component/cart-items/cart-items';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-cart',
  imports: [CartItems, MatDivider],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cart = [1, 1, 1];
}

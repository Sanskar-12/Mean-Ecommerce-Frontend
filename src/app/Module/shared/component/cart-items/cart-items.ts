import { Component, Input } from '@angular/core';
import { MatAnchor, MatButton, MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart-items',
  imports: [MatMiniFabButton, MatIconModule, MatAnchor],
  templateUrl: './cart-items.html',
  styleUrl: './cart-items.scss',
})
export class CartItems {
  quantity = 1;
  @Input() showButton: any;

  updateCartItems(num: Number) {}

  removeCartItem() {}
}

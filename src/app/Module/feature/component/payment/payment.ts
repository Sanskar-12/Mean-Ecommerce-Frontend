import { Component } from '@angular/core';
import { AddressCard } from '../../../shared/component/address-card/address-card';
import { CartItems } from '../../../shared/component/cart-items/cart-items';
import { MatDivider } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-payment',
  imports: [AddressCard, CartItems, MatDivider, MatButtonModule],
  templateUrl: './payment.html',
  styleUrl: './payment.scss',
})
export class Payment {
  products = [1, 1, 1];
}

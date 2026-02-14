import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { OrderCard } from './order-card/order-card';

@Component({
  selector: 'app-order',
  imports: [MatCheckbox, OrderCard],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  orderFilter = [
    { value: 'on_the_way', label: 'On the Way' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'returned', label: 'Returned' },
  ];
  orders = [
    [1, 1],
    [1, 1],
  ];
}

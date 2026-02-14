import { Component } from '@angular/core';
import { AddressCard } from '../../../shared/component/address-card/address-card';
import { OrderCard } from '../order/order-card/order-card';
import { OrderTracker } from '../../../shared/component/order-tracker/order-tracker';

@Component({
  selector: 'app-order-details',
  imports: [AddressCard, OrderCard, OrderTracker],
  templateUrl: './order-details.html',
  styleUrl: './order-details.scss',
})
export class OrderDetails {
  orders = [1, 1, 1];
  steps = [
    {
      id: 0,
      title: 'PLACED',
      isCompleted: true,
    },
    {
      id: 1,
      title: 'CONFIRMED',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'SHIPPED',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'DELIVERED',
      isCompleted: false,
    },
  ];
}

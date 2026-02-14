import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { OrderCard } from './order-card/order-card';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [MatCheckbox, OrderCard, RouterModule],
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

  constructor(private router: Router) {}

  navigateToOrderDetails(id: number) {
    this.router.navigate([`/order/${id}`]);
  }
}

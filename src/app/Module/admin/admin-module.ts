import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin } from './component/admin';
import { AdminProducts } from './component/admin-products/admin-products';
import { OrdersTable } from './component/orders-table/orders-table';
import { Customers } from './component/customers/customers';
import { CreateProduct } from './component/create-product/create-product';

@NgModule({
  declarations: [],
  imports: [CommonModule, Admin, AdminProducts, OrdersTable, Customers, CreateProduct],
  exports: [Admin, AdminProducts, OrdersTable, Customers, CreateProduct],
})
export class AdminModule {}

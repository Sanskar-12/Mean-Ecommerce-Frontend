import { Routes } from '@angular/router';
import { Admin } from './component/admin';
import { Dashboard } from './component/dashboard/dashboard';
import { AdminProducts } from './component/admin-products/admin-products';
import { OrdersTable } from './component/orders-table/orders-table';
import { Customers } from './component/customers/customers';
import { CreateProduct } from './component/create-product/create-product';

export const adminRoutes: Routes = [
  {
    path: '',
    component: Admin,
    children: [
      {
        path: '',
        component: Dashboard,
      },
      {
        path: 'products',
        component: AdminProducts,
      },
      {
        path: 'orders',
        component: OrdersTable,
      },
      {
        path: 'customers',
        component: Customers,
      },
      {
        path: 'product/create',
        component: CreateProduct,
      },
    ],
  },
];

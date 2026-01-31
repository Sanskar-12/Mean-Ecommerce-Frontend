import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { filters, singleFilter } from '../../../../../Data/filterData';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioButton } from '@angular/material/radio';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { ProductCard } from '../../../shared/component/product-card/product-card';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'app-products',
  imports: [
    MatAnchor,
    MatMenuModule,
    MatButton,
    MatDivider,
    MatIcon,
    MatCheckbox,
    MatRadioButton,
    SharedModule,
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  filterData: any;
  singleFilterData: any;
  menPants: any;

  ngOnInit() {
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.menPants = menJeans;
  }
}

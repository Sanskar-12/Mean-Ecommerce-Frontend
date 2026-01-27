import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { filters } from '../../../../../Data/filterData';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-products',
  imports: [MatAnchor, MatMenuModule, MatButton, MatDivider, MatIcon, MatCheckbox],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  filterData: any;

  ngOnInit() {
    this.filterData = filters;
  }
}

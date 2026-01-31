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
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  // for checkbox filter
  handleMultipleSelectFilter(value: string, sectionId: string) {
    // taking query params from the path
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    // making the array of filter values using section Id
    const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(',') : [];

    // finding the index of that value in filterValues array
    const valueIndex = filterValues.indexOf(value);

    if (valueIndex !== -1) {
      // if the value is present then remove that value from the array
      filterValues.splice(valueIndex, 1);
    } else {
      // if not present then push the value in the array
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      // if array is present then join it and add it inside query params
      queryParams[sectionId] = filterValues.join(',');
    } else {
      // if not then delete query params
      delete queryParams[sectionId];
    }

    // navigate to that filter route
    this.router.navigate([], { queryParams });
  }

  // for radio filter
  handleSingleSelectFilter(value: string, sectionId: string) {
    // taking query params from the path
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    // set the query params to that value
    queryParams[sectionId] = value;

    // navigate to that filter route
    this.router.navigate([], { queryParams });
  }

  ngOnInit() {
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.menPants = menJeans;
  }
}

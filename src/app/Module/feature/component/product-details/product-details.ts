import { ProductReviewCard } from './../product-review-card/product-review-card';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { ProductCard } from '../../../shared/component/product-card/product-card';
import { StarRating } from '../../../shared/component/star-rating/star-rating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [
    MatRadioModule,
    FormsModule,
    MatButton,
    ProductReviewCard,
    MatProgressBarModule,
    ProductCard,
    StarRating,
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  selectedSize: any;
  relatedProducts: any;
  review = [1, 1, 1, 1];

  constructor(private router: Router) {}

  handleAddToCart() {
    console.log(this.selectedSize);
    this.router.navigate(['/cart']);
  }

  ngOnInit() {
    this.relatedProducts = menJeans;
  }
}

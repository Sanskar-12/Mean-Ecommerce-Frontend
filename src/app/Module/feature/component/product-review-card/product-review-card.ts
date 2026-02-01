import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { StarRating } from '../../../shared/component/star-rating/star-rating';

@Component({
  selector: 'app-product-review-card',
  imports: [SharedModule, StarRating],
  templateUrl: './product-review-card.html',
  styleUrl: './product-review-card.scss',
})
export class ProductReviewCard {}

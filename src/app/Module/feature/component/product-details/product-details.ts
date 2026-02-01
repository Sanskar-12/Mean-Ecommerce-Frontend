import { ProductReviewCard } from './../product-review-card/product-review-card';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-product-details',
  imports: [MatRadioModule, FormsModule, MatButton, ProductReviewCard],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  selectedSize: any;
  review = [1, 1, 1, 1];

  handleAddToCart() {
    console.log(this.selectedSize);
  }
}

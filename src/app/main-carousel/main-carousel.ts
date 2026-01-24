import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { mainCarouselData } from '../../Data/main-carousel-data';

@Component({
  selector: 'app-main-carousel',
  imports: [CommonModule, RouterLink],
  templateUrl: './main-carousel.html',
  styleUrl: './main-carousel.scss',
})
export class MainCarousel {
  carouselData: any;
  currentSlide = signal(0);
  interval: any;

  ngOnInit() {
    this.carouselData = mainCarouselData;
    this.autoPlay();
  }

  nextSlide() {
    this.currentSlide.set((this.currentSlide() + 1) % this.carouselData.length);
  }

  autoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }
}

import { Component } from '@angular/core';
import { ProductSlider } from './product-slider/product-slider';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { gounsPage1 } from '../../../../../Data/Gouns/gouns';
import { lengha_page1 } from '../../../../../Data/LehangaCholi/lehangaCholi';
import { mens_kurta } from '../../../../../Data/MensKurta/mensKurta';
import { mensShoesPage1 } from '../../../../../Data/Shoes/menShoes';
import { MainCarousel } from '../main-carousel/main-carousel';

@Component({
  selector: 'app-home',
  imports: [MainCarousel, ProductSlider],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  menJeans: any;
  womenGouns: any;
  lehangaCholi: any;
  mensKurta: any;
  menShoes: any;

  ngOnInit() {
    this.menJeans = menJeans.slice(0, 4);
    this.womenGouns = gounsPage1.slice(0, 4);
    this.lehangaCholi = lengha_page1.slice(0, 4);
    this.mensKurta = mens_kurta.slice(0, 4);
    this.menShoes = mensShoesPage1.slice(0, 4);
  }
}

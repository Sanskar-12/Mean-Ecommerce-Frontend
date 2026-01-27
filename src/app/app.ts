import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './Module/shared/component/footer/footer';
import { Home } from './Module/feature/component/home/home';
import { Navbar } from './Module/shared/component/navbar/navbar';
import { FeatureModule } from './Module/feature/feature-module';
import { Products } from './Module/feature/component/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Navbar, Footer, FeatureModule, Products],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('frontend');
}

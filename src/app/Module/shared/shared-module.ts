import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './component/footer/footer';
import { Navbar } from './component/navbar/navbar';
import { NavbarContent } from './component/navbar/navbar-content/navbar-content';

@NgModule({
  declarations: [],
  imports: [CommonModule, Footer, Navbar, NavbarContent],
  exports: [Footer, Navbar, NavbarContent],
})
export class SharedModule {}

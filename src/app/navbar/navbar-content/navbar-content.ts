import { Component, Input } from '@angular/core';
import { navigation } from '../../../Data/navigation';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-navbar-content',
  imports: [MatAnchor],
  templateUrl: './navbar-content.html',
  styleUrl: './navbar-content.scss',
})
export class NavbarContent {
  category: any;
  @Input() selectedSection: any;

  ngOnInit() {
    this.category = navigation.categories;
  }
}

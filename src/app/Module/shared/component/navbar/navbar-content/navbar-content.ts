import { Component, Input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { navigation } from '../../../../../../Data/navigation';

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

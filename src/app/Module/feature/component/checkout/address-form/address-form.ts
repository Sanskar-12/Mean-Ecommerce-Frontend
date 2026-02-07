import { Component } from '@angular/core';
import { AddressCard } from '../../../../shared/component/address-card/address-card';
import { MatAnchor } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-address-form',
  imports: [AddressCard, MatAnchor, MatDivider],
  templateUrl: './address-form.html',
  styleUrl: './address-form.scss',
})
export class AddressForm {
  addresses = [1, 1, 1];
  handleCreateOrder(item: any) {}
}

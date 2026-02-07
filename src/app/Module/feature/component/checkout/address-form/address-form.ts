import { Component } from '@angular/core';
import { AddressCard } from '../../../../shared/component/address-card/address-card';
import { MatAnchor } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-address-form',
  imports: [
    AddressCard,
    MatAnchor,
    MatDivider,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
  ],
  templateUrl: './address-form.html',
  styleUrl: './address-form.scss',
})
export class AddressForm {
  addresses = [1, 1, 1];
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      mobile: ['', Validators.required],
    });
  }

  handleCreateOrder(item: any) {}
  handleSubmit() {
    const formValue = this.myForm.value;
    console.log(formValue);
  }
}

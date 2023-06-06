import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  formData = {
    name: '',
    address: '',
    cardNumber: '',
    cardHolder: '',
    cardExpiry: '',
    cardName: '',
    cardCvc: '',
  };
  constructor() {}

  submitCheckout() {}
}

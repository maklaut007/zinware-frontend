import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  data: {
    name: string;
    address: string;
    creditCard: string;
    expiryDate: string;
    cvv: string;
  };
  constructor() {
    this.data = {
      name: '',
      address: '',
      creditCard: '',
      expiryDate: '',
      cvv: '',
    };
  }

  submitCheckout() {}
}

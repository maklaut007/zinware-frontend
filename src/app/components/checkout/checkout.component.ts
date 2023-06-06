import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

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
    cardCvc: '',
  };
  constructor(private apiService: ApiService) {}

  submitCheckout() {}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutProps } from 'src/app/models/checkout.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  formData: CheckoutProps = {
    name: '',
    address: '',
    cardNumber: '',
    cardHolder: '',
    cardExpiry: '',
    cardCvc: '',
  };
  constructor(private apiService: ApiService, private router: Router) {}

  submitCheckout() {
    this.apiService.submitCheckout(this.formData).subscribe(() => {
      // Redirect to the "/main" page
      this.router.navigate(['/']);
    });
  }
}

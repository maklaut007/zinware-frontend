import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutProps } from 'src/app/models/checkout.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  formData: CheckoutProps = {
    name: '',
    address: '',
    cardNumber: '',
    cardHolder: '',
    cardExpiry: '',
    cardCvc: '',
    total: 0,
  };
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getCart().subscribe((data: any) => {
      for (const item of data.cartItems) {
        this.formData.total += item.product.price * item.quantity;
      }
    });
  }

  submitCheckout() {
    this.apiService.submitCheckout(this.formData).subscribe(() => {
      // Redirect to the "/main" page
      this.router.navigate(['/']);
    });
  }
}

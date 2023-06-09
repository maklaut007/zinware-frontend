import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutProps } from 'src/app/models/checkout.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

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
  constructor(
    private apiService: ApiService,
    private router: Router,
    private cartService: CartService
  ) {}

  /**
   * Submit the checkout form and redirect to the main page
   */
  submitCheckout() {
    this.apiService.submitCheckout(this.formData).subscribe(() => {
      // Change number on cart icon
      this.cartService.changeCartItemCount(0);
      // Redirect to the "/main" page
      this.router.navigate(['/']);
    });
  }
  /**
   * Subscribe to the cart items and calculate the total price
   */
  ngOnInit(): void {
    this.apiService.getCart().subscribe((data: any) => {
      for (const item of data.cartItems) {
        this.formData.total += item.product.price * item.quantity;
      }
    });
  }
}

import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  numberInCart: number = 0;

  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}
  /**
   * Returns true if there is a token in local storage
   * @returns true if token in storage otherwise return false
   */
  getTokenFromLocalStorage(): boolean {
    const token = localStorage.getItem('jwt');
    return !!token;
  }

  onLogOut() {
    localStorage.removeItem('jwt');
    location.reload();
  }
  /**
   * If there is a token in local storage, get the cart items from the API
   * Subscription to the cartUpdated event to update the number of items in the cart
   */
  ngOnInit(): void {
    if (this.getTokenFromLocalStorage()) {
      this.apiService.getCart().subscribe((data: any) => {
        this.numberInCart = data.cartItems.length;
      });
    }

    this.cartService.cartUpdated.subscribe((cartItemCount: number) => {
      this.numberInCart = cartItemCount;
    });
  }
}

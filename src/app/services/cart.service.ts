import { EventEmitter, Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemCount: number = 0;
  cartUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor(private apiService: ApiService) {
    // Call the getCart() method to retrieve the cart items number
    this.apiService.getCart().subscribe((data: any) => {
      this.cartItemCount = data.cartItems.length;
      this.cartUpdated.emit(this.cartItemCount);
    });
  }

  increaseCountByOne() {
    this.cartItemCount += 1;
    this.cartUpdated.emit(this.cartItemCount);
  }

  decreaseCountByOne() {
    if (this.cartItemCount > 0) {
      this.cartItemCount -= 1;
      this.cartUpdated.emit(this.cartItemCount);
    }
  }
}

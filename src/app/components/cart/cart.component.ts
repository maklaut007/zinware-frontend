import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Category } from 'src/app/models/category.model';
import { ApiService } from 'src/app/services/api.service';
import { CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart = {} as Cart;
  totalPrice: number = 0;
  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  /**
   * Returns the total price of the cart items
   * @returns total  price of the cart items
   */
  calculateTotalPrice(): number {
    let totalPrice = 0;

    // if no items in cart
    if (!this.cart.cartItems) return totalPrice;

    for (const item of this.cart.cartItems) {
      totalPrice += item.product.price * item.quantity;
    }
    return totalPrice;
  }

  /**
   * Calculates total price of the cart items when the cart item quantity is changed
   * @param quantity new quantity of the cart item
   * @param item cart item whose quantity is changed
   */
  onQuantityChange(quantity: number, item: CartItem) {
    this.apiService
      .changeItemQuantity(item.id, quantity)
      .subscribe((data: any) => {
        item.quantity = data.quantity;
        this.totalPrice = this.calculateTotalPrice();
      });
  }

  /**
   * Delete item from cart when delete button is clicked
   * @param item cart item to be deleted
   */
  onDeleteItem(item: CartItem) {
    this.apiService.deleteItemFromCart(item.id).subscribe((data: any) => {
      this.cart = data;
      this.cartService.decreaseCountByOne();
    });
  }

  /**
   * Subscribe to the cart service to get the cart items
   */
  ngOnInit(): void {
    this.apiService.getCart().subscribe((data: any) => {
      this.cart = data;
    });
  }
}

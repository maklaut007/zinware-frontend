import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Category } from 'src/app/models/category.model';
import { ApiService } from 'src/app/services/api.service';
import { CartItem } from 'src/app/models/cart.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart = {} as Cart;
  totalPrice: number = 0;
  constructor(private apiService: ApiService) {}

  calculateTotalPrice(): number {
    let totalPrice = 0;
    if (!this.cart.cartItems) return totalPrice;
    for (const item of this.cart.cartItems) {
      totalPrice += item.product.price * item.quantity;
    }
    return totalPrice;
  }

  onQuantityChange(quantity: number, item: CartItem) {
    this.apiService
      .changeItemQuantity(item.id, quantity)
      .subscribe((data: any) => {
        item.quantity = data.quantity;
        this.totalPrice = this.calculateTotalPrice();
      });
  }
  onDeleteItem(item: CartItem) {
    this.apiService.deleteItemFromCart(item.id).subscribe((data: any) => {
      this.cart = data;
    });
  }
  ngOnInit(): void {
    this.apiService.getCart().subscribe((data: any) => {
      this.cart = data;
    });
  }
}

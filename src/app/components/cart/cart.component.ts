import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Category } from 'src/app/models/category.model';
import { ApiService } from 'src/app/services/api.service';
import { CartItem } from 'src/app/models/cart.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: Cart = {} as Cart;
  constructor(private apiService: ApiService) {}

  onQuantityChange(quantity: number, item: CartItem) {
    this.apiService
      .changeItemQuantity(item.id, quantity)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  ngOnInit(): void {
    this.apiService.getCart().subscribe((data: any) => {
      console.log(data);

      this.cart = data;
    });
  }
}

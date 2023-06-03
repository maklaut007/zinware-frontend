import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Category } from 'src/app/models/category.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: Cart = {} as Cart;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCart().subscribe((data: any) => {
      this.cart = data;
    });
  }
}

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

  getTokenFromLocalStorage(): boolean {
    const token = localStorage.getItem('jwt');
    return !!token;
  }
  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('jwt')) {
      this.apiService.getCart().subscribe((data: any) => {
        this.numberInCart = data.cartItems.length;
      });
    }

    this.cartService.cartUpdated.subscribe((cartItemCount: number) => {
      this.numberInCart = cartItemCount;
    });
  }
}

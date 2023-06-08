import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  /**  Add product to the cart and update the number of items in the cart
   * If the product is already in the cart don't update number
   */
  addToCart() {
    if (this.product == undefined) return;
    this.apiService
      .addToCart(this.product.id, this.quantity)
      .subscribe((data: any) => {
        // Udate number of items in the cart if it's new item in the cart
        if (this.quantity == data.quantity) {
          this.cartService.increaseCountByOne();
        }
      });
  }
  /** Update the quantity of the product before adding to the cart
   *
   */
  onQuantityChange(quantity: number) {
    this.quantity = quantity;
  }

  /** Get the product from the category by id
   * and subscribe to the data
   */
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.apiService
        .getProductFromCategoryById(params.productId, params.id)
        .subscribe((data: any) => {
          this.product = data;
        });
    });
  }
}

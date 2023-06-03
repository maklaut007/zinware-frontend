import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  addToCart() {
    if (this.product == undefined) return;
    this.apiService
      .addToCart(this.product.id, this.quantity)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  onQuantityChange(quantity: number) {
    this.quantity = quantity;
  }

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

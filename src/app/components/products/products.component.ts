import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  /**
   * Retrieves the products from the API based on the category ID.
   * and adds them to the productList array.
   */
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.apiService
        .getProductsFromCategory(params.id)
        .subscribe((data: any) => {
          this.productList = data;
        });
    });
  }
}

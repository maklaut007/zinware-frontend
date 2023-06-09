import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss'],
})
export class CategoryProductsComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription | undefined;

  productList: Product[] | undefined;

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
  /**
   * Unsubscribes from the route subscription when the component is destroyed.
   */
  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}

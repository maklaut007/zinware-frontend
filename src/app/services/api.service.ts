import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser, LoginUser } from '../models/user.model';
import { CheckoutProps } from '../models/checkout.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get('http://localhost:8080/api/categories/');
  }

  getProductsFromCategory(id: number) {
    return this.http.get(
      `http://localhost:8080/api/categories/${id}/products/`
    );
  }

  getProductFromCategoryById(categoryId: number, productId: number) {
    return this.http.get(
      `http://localhost:8080/api/categories/${categoryId}/products/${productId}/`
    );
  }

  registerUser(user: RegisterUser) {
    return this.http.post('http://localhost:8080/auth/register/', user);
  }

  loginUser(user: LoginUser) {
    return this.http.post('http://localhost:8080/auth/login/', user);
  }

  getCart() {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('http://localhost:8080/api/cart/', { headers });
  }

  addToCart(productId: number, quantity: number) {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(
      'http://localhost:8080/api/cart/',
      { productId, quantity },
      { headers }
    );
  }
  changeItemQuantity(itemId: number, quantity: number) {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(
      `http://localhost:8080/api/cart/${itemId}/`,
      { quantity },
      { headers }
    );
  }
  deleteItemFromCart(itemId: number) {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/cart/${itemId}/`, {
      headers,
    });
  }
  submitCheckout(checkoutBody: CheckoutProps) {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post('http://localhost:8080/api/checkout/', checkoutBody, {
      headers,
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser, LoginUser } from '../models/user.model';

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
}

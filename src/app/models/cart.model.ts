import { Product } from './product.model';

export interface Cart {
  cartItems: CartItem[];
}

export interface CartItem {
  id: number;
  quantity: number;
  product: Product;
}

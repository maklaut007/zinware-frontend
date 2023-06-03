import { Product } from './product.model';

export interface Cart {
  cartItems: CartItem[];
}

interface CartItem {
  quantity: number;
  product: Product;
}

import { Product } from './data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

export type ActiveTab = 'home' | 'shop' | 'collections' | 'wishlist' | 'cart';

export type CategoryFilter = 'All' | 'Bags' | 'Décor' | 'Accessories' | 'Gifts' | 'Bridal';

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating';

export interface CheckoutFormState {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  paymentMethod: 'cod' | 'card' | 'bank_transfer' | 'easypaisa_jazzcash';
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
  notes?: string;
}

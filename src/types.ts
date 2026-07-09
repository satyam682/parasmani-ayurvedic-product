export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  usage: string;
  price: number; // Base or starting price
  image: string;
  isBestseller?: boolean;
  priceRange?: string; // e.g. "₹25 – ₹50"
  variants?: { name: string; price: number }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedPrice?: number;
}

export interface Testimonial {
  name: string;
  place: string;
  rating: number;
  quote: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}


export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
  isNew?: boolean;
  weight?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  avatar?: string;
  rating: number;
}

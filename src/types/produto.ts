export interface Produto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  brand?: string;
  rating?: number;
  discountPercentage?: number;
  stock?: number;
  images?: string[];
}

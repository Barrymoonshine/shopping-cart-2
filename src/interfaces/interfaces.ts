export interface IProduct {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export interface IProductCard {
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export interface IFeatureCard {
  title: string;
  price: number;
  image: string;
}

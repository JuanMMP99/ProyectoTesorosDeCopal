export interface ProductTranslation {
  es: string;
  en: string;
}

export interface Product {
  id: string;

  slug: string;

  sku?: string;

  name: ProductTranslation;

  description: ProductTranslation;

  category: string;

  price?: number;

  featured: boolean;

  available: boolean;

  stock?: number;

  weight?: number;

  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };

  mainImage: string;

  gallery: string[];

  material?: ProductTranslation;

  artist?: string;

  technique?: ProductTranslation;

  tags: string[];

  createdAt?: string;

  updatedAt?: string;
}
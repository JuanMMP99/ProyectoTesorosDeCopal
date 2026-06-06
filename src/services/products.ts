import { products } from "@/data/products";

export async function getProducts() {
  return products;
}

export async function getFeaturedProducts() {
  return products.filter(
    (product) => product.featured
  );
}

export async function getProductBySlug(
  slug: string
) {
  return products.find(
    (product) => product.slug === slug
  );
}
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

type Props = {
  products: Product[];
  locale: "es" | "en";
};

export default function ProductGrid({ products, locale }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1.5rem",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          locale={locale}
        />
      ))}
    </div>
  );
}
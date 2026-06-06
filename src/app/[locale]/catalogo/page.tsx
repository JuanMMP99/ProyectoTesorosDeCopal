import ProductGrid from "@/components/catalog/ProductGrid";
import { getProducts } from "@/services/products";

type Props = {
  params: Promise<{
    locale: "es" | "en";
  }>;
};

export default async function CatalogPage({
  params,
}: Props) {
  const { locale } = await params;

  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        {locale === "es"
          ? "Catálogo"
          : "Catalog"}
      </h1>

      <ProductGrid
        products={products}
        locale={locale}
      />
    </div>
  );
}
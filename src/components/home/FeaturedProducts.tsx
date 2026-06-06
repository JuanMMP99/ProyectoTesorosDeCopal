import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ProductGrid from "@/components/catalog/ProductGrid";
import { getFeaturedProducts } from "@/services/products";

export default async function FeaturedProducts({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "featured" });
  const products = await getFeaturedProducts();

  return (
    <section
      id="catalogo"
      style={{
        background: "var(--cream)",
        padding: "7rem 4rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "4rem",
        }}
      >
        <div>
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              fontSize: "0.65rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                display: "block",
                width: "28px",
                height: "1px",
                background: "var(--accent)",
              }}
            />
            {locale === "es" ? "Colección" : "Collection"}
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--deep)",
            }}
          >
            {t("title")}
          </h2>
        </div>

        {/* Ver todo */}
        <Link
          href="/catalogo"
          locale={locale}
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--accent)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            paddingBottom: "4px",
            borderBottom: "1px solid var(--accent)",
          }}
        >
          {locale === "es" ? "Ver todo el catálogo →" : "View full catalog →"}
        </Link>
      </div>

      {/* Grid */}
      <ProductGrid
        products={products}
        locale={locale as "es" | "en"}
      />
    </section>
  );
}
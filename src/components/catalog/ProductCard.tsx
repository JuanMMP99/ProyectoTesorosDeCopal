import { Product } from "@/types/product";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  product: Product;
  locale: "es" | "en";
};

export default function ProductCard({ product, locale }: Props) {
  return (
    <Link href={`/catalogo/${product.slug}`}>
      <article
        style={{ cursor: "pointer" }}
        className="product-card-wrapper"
      >
        <style>{`
          .product-card-wrapper:hover .product-card-img {
            transform: scale(1.04);
          }
        `}</style>

        {/* Imagen */}
        <div
          style={{
            aspectRatio: "3/4",
            overflow: "hidden",
            marginBottom: "1rem",
            position: "relative",
            background: "var(--stone)",
          }}
        >
          {product.mainImage ? (
            <Image
              src={product.mainImage}
              alt={product.name[locale]}
              fill
              style={{ objectFit: "cover" }}
              className="product-card-img"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          ) : (
            <div
              className="product-card-img"
              style={{
                width: "100%",
                height: "100%",
                background: "var(--stone)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.5s ease",
              }}
            />
          )}

          {/* Categoría */}
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              background: "var(--warm-white)",
              color: "var(--charcoal)",
              padding: "4px 10px",
            }}
          >
            {locale === "es" ? "Talla de copal" : "Copal carving"}
          </span>
        </div>

        {/* Información */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.05rem",
              fontWeight: 400,
              color: "var(--deep)",
              marginBottom: "0.3rem",
            }}
          >
            {product.name[locale]}
          </h3>

          {product.price && (
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                fontWeight: 300,
              }}
            >
              ${product.price.toLocaleString()} MXN
            </p>
          )}

          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              marginTop: "0.4rem",
            }}
          >
            {product.description[locale]}
          </p>
        </div>
      </article>
    </Link>
  );
}
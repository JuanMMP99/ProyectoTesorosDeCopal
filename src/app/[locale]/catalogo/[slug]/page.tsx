import { getProductBySlug } from "@/services/products";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import ProductGallery from "../ProductGallery";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const WHATSAPP = "529514990142";

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const t = await getTranslations({ locale, namespace: "navbar" });
  const lang = locale as "es" | "en";

  const whatsappMessage = locale === "es"
    ? `Hola, me interesa la pieza *${product.name.es}* (ID: ${product.id}). ¿Está disponible?`
    : `Hello, I'm interested in *${product.name.en}* (ID: ${product.id}). Is it available?`;

  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div style={{ background: "var(--warm-white)", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div
        style={{
          padding: "1.5rem 4rem",
          borderBottom: "1px solid var(--stone)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.72rem",
          letterSpacing: "0.1em",
          color: "var(--text-muted)",
        }}
      >
        <Link
          href="/"
          locale={locale}
          style={{ color: "var(--text-muted)", textDecoration: "none" }}
        >
          {t("home")}
        </Link>
        <span>·</span>
        <Link
          href="/catalogo"
          locale={locale}
          style={{ color: "var(--text-muted)", textDecoration: "none" }}
        >
          {t("catalog")}
        </Link>
        <span>·</span>
        <span style={{ color: "var(--deep)" }}>{product.name[lang]}</span>
      </div>

      {/* Contenido principal */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          padding: "4rem 4rem 7rem",
          maxWidth: "1400px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* Galería — componente cliente */}
        <ProductGallery
          mainImage={product.mainImage}
          gallery={product.gallery}
          name={product.name[lang]}
        />

        {/* Info */}
        <div style={{ position: "sticky", top: "100px" }}>

          {/* Categoría */}
          <div
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
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
            {product.category}
          </div>

          {/* Nombre */}
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3vw, 2.8rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--deep)",
              marginBottom: "1rem",
            }}
          >
            {product.name[lang]}
          </h1>

          {/* Artista */}
          {product.artist && (
            <p
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              {locale === "es" ? "Por" : "By"} {product.artist}
            </p>
          )}

          {/* Precio */}
          {product.price && (
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.8rem",
                fontWeight: 300,
                color: "var(--deep)",
                marginBottom: "2rem",
              }}
            >
              ${product.price.toLocaleString()}
              <span
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-sans)",
                  color: "var(--text-muted)",
                  marginLeft: "0.5rem",
                }}
              >
                MXN
              </span>
            </div>
          )}

          {/* Descripción */}
          <p
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.9,
              color: "var(--text-muted)",
              marginBottom: "2.5rem",
              paddingBottom: "2.5rem",
              borderBottom: "1px solid var(--stone)",
            }}
          >
            {product.description[lang]}
          </p>

          {/* Detalles técnicos */}
          <div style={{ marginBottom: "2.5rem" }}>
            {[
              product.material && {
                label: locale === "es" ? "Material" : "Material",
                value: product.material[lang],
              },
              product.technique && {
                label: locale === "es" ? "Técnica" : "Technique",
                value: product.technique[lang],
              },
              product.dimensions && {
                label: locale === "es" ? "Dimensiones" : "Dimensions",
                value: `${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm`,
              },
              product.weight && {
                label: locale === "es" ? "Peso" : "Weight",
                value: `${product.weight} kg`,
              },
            ]
              .filter(Boolean)
              .map((detail: any) => (
                <div
                  key={detail.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid var(--stone)",
                    fontSize: "0.82rem",
                  }}
                >
                  <span
                    style={{
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontSize: "0.68rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {detail.label}
                  </span>
                  <span style={{ color: "var(--charcoal)", fontWeight: 400 }}>
                    {detail.value}
                  </span>
                </div>
              ))}
          </div>

          {/* Disponibilidad */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2rem",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: product.available ? "#25D366" : "var(--stone)",
                display: "inline-block",
              }}
            />
            <span style={{ color: "var(--text-muted)" }}>
              {product.available
                ? (locale === "es" ? "Disponible" : "Available")
                : (locale === "es" ? "No disponible" : "Not available")}
            </span>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.7rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "16px 32px",
                background: "#25D366",
                color: "#fff",
                border: "1px solid #25D366",
                textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {locale === "es" ? "Preguntar por WhatsApp" : "Ask on WhatsApp"}
            </a>

            {/* Volver al catálogo */}
            <Link
              href="/catalogo"
              locale={locale}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "16px 32px",
                background: "transparent",
                color: "var(--charcoal)",
                border: "1px solid var(--stone)",
                textDecoration: "none",
              }}
            >
              ← {locale === "es" ? "Volver al catálogo" : "Back to catalog"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
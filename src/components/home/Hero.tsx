import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import HeroCarousel from "./HeroCarousel";

export default async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "hero" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
        background: "var(--deep)",
      }}
    >
      {/* Carousel de fondo — componente cliente */}
      <HeroCarousel />

      {/* Overlay degradado */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(28,24,20,0.88) 0%, rgba(28,24,20,0.35) 50%, rgba(28,24,20,0.15) 100%)",
          zIndex: 1,
        }}
      />

      {/* Contenido */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 4rem 6rem",
          maxWidth: "700px",
          animation: "fadeUp 0.8s ease 0.2s both",
        }}
      >
        {/* Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            fontSize: "0.68rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "40px",
              height: "1px",
              background: "var(--accent)",
            }}
          />
          Tilcajete · Oaxaca · México
        </div>

        {/* Título */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#FAF7F2",
            marginBottom: "1.5rem",
            animation: "fadeUp 0.8s ease 0.4s both",
          }}
        >
          {t("title")}
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontSize: "0.9rem",
            fontWeight: 300,
            color: "rgba(250,247,242,0.72)",
            lineHeight: 1.8,
            maxWidth: "420px",
            marginBottom: "2.5rem",
            animation: "fadeUp 0.8s ease 0.6s both",
          }}
        >
          {t("subtitle")}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            alignItems: "center",
            animation: "fadeUp 0.8s ease 0.8s both",
          }}
        >
          <Link
            href="/catalogo"
            locale={locale}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "14px 32px",
              background: "var(--accent)",
              color: "#FAF7F2",
              border: "1px solid var(--accent)",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.25s",
            }}
          >
            {t("button")}
          </Link>

          <Link
            href="/taller"
            locale={locale}
            style={{
              fontSize: "0.72rem",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(250,247,242,0.72)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Conocer el taller →
          </Link>
        </div>
      </div>
    </section>
  );
}
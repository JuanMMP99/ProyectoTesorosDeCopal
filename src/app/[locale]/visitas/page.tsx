import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function VisitsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "navbar" });

  const visits = [
    {
      title: locale === "es" ? "Visita guiada" : "Guided tour",
      desc: locale === "es"
        ? "Recorre el taller con un artesano, conoce el proceso completo desde la talla hasta el acabado final con pigmentos naturales."
        : "Tour the workshop with an artisan and learn the full process from carving to the final finish with natural pigments.",
      duration: locale === "es" ? "1–2 horas · Grupos pequeños" : "1–2 hours · Small groups",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
        </svg>
      ),
    },
    {
      title: locale === "es" ? "Taller de pintura" : "Painting workshop",
      desc: locale === "es"
        ? "Aprende las técnicas de pintura tradicional y llévate tu propia pieza decorada bajo la guía de maestros artesanos."
        : "Learn traditional painting techniques and take home your own decorated piece guided by master artisans.",
      duration: locale === "es" ? "3 horas · Todos los niveles" : "3 hours · All levels",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      ),
    },
    {
      title: locale === "es" ? "Visita privada" : "Private visit",
      desc: locale === "es"
        ? "Experiencia personalizada para grupos, empresas o coleccionistas. Incluye presentación especial y piezas por encargo."
        : "Personalized experience for groups, companies or collectors. Includes a special presentation and commissioned pieces.",
      duration: locale === "es" ? "A convenir · Grupos VIP" : "By arrangement · VIP groups",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        background: "var(--deep)",
        color: "var(--cream)",
        padding: "7rem 4rem",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Texto fantasma de fondo */}
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-serif)",
          fontSize: "22vw",
          fontWeight: 300,
          color: "rgba(255,255,255,0.03)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        {t("visits").toUpperCase()}
      </span>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto" }}>
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
          <span style={{ display: "block", width: "28px", height: "1px", background: "var(--accent)" }} />
          {locale === "es" ? "Experiencias" : "Experiences"}
        </div>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "var(--cream)",
            maxWidth: "600px",
            marginBottom: "4rem",
          }}
        >
          {locale === "es" ? "Vive el taller de cerca" : "Experience the workshop up close"}
        </h1>

        {/* Grid de visitas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.08)",
          }}
        >
          {visits.map((visit) => (
            <div
              key={visit.title}
              style={{
                padding: "2.5rem",
                background: "var(--deep)",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  border: "1px solid rgba(196,130,58,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "var(--accent)",
                }}
              >
                {visit.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "var(--cream)",
                  marginBottom: "0.75rem",
                }}
              >
                {visit.title}
              </h3>

              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.8,
                  color: "rgba(250,247,242,0.55)",
                }}
              >
                {visit.desc}
              </p>

              <div
                style={{
                  marginTop: "1.5rem",
                  fontSize: "0.68rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                {visit.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
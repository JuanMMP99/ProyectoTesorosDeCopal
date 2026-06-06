import { getTranslations } from "next-intl/server";

export default async function AboutWorkshop({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <section
      id="taller"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
        padding: "7rem 4rem",
        background: "var(--warm-white)",
      }}
    >
      {/* Visual asimétrico */}
      <div style={{ position: "relative" }}>
        {/* Imagen principal — reemplaza el background con tu foto */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4/5",
            background:
              "linear-gradient(150deg, #1C1814 0%, #3d2a1a 40%, #6b4520 70%, #3A2010 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Imagen accent — reemplaza el background con tu segunda foto */}
        <div
          style={{
            position: "absolute",
            width: "45%",
            aspectRatio: "1",
            background:
              "linear-gradient(135deg, #c4823a 0%, #8b5a20 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            bottom: "-2rem",
            right: "-2rem",
            border: "6px solid var(--warm-white)",
          }}
        />
      </div>

      {/* Texto */}
      <div style={{ paddingRight: "2rem" }}>
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
          Nuestro taller
        </div>

        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 3vw, 2.6rem)",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "var(--deep)",
            marginBottom: "1.5rem",
          }}
        >
          {t("title")}
        </h2>

        <p
          style={{
            fontSize: "0.92rem",
            lineHeight: 1.9,
            color: "var(--text-muted)",
            marginBottom: "1.25rem",
          }}
        >
          {t("description")}
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginTop: "3rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid var(--stone)",
          }}
        >
          {[
            { num: "40+", label: locale === "es" ? "Años de tradición" : "Years of tradition" },
            { num: "3",   label: locale === "es" ? "Generaciones" : "Generations" },
            { num: "200+", label: locale === "es" ? "Piezas al año" : "Pieces per year" },
          ].map(({ num, label }) => (
            <div key={label}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.2rem",
                  fontWeight: 300,
                  color: "var(--accent)",
                  display: "block",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {num}
              </span>
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
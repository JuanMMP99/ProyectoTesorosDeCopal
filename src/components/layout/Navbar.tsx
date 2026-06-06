import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "./LanguageSwitcher";
import NavLinks from "./NavLinks";

export default async function Navbar({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "navbar" });

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        borderBottom: "1px solid var(--stone)",
        background: "rgba(255,252,248,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      id="main-navbar"
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 4rem",
          height: "72px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <a
          href={`/${locale}`}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.35rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: "var(--deep)",
            textDecoration: "none",
          }}
        >
          Alebrijes Oaxaca
        </a>

        {/* Links — componente cliente para preservar locale */}
        <NavLinks
          locale={locale}
          labels={{
            home: t("home"),
            catalog: t("catalog"),
            workshop: t("workshop"),
            visits: t("visits"),
            contact: t("contact"),
          }}
        />

        {/* Selector de idioma */}
        <LanguageSwitcher />
      </nav>

      {/* Script para efecto scroll */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var nav = document.getElementById('main-navbar');
              window.addEventListener('scroll', function() {
                nav.style.background = window.scrollY > 60
                  ? 'rgba(255,252,248,0.98)'
                  : 'rgba(255,252,248,0.92)';
              });
            })();
          `,
        }}
      />
    </header>
  );
}
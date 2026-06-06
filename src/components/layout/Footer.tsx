import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "footer" });
  const tn = await getTranslations({ locale, namespace: "navbar" });

  const links = [
    { href: "/",         label: tn("home") },
    { href: "/catalogo", label: tn("catalog") },
    { href: "/taller",   label: tn("workshop") },
    { href: "/contacto", label: tn("contact") },
  ];

  return (
    <footer
      style={{
        background: "var(--deep)",
        color: "rgba(250,247,242,0.45)",
        padding: "3rem 4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.1rem",
          fontWeight: 400,
          color: "rgba(250,247,242,0.75)",
          letterSpacing: "0.05em",
        }}
      >
        Alebrijes Oaxaca
      </span>

      {/* Copyright */}
      <p style={{ fontSize: "0.72rem", letterSpacing: "0.1em" }}>
        © 2026 Alebrijes Oaxaca · {t("rights")}
      </p>

      {/* Links */}
      <nav style={{ display: "flex", gap: "2rem" }}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href as "/"}
            locale={locale}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(250,247,242,0.4)",
              textDecoration: "none",
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
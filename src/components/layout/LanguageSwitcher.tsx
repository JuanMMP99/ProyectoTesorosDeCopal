"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = (newLocale: "es" | "en") => {
    const cleanPath = pathname.replace(/^\/(es|en)/, "") || "/";
    window.location.href = `/${newLocale}${cleanPath === "/" ? "" : cleanPath}`;
  };

  const btnBase: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "0.68rem",
    fontWeight: 400,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    padding: "4px 10px",
    border: "1px solid var(--stone)",
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.2s",
  };

  const btnActive: React.CSSProperties = {
    ...btnBase,
    borderColor: "var(--accent)",
    color: "var(--accent)",
    background: "var(--accent-light)",
  };

  const btnInactive: React.CSSProperties = {
    ...btnBase,
    color: "var(--text-muted)",
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      {(["es", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => switchLocale(lang)}
          style={locale === lang ? btnActive : btnInactive}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
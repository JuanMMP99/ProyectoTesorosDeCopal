"use client";

import { Link } from "@/i18n/navigation";

type Props = {
  locale: string;
  labels: {
    home: string;
    catalog: string;
    workshop: string;
    visits: string;
    contact: string;
  };
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.72rem",
  fontWeight: 400,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--charcoal)",
  textDecoration: "none",
  position: "relative",
  paddingBottom: "3px",
  transition: "color 0.2s",
};

export default function NavLinks({ locale, labels }: Props) {
  const links = [
    { href: "/",         label: labels.home },
    { href: "/catalogo", label: labels.catalog },
    { href: "/taller",   label: labels.workshop },
    { href: "/visitas",  label: labels.visits },
    { href: "/contacto", label: labels.contact },
  ];

  return (
    <>
      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 100%;
          height: 1px;
          background: var(--accent);
          transition: right 0.3s ease;
        }
        .nav-link:hover {
          color: var(--accent) !important;
        }
        .nav-link:hover::after {
          right: 0;
        }
      `}</style>

      <ul
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href as "/"}
              locale={locale}
              className="nav-link"
              style={linkStyle}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
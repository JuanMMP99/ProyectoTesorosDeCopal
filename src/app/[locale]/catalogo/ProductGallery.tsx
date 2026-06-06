"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  mainImage: string;
  gallery: string[];
  name: string;
};

export default function ProductGallery({ mainImage, gallery, name }: Props) {
  const allImages = [mainImage, ...gallery].filter(Boolean);
  const [selected, setSelected] = useState(0);

  return (
    <div>
      {/* Imagen principal */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4/5",
          background: "var(--stone)",
          overflow: "hidden",
          marginBottom: "1rem",
        }}
      >
        {allImages[selected] ? (
          <Image
            src={allImages[selected]}
            alt={name}
            fill
            style={{ objectFit: "cover", transition: "opacity 0.3s ease" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
            }}
          >
            {name}
          </div>
        )}
      </div>

      {/* Miniaturas */}
      {allImages.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              style={{
                width: "72px",
                height: "72px",
                position: "relative",
                border: i === selected
                  ? "2px solid var(--accent)"
                  : "2px solid transparent",
                background: "var(--stone)",
                cursor: "pointer",
                padding: 0,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
              aria-label={`Imagen ${i + 1}`}
            >
              {img ? (
                <Image
                  src={img}
                  alt={`${name} ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="72px"
                />
              ) : null}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";

/*
  Slides: reemplaza los `background` con tus imágenes reales así:
  background: "url('/hero/slide-1.webp') center/cover no-repeat"
*/
const slides = [
  { background: "linear-gradient(135deg, #1a0e05 0%, #3d1f08 30%, #6b3012 50%, #8b4513 70%, #1a0e05 100%)" },
  { background: "linear-gradient(135deg, #050f1a 0%, #083d2a 30%, #0d6b3a 50%, #0f8b45 70%, #050f1a 100%)" },
  { background: "linear-gradient(135deg, #1a0510 0%, #3d0820 30%, #6b0d35 50%, #8b1345 70%, #1a0510 100%)" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Slides */}
      <div style={{ position: "absolute", inset: 0 }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              background: slide.background,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === current ? 1 : 0,
              transition: "opacity 1.2s ease",
            }}
          />
        ))}
      </div>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "4rem",
          display: "flex",
          gap: "8px",
          zIndex: 3,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              borderRadius: i === current ? "3px" : "50%",
              background: i === current ? "var(--accent)" : "rgba(250,247,242,0.35)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
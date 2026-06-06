import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",

    slug: "jaguar-azul",

    name: {
      es: "Jaguar Azul",
      en: "Blue Jaguar",
    },

    description: {
      es: "Alebrije tallado en madera de copal y pintado a mano.",
      en: "Alebrije carved from copal wood and hand painted.",
    },

    category: "jaguars",

    price: 3500,

    featured: true,

    available: true,

    mainImage: "/products/jaguar-azul/main.webp",

    gallery: [
      "/products/jaguar-azul/1.webp",
      "/products/jaguar-azul/2.webp",
    ],

    material: {
      es: "Madera de copal",
      en: "Copal wood",
    },

    artist: "Familia García",

    technique: {
      es: "Tallado y pintura artesanal",
      en: "Hand carving and painting",
    },

    tags: [
      "jaguar",
      "copal",
      "alebrije",
    ],
  },

  {
    id: "2",

    slug: "ave-fantastica",

    name: {
      es: "Ave Fantástica",
      en: "Fantasy Bird",
    },

    description: {
      es: "Alebrije inspirado en aves tradicionales oaxaqueñas.",
      en: "Alebrije inspired by traditional Oaxaca birds.",
    },

    category: "birds",

    price: 2800,

    featured: false,

    available: true,

    mainImage: "/products/ave-fantastica/main.webp",

    gallery: [
      "/products/ave-fantastica/1.webp",
    ],

    material: {
      es: "Madera de copal",
      en: "Copal wood",
    },

    artist: "Familia García",

    technique: {
      es: "Pintura artesanal",
      en: "Hand painted",
    },

    tags: [
      "bird",
      "alebrije",
    ],
  },
];
import { BRAND, PHONE_DISPLAY, SITE_URL } from "./config";
import { CityRecord, cityPath } from "@/data/cities";

export function buildSchema(c: CityRecord) {
  const url = `${SITE_URL}${cityPath(c)}`;
  return {
    "@context": "https://schema.org",
    "@type": ["Plumber", "EmergencyService"],
    "@id": `${url}#business`,
    name: `${BRAND} ${c.city}`,
    url,
    telephone: PHONE_DISPLAY,
    priceRange: "$$",
    description: `Emergency plumbing in ${c.city}, ${c.stateCode}: burst pipes, drain cleaning, water heater repair and sewer backups.`,
    areaServed: [
      `${c.city}, ${c.stateCode}`,
      ...c.suburbs.map((s) => ({ "@type": "City", name: `${s}, ${c.stateCode}` })),
    ],
    address: { "@type": "PostalAddress", addressLocality: c.city, addressRegion: c.stateCode, postalCode: c.zips[0], addressCountry: "US" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    contactPoint: { "@type": "ContactPoint", telephone: PHONE_DISPLAY, contactType: "emergency", areaServed: "US", availableLanguage: "English" },
    // Add aggregateRating only once you have real, verifiable reviews (Google policy).
  };
}

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

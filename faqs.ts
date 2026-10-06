import { CityRecord } from "@/data/cities";
import { PHONE_DISPLAY } from "./config";

export function getFaqs(c: CityRecord) {
  return [
    { q: `How fast can a plumber arrive in ${c.city}?`,
      a: `Most emergency calls in ${c.city} are dispatched immediately, with a typical arrival window of about 30 minutes depending on traffic and location. Call ${PHONE_DISPLAY} for a live estimate.` },
    { q: "Are emergency plumbing services available on weekends and holidays?",
      a: "Yes. Dispatch runs 24 hours a day, 7 days a week, including nights, weekends and holidays." },
    { q: "Do you charge a fee to come out and give an estimate?",
      a: "Estimates are free, and you approve the price before work begins." },
    { q: "What should I do while I wait for the plumber?",
      a: "Shut off the main water valve (or the fixture valve), turn off the water heater if it is leaking, move valuables away from water, and avoid electrical outlets near standing water." },
    { q: `Do you serve areas around ${c.city}?`,
      a: `Yes. We cover ${c.suburbs.join(", ")} and surrounding ZIP codes (${c.zips.join(", ")}).` },
  ];
}

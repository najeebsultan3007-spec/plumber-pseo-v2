import { CityRecord } from "@/data/cities";
import CallButton from "./CallButton";

const BENEFITS = [
  { title: "Fast Dispatch", body: "Calls go straight to the closest available plumber, day or night." },
  { title: "Upfront Pricing", body: "You approve the price before any work starts. No surprise fees." },
  { title: "Experienced Technicians", body: "Licensed pros who handle burst pipes and sewer backups every week." },
  { title: "Fully Guaranteed", body: "Repairs are backed by a written workmanship guarantee." },
];

export default function WhyUs({ c }: { c: CityRecord }) {
  return (
    <section className="bg-navy-900 py-12 text-white">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Why Choose Our Local {c.city} Network</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-xl bg-white/10 p-5 ring-1 ring-white/15">
              <h3 className="text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-blue-100">{b.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8"><CallButton variant="solid" className="w-full sm:w-auto" /></div>
      </div>
    </section>
  );
}

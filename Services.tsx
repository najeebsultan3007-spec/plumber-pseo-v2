import { CityRecord } from "@/data/cities";

const SERVICES = [
  { title: "Emergency Drain Cleaning & Hydro Jetting", body: "Main line clogs, slow drains and recurring backups cleared with cable machines or high-pressure jetting." },
  { title: "Burst Pipe & Slab Leak Repair", body: "We shut off the water, stop the damage and repair or re-route the failed section." },
  { title: "Water Heater Repair & Replacement", body: "No hot water, leaking tanks or pilot failures. Same-day repair or replacement." },
  { title: "Toilet & Sewer Line Backup Clearance", body: "Overflowing toilets and sewage in the yard or basement, cleared and camera-inspected." },
];

export default function Services({ c }: { c: CityRecord }) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Services We Handle Urgently in {c.city}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.title} className="rounded-xl border-l-4 border-alert bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-slate-700">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

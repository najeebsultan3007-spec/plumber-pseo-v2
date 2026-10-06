import { CityRecord } from "@/data/cities";
import { BRAND, PHONE_DISPLAY, PHONE_URI } from "@/lib/config";
import CallButton from "./CallButton";

export default function CoverageFooter({ c }: { c: CityRecord }) {
  return (
    <footer className="bg-navy-950 pb-28 pt-12 text-blue-100 sm:pb-12">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-xl font-extrabold text-white">Emergency Plumbing Coverage Near {c.city}, {c.stateCode}</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-bold text-white">Nearby towns</h3>
            <ul className="mt-3 space-y-2">
              {c.suburbs.map((s) => (
                <li key={s} className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
                  <span>{s}, {c.stateCode}</span>
                  <a href={PHONE_URI} className="shrink-0 text-sm font-bold text-green-400 underline">Call {PHONE_DISPLAY}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white">ZIP codes served</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.zips.map((z) => (
                <li key={z}>
                  <a href={PHONE_URI} className="inline-block rounded-md bg-white/10 px-3 py-1.5 text-sm font-semibold hover:bg-white/20">{z}</a>
                </li>
              ))}
            </ul>
            <div className="mt-6"><CallButton variant="solid" className="w-full sm:w-auto" /></div>
          </div>
        </div>

        <p className="mt-10 text-xs text-blue-300">
          © {new Date().getFullYear()} {BRAND}. Service is provided by independent licensed plumbing contractors in your area.
        </p>
      </div>
    </footer>
  );
}

import { CityRecord } from "@/data/cities";
import { PHONE_DISPLAY, RATING_LABEL } from "@/lib/config";
import CallButton from "./CallButton";
import { CheckIcon } from "./Icons";

const BADGES = ["Licensed & Insured", "24/7 Availability", "Zero Upfront Fees", RATING_LABEL];

export default function Hero({ c }: { c: CityRecord }) {
  return (
    <section className="bg-gradient-to-b from-navy-900 to-navy-950 text-white">
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-8 sm:pb-16 sm:pt-12">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
          24/7 Emergency Plumbing Services in {c.city}, {c.stateCode}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-blue-100 sm:text-xl">
          Local Licensed Plumbers Available Now. Fast 30-Minute Response Time. Free Estimates.
        </p>

        <div className="mt-7 max-w-xl">
          <CallButton variant="hero" pulse label={`TAP TO CALL NOW: ${PHONE_DISPLAY}`} />
          <p className="mt-3 text-sm text-blue-200">
            A dispatcher answers live. Tell us what&apos;s leaking and we send the nearest plumber.
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {BADGES.map((b) => (
            <li key={b} className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-3 text-sm font-semibold ring-1 ring-white/15">
              <CheckIcon className="h-5 w-5 shrink-0 text-go" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

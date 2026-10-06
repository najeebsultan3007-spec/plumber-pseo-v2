import { BRAND, PHONE_DISPLAY, PHONE_URI } from "@/lib/config";
import { PhoneIcon } from "./Icons";

export default function StickyTopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900 text-white shadow-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2">
        <span className="hidden text-sm font-semibold sm:block">{BRAND}</span>
        <span className="flex items-center gap-2 text-xs font-semibold sm:hidden">
          <span className="h-2 w-2 rounded-full bg-go" aria-hidden="true" /> Open now, 24/7
        </span>
        <a
          href={PHONE_URI}
          className="inline-flex items-center gap-2 rounded-lg bg-alert px-4 py-2.5 text-sm font-extrabold text-white shadow hover:bg-alert-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 sm:text-base"
        >
          <PhoneIcon /> Call Now: {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

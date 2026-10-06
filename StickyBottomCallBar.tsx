import { PHONE_DISPLAY, PHONE_URI } from "@/lib/config";
import { PhoneIcon } from "./Icons";

// Thumb-zone call bar, mobile only.
export default function StickyBottomCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-navy-950/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
      <a
        href={PHONE_URI}
        className="flex items-center justify-center gap-2 rounded-xl bg-go py-4 text-lg font-extrabold text-white shadow-lg active:bg-go-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300"
      >
        <PhoneIcon className="h-6 w-6" /> Call {PHONE_DISPLAY}
      </a>
    </div>
  );
}

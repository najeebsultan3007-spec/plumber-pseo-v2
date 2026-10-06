import { PHONE_DISPLAY, PHONE_URI } from "@/lib/config";
import { PhoneIcon } from "./Icons";

type Variant = "hero" | "solid" | "outline";

const styles: Record<Variant, string> = {
  hero: "w-full rounded-2xl bg-alert px-6 py-5 text-xl font-extrabold text-white shadow-lg shadow-black/30 hover:bg-alert-dark sm:w-auto sm:text-2xl",
  solid: "rounded-xl bg-go px-5 py-3 text-base font-bold text-white hover:bg-go-dark",
  outline: "rounded-lg border-2 border-navy-900 px-3 py-2 text-sm font-bold text-navy-900 hover:bg-navy-900 hover:text-white",
};

export default function CallButton({
  label, variant = "solid", pulse = false, className = "",
}: { label?: string; variant?: Variant; pulse?: boolean; className?: string }) {
  return (
    <a
      href={PHONE_URI}
      aria-label={`Call ${PHONE_DISPLAY}`}
      className={`relative inline-flex items-center justify-center gap-2 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 ${styles[variant]} ${className}`}
    >
      {pulse && (
        <span aria-hidden="true" className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-alert opacity-40" />
      )}
      <PhoneIcon className={variant === "hero" ? "h-7 w-7" : "h-5 w-5"} />
      <span>{label ?? `Call ${PHONE_DISPLAY}`}</span>
    </a>
  );
}

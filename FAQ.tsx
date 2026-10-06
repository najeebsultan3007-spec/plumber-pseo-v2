import { CityRecord } from "@/data/cities";
import { getFaqs } from "@/lib/faqs";

// Native <details> accordion: zero JavaScript, fully crawlable.
export default function FAQ({ c }: { c: CityRecord }) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200">
          {getFaqs(c).map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-bold text-navy-900 focus:outline-none focus-visible:bg-yellow-50">
                {f.q}
                <span className="faq-icon text-2xl leading-none text-alert transition-transform" aria-hidden="true">+</span>
              </summary>
              <p className="px-5 pb-5 text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

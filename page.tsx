import Link from "next/link";
import { CITIES, cityPath } from "@/data/cities";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-navy-900">Emergency Plumbing Service Areas</h1>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {CITIES.map((c) => (
          <li key={cityPath(c)}>
            <Link className="text-blue-700 underline" href={cityPath(c)}>
              Emergency plumber in {c.city}, {c.stateCode}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

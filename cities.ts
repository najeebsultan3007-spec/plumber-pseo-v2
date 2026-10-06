export interface CityRecord {
  city: string;
  state: string;      // Full name, e.g. "Ohio"
  stateCode: string;  // e.g. "OH"
  zips: string[];
  areaCode: string;   // local area code of the market
  suburbs: string[];
}

// Add rows here: each one becomes a statically generated page at /plumbing/[state]/[city].
export const CITIES: CityRecord[] = [
  { city: "Zanesville", state: "Ohio", stateCode: "OH", zips: ["43701", "43702"], areaCode: "740",
    suburbs: ["Cambridge", "New Concord", "Roseville", "Dresden"] },
  { city: "Mansfield", state: "Ohio", stateCode: "OH", zips: ["44902", "44903", "44904", "44906"], areaCode: "419",
    suburbs: ["Ontario", "Lexington", "Shelby", "Galion"] },
  { city: "Johnson City", state: "Tennessee", stateCode: "TN", zips: ["37601", "37604", "37615"], areaCode: "423",
    suburbs: ["Jonesborough", "Elizabethton", "Gray", "Piney Flats"] },
  { city: "Rapid City", state: "South Dakota", stateCode: "SD", zips: ["57701", "57702", "57703"], areaCode: "605",
    suburbs: ["Box Elder", "Summerset", "Black Hawk", "Piedmont"] },
];

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const cityPath = (c: Pick<CityRecord, "state" | "city">) =>
  `/plumbing/${slugify(c.state)}/${slugify(c.city)}`;

export function findCity(stateSlug: string, citySlug: string) {
  return CITIES.find((c) => slugify(c.state) === stateSlug && slugify(c.city) === citySlug);
}

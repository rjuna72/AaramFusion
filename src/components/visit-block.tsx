import Link from "next/link";
import { business } from "@/data/business";
import { ButtonLink } from "./ui";

export function VisitBlock() {
  return <section className="visit-block wrap" aria-labelledby="visit-heading"><div><p className="eyebrow">HERE IN ROCHEDALE</p><h2 id="visit-heading">Find your way<br />to Aaram.</h2></div><div className="visit-block-details"><p className="address">664 Miles Platting Road<br />Rochedale, QLD 4123</p><p className="muted">Check the latest visiting details before heading over.</p><div className="button-row"><ButtonLink href={business.mapsUrl} external>Get directions</ButtonLink><Link className="text-link" href="/visit/">Visit & contact</Link></div></div></section>;
}

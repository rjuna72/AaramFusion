import type { Metadata } from "next";
import { business } from "@/data/business";

const configured = process.env.SITE_URL;
export const siteUrl = new URL(configured || "http://localhost:3000");
if (!["http:", "https:"].includes(siteUrl.protocol) || siteUrl.username || siteUrl.password || siteUrl.pathname !== "/" || siteUrl.search || siteUrl.hash) {
  throw new Error("SITE_URL must be an http(s) origin without a path, credentials, query or fragment.");
}
export const indexable = process.env.SITE_INDEXABLE === "true" && !!configured && siteUrl.protocol === "https:" && !["localhost", "127.0.0.1"].includes(siteUrl.hostname);

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description,
    alternates: configured ? { canonical: path } : undefined,
    openGraph: {
      title, description, siteName: business.name, locale: "en_AU", type: "website",
      ...(configured ? { url: new URL(path, siteUrl) } : {}),
    },
    twitter: { card: "summary", title, description },
  };
}

export function restaurantSchema() {
  return {
    "@context": "https://schema.org", "@type": "Restaurant", name: business.name,
    alternateName: business.listingName,
    address: { "@type": "PostalAddress", streetAddress: business.street, addressLocality: business.locality, addressRegion: business.region, postalCode: business.postcode, addressCountry: "AU" },
    servesCuisine: ["Cafe", "Breakfast", "Brunch"],
    ...(configured ? { url: siteUrl.origin, hasMenu: new URL("/menu/", siteUrl).href } : {}),
  };
}

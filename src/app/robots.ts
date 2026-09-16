import type { MetadataRoute } from "next";
import { indexable, siteUrl } from "@/lib/seo";
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return indexable ? { rules: { userAgent: "*", allow: "/" }, sitemap: new URL("/sitemap.xml", siteUrl).href } : { rules: { userAgent: "*", disallow: "/" } };
}

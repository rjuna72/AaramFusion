import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!process.env.SITE_URL) return [];
  return ["/", "/menu/", "/visit/"].map(path => ({ url: new URL(path, siteUrl).href }));
}

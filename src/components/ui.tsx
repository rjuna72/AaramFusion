import Link from "next/link";
import type { ReactNode } from "react";
import { photos } from "@/data/business";

export function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function ButtonLink({ href, children, light = false, external = false }: { href: string; children: ReactNode; light?: boolean; external?: boolean }) {
  const cls = `button${light ? " button-light" : ""}`;
  return external
    ? <a href={href} className={cls}>{children}<Arrow /></a>
    : <Link href={href} className={cls}>{children}<Arrow /></Link>;
}

export function Photo({ kind, className = "", priority = false }: { kind: keyof typeof photos; className?: string; priority?: boolean }) {
  const photo = photos[kind];
  return <figure className={`photo ${className}`}>
    {/* Native responsive sources keep the static export independent of an image server. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={photo.src} srcSet={photo.srcSet} sizes={kind === "breakfast" ? "(max-width: 760px) 100vw, 60vw" : "(max-width: 760px) 100vw, 45vw"} width={photo.width} height={photo.height} alt={photo.alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />
    <figcaption>Illustrative photography <span aria-hidden="true">·</span> <a href={photo.source}>{photo.credit}</a></figcaption>
  </figure>;
}

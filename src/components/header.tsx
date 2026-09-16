"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { business } from "@/data/business";

export function Header() {
  const [expanded, setExpanded] = useState(false);
  const path = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && expanded) { setExpanded(false); toggle.current?.focus(); }
    }
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setExpanded(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", outside); };
  }, [expanded]);
  return <>
    <div className="location-strip"><span>YOUR ROCHEDALE CAFÉ</span><span>664 MILES PLATTING ROAD</span></div>
    <header className="site-header" ref={header}>
      <Link href="/" className="wordmark" aria-label="Aaram Fusion home" onClick={() => setExpanded(false)}>aaram<span>FUSION</span></Link>
      <button ref={toggle} type="button" className="nav-toggle" aria-expanded={expanded} aria-controls="main-navigation" onClick={() => setExpanded(!expanded)}>{expanded ? "Close" : "Explore"}<span aria-hidden="true">{expanded ? "−" : "+"}</span></button>
      <nav id="main-navigation" aria-label="Main navigation" className={`main-nav${expanded ? " is-open" : ""}`}>
        <Link href="/menu/" aria-current={path.startsWith("/menu") ? "page" : undefined} onClick={() => setExpanded(false)}>Menu</Link>
        <Link href="/visit/" aria-current={path.startsWith("/visit") ? "page" : undefined} onClick={() => setExpanded(false)}>Visit & contact</Link>
        <a className="nav-order" href={business.orderUrl} onClick={() => setExpanded(false)}>Order on Uber Eats <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  </>;
}

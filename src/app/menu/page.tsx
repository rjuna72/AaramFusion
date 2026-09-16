import Link from "next/link";
import { business, menuGroups } from "@/data/business";
import { ButtonLink } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Menu", "Explore a preview of Aaram Fusion Cafe’s breakfast, lunch, sweets and coffee menu in Rochedale. Check Uber Eats for the current selection and prices.", "/menu/");

export default function MenuPage() {
  return <>
    <section className="page-heading wrap"><p className="eyebrow">AARAM FUSION / THE MENU</p><div className="page-heading-grid"><h1>A little of<br /><em>what you fancy.</em></h1><p>Breakfast to start with.<br />Something for lunch.<br />A coffee along the way.</p></div></section>
    <div className="menu-disclaimer wrap"><p><strong>A taste of the café menu.</strong> This is a preview from the public Aaram Fusion Cafe listing, not a full in-house menu. Selection and prices may change.</p><a className="text-link" href={business.orderUrl}>Full menu & prices on Uber Eats <span aria-hidden="true">↗</span></a></div>
    <nav className="menu-jump wrap" aria-label="Menu categories">{menuGroups.map(group => <a href={`#${group.id}`} key={group.id}><span>{group.number}</span>{group.title}</a>)}</nav>
    <div className="menu-content wrap">{menuGroups.map(group => <section key={group.id} id={group.id} className="menu-group" aria-labelledby={`${group.id}-title`}><div className="menu-group-heading"><span className="eyebrow">{group.number} /</span><h2 id={`${group.id}-title`}>{group.title}</h2><p>{group.subtitle}</p></div><ul className="dish-list">{group.items.map(item => <li key={item.name}><h3>{item.name}</h3><p>{item.description}</p></li>)}</ul></section>)}</div>
    <section className="menu-end wrap"><div><p className="eyebrow">READY TO CHOOSE?</p><h2>See what’s<br />on the menu.</h2><p>Uber Eats shows the full listed selection, prices and delivery availability for your address.</p></div><div><ButtonLink href={business.orderUrl} external>View on Uber Eats</ButtonLink><p className="allergy-note">Food allergies or dietary requirements? Confirm ingredients and preparation with the restaurant before ordering. Preview descriptions do not list every ingredient.</p><Link href="/visit/" className="text-link">Visiting details</Link></div></section>
  </>;
}

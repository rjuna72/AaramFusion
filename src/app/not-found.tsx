import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return <section className="not-found wrap"><p className="eyebrow">404 / A WRONG TURN</p><h1>Let’s get you<br />back to the table.</h1><p>That page isn’t here. The menu is a good place to start.</p><ButtonLink href="/menu/">Explore the menu</ButtonLink></section>;
}

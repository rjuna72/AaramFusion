import Link from "next/link";
import { Photo, ButtonLink, Arrow } from "@/components/ui";
import { VisitBlock } from "@/components/visit-block";
import { pageMetadata, restaurantSchema } from "@/lib/seo";

export const metadata = pageMetadata("Aaram Fusion | Café in Rochedale, Brisbane", "Breakfast, lunch and coffee in Rochedale. Explore Aaram Fusion’s menu preview, online ordering link and location on Miles Platting Road.", "/");

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema()).replace(/</g, "\\u003c") }} />
    <section className="hero wrap" aria-labelledby="hero-heading">
      <div className="hero-copy"><p className="eyebrow">BREAKFAST. LUNCH. COFFEE.</p><h1 id="hero-heading">Make time<br />for a <em>good</em><br />feed.</h1><p className="hero-description">Your next café stop in Rochedale.<br />From a big brekky to a flat white,<br className="desktop-break" /> take a look at Aaram Fusion.</p><ButtonLink href="/menu/">Explore the menu</ButtonLink><div className="hero-location"><span className="small-index">01 /</span><span>664 Miles Platting Road<br />Rochedale, Brisbane</span></div></div>
      <div className="hero-visual"><Photo kind="breakfast" priority /><div className="hero-photo-label"><span>SOMETHING GOOD<br />TO LOOK FORWARD TO.</span><span aria-hidden="true">↙</span></div></div>
    </section>
    <div className="food-line" aria-hidden="true"><span>A LITTLE BREAKFAST</span><span>—</span><span>A LITTLE LUNCH</span><span>—</span><span>A COFFEE MOMENT</span></div>
    <section className="menu-intro wrap" aria-labelledby="menu-heading"><div className="section-intro"><p className="eyebrow">AT THE TABLE</p><h2 id="menu-heading">Big appetite.<br />Little coffee break.<br /><em>Your call.</em></h2><p>See what catches your eye. Start with a few dishes from the public café menu, then check the full listing for the latest selection.</p><Link className="text-link" href="/menu/">Take a look at the menu <Arrow /></Link></div><div className="menu-paths"><Link href="/menu/#breakfast"><span className="small-index">01</span><div><h3>Breakfast</h3><p>Avocado toast. Eggs. The big brekky.</p></div><Arrow /></Link><Link href="/menu/#lunch"><span className="small-index">02</span><div><h3>Lunch & sweets</h3><p>A burger, or something sweet.</p></div><Arrow /></Link><Link href="/menu/#coffee"><span className="small-index">03</span><div><h3>Coffee</h3><p>A moment for your usual.</p></div><Arrow /></Link></div></section>
    <section className="coffee-section" aria-labelledby="coffee-heading"><div className="coffee-inner wrap"><Photo kind="coffee" /><div className="coffee-copy"><p className="eyebrow">TAKE A BREATHER</p><h2 id="coffee-heading">A coffee.<br />A catch-up.<br /><em>Aaram.</em></h2><p>Some plans only need a coffee. Others call for breakfast. Find a little inspiration for your next café stop.</p><ButtonLink href="/menu/#coffee" light>See the café menu</ButtonLink><span className="coffee-footnote">ROCHEDALE, BRISBANE</span></div></div></section>
    <VisitBlock />
  </>;
}

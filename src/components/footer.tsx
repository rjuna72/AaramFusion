import Link from "next/link";
import { business } from "@/data/business";

export function Footer() {
  return <>
    <footer className="site-footer">
      <div className="footer-top"><Link href="/" className="wordmark" aria-label="Aaram Fusion home">aaram<span>FUSION</span></Link><p>{business.street}<br />Rochedale, Brisbane QLD 4123</p><nav aria-label="Footer navigation"><Link href="/menu/">Menu</Link><Link href="/visit/">Visit & contact</Link><a href={business.orderUrl}>Uber Eats ↗</a></nav></div>
      <div className="footer-bottom"><span>Aaram Fusion · Rochedale</span><p>Website preview. Business details awaiting confirmation.<br />Photography is illustrative and does not depict Aaram Fusion.</p></div>
    </footer>
    <nav className="mobile-actions" aria-label="Quick actions"><Link href="/menu/">View menu <span aria-hidden="true">↗</span></Link><a href={business.mapsUrl}>Get directions <span aria-hidden="true">↗</span></a></nav>
  </>;
}

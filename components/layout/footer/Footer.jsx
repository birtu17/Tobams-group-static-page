import FooterTop from "./FooterTop";
import FooterMain from "./FooterMain";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-hue-white">
      <FooterTop />
      <FooterMain />
      <FooterLinks />
      <FooterBottom />   
    </footer>
  );
}
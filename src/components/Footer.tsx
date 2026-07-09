import { Mail, Phone, MapPin, Clock, ArrowRight, Instagram, Facebook, Linkedin, Youtube, Send, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../data";
import { useState, FormEvent } from "react";

interface FooterProps {
  setPage: (page: string) => void;
}

export default function Footer({ setPage }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (key: string) => {
    setPage(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="main-app-footer"
      className="bg-forest-900 text-cream border-t border-gold-500/20 pt-16 pb-28 md:pb-12 px-6 md:px-8 relative overflow-hidden font-sans paper-grain"
    >
      {/* Botanical Watermark Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,100 Q 150,50 300,100 T 600,100 T 900,100" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M 50,200 C 150,150 250,250 350,200" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Column 1 - Brand Info */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gold-500 flex items-center justify-center border border-gold-300/30">
              <Sparkles className="w-4 h-4 text-forest-900" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold tracking-wider text-cream">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-[10px] tracking-widest text-gold-300 uppercase">
                {COMPANY_INFO.subtitle}
              </p>
            </div>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed font-light">
            {COMPANY_INFO.promise}
          </p>
          <div className="text-xs text-gold-500 font-serif italic tracking-wide mt-2">
            "{COMPANY_INFO.tagline}"
          </div>
        </div>

        {/* Column 2 - Explore Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-base font-semibold tracking-wider text-gold-500 border-b border-gold-500/10 pb-2">
            Explore
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            {[
              { label: "Home", key: "home" },
              { label: "About Us", key: "about" },
              { label: "Our Products", key: "products" },
              { label: "Global Export Services", key: "export" },
              { label: "Contact & Support", key: "contact" }
            ].map((link) => (
              <li key={link.key}>
                <button
                  id={`footer-link-${link.key}`}
                  onClick={() => handleLinkClick(link.key)}
                  className="text-cream/70 hover:text-gold-500 transition-colors duration-200 cursor-pointer text-left flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-1.5 h-[1px] bg-gold-500 transition-all duration-200" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Company Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-base font-semibold tracking-wider text-gold-500 border-b border-gold-500/10 pb-2">
            Programs & Assets
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm text-cream/70">
            <li>
              <button
                id="footer-our-story"
                onClick={() => handleLinkClick("about")}
                className="hover:text-gold-500 transition-colors cursor-pointer"
              >
                Our Botanical Story
              </button>
            </li>
            <li>
              <button
                id="footer-manufacturing"
                onClick={() => handleLinkClick("export")}
                className="hover:text-gold-500 transition-colors cursor-pointer"
              >
                GMP Manufacturing Facility
              </button>
            </li>
            <li>
              <a
                id="footer-distributor-link"
                href="#enquiry-form"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("export");
                }}
                className="hover:text-gold-500 transition-colors cursor-pointer"
              >
                Distributor & Wholesaler Program
              </a>
            </li>
            <li>
              <a
                id="footer-catalogue"
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Parasmani, please share your latest wholesale product catalogue and pricing.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-gold-300 font-medium flex items-center gap-1 group transition-colors"
              >
                Download Product Catalogue
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Reach Us & Newsletter */}
        <div className="flex flex-col gap-5">
          <h4 className="font-serif text-base font-semibold tracking-wider text-gold-500 border-b border-gold-500/10 pb-2">
            Reach Us
          </h4>
          <div className="flex flex-col gap-3 text-sm text-cream/75">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4.5 h-4.5 text-gold-500 flex-shrink-0 mt-1" />
              <p className="leading-snug">{COMPANY_INFO.address}, {COMPANY_INFO.cityStateCountry}</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4.5 h-4.5 text-gold-500" />
              <p>{COMPANY_INFO.phone}</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4.5 h-4.5 text-gold-500" />
              <p className="text-xs">{COMPANY_INFO.hours}</p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-1">
            <a
              id="social-instagram"
              href={COMPANY_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-cream/20 hover:border-gold-500 flex items-center justify-center text-cream/70 hover:text-gold-500 transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="social-facebook"
              href={COMPANY_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-cream/20 hover:border-gold-500 flex items-center justify-center text-cream/70 hover:text-gold-500 transition-colors"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              id="social-linkedin"
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-cream/20 hover:border-gold-500 flex items-center justify-center text-cream/70 hover:text-gold-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="social-youtube"
              href={COMPANY_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-cream/20 hover:border-gold-500 flex items-center justify-center text-cream/70 hover:text-gold-500 transition-colors"
              aria-label="YouTube Channel"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Newsletter Form */}
          <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="mt-2 flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-gold-300 font-medium">
              Join our botanical newsletter
            </label>
            <div className="flex border border-cream/20 focus-within:border-gold-500 rounded-full overflow-hidden bg-forest-900/40">
              <input
                id="newsletter-email-input"
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full bg-transparent px-4 py-2 text-xs text-cream outline-none placeholder:text-cream/40"
              />
              <button
                id="newsletter-submit-button"
                type="submit"
                className="bg-gold-500 hover:bg-gold-300 text-forest-900 px-4 py-2 transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Subscribe"
              >
                {subscribed ? "Subscribed!" : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
            {subscribed && (
              <p className="text-[10px] text-emerald-400 font-medium animate-pulse mt-1">
                Thank you! We have logged your interest.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-gold-500/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
        <div>
          &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Manufactured in Sihor, Gujarat.
        </div>
        <div className="flex gap-6">
          <button
            id="legal-privacy"
            onClick={() => handleLinkClick("home")}
            className="hover:text-gold-500 transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            id="legal-terms"
            onClick={() => handleLinkClick("home")}
            className="hover:text-gold-500 transition-colors cursor-pointer"
          >
            Terms & Conditions
          </button>
        </div>
        <div className="flex items-center gap-1 text-gold-500 font-medium italic">
          <span>Made with Ayurveda</span>
          <span className="text-emerald-500 animate-pulse">🌿</span>
        </div>
      </div>
    </footer>
  );
}

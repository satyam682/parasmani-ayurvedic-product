import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, ShieldCheck, Globe, Star, Sparkles, AlertCircle, ChevronDown, CheckCircle,
  Plus, Minus, ArrowLeftRight, Heart, Award, Beaker, Truck, Check, HelpCircle
} from "lucide-react";
import { COMPANY_INFO, STATISTICS, PRODUCTS, TESTIMONIALS, FAQS, maskPrice } from "../data";
import { Product } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface HomeViewProps {
  setPage: (page: string) => void;
  onOpenProductModal: (product: Product) => void;
  onBuyNow: (product: Product, quantity: number) => void;
  onAddToCart: (product: Product) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
}

export default function HomeView({
  setPage,
  onOpenProductModal,
  onBuyNow,
  onAddToCart,
  wishlist,
  toggleWishlist
}: HomeViewProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeFaqSpot, setActiveFaqSpot] = useState<number | null>(null);

  // Auto scroll trust strip logos marquee
  const brandLogos = [
    { name: "100% Organic certified" },
    { name: "GMP Compliant" },
    { name: "ISO 9001:2015" },
    { name: "Ministry of AYUSH" },
    { name: "WHO Standardized Formulation" },
    { name: "100% Pure Botanical Ingredients" },
  ];

  const choosingFeatures = [
    { icon: <Sparkles className="w-6 h-6 text-gold-500" />, title: "Natural Ingredients", desc: "Pure, ethically sourced raw herbs and organic cold-pressed oil bases." },
    { icon: <Award className="w-6 h-6 text-gold-500" />, title: "GMP Quality", desc: "Manufactured strictly within state-of-the-art licensed cleanrooms." },
    { icon: <ShieldCheck className="w-6 h-6 text-gold-500" />, title: "Trusted Ayurveda", desc: "Authentic scriptures coupled with clinical-grade safety testing." },
    { icon: <CheckCircle className="w-6 h-6 text-gold-500" />, title: "Affordable Luxury", desc: "Exquisite boutique quality offered at honest direct-to-home prices." },
    { icon: <Beaker className="w-6 h-6 text-gold-500" />, title: "Fast Support", desc: "Attentive Ayurvedic counseling and immediate WhatsApp dispatch assistance." },
    { icon: <Globe className="w-6 h-6 text-gold-500" />, title: "Worldwide Export", desc: "Full export documentation, certificates of analysis, and safe global logistics." },
    { icon: <Plus className="w-6 h-6 text-gold-500" />, title: "Traditional Formulations", desc: "Processed utilizing the Vedic Kshir Pak boiling rules." },
    { icon: <Check className="w-6 h-6 text-gold-500" />, title: "Safe & Proven", desc: "Tested formulas free from mineral oils, toxic heavy metals, or chemical steroids." }
  ];

  const spotlightHerbs = [
    { name: "Bhringraj", benefit: "Halts hair loss & rejuvenates hair roots from the core", image: "/bhringraj.png" },
    { name: "Organic Neem", benefit: "Bactericidal power purifies acne and chronic skin rashes", image: "/neem.png" },
    { name: "Ashwagandha", benefit: "Rejuvenating root adaptogen reduces stress and increases stamina", image: "/ashwagandha.png" },
    { name: "Mahanarayan Oil", benefit: "Therapeutic joint lubricant that drives away cellular stiffness", image: "/mahanarayan-oil.png" },
    { name: "Triphala Fruits", benefit: "Gentle colon detoxification & ultimate daily digestant fire", image: "/triphala.png" }
  ];

  const galleryImages = [
    { title: "Parasmani Ayurvedic Malham (Ointment)", url: "/parasmani-ayurvedic-malham.jpg" },
    { title: "Parasmani Vanaspati Tel (Pain Oil)", url: "/parasmani-vanaspati-tel.jpg" },
    { title: "Parasmani V-Kesha Hair Oil", url: "/parasmani-v-kesha-hair-oil.jpg" },
    { title: "Parasmani Neem Soap", url: "/parasmani-neem-soap.jpg" }
  ];

  // State for Animated Statistics
  const [stats, setStats] = useState({ years: 0, products: 0, customers: 0, countries: 0 });

  useEffect(() => {
    // Basic auto counting animation
    const timer = setTimeout(() => {
      setStats({
        years: parseInt(STATISTICS.years) || 18,
        products: parseInt(STATISTICS.products) || 45,
        customers: 250, // 250K
        countries: parseInt(STATISTICS.countries) || 15
      });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans text-ink-900 bg-earth dark:bg-forest-900 dark:text-cream">
      
      {/* SECTION A: HERO */}
      <section
        id="hero-section"
        className="relative min-h-[95vh] flex items-center pt-32 pb-24 md:pb-32 px-6 md:px-8 overflow-hidden paper-grain border-b border-gold-500/10 bg-gradient-to-br from-forest-900/10 via-transparent to-forest-700/5"
      >
        {/* Floating background SVG leaves */}
        <div className="absolute top-1/4 left-10 opacity-15 dark:opacity-10 animate-float-leaf-1 pointer-events-none select-none">
          <svg className="w-16 h-16 text-leaf-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L7.38,18.5C12.78,17.79 14.38,13.79 17,8M12,2C11.5,4 11.5,6 13,8C14.5,10 14,12 11,12C9,12 9,10 7,8C5,6 7,4 9,4C11,4 11.5,2 12,2Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 opacity-15 dark:opacity-10 animate-float-leaf-2 pointer-events-none select-none">
          <svg className="w-20 h-20 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21C2,21 5,14 12,14C19,14 22,21 22,21H2M12,2C11,4 11,6 12.5,8C14,10 13.5,12 10.5,12C8.5,12 8.5,10 6.5,8C4.5,6 6.5,4 8.5,4C10.5,4 11,2 12,2Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-700/10 dark:bg-gold-500/10 border border-gold-500/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
              <span className="text-xs uppercase tracking-widest text-forest-700 dark:text-gold-500 font-bold">
                {COMPANY_INFO.tagline}
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-forest-900 dark:text-cream leading-[1.05]">
              Restore Health <br className="hidden md:inline"/>
              <span className="italic text-gold-500">Naturally</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-ink-600 dark:text-cream/80 max-w-xl leading-relaxed font-light">
              Premium luxury Ayurvedic products crafted from ethically sourced, single-origin herbs in Gujarat, India. Prepared for domestic healing and trusted worldwide by international importers.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-3">
              <button
                id="hero-cta-products"
                onClick={() => setPage("products")}
                className="bg-forest-700 hover:bg-leaf-500 text-cream font-sans font-medium text-sm tracking-wider uppercase py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-center hover:scale-[1.02]"
              >
                Explore Products
              </button>
              <button
                id="hero-cta-contact"
                onClick={() => setPage("contact")}
                className="bg-transparent hover:bg-gold-500/5 text-forest-700 dark:text-cream font-sans font-medium text-sm tracking-wider uppercase py-4 px-8 rounded-full border border-forest-700 dark:border-cream/30 hover:border-gold-500 transition-all duration-300 cursor-pointer text-center"
              >
                Contact Us
              </button>
              <button
                id="hero-cta-export"
                onClick={() => setPage("export")}
                className="text-gold-500 hover:text-gold-300 font-sans font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2 group py-2"
              >
                Export Inquiries
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Glass Trust Chips row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full mt-6">
              {[
                { icon: <ShieldCheck className="w-4 h-4" />, text: "100% Herbal" },
                { icon: <Award className="w-4 h-4" />, text: "GMP Certified" },
                { icon: <Globe className="w-4 h-4" />, text: "Export Quality" },
                { icon: <Sparkles className="w-4 h-4" />, text: "Single-Origin" }
              ].map((chip, idx) => (
                <div
                  key={idx}
                  className="luxury-glass dark:luxury-glass-dark py-2.5 px-4 rounded-xl flex items-center gap-2 text-xs text-forest-900 dark:text-cream font-medium"
                >
                  <span className="text-gold-500">{chip.icon}</span>
                  <span>{chip.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Vector Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="flex flex-col w-full max-w-[420px] rounded-[32px] overflow-hidden border border-gold-500/20 shadow-2xl bg-cream/70 dark:bg-forest-900/40 backdrop-blur-md transition-all duration-300 hover:border-gold-500/35 group">
              {/* Top Product Image */}
              <div className="w-full aspect-[4/4] overflow-hidden bg-white flex items-center justify-center border-b border-gold-500/10 relative">
                <img
                  src={PRODUCTS[0].image}
                  alt={PRODUCTS[0].name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Bottom Card Content */}
              <div className="p-6 text-left bg-cream/30 dark:bg-forest-950/20">
                <p className="text-gold-500 dark:text-gold-300 text-[10px] uppercase tracking-widest font-bold font-sans">Bestseller formulation</p>
                <h3 className="font-serif text-lg md:text-xl font-bold text-forest-900 dark:text-cream mt-1">{PRODUCTS[0].name}</h3>
                <p className="text-ink-600 dark:text-cream/70 text-xs mt-1.5 leading-relaxed font-light">{PRODUCTS[0].shortDescription}</p>
                <button
                  id="hero-bestseller-detail"
                  onClick={() => onOpenProductModal(PRODUCTS[0])}
                  className="text-forest-700 dark:text-gold-500 hover:text-leaf-500 dark:hover:text-gold-300 font-sans text-xs tracking-wider uppercase font-semibold flex items-center gap-1 mt-3.5 group/btn cursor-pointer transition-colors duration-200"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Glowing gold back circle */}
            <div className="absolute -z-10 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" />
          </div>

        </div>

        {/* Scroll Cue indicator */}
        <div className="hidden xl:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-ink-600 dark:text-cream/40 animate-bounce pointer-events-none select-none">
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll down</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* SECTION B: TRUST STRIP */}
      <section
        id="trust-marquee-strip"
        className="bg-beige dark:bg-forest-900 border-y border-gold-500/20 py-4 overflow-hidden relative z-10"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Double content to allow infinite scrolling effect */}
          {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, idx) => (
            <div key={idx} className="inline-flex items-center mx-12 text-forest-900 dark:text-gold-500 font-sans text-xs uppercase tracking-widest font-semibold">
              <Award className="w-4 h-4 mr-2 text-gold-500" />
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION C: BRAND INTRO */}
      <section
        id="brand-intro-section"
        className="py-20 md:py-28 px-6 md:px-8 bg-cream dark:bg-forest-900 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Collage Images */}
          <div className="grid grid-cols-12 gap-4 relative">
            <div className="col-span-8 rounded-3xl overflow-hidden shadow-lg border border-gold-500/10 aspect-[4/3] relative z-10">
              <img
                src="/parasmani-vanaspati-tel.jpg"
                alt="Parasmani Vanaspati Tel"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="col-span-6 col-start-7 -mt-20 rounded-3xl overflow-hidden shadow-xl border border-gold-500/10 aspect-square relative z-20">
              <img
                src="/parasmani-jadibuti-hair-oil.jpg"
                alt="Parasmani Jadibuti Hair Oil"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Elegant luxury framing borders */}
            <div className="absolute inset-4 border border-gold-500/10 rounded-3xl pointer-events-none z-0 translate-x-3 translate-y-3" />
          </div>

          {/* Right Text Block */}
          <div className="flex flex-col items-start gap-6 text-left">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              OUR ROOTS & HERITAGE
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-900 dark:text-cream leading-tight">
              Ancient Ayurveda, <br className="hidden md:inline"/> Perfected for Today
            </h2>
            <p className="font-sans text-base md:text-lg text-ink-600 dark:text-cream/80 leading-relaxed font-light">
              At {COMPANY_INFO.name}, we blend time-honoured Vedic recipes with disciplined, modern GMP manufacturing. Nestled in Bhavnagar district's commercial core (Sihor), every formulation is derived from ethically sourced, certified organic crops and processed under low-temperature protocols to preserve botanical vitality.
            </p>
            <p className="font-sans text-sm text-ink-600 dark:text-cream/70 leading-relaxed">
              We stand against the over-use of temporary steroids, mineral oil carriers, and chemical fillers. Our focus is honest, small-batch, potent preparations designed to deliver sustainable recovery at home and meet strict import standards in European and global markets.
            </p>
            <button
              id="intro-read-story"
              onClick={() => setPage("about")}
              className="text-forest-700 dark:text-gold-500 hover:text-leaf-500 font-sans text-xs tracking-widest uppercase font-bold border-b border-gold-500 pb-1 mt-2 group cursor-pointer transition-all duration-300 hover:border-leaf-500"
            >
              Read our full heritage story →
            </button>
          </div>

        </div>
      </section>

      {/* SECTION D: FEATURED PRODUCTS */}
      <section
        id="bestsellers-section"
        className="py-20 md:py-28 px-6 md:px-8 bg-earth dark:bg-forest-900/60 border-t border-gold-500/10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="text-left flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
                RETAIL & WHOLESALE SELECTIONS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-900 dark:text-cream">
                Our Signature Bestsellers
              </h2>
              <p className="font-sans text-sm md:text-base text-ink-600 dark:text-cream/75 max-w-xl font-light">
                Loved by families across India and trusted by global importers for pure results.
              </p>
            </div>
            <button
              id="bestsellers-view-all"
              onClick={() => setPage("products")}
              className="bg-forest-700 hover:bg-leaf-500 text-cream text-xs uppercase tracking-widest font-sans font-medium py-3.5 px-6 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer inline-flex items-center gap-2 group hover:scale-[1.02]"
            >
              View Entire Catalogue
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Product grid of 3 bestsellers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product) => {
              const isWished = wishlist.includes(product.id);
              return (
                <div
                  key={product.id}
                  id={`featured-card-${product.id}`}
                  className="bg-cream dark:bg-forest-900 rounded-[24px] border border-gold-500/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full relative group"
                >
                  
                  {/* Heart Wishlist toggler */}
                  <button
                    id={`wishlist-toggle-${product.id}`}
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-cream/90 dark:bg-forest-900/90 hover:scale-110 active:scale-95 cursor-pointer shadow-sm text-gold-500 transition-transform"
                    aria-label="Save to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWished ? "fill-gold-500 text-gold-500" : "text-gold-500"}`} />
                  </button>

                  {/* Product Bestseller Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-gold-500 text-forest-900 text-[9px] uppercase tracking-widest font-sans font-extrabold py-1 px-3.5 rounded-full shadow-sm">
                    Bestseller
                  </div>

                  {/* Image wrapper */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-beige">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/10 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Content space */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow text-left gap-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-sans uppercase font-bold tracking-widest text-gold-500">
                        {product.category}
                      </span>
                      <span className="font-serif text-lg font-bold text-gold-500">
                        ₹{maskPrice(product.price)} <span className="text-[10px] text-ink-600 dark:text-cream/60 font-sans font-light">MRP</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl font-bold text-forest-900 dark:text-cream leading-snug group-hover:text-gold-500 transition-colors duration-200">
                      {product.name}
                    </h3>

                    <p className="font-sans text-sm text-ink-600 dark:text-cream/80 leading-relaxed font-light line-clamp-2">
                      {product.shortDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gold-500/10">
                      <button
                        id={`btn-view-${product.id}`}
                        onClick={() => onOpenProductModal(product)}
                        className="bg-transparent hover:bg-gold-500/5 text-forest-700 dark:text-cream font-sans font-medium text-xs tracking-wider uppercase py-3 px-4 rounded-full border border-forest-700/30 dark:border-cream/20 hover:border-gold-500 transition-colors text-center cursor-pointer"
                      >
                        View Details
                      </button>
                      <button
                        id={`btn-buynow-${product.id}`}
                        onClick={() => onBuyNow(product, 1)}
                        className="bg-forest-700 hover:bg-leaf-500 text-cream font-sans font-medium text-xs tracking-wider uppercase py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all text-center cursor-pointer hover:scale-[1.02]"
                      >
                        Buy Now
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION E: WHY CHOOSE US (8 cards) */}
      <section
        id="why-choose-us"
        className="py-20 md:py-28 px-6 md:px-8 bg-cream dark:bg-forest-900 relative"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              STANDARDS OF HERBAL EXCELLENCE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-900 dark:text-cream">
              Why Choose Parasmani
            </h2>
            <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-1 animate-gold-shimmer" />
            <p className="font-sans text-sm md:text-base text-ink-600 dark:text-cream/75 leading-relaxed font-light">
              We stand apart through our absolute dedication to physical quality, transparent chemical profiles, and deep compliance with traditional texts.
            </p>
          </div>

          {/* 8 Features responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {choosingFeatures.map((item, idx) => (
              <div
                key={idx}
                className="luxury-glass dark:luxury-glass-dark p-6 rounded-2xl border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-left flex flex-col gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-700/5 dark:bg-gold-500/5 border border-gold-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-forest-900 dark:text-cream group-hover:text-gold-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-ink-600 dark:text-cream/70 leading-relaxed mt-2 font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION F: ANIMATED STATISTICS */}
      <section
        id="statistics-banner"
        className="py-16 md:py-24 bg-forest-700 text-cream relative overflow-hidden border-y border-gold-500/20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/60 via-transparent to-forest-900/60 opacity-90 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 text-center">
          {[
            { value: stats.years, suffix: "+", label: "Years of Experience" },
            { value: stats.products, suffix: "+", label: "Products Formulated" },
            { value: stats.customers, suffix: "K+", label: "Happy Customers" },
            { value: stats.countries, suffix: "+", label: "Countries Served" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="font-serif text-4xl md:text-6xl font-bold text-gold-500 leading-none">
                {stat.value}{stat.suffix}
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-cream/75 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION G: INGREDIENT SPOTLIGHT */}
      <section
        id="ingredient-spotlight"
        className="py-20 md:py-28 px-6 md:px-8 bg-beige dark:bg-forest-900/40 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="text-left flex flex-col gap-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              BOTANICAL POTENCY & PURITY
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-900 dark:text-cream">
              The Herbs Behind the Healing
            </h2>
            <p className="font-sans text-sm md:text-base text-ink-600 dark:text-cream/75 font-light">
              We believe in utilizing highly active plant organs. No synthesized substitutes — just pure botanical chemistry.
            </p>
          </div>

          {/* Horizontal scrollable ingredient list */}
          <div className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar snap-x">
            {spotlightHerbs.map((herb, idx) => (
              <div
                key={idx}
                className="w-72 md:w-80 flex-shrink-0 snap-start bg-cream dark:bg-forest-900 rounded-[24px] overflow-hidden border border-gold-500/10 shadow-sm hover:shadow-md hover:border-gold-500/20 group transition-all"
              >
                <div className="aspect-square w-full overflow-hidden bg-beige">
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-forest-900 dark:text-cream group-hover:text-gold-500 transition-colors duration-200">
                    {herb.name}
                  </h3>
                  <p className="font-sans text-xs text-ink-600 dark:text-cream/70 leading-relaxed mt-2 font-light">
                    {herb.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs font-mono text-ink-600 dark:text-cream/40 flex items-center gap-2 justify-center mt-2">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Swipe horizontally to explore more botanicals</span>
          </div>

        </div>
      </section>

      {/* SECTION H: EXPORT TEASER */}
      <section
        id="export-teaser-section"
        className="py-20 md:py-28 px-6 md:px-8 bg-forest-900 text-cream relative border-t border-gold-500/10 paper-grain"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left World Map SVG */}
          <div className="relative p-6 bg-cream/5 border border-cream/10 rounded-3xl overflow-hidden flex items-center justify-center min-h-[300px]">
            {/* World Map Background SVG */}
            <svg
              className="w-full h-auto text-cream/10 max-h-[280px]"
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              {/* Simplistic dot map representation */}
              <circle cx="500" cy="210" r="14" className="text-gold-500 animate-ping opacity-75" />
              <circle cx="500" cy="210" r="6" className="text-gold-500" /> {/* Sihor, India Origin Point */}
              
              {/* Dotted routes */}
              <path d="M 500,210 Q 350,150 200,160" stroke="#BFA05A" strokeWidth="2" strokeDasharray="5,5" fill="none" className="opacity-60" />
              <path d="M 500,210 Q 420,180 340,240" stroke="#BFA05A" strokeWidth="2" strokeDasharray="5,5" fill="none" className="opacity-60" />
              <path d="M 500,210 Q 620,180 750,150" stroke="#BFA05A" strokeWidth="2" strokeDasharray="5,5" fill="none" className="opacity-60" />
              <path d="M 500,210 Q 600,250 680,280" stroke="#BFA05A" strokeWidth="2" strokeDasharray="5,5" fill="none" className="opacity-60" />

              {/* USA target */}
              <circle cx="200" cy="160" r="4" className="text-gold-300 animate-pulse" />
              {/* UK target */}
              <circle cx="420" cy="130" r="4" className="text-gold-300 animate-pulse" />
              {/* UAE target */}
              <circle cx="430" cy="220" r="4" className="text-gold-300 animate-pulse" />
              {/* Singapore target */}
              <circle cx="680" cy="280" r="4" className="text-gold-300 animate-pulse" />

              <text x="510" y="235" fill="#FAF7F0" fontSize="12" fontFamily="sans-serif" letterSpacing="2" fontWeight="bold">SIHOR, GUJARAT (ORIGIN)</text>
              <text x="140" y="145" fill="#FAF7F0" fontSize="10" fontFamily="sans-serif">Americas</text>
              <text x="390" y="115" fill="#FAF7F0" fontSize="10" fontFamily="sans-serif">UK / Europe</text>
              <text x="690" y="295" fill="#FAF7F0" fontSize="10" fontFamily="sans-serif">Southeast Asia</text>
            </svg>

            <div className="absolute top-4 left-4 bg-forest-700 text-[10px] tracking-widest font-sans uppercase font-bold py-1.5 px-4 rounded-full border border-gold-500/20">
              International Trade Logistics
            </div>
          </div>

          {/* Right Text Column */}
          <div className="flex flex-col items-start gap-6 text-left">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              GLOBAL EXPORT & SUPPLY CHAIN
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream leading-tight">
              From Our Facility <br className="hidden md:inline"/> to the World
            </h2>
            <p className="font-sans text-sm md:text-base text-cream/70 leading-relaxed font-light">
              We offer extensive support for wholesale bulk buyers, importers, and retail distributors worldwide. With certified quality reports (COA), customized packaging designs, and strict regulatory documentation, we supply raw materials and finished products seamlessly across international ports.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 text-xs py-1.5 px-4 bg-cream/5 border border-cream/10 rounded-full">
                <Truck className="w-4 h-4 text-gold-500" />
                <span>Customs & Port Logistics Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs py-1.5 px-4 bg-cream/5 border border-cream/10 rounded-full">
                <Beaker className="w-4 h-4 text-gold-500" />
                <span>Private Label & OEM Formulation</span>
              </div>
            </div>

            <button
              id="teaser-goto-export"
              onClick={() => setPage("export")}
              className="bg-gold-500 hover:bg-gold-300 text-forest-900 font-sans font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded-full shadow-lg transition-all cursor-pointer hover:scale-[1.02] mt-3"
            >
              Explore Export Services
            </button>
          </div>

        </div>
      </section>

      {/* SECTION I: TESTIMONIALS */}
      <section
        id="testimonials-section"
        className="py-20 md:py-28 px-6 md:px-8 bg-cream dark:bg-forest-900 relative"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              REVIEWS & SUCCESS STORIES
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-900 dark:text-cream">
              Trusted by Thousands
            </h2>
            <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-1 animate-gold-shimmer" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((review, idx) => (
              <div
                key={idx}
                className="bg-earth dark:bg-forest-900/30 p-8 rounded-3xl border border-gold-500/10 hover:border-gold-500/20 shadow-sm relative text-left flex flex-col justify-between group"
              >
                <div className="flex items-center gap-1 text-gold-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="font-sans text-sm md:text-base text-ink-600 dark:text-cream/80 leading-relaxed font-light italic flex-grow">
                  "{review.quote}"
                </p>

                <div className="mt-6 pt-5 border-t border-gold-500/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-forest-900 dark:text-cream">
                      {review.name}
                    </h4>
                    <p className="text-[11px] uppercase tracking-widest text-gold-500 font-semibold font-sans mt-0.5">
                      {review.place}
                    </p>
                  </div>
                  <span className="font-serif text-4xl text-gold-500/10 font-bold group-hover:text-gold-500/25 transition-colors pointer-events-none">”</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION J: MANUFACTURING GALLERY */}
      <section
        id="manufacturing-gallery"
        className="py-20 md:py-28 px-6 md:px-8 bg-earth dark:bg-forest-900/40 border-t border-gold-500/10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="text-left flex flex-col gap-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              INSIDE OUR GMP cleanroom
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-900 dark:text-cream">
              Crafted with Care & Control
            </h2>
            <p className="font-sans text-sm md:text-base text-ink-600 dark:text-cream/75 font-light">
              We process each raw material with profound respect. See glimpses of our cleanrooms, boiling steps, and packaging lines in Gujarat.
            </p>
          </div>

          {/* Masonry-like image grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-sm border border-gold-500/10 aspect-square group cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-left" />
                <div className="absolute inset-x-4 bottom-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                  <p className="font-serif text-sm font-semibold text-cream leading-tight">
                    {img.title}
                  </p>
                  <p className="text-[10px] tracking-widest uppercase text-gold-300 mt-1">Sihor Unit 2</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION K: FAQ */}
      <section
        id="faq-home-section"
        className="py-20 md:py-28 px-6 md:px-8 bg-cream dark:bg-forest-900 border-t border-gold-500/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column heading */}
          <div className="lg:col-span-5 text-left flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              CLEARING ALL DOUBTS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-900 dark:text-cream leading-tight">
              Ayurvedic Questions, <br /> Answered
            </h2>
            <p className="font-sans text-sm md:text-base text-ink-600 dark:text-cream/70 leading-relaxed font-light mt-2">
              We stand for transparent operations. If you need special batch parameters, chemical certifications, or have personal health queries, consult our team directly.
            </p>
            <div className="p-5 bg-beige/30 dark:bg-forest-900/40 rounded-2xl border border-gold-500/10 flex items-start gap-3 mt-4">
              <HelpCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-bold text-forest-900 dark:text-cream">Need immediate counsel?</h4>
                <p className="font-sans text-xs text-ink-600 dark:text-cream/70 mt-1 leading-relaxed">
                  Our resident Ayurvedic doctors can suggest products over a quick WhatsApp chat.
                </p>
                <button
                  id="faq-whatsapp-btn"
                  onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp}`, "_blank")}
                  className="text-forest-700 dark:text-gold-500 hover:text-leaf-500 font-sans text-[10px] tracking-widest uppercase font-bold mt-2 flex items-center gap-1 group cursor-pointer"
                >
                  Consult Now <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column accordions */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-earth dark:bg-forest-900/20 rounded-2xl border border-gold-500/10 hover:border-gold-500/20 overflow-hidden transition-all duration-300"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer text-forest-900 dark:text-cream hover:text-gold-500 transition-colors gap-4"
                  >
                    <span className="font-serif text-base md:text-lg font-bold">
                      {faq.question}
                    </span>
                    <span className="text-gold-500 flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-sm text-ink-600 dark:text-cream/80 font-sans leading-relaxed border-t border-gold-500/5 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION L: NEWSLETTER / FINAL CTA */}
      <section
        id="home-final-cta"
        className="py-16 md:py-24 px-6 md:px-8 bg-earth dark:bg-forest-900/60"
      >
        <div className="max-w-4xl mx-auto rounded-[32px] overflow-hidden bg-forest-700 text-cream border border-gold-500/20 shadow-xl relative z-10 paper-grain">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-900/40 via-transparent to-transparent pointer-events-none" />
          
          <div className="p-8 md:p-14 text-center flex flex-col items-center gap-6 relative z-10">
            <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center border border-gold-500/30">
              <Sparkles className="w-5 h-5 text-gold-500 animate-pulse" />
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-cream">
              Begin Your Natural Wellness Journey
            </h2>

            <p className="font-sans text-sm md:text-base text-cream/80 max-w-lg leading-relaxed font-light">
              Connect with our Ayurvedic professionals in Gujarat. Get custom retail wellness recommendations or wholesale bulk pricing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-4">
              <button
                id="final-cta-shop"
                onClick={() => setPage("products")}
                className="w-full sm:w-auto bg-cream text-forest-700 hover:bg-gold-500 hover:text-cream font-sans font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded-full shadow-md hover:scale-[1.02] transition-all cursor-pointer text-center"
              >
                Shop Our Formulations
              </button>
              <button
                id="final-cta-whatsapp"
                onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello! I am looking for a personal consultation regarding Parasmani products.")}`, "_blank")}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-cream font-sans font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded-full shadow-md hover:scale-[1.02] transition-all cursor-pointer text-center flex items-center justify-center gap-2"
              >
                Message on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

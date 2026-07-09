import { useState, FormEvent } from "react";
import {
  Globe, Shield, FileText, Anchor, Settings, Package, Award, Users,
  Mail, Phone, Send, Check, CheckCircle, HelpCircle, ArrowRight
} from "lucide-react";
import { COMPANY_INFO, STATISTICS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function ExportView() {
  
  // Form states
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [productInterest, setProductInterest] = useState("Skin Ointment");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const capabilities = [
    { icon: <Settings className="w-6 h-6 text-gold-500" />, title: "OEM Manufacturing", desc: "Formulate custom Ayurvedic recipes utilizing our licensed cleanrooms and boiling units." },
    { icon: <Package className="w-6 h-6 text-gold-500" />, title: "Private Label Solutions", desc: "Complete ready-to-sell branding under your custom label with personalized design elements." },
    { icon: <Award className="w-6 h-6 text-gold-500" />, title: "Bulk Wholesale Supply", desc: "Purchase raw materials, cold-pressed oils, or packaged products at tiered B2B wholesale discounts." },
    { icon: <Anchor className="w-6 h-6 text-gold-500" />, title: "Worldwide Port Shipping", desc: "Reliable global logistics via Bhavnagar, Mundra, or Pipavav sea ports directly to your dock." },
    { icon: <CheckCircle className="w-6 h-6 text-gold-500" />, title: "Custom Outer Packaging", desc: "Select and print bespoke labels, light-filtering amber bottles, or protective export tubes." },
    { icon: <Shield className="w-6 h-6 text-gold-500" />, title: "Advanced Quality Assurance", desc: "Batch laboratory reports, microbiological profiles, and safety validations provided with every batch." },
    { icon: <Users className="w-6 h-6 text-gold-500" />, title: "Exclusive Distributorships", desc: "Establish country-specific or territory-exclusive partnerships with marketing support." },
    { icon: <FileText className="w-6 h-6 text-gold-500" />, title: "Export Documentation", desc: "Full paperwork assistance: Certificate of Free Sale, Certificate of Origin, and safety sheets (MSDS)." }
  ];

  const timelineSteps = [
    { num: "01", name: "Inquiry & Review", desc: "Discuss formulation choices, private packaging properties, or targeted bulk requirements." },
    { num: "02", name: "Sample Testing", desc: "We prepare and air-dispatch direct samples of our oils, creams, or powders to your laboratory." },
    { num: "03", name: "Price Agreement", desc: "Formulate custom proforma invoices detailing tiered FOB, CIF, or Ex-Works quotation structures." },
    { num: "04", name: "Cleanroom Batching", desc: "Production begins inside our clean Sihor manufacturing cleanroom adhering to strict GMP guidelines." },
    { num: "05", name: "Phytochemical QA", desc: "Every batch undergoes rigorous quality validation and microbiological screenings." },
    { num: "06", name: "Sea Cargo Shipping", desc: "Your completed cargo is safely sealed and cleared through Indian custom checkpoints to global ports." }
  ];

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !country || !quantity) return;

    // Compile WhatsApp message
    let whatsappText = `Hello Parasmani Ayurvedic Export Division,\n\n`;
    whatsappText += `I would like to request an Export Quote with the following commercial details:\n\n`;
    whatsappText += `Name: ${name}\n`;
    whatsappText += `Company: ${company}\n`;
    whatsappText += `Country: ${country}\n`;
    whatsappText += `Email: ${email}\n`;
    whatsappText += `Phone/WhatsApp: ${phone}\n`;
    whatsappText += `Product Interest: ${productInterest}\n`;
    whatsappText += `Target Quantity: ${quantity}\n`;
    whatsappText += `Details: ${message}\n\n`;
    whatsappText += `Please share standard terms and conditions. Thank you!`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedText}`;

    // Mark as submitted
    setFormSubmitted(true);
    
    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <div className="font-sans text-ink-900 bg-earth dark:bg-forest-900 dark:text-cream min-h-screen">
      
      {/* SECTION A: HERO */}
      <section
        id="export-hero"
        className="relative pt-36 pb-16 px-6 md:px-8 bg-forest-900 text-cream text-center border-b border-gold-500/20 paper-grain"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 relative z-10">
          <div className="text-[10px] font-sans tracking-widest uppercase text-gold-500 font-bold bg-cream/5 border border-gold-500/15 py-1 px-4 rounded-full">
            Home › Export Services
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-cream mt-2 leading-tight">
            Ayurveda, Manufactured <br />
            <span className="italic text-gold-500">For the World</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-cream/70 max-w-xl mt-2 leading-relaxed font-light">
            Providing high-potency, import-ready formulations, private label manufacturing, and streamlined container cargo logistics.
          </p>
          <a
            id="hero-export-cta"
            href="#export-quote-form"
            className="mt-4 bg-gold-500 hover:bg-gold-300 text-forest-900 font-sans font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-102 cursor-pointer"
          >
            Request Export Quote
          </a>
        </div>
      </section>

      {/* SECTION B: CAPABILITIES GRID */}
      <section id="export-capabilities" className="py-20 md:py-28 px-6 md:px-8 bg-cream dark:bg-forest-900">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              GLOBAL TRADE B2B CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-900 dark:text-cream">
              Contract Manufacturing & Bulk Supply
            </h2>
            <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-1 animate-gold-shimmer" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="luxury-glass dark:luxury-glass-dark p-6 rounded-2xl border border-gold-500/10 hover:border-gold-500/30 hover:shadow-md transition-all text-left flex flex-col gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-700/5 dark:bg-gold-500/5 border border-gold-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-forest-900 dark:text-cream group-hover:text-gold-500 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="font-sans text-xs text-ink-600 dark:text-cream/70 leading-relaxed mt-2 font-light">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION C: WORLD MAP REACH */}
      <section
        id="export-world-reach"
        className="py-16 md:py-24 bg-forest-900 text-cream relative border-y border-gold-500/20 paper-grain overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="w-full lg:w-5/12 text-left flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              GLOBAL PORT REACH
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-cream">
              Export-Ready Formulations
            </h2>
            <p className="font-sans text-sm text-cream/70 leading-relaxed font-light">
              Our products are compiled following advanced international regulations. We routinely dispatch container orders to European countries, central Middle-East hubs, and critical Asian ports.
            </p>
            <div className="flex flex-col gap-3 mt-2 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-500" />
                <span>Mudra, Pipavav & Nhava Sheva Sea-Port Logistics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-500" />
                <span>Certificate of Analysis & Heavy Metal Reports</span>
              </div>
            </div>
          </div>

          {/* Right Map Image */}
          <div className="w-full lg:w-7/12 p-6 bg-cream/5 border border-cream/10 rounded-2xl flex items-center justify-center min-h-[300px]">
            <svg
              className="w-full h-auto text-cream/15 max-h-[340px]"
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              {/* High-quality transparent world map outline base served locally */}
              <image
                href="/world-map.svg"
                x="0"
                y="0"
                width="1000"
                height="500"
                className="opacity-[0.15] dark:opacity-[0.10] pointer-events-none mix-blend-lighten"
              />

              {/* Source: Gujarat India */}
              <circle cx="701" cy="186" r="16" className="text-gold-500 animate-ping opacity-60" />
              <circle cx="701" cy="186" r="6" className="text-gold-500" />

              {/* Connecting Curves */}
              <path d="M 701,186 Q 497,60 294,137" stroke="#BFA05A" strokeWidth="2" strokeDasharray="5,5" fill="none" className="opacity-70 animate-pulse" />
              <path d="M 701,186 Q 612,80 524,111" stroke="#BFA05A" strokeWidth="2" strokeDasharray="5,5" fill="none" className="opacity-70 animate-pulse" />
              <path d="M 701,186 Q 769,130 837,163" stroke="#BFA05A" strokeWidth="2" strokeDasharray="5,5" fill="none" className="opacity-70 animate-pulse" />
              <path d="M 701,186 Q 801,270 902,355" stroke="#BFA05A" strokeWidth="2" strokeDasharray="5,5" fill="none" className="opacity-70 animate-pulse" />

              {/* Destination Dots */}
              <circle cx="294" cy="137" r="4" className="text-gold-500" />
              <circle cx="524" cy="111" r="4" className="text-gold-500" />
              <circle cx="837" cy="163" r="4" className="text-gold-500" />
              <circle cx="902" cy="355" r="4" className="text-gold-500" />

              {/* Map Labels */}
              <text x="716" y="211" fill="#FAF7F0" fontSize="11" fontFamily="sans-serif" letterSpacing="1" fontWeight="bold" className="shadow-sm">GUJARAT, INDIA</text>
              <text x="214" y="152" fill="#FAF7F0" fontSize="10" fontFamily="sans-serif" opacity="0.9">North America</text>
              <text x="484" y="96" fill="#FAF7F0" fontSize="10" fontFamily="sans-serif" opacity="0.9">UK / Germany</text>
              <text x="852" y="178" fill="#FAF7F0" fontSize="10" fontFamily="sans-serif" opacity="0.9">East Asia</text>
              <text x="882" y="380" fill="#FAF7F0" fontSize="10" fontFamily="sans-serif" opacity="0.9">Australia</text>
            </svg>
          </div>

        </div>
      </section>

      {/* SECTION D: PROCESS TIMELINE */}
      <section id="export-timeline" className="py-20 md:py-28 px-6 md:px-8 bg-beige dark:bg-forest-900/40">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              STEP-BY-STEP OPERATIONAL FLOW
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-900 dark:text-cream">
              How We Execute Trade
            </h2>
            <p className="font-sans text-sm text-ink-600 dark:text-cream/75 leading-relaxed font-light mt-1">
              A highly predictable, documented protocol ensuring perfect regulatory clearance.
            </p>
          </div>

          {/* Horizontal scroll timeline cards */}
          <div className="flex gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar snap-x">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="w-72 md:w-80 flex-shrink-0 snap-start bg-cream dark:bg-forest-900 p-6 rounded-2xl border border-gold-500/10 shadow-sm flex flex-col gap-4 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-gold-500">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-forest-700/5 dark:bg-gold-500/5 flex items-center justify-center text-gold-500">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-forest-900 dark:text-cream">
                    {step.name}
                  </h4>
                  <p className="font-sans text-xs text-ink-600 dark:text-cream/70 leading-relaxed mt-2 font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION G: EXPORT ENQUIRY FORM */}
      <section
        id="export-quote-form"
        className="py-20 md:py-28 px-6 md:px-8 bg-cream dark:bg-forest-900 border-t border-gold-500/10"
      >
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-14 bg-earth dark:bg-forest-900/30 border border-gold-500/15 shadow-xl relative">
          
          <div className="text-center flex flex-col gap-3 max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              GLOBAL TRADE BULK INQUIRY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-900 dark:text-cream leading-tight">
              Request Commercial Quote
            </h2>
            <p className="font-sans text-xs md:text-sm text-ink-600 dark:text-cream/70 font-light leading-relaxed">
              Fill out your company credentials below. Our export division will respond via email and WhatsApp with standard tiered pricing within 1 business day.
            </p>
          </div>

          <form id="commercial-export-form" onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Your Name *</label>
              <input
                id="export-name-input"
                type="text"
                placeholder="e.g. Sarah Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl px-4 py-3 text-xs md:text-sm text-ink-900 dark:text-cream outline-none"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Company Name</label>
              <input
                id="export-company-input"
                type="text"
                placeholder="e.g. Jenkins Herbal Distributors Ltd"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl px-4 py-3 text-xs md:text-sm text-ink-900 dark:text-cream outline-none"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Target Country *</label>
              <input
                id="export-country-input"
                type="text"
                placeholder="e.g. United Kingdom"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl px-4 py-3 text-xs md:text-sm text-ink-900 dark:text-cream outline-none"
              />
            </div>

            {/* Product Interest */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Product of Interest *</label>
              <select
                id="export-product-select"
                value={productInterest}
                onChange={(e) => setProductInterest(e.target.value)}
                required
                className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl px-4 py-3 text-xs md:text-sm text-ink-900 dark:text-cream outline-none cursor-pointer"
              >
                <option value="Skin Ointment">Skin Ointment (Retail / Bulk)</option>
                <option value="Premium Hair Oil">Premium Hair Oil</option>
                <option value="Orthopedic Pain Oil">Orthopedic Pain Oil</option>
                <option value="Neem & Tulsi Mask">Neem & Tulsi Face Pack</option>
                <option value="Ashwagandha Powder">Pure Ashwagandha Powder</option>
                <option value="Triphala Powder">Triphala Colon Detox</option>
                <option value="Custom OEM Contract">Custom OEM Formulation</option>
              </select>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Corporate Email *</label>
              <input
                id="export-email-input"
                type="email"
                placeholder="e.g. sarah@jenkinsherbals.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl px-4 py-3 text-xs md:text-sm text-ink-900 dark:text-cream outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Phone / WhatsApp Number *</label>
              <input
                id="export-phone-input"
                type="tel"
                placeholder="e.g. +44 7700 900077"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl px-4 py-3 text-xs md:text-sm text-ink-900 dark:text-cream outline-none"
              />
            </div>

            {/* Target Quantity */}
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Target Quantity (e.g. Bottles / kg) *</label>
              <input
                id="export-qty-input"
                type="text"
                placeholder="e.g. 5,000 retail jars / 500 liters bulk oil"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl px-4 py-3 text-xs md:text-sm text-ink-900 dark:text-cream outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Specific Requirements or Message</label>
              <textarea
                id="export-msg-textarea"
                rows={4}
                placeholder="Mention desired custom packaging sizes, unique herbal additions, port destinations, or certification needs."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl p-4 text-xs md:text-sm text-ink-900 dark:text-cream outline-none resize-none"
              />
            </div>

            <div className="md:col-span-2 mt-4 flex flex-col items-center">
              <button
                id="export-submit-quote"
                type="submit"
                className="w-full sm:w-auto bg-forest-700 hover:bg-leaf-500 text-cream font-sans font-semibold text-xs tracking-widest uppercase py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Submit and Compile WhatsApp Quote
              </button>
              
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-emerald-500 font-sans text-xs font-semibold flex items-center gap-1.5 mt-3 animate-pulse"
                  >
                    <Check className="w-4 h-4" />
                    <span>Inquiry processed! Opening WhatsApp to coordinate details...</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </form>
        </div>
      </section>

    </div>
  );
}

import { useState, FormEvent } from "react";
import {
  MapPin, Phone, Mail, Clock, Send, Check, MessageSquare,
  PhoneCall, Sparkles
} from "lucide-react";
import { COMPANY_INFO } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function ContactView() {
  
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Retail Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) return;

    // Compile WhatsApp text
    let text = `Hello Parasmani Support Team,\n\n`;
    text += `I am reaching out via your Contact Form:\n\n`;
    text += `Name: ${name}\n`;
    text += `Email: ${email}\n`;
    text += `Phone: ${phone}\n`;
    text += `Subject: ${subject}\n`;
    text += `Message:\n${message}\n\n`;
    text += `Please get back to me. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedText}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  return (
    <div className="font-sans text-ink-900 bg-earth dark:bg-forest-900 dark:text-cream min-h-screen">
      
      {/* SECTION A: HERO */}
      <section
        id="contact-hero"
        className="relative pt-36 pb-16 px-6 md:px-8 bg-forest-900 text-cream text-center border-b border-gold-500/20 paper-grain"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 relative z-10">
          <div className="text-[10px] font-sans tracking-widest uppercase text-gold-500 font-bold bg-cream/5 border border-gold-500/15 py-1 px-4 rounded-full">
            Home › Contact
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-cream mt-2 leading-tight">
            Let's Talk <br />
            <span className="italic text-gold-500">Ayurveda</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-cream/70 max-w-xl mt-2 leading-relaxed font-light">
            Have a personal wellness query or need wholesale distribution pricing? Reach our team in Gujarat directly.
          </p>
        </div>
      </section>

      {/* SECTION B: CONTACT SPLIT */}
      <section id="contact-split-section" className="py-20 md:py-28 px-6 md:px-8 bg-cream dark:bg-forest-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column - Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
                COMMUNICATION CHANNELS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-900 dark:text-cream">
                Get in Touch Directly
              </h2>
              <p className="font-sans text-sm text-ink-600 dark:text-cream/70 leading-relaxed font-light">
                Whether you prefer email, direct phone calls, or a quick chat on WhatsApp, we are fully accessible to solve your queries.
              </p>
            </div>

            {/* Direct contact entries */}
            <div className="flex flex-col gap-5">
              
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-earth dark:bg-forest-900/40 border border-gold-500/5 hover:border-gold-500/15 transition-colors">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-bold text-forest-900 dark:text-cream">Our Facility Address</h4>
                  <p className="font-sans text-xs md:text-sm text-ink-600 dark:text-cream/80 mt-1 leading-relaxed font-light">
                    {COMPANY_INFO.address}, <br /> {COMPANY_INFO.cityStateCountry}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 rounded-2xl bg-earth dark:bg-forest-900/40 border border-gold-500/5 hover:border-gold-500/15 transition-colors">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-bold text-forest-900 dark:text-cream">Telephone Support</h4>
                  <p className="font-sans text-xs md:text-sm text-ink-600 dark:text-cream/80 mt-1 font-light">
                    {COMPANY_INFO.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 rounded-2xl bg-earth dark:bg-forest-900/40 border border-gold-500/5 hover:border-gold-500/15 transition-colors">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-bold text-forest-900 dark:text-cream">Email Correspondence</h4>
                  <p className="font-sans text-xs md:text-sm text-ink-600 dark:text-cream/80 mt-1 font-light">
                    {COMPANY_INFO.email}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 rounded-2xl bg-earth dark:bg-forest-900/40 border border-gold-500/5 hover:border-gold-500/15 transition-colors">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-bold text-forest-900 dark:text-cream">Office Operational Hours</h4>
                  <p className="font-sans text-xs md:text-sm text-ink-600 dark:text-cream/80 mt-1 font-light">
                    {COMPANY_INFO.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick action buttons row */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                id="contact-action-call"
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 text-xs py-2.5 px-4 rounded-full bg-forest-700/5 hover:bg-forest-700/10 dark:bg-cream/5 dark:hover:bg-cream/10 text-forest-700 dark:text-cream border border-forest-700/10 dark:border-cream/10 font-sans uppercase font-semibold tracking-wider transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Call Now
              </a>
              <a
                id="contact-action-email"
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 text-xs py-2.5 px-4 rounded-full bg-forest-700/5 hover:bg-forest-700/10 dark:bg-cream/5 dark:hover:bg-cream/10 text-forest-700 dark:text-cream border border-forest-700/10 dark:border-cream/10 font-sans uppercase font-semibold tracking-wider transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Email Support
              </a>
              <a
                id="contact-action-whatsapp"
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-cream font-sans uppercase font-semibold tracking-wider transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Us
              </a>
            </div>

          </div>

          {/* Right Column - Enquiry Form */}
          <div className="lg:col-span-7 rounded-3xl p-6 md:p-10 bg-earth dark:bg-forest-900/30 border border-gold-500/15 shadow-lg text-left relative">
            <h3 className="font-serif text-2xl font-bold text-forest-900 dark:text-cream mb-6">
              Send an Enquiry
            </h3>

            <form id="contact-support-form" onSubmit={handleContactSubmit} className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Your Name *</label>
                  <input
                    id="contact-name-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl px-4 py-3 text-xs md:text-sm text-ink-900 dark:text-cream outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Email Address *</label>
                  <input
                    id="contact-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl px-4 py-3 text-xs md:text-sm text-ink-900 dark:text-cream outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Phone Number *</label>
                  <input
                    id="contact-phone-input"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl px-4 py-3 text-xs md:text-sm text-ink-900 dark:text-cream outline-none"
                  />
                </div>

                {/* Subject dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Inquiry Subject *</label>
                  <select
                    id="contact-subject-select"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl px-4 py-3 text-xs md:text-sm text-ink-900 dark:text-cream outline-none cursor-pointer"
                  >
                    <option value="Retail Inquiry">Retail Inquiry (Personal Healing)</option>
                    <option value="Wholesale Distributorship">Wholesale Distributorship</option>
                    <option value="OEM / Contract Manufacturing">OEM / Contract Manufacturing</option>
                    <option value="Other Inquiries">Other / General Support</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-ink-900 dark:text-cream/80 font-bold">Your Message *</label>
                <textarea
                  id="contact-message-textarea"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-cream dark:bg-forest-950/60 border border-gold-500/20 focus:border-gold-500 rounded-xl p-4 text-xs md:text-sm text-ink-900 dark:text-cream outline-none resize-none"
                />
              </div>

              <div className="mt-2 flex flex-col items-center">
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full bg-forest-700 hover:bg-leaf-500 text-cream font-sans font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded-full shadow-md hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry via WhatsApp
                </button>
                
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-emerald-500 font-sans text-xs font-semibold flex items-center gap-1.5 mt-3 animate-pulse"
                    >
                      <Check className="w-4 h-4" />
                      <span>Form compiled! Redirecting to WhatsApp...</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* SECTION D: WHATSAPP CTA BAND */}
      <section id="contact-whatsapp-cta-bar" className="py-12 bg-forest-700 text-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/20 via-transparent to-forest-900/20 opacity-80 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-serif text-xl font-bold">Fastest Response Guaranteed</h4>
            <p className="font-sans text-xs text-cream/75 mt-1">Our dedicated customer desk is actively resolving inquiries over WhatsApp.</p>
          </div>
          <button
            id="bar-whatsapp-chat-trigger"
            onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello! I have visited your website and would like to chat with support.")}`, "_blank")}
            className="bg-emerald-600 hover:bg-emerald-500 text-cream font-sans font-semibold text-xs tracking-widest uppercase py-3.5 px-7 rounded-full shadow-md hover:scale-102 transition-transform cursor-pointer flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 animate-pulse" />
            Message Support desk
          </button>
        </div>
      </section>

    </div>
  );
}

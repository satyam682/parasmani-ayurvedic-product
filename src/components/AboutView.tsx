import { Award, Compass, Heart, Shield, Sparkles, Sprout, ArrowRight, Eye, CheckCircle } from "lucide-react";
import { COMPANY_INFO, STATISTICS } from "../data";
import { motion } from "motion/react";

interface AboutViewProps {
  setPage: (page: string) => void;
}

export default function AboutView({ setPage }: AboutViewProps) {
  
  const values = [
    { icon: <Sprout className="w-6 h-6 text-gold-500" />, title: "Absolute Purity", desc: "We utilize organic herbs processed in their native state without adding petrochemical stabilizers or aggressive chemical emulsifiers." },
    { icon: <Shield className="w-6 h-6 text-gold-500" />, title: "Rigorous Honesty", desc: "No false medical panaceas or hidden synthetic ingredients. We list 100% of our formulation actives openly on the packaging label." },
    { icon: <Award className="w-6 h-6 text-gold-500" />, title: "Unyielding Quality", desc: "Every single oil, pack, or ointment batch undergoes microbiological assessment before it leaves our Bhavnagar district facility." },
    { icon: <Heart className="w-6 h-6 text-gold-500" />, title: "Profound Care", desc: "Our small-batch processes honor traditional Ayurvedic scriptures to ensure each formula retains its organic, active life-force." },
    { icon: <CheckCircle className="w-6 h-6 text-gold-500" />, title: "GMP Certified", desc: "Our manufacturing facility operates under strict Good Manufacturing Practices, ensuring top-tier hygienic standards, safety, and consistent quality." },
    { icon: <Compass className="w-6 h-6 text-gold-500" />, title: "Export Quality", desc: "Formulated and packed to meet international standards, serving global clients with premium, export-grade Ayurvedic formulations." }
  ];

  const timelineSteps = [
    { step: "01", title: "Single-Origin Sourcing", desc: "Ethical botanical sourcing from dry organic farms of Gujarat and reliable raw herbal forest gatherers." },
    { step: "02", title: "Vedic Kshir Pak Process", desc: "Herbal simmerings inside solid copper or stainless vessels for up to 16 hours to lock in water-soluble and oil-soluble plant phytonutrients." },
    { step: "03", title: "Advanced Batch Filtration", desc: "Traditional gravity straining joined with high-fidelity cold centrifuges to remove particles while preserving raw biological value." },
    { step: "04", title: "Phytochemical Validation", desc: "Microbiological checks, viscosity ratings, and chemical screenings to ensure no toxic heavy metals are present." },
    { step: "05", title: "Hermetic Cleanroom Packaging", desc: "Sealing formulations in light-filtering amber glass jars and bottles to prevent oxidation and ensure maximum shelf life." }
  ];

  return (
    <div className="font-sans text-ink-900 bg-earth dark:bg-forest-900 dark:text-cream">
      
      {/* SECTION A: HERO */}
      <section
        id="about-hero-section"
        className="relative pt-36 pb-16 px-6 md:px-8 bg-forest-900 text-cream paper-grain text-center border-b border-gold-500/20"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 relative z-10">
          <div className="text-[10px] font-sans tracking-widest uppercase text-gold-500 font-bold bg-cream/5 border border-gold-500/15 py-1 px-4 rounded-full">
            Home › About Us
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-cream mt-2 leading-tight">
            Rooted in Tradition, <br />
            <span className="italic text-gold-500">Built for the World</span>
          </h1>

          <p className="font-sans text-base md:text-lg text-cream/70 max-w-2xl mt-2 leading-relaxed font-light">
            How Shree Sahajanand Herbals blends the 5,000-year-old healing sciences of ancient India with modern GMP production in Sihor, Gujarat.
          </p>
        </div>
      </section>

      {/* SECTION B: COMPANY INTRODUCTION */}
      <section
        id="about-intro-section"
        className="py-20 md:py-28 px-6 md:px-8 bg-cream dark:bg-forest-900"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left image collage */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-gold-500/20 shadow-xl aspect-[3/4] relative z-10">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600"
                alt="Aesthetic organic herbs in copper plates"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Elegant luxury framing */}
            <div className="absolute -inset-4 border border-gold-500/10 rounded-3xl pointer-events-none translate-x-1 translate-y-1 z-0" />
          </div>

          {/* Right explanation text */}
          <div className="lg:col-span-7 text-left flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              ABOUT SHREE SAHAJANAND HERBALS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-900 dark:text-cream leading-tight">
              Honest Manufacturing from the Heartland of Gujarat
            </h2>
            
            <p className="font-sans text-base text-ink-600 dark:text-cream/80 leading-relaxed font-light">
              Founded with a mission to purify the marketplace of heavily diluted, chemical-slurry skincare and remedies, {COMPANY_INFO.name} has grown to become a benchmark of manufacturing precision in Bhavnagar, Gujarat. 
            </p>

            <p className="font-sans text-sm text-ink-600 dark:text-cream/70 leading-relaxed">
              Under the guiding banner of Shree Sahajanand Herbals, our Sihor GIDC facility manufactures top-tier skin ointments, cold-pressed oils, orthopedic rubs, and organic supplement powders. By combining our specialized knowledge with sophisticated batch-mixing cleanrooms, we cater to retail households across the Indian states and supply bulk cargo container shipments to international trade partners with unmatched efficiency.
            </p>

            <div className="p-5 border-l-2 border-gold-500 bg-earth dark:bg-forest-900/40 rounded-r-2xl text-xs md:text-sm text-ink-600 dark:text-cream/85 font-sans leading-relaxed italic">
              "We believe true health stems from botanical harmony, not temporary chemical suppressions. That is why our products remain 100% steroid-free, tested for contaminants, and strictly true to traditional Vedic scriptures."
            </div>
          </div>

        </div>
      </section>

      {/* SECTION C: VISION & MISSION */}
      <section
        id="about-vision-mission"
        className="py-16 md:py-24 px-6 md:px-8 bg-beige dark:bg-forest-900/60"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision card */}
          <div className="luxury-glass dark:luxury-glass-dark p-8 md:p-12 rounded-[28px] border border-gold-500/15 text-left flex flex-col gap-5 hover:border-gold-500/35 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-forest-700/5 dark:bg-gold-500/5 border border-gold-500/20 flex items-center justify-center">
              <Eye className="w-6 h-6 text-gold-500" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-forest-900 dark:text-cream">
                Our Strategic Vision
              </h3>
              <p className="font-sans text-sm text-ink-600 dark:text-cream/85 leading-relaxed mt-3 font-light">
                To bridge traditional Vedic wisdom and modern global therapeutics—making pristine, certified, and fully reliable Ayurvedic healing accessible to homes, pharmacies, and bulk distributorships on every continent.
              </p>
            </div>
          </div>

          {/* Mission card */}
          <div className="luxury-glass dark:luxury-glass-dark p-8 md:p-12 rounded-[28px] border border-gold-500/15 text-left flex flex-col gap-5 hover:border-gold-500/35 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-forest-700/5 dark:bg-gold-500/5 border border-gold-500/20 flex items-center justify-center">
              <Compass className="w-6 h-6 text-gold-500" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-forest-900 dark:text-cream">
                Our Dedicated Mission
              </h3>
              <p className="font-sans text-sm text-ink-600 dark:text-cream/85 leading-relaxed mt-3 font-light">
                To manufacture small-batch herbal ointments, oils, and botanical supplements with absolute honesty, rigorous laboratory QC protocols, and profound respect for natural resources—remaining an elite partner for import-ready clients.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION F: CORE VALUES */}
      <section
        id="about-values-section"
        className="py-20 md:py-28 px-6 md:px-8 bg-cream dark:bg-forest-900"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              STANDARDS WE LIVE BY
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-900 dark:text-cream">
              The Principles of Parasmani
            </h2>
            <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-1 animate-gold-shimmer" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-earth dark:bg-forest-900/40 p-6 md:p-8 rounded-2xl border border-gold-500/10 hover:border-gold-500/20 text-left flex flex-col gap-4 hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-forest-700/5 dark:bg-gold-500/5 border border-gold-500/15 flex items-center justify-center">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-forest-900 dark:text-cream">
                    {v.title}
                  </h3>
                  <p className="font-sans text-xs text-ink-600 dark:text-cream/70 leading-relaxed mt-2 font-light">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION G: MANUFACTURING EXCELLENCE */}
      <section
        id="about-manufacturing-timeline"
        className="py-20 md:py-28 px-6 md:px-8 bg-beige dark:bg-forest-900/40 border-t border-gold-500/10"
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold font-sans">
              OUR COMPLETE QUALITY LIFECYCLE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-900 dark:text-cream">
              Primacy in Every Step
            </h2>
            <p className="font-sans text-sm text-ink-600 dark:text-cream/75 leading-relaxed font-light mt-2">
              From organic farm gathering to high-grade dark-glass packaging, here is a transparent overview of how we maintain purity inside our Sihor cleanroom.
            </p>
          </div>

          {/* Vertical steps list */}
          <div className="flex flex-col gap-10 relative pl-6 border-l border-gold-500/20 md:pl-0 md:border-l-0">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start gap-4 md:gap-8 relative text-left"
              >
                {/* Visual bubble marker (for mobile & desktop) */}
                <div className="absolute -left-[37px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-forest-900 border-2 border-gold-500 flex items-center justify-center z-10 shadow-sm" />

                {/* Left side column (Desktop) */}
                <div className="w-full md:w-1/2 md:text-right md:pr-12 flex flex-col gap-1">
                  <span className="font-mono text-3xl font-bold text-gold-500/30 dark:text-gold-500/20 leading-none">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-forest-900 dark:text-cream mt-1">
                    {step.title}
                  </h3>
                </div>

                {/* Right side column (Desktop) */}
                <div className="w-full md:w-1/2 md:pl-12">
                  <p className="font-sans text-sm text-ink-600 dark:text-cream/75 leading-relaxed font-light mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION H: CTA BAND */}
      <section
        id="about-cta-band"
        className="py-16 md:py-24 px-6 md:px-8 bg-earth dark:bg-forest-900/60"
      >
        <div className="max-w-4xl mx-auto rounded-[32px] overflow-hidden bg-forest-700 text-cream border border-gold-500/20 shadow-xl relative z-10 paper-grain">
          <div className="p-8 md:p-14 text-center flex flex-col items-center gap-6 relative z-10">
            <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center border border-gold-500/30">
              <CheckCircle className="w-5 h-5 text-gold-500" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-cream">
              Partner with Shree Sahajanand Herbals
            </h2>

            <p className="font-sans text-sm md:text-base text-cream/80 max-w-lg leading-relaxed font-light">
              Are you an importer, pharmacy owner, or local distributor? Let's discuss contract manufacturing, bulk raw materials, or our domestic partner program.
            </p>

            <button
              id="about-partner-cta"
              onClick={() => setPage("contact")}
              className="mt-2 bg-gold-500 hover:bg-gold-300 text-forest-900 font-sans font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded-full shadow-md hover:scale-[1.02] transition-all cursor-pointer inline-flex items-center gap-2 group"
            >
              Request Distributor Quote
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

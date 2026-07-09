import { Product, Testimonial, BlogArticle } from "./types";

export const COMPANY_INFO = {
  name: "Pitra Kripa Traders",
  subtitle: "Ayurvedic & Herbal Products",
  tagline: "Authentic Ayurveda · Made in India",
  promise: "Ancient wisdom crafted with disciplined modern manufacturing.",
  address: "Plot No. 84, GIDC Phase-II, Sihor - 364240",
  cityStateCountry: "Sihor, Bhavnagar, Gujarat, India",
  phone: "+91 94269 19430",
  whatsapp: "+919426919430",
  email: "info@shreesahjanandherbal.com",
  hours: "9:00 AM - 7:00 PM, Monday - Saturday",
  socials: {
    instagram: "https://instagram.com/parasmani_ayurvedic",
    facebook: "https://facebook.com/parasmani.ayurvedic",
    linkedin: "https://linkedin.com/company/parasmani-ayurvedic",
    youtube: "https://youtube.com/c/parasmani_ayurvedic",
  }
};

export const STATISTICS = {
  years: "18+",
  products: "45+",
  customers: "250K+",
  countries: "15+",
};

/**
 * NOTE (Aryan):
 * These are your 16 selected products (the 15 tick-marked + Kabji Churn).
 * The `image` fields below are TEMPORARY placeholders so the grid renders.
 * Replace each one with your generated UGC listing image, e.g.
 *   image: "/products/parasmani-honey.jpg"
 * Prices/sizes are set exactly as per your printed catalog MRP.
 */
export const PRODUCTS: Product[] = [
  // ---------------- SKINCARE & BEAUTY ----------------
  {
    id: "parasmani-ayurvedic-malham",
    name: "Parasmani Ayurvedic Malham (Ointment)",
    category: "Skincare & Beauty",
    shortDescription: "Skin ointment for ringworm, itching & scars.",
    fullDescription: "Beneficial for ringworm, scabies, itching, boils, pimples, cracked heels, acne scars, burn marks, delivery/pregnancy marks and other skin conditions.",
    benefits: [
      "Fights fungal infections like ringworm and scabies.",
      "Relieves persistent, severe skin itching.",
      "Fades acne scars, dark spots, and burn marks.",
      "Softens deep cracked heels and dry skin."
    ],
    usage: "Clean the area and apply a thin layer to the affected skin twice daily.",
    price: 80,
    priceRange: "₹80 – ₹140",
    variants: [
      { name: "20 GM", price: 80 },
      { name: "30 GM", price: 100 },
      { name: "50 GM", price: 140 }
    ],
    image: "/parasmani-ayurvedic-malham.jpg",
    isBestseller: true
  },
  {
    id: "parasmani-neem-soap",
    name: "Parasmani Neem Soap",
    category: "Skincare & Beauty",
    shortDescription: "Neem soap for clean, healthy skin.",
    fullDescription: "Helps clear skin problems like ringworm, scabies and itching; keeps skin clean, soft and healthy.",
    benefits: [
      "Enriched with pure anti-bacterial Neem oil.",
      "Helps prevent skin infections like scabies and ringworm.",
      "Controls body acne and rashes.",
      "Cleanses while keeping skin soft and healthy."
    ],
    usage: "Use daily while bathing.",
    price: 50,
    image: "/parasmani-neem-soap.jpg"
  },

  // ---------------- PAIN RELIEF & BALMS ----------------
  {
    id: "parasmani-vanaspati-tel",
    name: "Parasmani Vanaspati Tel (Herbal Pain Oil)",
    category: "Pain Relief & Balms",
    shortDescription: "Herbal oil for joint, back & muscle pain.",
    fullDescription: "Useful for joint pain, back pain, hand/leg pain, spine pain, stiffness, nerve pain and all kinds of body pain.",
    benefits: [
      "Relieves chronic knee and arthritic joint pain.",
      "Eases lower back, neck and spine aches.",
      "Loosens stiffness and restores flexibility.",
      "Releases deep muscular knots and strains."
    ],
    usage: "Massage gently over the affected area for about five minutes.",
    price: 80,
    priceRange: "₹80 – ₹170",
    variants: [
      { name: "30 ML", price: 80 },
      { name: "50 ML", price: 100 },
      { name: "100 ML", price: 170 }
    ],
    image: "/parasmani-vanaspati-tel.jpg",
    isBestseller: true
  },
  {
    id: "parasmani-foji-pain-cream",
    name: "Parasmani Foji Pain Cream",
    category: "Pain Relief & Balms",
    shortDescription: "Fast pain-relief cream for joints & muscles.",
    fullDescription: "Pain-relief cream specially useful for joint pain, back, nerves, arthritis (gathiya), hand/leg pain and all kinds of old, chronic pain.",
    benefits: [
      "Fast-absorbing relief for joint and muscle pain.",
      "Effective for arthritis (gathiya) stiffness.",
      "Reduces shoulder, knee and back aches.",
      "Non-greasy formula for everyday use."
    ],
    usage: "Apply and massage gently on the affected area.",
    price: 90,
    image: "/parasmani-foji-pain-cream.jpg"
  },

  // ---------------- HAIR CARE ----------------
  {
    id: "parasmani-v-kesha-hair-oil",
    name: "Parasmani V-Kesha Hair Oil",
    category: "Hair Care",
    shortDescription: "Controls hair fall, dandruff & itching.",
    fullDescription: "Helps stop hair fall within a few days; removes dandruff and itching; makes hair naturally black, long, thick and silky.",
    benefits: [
      "Helps stop excessive hair fall within days.",
      "Clears stubborn dandruff flakes completely.",
      "Soothes dry, itchy scalp from deep roots.",
      "Encourages long, thick, silky hair."
    ],
    usage: "Apply to scalp and hair, massage gently, leave on, then wash.",
    price: 130,
    priceRange: "₹130 – ₹350",
    variants: [
      { name: "100 ML", price: 130 },
      { name: "300 ML", price: 350 }
    ],
    image: "/parasmani-v-kesha-hair-oil.jpg",
    isBestseller: true
  },
  {
    id: "parasmani-jadibuti-hair-oil",
    name: "Parasmani Jadibuti (Herbal Hair Oil)",
    category: "Hair Care",
    shortDescription: "Herb-packed oil to stop hair fall in days.",
    fullDescription: "Herbal Jadibuti hair oil that helps stop falling hair in about four days, clears dandruff and itching, and makes hair naturally black, thick, silky and healthy.",
    benefits: [
      "Helps stop excessive hair fall in a few days.",
      "Removes dandruff and relieves scalp itching.",
      "Nourishes roots for naturally black, thick hair.",
      "Makes hair silky, healthy and strong."
    ],
    usage: "Apply to scalp and hair, massage into the roots, leave on, then wash.",
    price: 130,
    image: "/parasmani-jadibuti-hair-oil.jpg"
  },

  // ---------------- ORAL CARE ----------------
  {
    id: "parasmani-herbal-toothpaste",
    name: "Parasmani Herbal Toothpaste",
    category: "Oral Care",
    shortDescription: "Herbal paste for gums & teeth.",
    fullDescription: "Helps with pyorrhea, gum swelling, bleeding, sensitivity and yellowing of teeth; strengthens teeth against germs and keeps teeth and gums healthy with long-lasting protection.",
    benefits: [
      "Helps treat pyorrhea and reduce gum swelling.",
      "Reduces gum bleeding and hot/cold sensitivity.",
      "Cleanses yellow build-up and plaque stains.",
      "Germ protection for fresh, long-lasting breath."
    ],
    usage: "Brush twice daily.",
    price: 80,
    image: "/parasmani-herbal-toothpaste.jpg"
  },

  // ---------------- DIGESTIVE & WELLNESS ----------------
  {
    id: "parasmani-honey",
    name: "Parasmani Honey",
    category: "Digestive & Wellness",
    shortDescription: "Pure honey for immunity, digestion & glow.",
    fullDescription: "Pure Parasmani honey is traditionally valued for supporting overall health — helping bring a glow to the skin, aiding digestion, boosting immunity power and supporting healthy weight management.",
    benefits: [
      "Pure natural honey to support daily immunity.",
      "Aids digestion and everyday gut comfort.",
      "Adds a natural glow to the skin.",
      "Supports healthy weight management."
    ],
    usage: "Take 1–2 teaspoons daily, on its own or mixed with warm water.",
    price: 30,
    priceRange: "₹30 – ₹290",
    variants: [
      { name: "25 GM", price: 30 },
      { name: "50 GM", price: 50 },
      { name: "100 GM", price: 75 },
      { name: "200 GM", price: 130 },
      { name: "500 GM", price: 290 }
    ],
    image: "/parasmani-honey.jpg",
    isBestseller: true
  },
  {
    id: "parasmani-kabji-churn",
    name: "Parasmani Kabji Churn",
    category: "Digestive & Wellness",
    shortDescription: "For gas, acidity, sour belching & constipation.",
    fullDescription: "Ayurvedic churn that helps relieve gas, acidity, sour belching and constipation.",
    benefits: [
      "Smoothly relieves acute or chronic constipation.",
      "Reduces bloating, gas build-up and heaviness.",
      "Helps regulate healthy daily bowel movements.",
      "Brings relief from acidic sour belching."
    ],
    usage: "Take as directed with warm water, usually at night.",
    price: 60,
    priceRange: "₹60 – ₹100",
    variants: [
      { name: "50 GM", price: 60 },
      { name: "100 GM", price: 100 }
    ],
    image: "/parasmani-kabji-churn.jpg"
  },
  {
    id: "parasmani-pashan-churn",
    name: "Parasmani Pashan Churn",
    category: "Digestive & Wellness",
    shortDescription: "Herbal support for kidney stones.",
    fullDescription: "Pashan Churn is traditionally used to help break down kidney stones (pathri) without surgery and support flushing them out naturally through urine.",
    benefits: [
      "Traditionally used to help break down kidney stones.",
      "Supports flushing of stones out through urine.",
      "Aids overall kidney and urinary health.",
      "A natural alternative to help avoid surgery."
    ],
    usage: "Take as directed with water.",
    price: 120,
    image: "/parasmani-pashan-churn.jpg"
  },
  {
    id: "parasmani-elgik-charan",
    name: "Parasmani Elgik Charan",
    category: "Digestive & Wellness",
    shortDescription: "For cold, cough & allergy relief.",
    fullDescription: "Herbal churn useful in cold, cough (sardi–jukaam) and allergy. Simply taken with honey or water for quick, soothing relief.",
    benefits: [
      "Gives relief in cold, cough and congestion.",
      "Soothes seasonal allergies.",
      "Helps clear a blocked chest and throat.",
      "Gentle, fast-acting herbal respiratory support."
    ],
    usage: "Take 1 gram with honey or water.",
    price: 50,
    image: "/parasmani-elgik-charan.jpg"
  },
  {
    id: "parasmani-clean-and-clean",
    name: "Parasmani Clean & Clean Churn",
    category: "Digestive & Wellness",
    shortDescription: "Blood-purifying support for skin issues.",
    fullDescription: "Beneficial in blood disorders, skin discomfort and full-body itching. Cleanses from within to help heal the surface.",
    benefits: [
      "Helps purify blood and clear internal toxins.",
      "Calms full-body itching and irritation.",
      "Soothes allergic skin rashes.",
      "Supports clear, healthy skin from the inside."
    ],
    usage: "Take as directed with water.",
    price: 130,
    image: "/parasmani-clean-and-clean.jpg"
  },
  {
    id: "parasmani-ven-pradar-churn",
    name: "Parasmani Ven Pradar Churn",
    category: "Digestive & Wellness",
    shortDescription: "Women's churn for period & discharge issues.",
    fullDescription: "Formulated especially for women — helps with menstrual pain, irregular cycles, leucorrhea (white discharge / shwet pradar) and related conditions (rakt pradar).",
    benefits: [
      "Helps ease menstrual (period) pain and cramps.",
      "Supports regular menstrual cycles.",
      "Helps in leucorrhea (white discharge).",
      "Formulated especially for women's wellness."
    ],
    usage: "Take as directed with water.",
    price: 110,
    image: "/parasmani-ven-pradar-churn.jpg"
  },
  {
    id: "parasmani-ashwagandha-tablet",
    name: "Parasmani Ashwagandha Tablet",
    category: "Digestive & Wellness",
    shortDescription: "Reduces stress, builds strength & stamina.",
    fullDescription: "Ashwagandha tablets that help reduce stress and anxiety, strengthen muscles, and support balanced blood sugar — restoring natural energy and calm.",
    benefits: [
      "Helps reduce everyday stress and anxiety.",
      "Strengthens muscles and physical stamina.",
      "Supports balanced blood sugar levels.",
      "Restores natural energy and calm."
    ],
    usage: "Take 1 tablet once or twice daily with water or warm milk.",
    price: 180,
    image: "/parasmani-ashwagandha-tablet.jpg",
    isBestseller: true
  },
  {
    id: "parasmani-shatavari-tablet",
    name: "Parasmani Shatavari Tablet",
    category: "Digestive & Wellness",
    shortDescription: "Women's wellness, calm & immunity.",
    fullDescription: "Shatavari tablets are beneficial for women's health — helping reduce stress and anxiety while boosting immunity and overall vitality.",
    benefits: [
      "Beneficial for overall women's health.",
      "Helps reduce stress and anxiety.",
      "Boosts natural immunity and vitality.",
      "Supports hormonal balance and wellbeing."
    ],
    usage: "Take 1 tablet once or twice daily with water or warm milk.",
    price: 180,
    image: "/parasmani-shatavari-tablet.jpg"
  },
  {
    id: "parasmani-b12-tablet",
    name: "Parasmani B-12 Tablet",
    category: "Digestive & Wellness",
    shortDescription: "Energy, stamina, brain & blood support.",
    fullDescription: "B-12 tablets help boost energy and stamina, sharpen the brain and memory, strengthen nerves and muscles, raise haemoglobin and blood cells, remove fatigue and weakness, and keep hair, skin and nails healthy.",
    benefits: [
      "Boosts energy, stamina and daily vigor.",
      "Sharpens brain function and memory.",
      "Strengthens nerves and muscles.",
      "Raises haemoglobin; keeps hair, skin & nails healthy."
    ],
    usage: "Take 1 tablet daily with water.",
    price: 180,
    image: "/parasmani-b12-tablet.jpg",
    isBestseller: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Rajesh V. Vyas",
    place: "Ahmedabad, Gujarat",
    rating: 5,
    quote: "As an Ayurvedic practitioner, I am highly selective about the formulations I recommend. Parasmani's Skin Ointment is absolutely outstanding. The batch quality is highly consistent, and the results for chronic eczema are the best I have seen."
  },
  {
    name: "Sarah Jenkins",
    place: "London, United Kingdom (Importer)",
    rating: 5,
    quote: "Our herbal distribution company in London has imported bulk orders of Parasmani Hair Oil and Ashwagandha for over three years. Their export documentation is immaculate, the packaging is export-grade, and our customers rave about the purity!"
  },
  {
    name: "Mahesh Chandra Patel",
    place: "Surat, Gujarat",
    rating: 5,
    quote: "I was suffering from severe knee pain due to osteo-arthritis. Parasmani Pain Relief oil has changed my life. Massage twice a day reduced the swelling and I can now walk comfortably without support. Very affordable and highly effective."
  },
  {
    name: "Anjali Sharma",
    place: "Mumbai, Maharashtra",
    rating: 5,
    quote: "The Clarifying Neem & Tulsi Face Pack is amazing. My stubborn hormonal acne cleared up in 3 weeks. It feels so natural, smells therapeutic, and doesn't dry out the skin like chemical washes. Will buy again and again!"
  }
];

export const FAQS = [
  {
    question: "Are your Ayurvedic products 100% herbal and safe?",
    answer: "Yes, absolutely. All Parasmani products are manufactured under strict GMP compliance using 100% natural, ethically sourced herbs. We do not use any chemical steroids, parabens, heavy metals, or artificial mineral oils. Our formulations are tested and safe for everyone."
  },
  {
    question: "Do you ship internationally and support export clients?",
    answer: "Yes, we are government-registered exporters of herbal products. We regularly ship raw herbs, finished packaged products, and custom formulations to distributors and wholesale buyers across Europe, the UK, the Americas, and Southeast Asia."
  },
  {
    question: "Do you offer private label (OEM) manufacturing services?",
    answer: "Yes. Shree Sahajanand Herbals offers comprehensive Private Label and OEM solutions. We can manufacture our high-quality Ayurvedic oils, creams, ointments, and powders under your brand name, with customized packaging, labeling, and complete regulatory paperwork."
  },
  {
    question: "How does the 'Buy Now' and Checkout process work?",
    answer: "To ensure maximum personalization, prompt support, and custom wholesale or retail shipping rates, we use a 'WhatsApp Checkout' model. When you click 'Buy Now' or complete your cart, it automatically generates a structured WhatsApp message with your selected products, ready to send to our team to finalize your order instantly."
  },
  {
    question: "Are your products tested for quality and heavy metals?",
    answer: "Yes. Every batch of our products undergoes standard laboratory quality control. We verify the botanical identity, moisture content, and purity of ingredients, and ensure that our products are completely free of heavy metals or biological contaminants."
  }
];

export const BLOGS: BlogArticle[] = [
  {
    id: "understanding-ayurvedic-ointments",
    title: "Understanding Ayurvedic Skin Healing: Herbs Over Steroids",
    excerpt: "Why traditional herbs like Neem, Manjistha, and Haldi offer a permanent, side-effect-free solution for chronic eczema and itching compared to temporary steroid creams.",
    category: "Skin Care",
    date: "June 24, 2026",
    readTime: "5 min read",
    content: "Under modern treatment protocols, severe skin rashes, eczema, and fungal infections are commonly treated with high-potency steroid ointments. While these provide immediate relief, they often thin the skin and lead to severe flare-ups upon cessation. Ayurveda treats skin conditions from the root by addressing high Pitta and Kapha doshas. Natural anti-inflammatory agents like Neem (Azadirachta indica), Karanja oil, and Gandhak shuddh cleanse the blood, destroy localized fungal hyphae, and encourage natural cell regeneration. Consistent application of herbal ointments yields a permanent, safe recovery without building dependency.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "kshir-pak-vidhi-hair-secrets",
    title: "Kshir Pak Vidhi: The Royal Ancient Method of Hair Oil Making",
    excerpt: "Delve deep into the elaborate Vedic science of slow-cooking active herbs in pure oils and milk to unlock extreme bio-availability for hair roots.",
    category: "Hair Care",
    date: "May 18, 2026",
    readTime: "7 min read",
    content: "In ancient Ayurvedic texts, simple mixing of oil and herb extracts is considered insufficient for true therapeutic benefits. The supreme technique is 'Kshir Pak Vidhi'. In this method, herbs like Bhringraj (the king of hair), Brahmi, and Amla are boiled in pure milk and water decoctions first. Cold-pressed sesame or coconut oil is then added, and the blend is slow-simmered for several hours over a gentle flame until all the water and milk solids evaporate. This process binds the oil-soluble and water-soluble active alkaloids of the herbs into the oil molecules, ensuring rapid and direct absorption by the hair roots.",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "ashwagandha-for-modern-fatigue",
    title: "Ashwagandha: The Premier Adaptogen for Modern Adrenal Burnout",
    excerpt: "How a 5,000-year-old root powder regulates cortisol levels, restores cellular energy, and combats the exhausting stress of the digital age.",
    category: "Wellness",
    date: "April 10, 2026",
    readTime: "6 min read",
    content: "Modern lifestyles expose us to persistent psychological stress, which elevates our stress hormone (cortisol). Over time, this causes chronic exhaustion, poor sleep, and reduced immunity. Ashwagandha is recognized globally as an 'adaptogen' - a substance that safely modulates the body's response to stress. Active compounds called withanolides help calm the hyper-active nervous system, balance the endocrine gland secretions, and restore cellular ATP synthesis. Taking Ashwagandha with warm milk before bed acts as a natural rejuvenator, allowing you to wake up with natural vigor and sustainable stamina.",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=600"
  }
];
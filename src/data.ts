import { Product, Testimonial, BlogArticle } from "./types";

export const COMPANY_INFO = {
  name: "Parasmani Ayurvedic Products",
  subtitle: "Shree Sahajanand Herbals",
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

export const PRODUCTS: Product[] = [
  {
    id: "parasmani-golden-balm",
    name: "Parasmani Golden Balm",
    category: "Pain Relief & Balms",
    shortDescription: "Relief balm for cold, cough & headache.",
    fullDescription: "Ayurvedic balm that gives relief in cold, congestion, blocked nose and headache. Formulated with dynamic natural herbal active ingredients for fast action.",
    benefits: [
      "Relieves dry cold & deep cough congestion.",
      "Clears blocked nasal passages instantly.",
      "Soothes severe throbbing headaches.",
      "Provides rapid, deep muscle relaxation."
    ],
    usage: "Apply a small amount to the temples, forehead or chest and massage gently.",
    price: 25,
    priceRange: "₹25 – ₹50",
    variants: [
      { name: "Small", price: 25 },
      { name: "Large", price: 50 }
    ],
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600",
    isBestseller: true
  },
  {
    id: "parasmani-tahelka-oil",
    name: "Parasmani Tahelka Oil",
    category: "Pain Relief & Balms",
    shortDescription: "Fast-acting relief oil for cold & aches.",
    fullDescription: "Multipurpose relief oil useful for cold, congestion and headache-related discomfort. Penetrates deeply for immediate soothing.",
    benefits: [
      "Instant relief from blocked cold airways.",
      "Alleviates physical headache pressure.",
      "Soothes localized muscle tensions.",
      "Pure herbal therapeutic formula."
    ],
    usage: "Apply to affected area / forehead and massage gently.",
    price: 40,
    image: "https://images.unsplash.com/photo-1626887568523-71887e35b0b1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-roopvatika-face-pack",
    name: "Parasmani Roopvatika Face Pack",
    category: "Skincare & Beauty",
    shortDescription: "Herbal face pack for spots, blemishes & glow.",
    fullDescription: "Herbal face pack that helps remove pimples, blemishes, dark spots and dullness from the face, restoring natural beauty and radiance.",
    benefits: [
      "Fades dark spots and persistent skin blemishes.",
      "Combats active pimples and oil clogged pores.",
      "Restores vibrant, youthful facial skin glow.",
      "100% natural, chemical-free exfoliation."
    ],
    usage: "Mix with water/rose water, apply an even layer, leave to dry, then rinse.",
    price: 60,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    isBestseller: true
  },
  {
    id: "parasmani-kesar-goti",
    name: "Parasmani Kesar Goti",
    category: "Skincare & Beauty",
    shortDescription: "Saffron beauty bar for fairness & glow.",
    fullDescription: "Kesar (saffron) beauty tablet used for facial beauty, brightness and a fairer, glowing complexion.",
    benefits: [
      "Enriched with pure Kashmiri Saffron extracts.",
      "Brightens skin and matches skin tone.",
      "Creates natural, radiant facial beauty.",
      "Gently cleanses and softens skin."
    ],
    usage: "Rub gently on damp skin / use as directed, then rinse.",
    price: 70,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-face-scrub",
    name: "Parasmani Face Scrub",
    category: "Skincare & Beauty",
    shortDescription: "Removes blackheads, whiteheads & dead skin.",
    fullDescription: "Face scrub that removes blackheads, whiteheads, pigmentation and dry patches, leaving skin healthy, soft and beautiful.",
    benefits: [
      "Gently extracts blackheads and stubborn whiteheads.",
      "Polishes off dry patches and dead skin flakes.",
      "Fades deep facial skin pigmentation.",
      "Leaves skin feeling silky, smooth and refined."
    ],
    usage: "Apply to damp skin, massage in circular motion for 1–2 minutes, rinse.",
    price: 110,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-multani-mitti-powder",
    name: "Parasmani Multani Mitti Powder",
    category: "Skincare & Beauty",
    shortDescription: "Clay powder that clears oil & impurities.",
    fullDescription: "Multani mitti helps remove excess oil and impurities, unclogs and refreshes pores, soothes the skin, reduces oiliness and dryness, and gives a cooling, calming effect.",
    benefits: [
      "Draws out deep-seated skin toxins and impurities.",
      "Unclogs, purifies, and tightens pores.",
      "Soothes skin rashes with active cooling action.",
      "Naturally balances sebum oil and dry skin."
    ],
    usage: "Make a paste with water/rose water, apply, let dry, rinse off.",
    price: 60,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-heel-crack-cream",
    name: "Parasmani Heel Crack Cream",
    category: "Skincare & Beauty",
    shortDescription: "Softens & heals cracked heels.",
    fullDescription: "Softens hard, thick and cracked heels and helps with cracking, bleeding, pain and difficulty walking.",
    benefits: [
      "Heals deep, painful skin fissures on heels.",
      "Reduces bleeding and burning sensations.",
      "Softens thick, stubborn dead skin layers.",
      "Restores walking ease and smooth skin feet."
    ],
    usage: "Wash and dry feet, apply on cracked heels daily, ideally at night.",
    price: 70,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-vitani-churn",
    name: "Parasmani Vitani Churn",
    category: "Digestive & Wellness",
    shortDescription: "Herbal churn for diabetes support & vitality.",
    fullDescription: "Beneficial for complete control of diabetes (madhumeh); boosts strength and energy and helps keep the body fit and active.",
    benefits: [
      "Helps regulate and support blood sugar control.",
      "Enhances natural daily strength and vigor.",
      "Combats diabetic exhaustion and weak lethargy.",
      "Keeps the body fit, active, and fully revitalized."
    ],
    usage: "Take as directed with water, usually before or after meals.",
    price: 120,
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-sudarshan-churn",
    name: "Parasmani Sudarshan Churn",
    category: "Digestive & Wellness",
    shortDescription: "For appetite, digestion & fever.",
    fullDescription: "Useful for loss of appetite (aruchi), weak digestion (mandagni), chronic fever (jeernjwar), malaria and overall agility.",
    benefits: [
      "Ignites a healthy eating appetite (aruchi).",
      "Corrects weak, sluggish, or slow digestion.",
      "Soothes long-term, chronic, or high fevers.",
      "Boosts daily physical flexibility and agility."
    ],
    usage: "Take the prescribed quantity with water.",
    price: 50,
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-clean-and-clean",
    name: "Parasmani Clean & Clean",
    category: "Digestive & Wellness",
    shortDescription: "Blood-purifying support for skin issues.",
    fullDescription: "Beneficial in blood disorders, skin discomfort and full-body itching. Cleanses from within to heal the surface.",
    benefits: [
      "Purifies blood and clears systemic toxins.",
      "Calms severe full-body hives and itching.",
      "Soothes allergic skin rashes and hives.",
      "Fosters clear, healthy skin from the inside."
    ],
    usage: "Take as directed with water.",
    price: 100,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-ulta-gas",
    name: "Parasmani Ulta Gas",
    category: "Digestive & Wellness",
    shortDescription: "For reverse gas, sour belching & acidity.",
    fullDescription: "Useful for reverse gas, sour belching and pitta/acidity.",
    benefits: [
      "Relieves reverse gas bloating and discomfort.",
      "Neutralizes acidic sour belching instantly.",
      "Cools elevated Pitta and heartburn.",
      "Restores normal, healthy gut movement."
    ],
    usage: "Take as directed with water.",
    price: 60,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-ayurvedic-malham",
    name: "Parasmani Ayurvedic Malham (Ointment)",
    category: "Pain Relief & Balms",
    shortDescription: "Skin ointment for ringworm, itching & scars.",
    fullDescription: "Beneficial for ringworm, scabies, itching, boils, pimples, cracked heels, acne scars, burn marks, delivery/pregnancy marks and other skin conditions.",
    benefits: [
      "Destroys fungal infections (ringworm, scabies).",
      "Instantly relieves persistent, severe skin itching.",
      "Clears acne scars, dark spots, and burn marks.",
      "Softens deep cracked heels and dry fissures."
    ],
    usage: "Clean the area and apply a thin layer to the affected skin.",
    price: 80,
    priceRange: "₹80 – ₹140",
    variants: [
      { name: "Small", price: 80 },
      { name: "Medium", price: 100 },
      { name: "Large", price: 140 }
    ],
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600",
    isBestseller: true
  },
  {
    id: "parasmani-vanaspati-tel",
    name: "Parasmani Vanaspati Tel (Herbal Pain Oil)",
    category: "Pain Relief & Balms",
    shortDescription: "Herbal oil for joint, back & muscle pain.",
    fullDescription: "Useful for joint pain, back pain, hand/leg pain, spine pain, stiffness, muscle pain and all kinds of pain.",
    benefits: [
      "Relieves chronic knee and arthritic joint pain.",
      "Eases intense lower back and neck aches.",
      "Restores stiffness and joint flexibility.",
      "Releases deep muscular knots and strains."
    ],
    usage: "Massage gently over the affected area for about five minutes.",
    price: 80,
    priceRange: "₹80 – ₹140",
    variants: [
      { name: "Small", price: 80 },
      { name: "Large", price: 140 }
    ],
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600",
    isBestseller: true
  },
  {
    id: "parasmani-foji-pain-cream",
    name: "Parasmani Foji Pain Cream",
    category: "Pain Relief & Balms",
    shortDescription: "Fast pain-relief cream.",
    fullDescription: "Pain-relief cream for joint, back and muscle aches. Fast-absorbing formula for active lifestyles.",
    benefits: [
      "Extremely fast pain relief penetration.",
      "Reduces shoulder, knee, and muscular stiffness.",
      "Non-greasy cream formula for easy use.",
      "Relieves sports sprains and cramps."
    ],
    usage: "Apply and massage gently on the affected area.",
    price: 90,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-kabji-churn",
    name: "Parasmani Kabji Churn",
    category: "Digestive & Wellness",
    shortDescription: "For gas, acidity & constipation.",
    fullDescription: "Treatment for gas, acidity, sour belching and constipation.",
    benefits: [
      "Smoothly relieves acute or chronic constipation.",
      "Reduces bloating, gas build-up, and heaviness.",
      "Helps regulate healthy daily bowel motions.",
      "Brings relief from acidic sour belching."
    ],
    usage: "Take as directed with warm water, usually at night.",
    price: 50,
    priceRange: "₹50 – ₹80",
    variants: [
      { name: "Small", price: 50 },
      { name: "Large", price: 80 }
    ],
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-v-kesha-hair-oil",
    name: "Parasmani V-Kesha Hair Oil",
    category: "Hair Care",
    shortDescription: "Controls hair fall, dandruff & itching.",
    fullDescription: "Helps reduce hair fall within a few days; removes dandruff and itching; makes hair naturally black, long, thick and silky.",
    benefits: [
      "Stops aggressive hair fall in 7-10 days.",
      "Clears stubborn dandruff flakes completely.",
      "Moisturizes dry, itchy scalp from deep roots.",
      "Encourages long, thick, thick, silky hair growth."
    ],
    usage: "Apply to scalp and hair, massage gently, leave on, then wash.",
    price: 130,
    priceRange: "₹130 – ₹350",
    variants: [
      { name: "Small", price: 130 },
      { name: "Large", price: 350 }
    ],
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=600",
    isBestseller: true
  },
  {
    id: "parasmani-v-kesha-shampoo",
    name: "Parasmani V-Kesha Shampoo",
    category: "Hair Care",
    shortDescription: "Herbal shampoo for strong, silky hair.",
    fullDescription: "Cleanses hair, removes dandruff and supports strong, silky hair; complements V-Kesha Hair Oil.",
    benefits: [
      "Cleanses scalp gently without stripping oils.",
      "Aids in stubborn dandruff control.",
      "Revitalizes hair strands to prevent hair breakage.",
      "Leaves hair naturally bouncy, strong, and silky."
    ],
    usage: "Apply to wet hair, lather, rinse; use with V-Kesha oil for best results.",
    price: 90,
    priceRange: "₹90 – ₹200",
    variants: [
      { name: "Small", price: 90 },
      { name: "Large", price: 200 }
    ],
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dennison-pain-relief-oil",
    name: "Dennison Pain Relief Oil",
    category: "Pain Relief & Balms",
    shortDescription: "For joint, back & chronic pain.",
    fullDescription: "Specially useful for joint pain, back, muscles, arthritis (gathiya), hand/leg pain and all kinds of old or chronic pain.",
    benefits: [
      "Highly effective for arthritis (gathiya) stiffness.",
      "Soothes severe long-term chronic joint pain.",
      "Combats deep backaches, spasms, and neck stiffness.",
      "Improves localized blood circulation to joints."
    ],
    usage: "Massage gently over the affected area.",
    price: 110,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dennison-malham",
    name: "Dennison Malham (Ointment)",
    category: "Pain Relief & Balms",
    shortDescription: "Effective skin-disease ointment.",
    fullDescription: "Effective remedy for skin diseases such as ringworm, scabies, itching, burn marks and delivery-time marks.",
    benefits: [
      "Combats severe skin ringworm and scabies.",
      "Stops persistent dermal itching and flaking.",
      "Lightens post-burn and pregnancy stretch marks.",
      "Promotes clean, rash-free skin recovery."
    ],
    usage: "Clean the area and apply a thin layer to affected skin.",
    price: 110,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-neem-soap",
    name: "Parasmani Neem Soap",
    category: "Skincare & Beauty",
    shortDescription: "Neem soap for clean, healthy skin.",
    fullDescription: "Helps clear skin problems like ringworm, scabies and itching; keeps skin clean, soft and healthy.",
    benefits: [
      "Enriched with pure anti-bacterial Neem oil.",
      "Prevents skin infection spread (scabies, ringworm).",
      "Controls excess body acne and rashes.",
      "Moisturizes skin and leaves it deeply healthy."
    ],
    usage: "Use daily while bathing.",
    price: 50,
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-herbal-toothpaste",
    name: "Parasmani Herbal Toothpaste",
    category: "Oral Care",
    shortDescription: "Herbal paste for gums & teeth.",
    fullDescription: "Helps with pyorrhea, gum swelling, bleeding, sensitivity and yellowing of teeth; strengthens teeth against germs and keeps teeth and gums healthy with long-lasting, effective protection.",
    benefits: [
      "Treats pyorrhea and prevents gum swelling.",
      "Stops gum bleeding and hot/cold sensitivity.",
      "Cleanses yellow build-up and plaque stains.",
      "Germ protection for fresh, long-lasting breath."
    ],
    usage: "Brush twice daily.",
    price: 70,
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "parasmani-dantram-dant-manjan",
    name: "Parasmani Dantram Dant Manjan",
    category: "Oral Care",
    shortDescription: "Herbal tooth powder for strong teeth.",
    fullDescription: "Herbal tooth powder for pyorrhea, gum swelling, bleeding, sensitivity and yellow teeth; strengthens and protects teeth and gums.",
    benefits: [
      "Strengthens tooth enamel and root health.",
      "Stops gum bleeding and active sensitivity.",
      "Combats pyorrhea pathogens effectively.",
      "100% natural, chemical-free herbal tooth powder."
    ],
    usage: "Apply to teeth and gums, massage, then rinse.",
    price: 30,
    priceRange: "₹30 – ₹60",
    variants: [
      { name: "Small", price: 30 },
      { name: "Large", price: 60 }
    ],
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=600"
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

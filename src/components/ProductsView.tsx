import { useState, useMemo, useEffect } from "react";
import {
  Search, Heart, CheckCircle, Plus, Minus, ShoppingBag, MessageSquare, ShieldCheck, Award, Sparkles
} from "lucide-react";
import { PRODUCTS, FAQS, maskPrice } from "../data";
import { Product } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface ProductsViewProps {
  onOpenProductModal: (product: Product) => void;
  onBuyNow: (product: Product, quantity: number, selectedSize?: string, selectedPrice?: number) => void;
  onAddToCart: (product: Product, selectedSize?: string, selectedPrice?: number) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  activeProductInModal: Product | null;
  setActiveProductInModal: (product: Product | null) => void;
}

export default function ProductsView({
  onBuyNow,
  onAddToCart,
  wishlist,
  toggleWishlist,
  activeProductInModal,
  setActiveProductInModal
}: ProductsViewProps) {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Popular");
  
  // Modal states
  const [modalQty, setModalQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<{ name: string; price: number } | null>(null);

  const categories = ["All", "Skincare & Beauty", "Pain Relief & Balms", "Hair Care", "Digestive & Wellness", "Oral Care"];

  // Whenever the active product changes, reset the variant selection and quantity
  useEffect(() => {
    if (activeProductInModal) {
      setModalQty(1);
      if (activeProductInModal.variants && activeProductInModal.variants.length > 0) {
        setSelectedVariant(activeProductInModal.variants[0]);
      } else {
        setSelectedVariant(null);
      }
    }
  }, [activeProductInModal]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.benefits.some(b => b.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortOption === "PriceAsc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "PriceDesc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Bestseller") {
      result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    } else {
      // Popular / Default: bestseller first, then by name
      result.sort((a, b) => {
        if (a.isBestseller && !b.isBestseller) return -1;
        if (!a.isBestseller && b.isBestseller) return 1;
        return a.name.localeCompare(b.name);
      });
    }

    return result;
  }, [selectedCategory, searchQuery, sortOption]);

  const handleOpenDetails = (product: Product) => {
    setActiveProductInModal(product);
  };

  const handleCloseDetails = () => {
    setActiveProductInModal(null);
  };

  const handleBuyNowFromModal = () => {
    if (activeProductInModal) {
      onBuyNow(
        activeProductInModal, 
        modalQty, 
        selectedVariant?.name, 
        selectedVariant?.price
      );
    }
  };

  const handleAddToCartFromModal = () => {
    if (activeProductInModal) {
      onAddToCart(
        activeProductInModal, 
        selectedVariant?.name, 
        selectedVariant?.price
      );
      handleCloseDetails();
    }
  };

  // Stagger variants for list animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="font-sans text-[#0E2A14] bg-[#FAF7F0] dark:bg-[#07190B] dark:text-[#FAF7F0] min-h-screen">
      
      {/* SECTION A: SLIM PAGE HERO */}
      <section
        id="products-hero"
        className="relative pt-36 pb-16 px-6 md:px-8 bg-[#0E2A14] text-[#FAF7F0] text-center border-b border-[#BFA05A]/20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B5E20]/30 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3 relative z-10">
          <div className="text-[10px] font-mono tracking-widest uppercase text-[#BFA05A] font-bold bg-[#FAF7F0]/5 border border-[#BFA05A]/20 py-1.5 px-4 rounded-full flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#BFA05A]" /> Shree Sahajanand Herbals Since 1999
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F0] leading-tight">
            Pure Ayurvedic <span className="italic text-[#BFA05A] font-light">Formulations</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#FAF7F0]/70 max-w-xl leading-relaxed font-light mt-1">
            Carefully hand-crafted in Gujarat, India. 100% natural, chemical-free, steroid-free, and manufactured under strict traditional safety ethics.
          </p>
        </div>
      </section>

      {/* SECTION B: STICKY TOOLBAR */}
      <section
        id="products-toolbar"
        className="sticky top-16 md:top-20 z-30 bg-[#FAF7F0]/95 dark:bg-[#07190B]/95 backdrop-blur-md border-b border-[#BFA05A]/15 py-3.5 px-6 md:px-8 shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          
          {/* Category Chips filter */}
          <div className="flex gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <button
                id={`cat-chip-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4.5 rounded-full text-[10px] font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#1B5E20] text-[#FAF7F0] border border-[#BFA05A]/40 shadow-sm"
                    : "bg-stone-100 dark:bg-[#0E2A14]/40 border border-[#BFA05A]/10 text-stone-600 dark:text-[#FAF7F0]/70 hover:border-[#BFA05A]/30 hover:text-[#BFA05A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar and Sort option */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex items-center bg-stone-100 dark:bg-[#0E2A14]/40 border border-[#BFA05A]/15 rounded-full px-4.5 py-2.5 w-full sm:w-64 focus-within:border-[#BFA05A] transition-colors">
              <Search className="w-4 h-4 text-[#BFA05A] mr-2.5 flex-shrink-0" />
              <input
                id="search-products-field"
                type="text"
                placeholder="Search medicines, oils, balms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-xs text-[#0E2A14] dark:text-[#FAF7F0] outline-none w-full placeholder:text-stone-400 dark:placeholder:text-stone-500 font-medium"
              />
            </div>

            {/* Sort Selector */}
            <div className="relative flex items-center bg-stone-100 dark:bg-[#0E2A14]/40 border border-[#BFA05A]/15 rounded-full px-4.5 py-2.5 select-none">
              <select
                id="sort-products-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-transparent text-xs text-[#0E2A14] dark:text-[#FAF7F0] outline-none pr-3 cursor-pointer font-semibold uppercase tracking-wider text-[10px]"
              >
                <option value="Popular" className="bg-[#FAF7F0] text-[#0E2A14] dark:bg-[#0E2A14] dark:text-[#FAF7F0]">Popular</option>
                <option value="Bestseller" className="bg-[#FAF7F0] text-[#0E2A14] dark:bg-[#0E2A14] dark:text-[#FAF7F0]">Bestseller First</option>
                <option value="PriceAsc" className="bg-[#FAF7F0] text-[#0E2A14] dark:bg-[#0E2A14] dark:text-[#FAF7F0]">Price: Low to High</option>
                <option value="PriceDesc" className="bg-[#FAF7F0] text-[#0E2A14] dark:bg-[#0E2A14] dark:text-[#FAF7F0]">Price: High to Low</option>
              </select>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION C: PRODUCT GRID */}
      <section id="products-grid-section" className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          
          <div className="flex items-center justify-between text-[10px] text-stone-500 dark:text-[#FAF7F0]/50 uppercase tracking-widest font-mono font-bold">
            <span>Showing {filteredProducts.length} Ayurvedic formulations</span>
            {searchQuery && (
              <span>Matching "{searchQuery}"</span>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center flex flex-col items-center justify-center gap-4 bg-[#FAF7F0] dark:bg-[#0E2A14]/20 rounded-3xl border border-[#BFA05A]/15 shadow-inner">
              <div className="w-16 h-16 rounded-full bg-[#1B5E20]/5 dark:bg-[#BFA05A]/5 border border-[#BFA05A]/20 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-[#BFA05A]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0E2A14] dark:text-[#FAF7F0]">No Formulations Found</h3>
                <p className="font-sans text-xs text-stone-500 dark:text-[#FAF7F0]/60 leading-relaxed mt-1 max-w-xs mx-auto">
                  We couldn't find any products matching your selection. Try clearing your search query or choosing another category.
                </p>
              </div>
              <button
                id="clear-search-btn"
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="bg-[#1B5E20] hover:bg-[#2E7D32] text-[#FAF7F0] text-[10px] font-bold uppercase tracking-widest py-3 px-6 rounded-full cursor-pointer mt-2 transition-colors"
              >
                Reset Shop Filters
              </button>
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => {
                const isWished = wishlist.includes(product.id);
                return (
                  <motion.div
                    variants={cardVariants}
                    key={product.id}
                    id={`product-card-${product.id}`}
                    className="bg-white dark:bg-[#0E2A14]/30 rounded-3xl border border-[#BFA05A]/10 hover:border-[#BFA05A]/30 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full relative group"
                  >
                    
                    {/* Wishlist toggle */}
                    <button
                      id={`grid-wish-toggle-${product.id}`}
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 dark:bg-[#07190B]/90 hover:scale-110 active:scale-95 cursor-pointer shadow-sm text-[#BFA05A] transition-all"
                      aria-label="Save to Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWished ? "fill-[#BFA05A] text-[#BFA05A]" : "text-[#BFA05A]"}`} />
                    </button>

                    {/* Bestseller Tag */}
                    {product.isBestseller && (
                      <div className="absolute top-4 left-4 z-10 bg-[#BFA05A] text-[#0E2A14] text-[8px] uppercase tracking-widest font-mono font-bold py-1 px-3 rounded-full shadow-sm">
                        Bestseller
                      </div>
                    )}

                    {/* Image Area */}
                    <div className="aspect-square w-full overflow-hidden relative bg-stone-100 border-b border-[#BFA05A]/10">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Contents */}
                    <div className="p-5 flex flex-col flex-grow text-left gap-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] font-mono uppercase font-bold tracking-widest text-[#BFA05A]">
                          {product.category}
                        </span>
                        <span className="font-serif text-sm font-bold text-[#BFA05A]">
                          {product.priceRange ? maskPrice(product.priceRange) : `₹${maskPrice(product.price)}`}
                        </span>
                      </div>

                      <h3 className="font-serif text-base font-bold text-[#0E2A14] dark:text-[#FAF7F0] leading-snug group-hover:text-[#BFA05A] transition-colors line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="font-sans text-xs text-stone-500 dark:text-[#FAF7F0]/80 leading-relaxed font-light line-clamp-2">
                        {product.shortDescription}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mt-auto pt-4 border-t border-[#BFA05A]/10">
                        <button
                          id={`shop-btn-view-${product.id}`}
                          onClick={() => handleOpenDetails(product)}
                          className="bg-transparent hover:bg-[#BFA05A]/5 text-[#1B5E20] dark:text-[#FAF7F0] font-sans font-semibold text-[9px] tracking-wider uppercase py-2.5 px-3 rounded-full border border-[#1B5E20]/30 dark:border-[#FAF7F0]/20 hover:border-[#BFA05A] transition-all text-center cursor-pointer"
                        >
                          View Details
                        </button>
                        <button
                          id={`shop-btn-buynow-${product.id}`}
                          onClick={() => onBuyNow(product, 1)}
                          className="bg-[#1B5E20] hover:bg-[#2E7D32] text-[#FAF7F0] font-sans font-semibold text-[9px] tracking-wider uppercase py-2.5 px-3 rounded-full shadow-sm hover:shadow-md transition-all text-center cursor-pointer"
                        >
                          Buy Now
                        </button>
                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          )}

        </div>
      </section>

      {/* SECTION D: PRODUCT DETAIL MODAL */}
      <AnimatePresence>
        {activeProductInModal && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              id="product-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseDetails}
              className="fixed inset-0 bg-[#07190B]/60 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Modal Dialog container */}
            <div className="fixed inset-0 z-50 overflow-y-auto pointer-events-none flex items-center justify-center p-4">
              <motion.div
                id="product-details-modal"
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full max-w-4xl bg-[#FAF7F0] dark:bg-[#0E2A14] rounded-3xl border border-[#BFA05A]/20 shadow-2xl pointer-events-auto overflow-hidden relative"
              >
                {/* Scrollable contents box */}
                <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
                  
                  {/* Left Column - Image */}
                  <div className="md:col-span-5 bg-stone-100 aspect-square md:aspect-auto w-full md:h-full relative overflow-hidden border-r border-[#BFA05A]/10">
                    <img
                      src={activeProductInModal.image}
                      alt={activeProductInModal.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#0E2A14] text-[#FAF7F0] text-[8px] uppercase tracking-widest font-mono font-bold py-1 px-3 rounded-full border border-[#BFA05A]/25">
                      {activeProductInModal.category}
                    </div>
                  </div>

                  {/* Right Column - Product description */}
                  <div className="md:col-span-7 p-6 md:p-9 flex flex-col text-left justify-between relative">
                    
                    {/* Header close cross */}
                    <button
                      id="modal-close-cross"
                      onClick={handleCloseDetails}
                      className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-200 dark:hover:bg-[#FAF7F0]/5 text-[#0E2A14] dark:text-[#FAF7F0] transition-colors cursor-pointer border border-[#BFA05A]/10"
                      aria-label="Close details"
                    >
                      <Plus className="w-5 h-5 rotate-45" />
                    </button>

                    <div className="flex flex-col gap-4.5">
                      <div>
                        <span className="text-[9px] font-mono uppercase font-bold tracking-widest text-[#BFA05A]">
                          {activeProductInModal.category}
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0E2A14] dark:text-[#FAF7F0] leading-tight mt-1">
                          {activeProductInModal.name}
                        </h2>
                        
                        <div className="flex items-center gap-2 mt-2 border-b border-[#BFA05A]/10 pb-3">
                          <span className="font-serif text-xl font-bold text-[#BFA05A]">
                            ₹{maskPrice(selectedVariant ? selectedVariant.price : activeProductInModal.price)}
                          </span>
                          <span className="text-[10px] text-stone-500 dark:text-[#FAF7F0]/50 font-sans font-light">MRP (Inclusive of all taxes)</span>
                        </div>
                      </div>

                      <p className="font-sans text-xs text-stone-600 dark:text-[#FAF7F0]/80 leading-relaxed font-light">
                        {activeProductInModal.fullDescription}
                      </p>

                      {/* Variant Picker (Sizes) */}
                      {activeProductInModal.variants && activeProductInModal.variants.length > 0 && (
                        <div>
                          <h4 className="font-mono text-[9px] font-bold text-[#0E2A14] dark:text-[#FAF7F0] uppercase tracking-wider mb-2">
                            Available Variants / Sizes
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {activeProductInModal.variants.map((v) => (
                              <button
                                key={v.name}
                                id={`variant-pill-${v.name.toLowerCase()}`}
                                onClick={() => setSelectedVariant(v)}
                                className={`py-1.5 px-3.5 rounded-full text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                                  selectedVariant?.name === v.name
                                    ? "bg-[#1B5E20] text-[#FAF7F0] border border-[#BFA05A]/40 shadow-sm"
                                    : "bg-stone-100 dark:bg-[#07190B]/40 text-stone-600 dark:text-[#FAF7F0]/70 border border-[#BFA05A]/15 hover:border-[#BFA05A]/35"
                                }`}
                              >
                                {v.name} – ₹{maskPrice(v.price)}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Benefits bullets list */}
                      <div>
                        <h4 className="font-serif text-xs font-bold text-[#0E2A14] dark:text-[#FAF7F0] uppercase tracking-wide border-b border-[#BFA05A]/10 pb-1.5 mb-2.5">
                          Key Benefits
                        </h4>
                        <ul className="flex flex-col gap-1.5">
                          {activeProductInModal.benefits.map((b, idx) => (
                            <li key={idx} className="flex gap-2 items-start text-xs text-stone-600 dark:text-[#FAF7F0]/75 font-light leading-relaxed">
                              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Usage details */}
                      <div>
                        <h4 className="font-serif text-xs font-bold text-[#0E2A14] dark:text-[#FAF7F0] uppercase tracking-wide border-b border-[#BFA05A]/10 pb-1.5 mb-2">
                          Directions for Usage
                        </h4>
                        <p className="font-sans text-xs text-stone-600 dark:text-[#FAF7F0]/75 leading-relaxed font-light">
                          {activeProductInModal.usage}
                        </p>
                      </div>
                    </div>

                    {/* Operational controls footer inside modal */}
                    <div className="mt-8 pt-5 border-t border-[#BFA05A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] font-bold text-stone-500 dark:text-[#FAF7F0]/60 uppercase tracking-widest">Quantity</span>
                        <div className="flex items-center gap-2 border border-[#BFA05A]/20 rounded-full py-1.5 px-3 bg-stone-100 dark:bg-[#07190B]/60">
                          <button
                            id="modal-qty-minus"
                            onClick={() => setModalQty(Math.max(1, modalQty - 1))}
                            className="p-1 text-[#1B5E20] dark:text-[#FAF7F0] hover:text-[#BFA05A] transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-sans text-xs font-bold w-6 text-center">
                            {modalQty}
                          </span>
                          <button
                            id="modal-qty-plus"
                            onClick={() => setModalQty(modalQty + 1)}
                            className="p-1 text-[#1B5E20] dark:text-[#FAF7F0] hover:text-[#BFA05A] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Control buttons */}
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          id="modal-add-to-cart"
                          onClick={handleAddToCartFromModal}
                          className="w-full sm:w-auto bg-transparent hover:bg-[#BFA05A]/5 text-[#1B5E20] dark:text-[#FAF7F0] font-sans font-semibold text-[10px] tracking-widest uppercase py-3.5 px-5 rounded-full border border-[#1B5E20]/30 dark:border-[#FAF7F0]/20 hover:border-[#BFA05A] transition-all text-center cursor-pointer"
                        >
                          Add to Cart
                        </button>
                        <button
                          id="modal-buy-now"
                          onClick={handleBuyNowFromModal}
                          className="w-full sm:w-auto bg-[#1B5E20] hover:bg-[#2E7D32] text-[#FAF7F0] font-sans font-semibold text-[10px] tracking-widest uppercase py-3.5 px-6 rounded-full shadow-md transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4" />
                          Buy via WhatsApp
                        </button>
                      </div>

                    </div>

                  </div>

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* SECTION E: TRUST STRIP */}
      <section
        id="shop-assurance-frequently"
        className="py-16 md:py-20 px-6 md:px-8 bg-stone-100 dark:bg-[#07190B]/30 border-t border-[#BFA05A]/10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center">
          
          {/* Glass trust chips band */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="w-6 h-6" />, title: "100% Sourced In India", desc: "Formulated in Gujarat using pure indigenous crops, zero fillers, and traditional herbal integrity." },
              { icon: <Award className="w-6 h-6" />, title: "Certified Batch Testing", desc: "Every batch is verified for microbial purity, heavy metals, and physical stability guidelines." },
              { icon: <MessageSquare className="w-6 h-6" />, title: "Seamless WhatsApp Dispatch", desc: "Connect with our team directly. No upfront stress, quick shipping, and custom dispatch logistics." }
            ].map((box, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0E2A14]/30 p-6 rounded-3xl border border-[#BFA05A]/10 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#1B5E20]/5 dark:bg-[#BFA05A]/5 border border-[#BFA05A]/20 flex items-center justify-center text-[#BFA05A]">
                  {box.icon}
                </div>
                <h4 className="font-serif text-base font-bold text-[#0E2A14] dark:text-[#FAF7F0]">{box.title}</h4>
                <p className="font-sans text-xs text-stone-500 dark:text-[#FAF7F0]/70 leading-relaxed font-light">{box.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ accordions */}
          <div className="max-w-3xl mx-auto w-full mt-6 text-left flex flex-col gap-3.5">
            <h3 className="font-serif text-2xl font-bold text-[#0E2A14] dark:text-[#FAF7F0] text-center mb-1">
              Shop Frequently Asked Questions
            </h3>
            {FAQS.map((faq, idx) => {
              const [isMiniOpen, setIsMiniOpen] = useState(false);
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#0E2A14]/10 rounded-2xl border border-[#BFA05A]/10"
                >
                  <button
                    id={`mini-faq-btn-${idx}`}
                    onClick={() => setIsMiniOpen(!isMiniOpen)}
                    className="w-full p-4.5 flex items-center justify-between text-left cursor-pointer text-[#0E2A14] dark:text-[#FAF7F0]"
                  >
                    <span className="font-serif text-xs md:text-sm font-bold pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-[#BFA05A] flex-shrink-0">
                      {isMiniOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isMiniOpen && (
                    <div className="px-4.5 pb-4.5 text-xs text-stone-600 dark:text-[#FAF7F0]/85 font-sans leading-relaxed border-t border-[#BFA05A]/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

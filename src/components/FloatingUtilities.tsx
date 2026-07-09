import { useState, useEffect } from "react";
import { MessageSquare, ArrowUp, Cookie, Home, ShoppingBag, Search, ShoppingCart, Send } from "lucide-react";
import { COMPANY_INFO } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface FloatingUtilitiesProps {
  currentPage: string;
  setPage: (page: string) => void;
  cartCount: number;
  toggleCart: () => void;
  onOpenSearch: () => void;
  isDarkMode: boolean;
}

export default function FloatingUtilities({
  currentPage,
  setPage,
  cartCount,
  toggleCart,
  onOpenSearch,
  isDarkMode
}: FloatingUtilitiesProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check if cookie consent is already accepted
    const accepted = localStorage.getItem("parasmani_cookie_accepted");
    if (!accepted) {
      const timer = setTimeout(() => {
        setShowCookieConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAcceptCookies = () => {
    localStorage.setItem("parasmani_cookie_accepted", "true");
    setShowCookieConsent(false);
  };

  const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    "Hello! I am visiting your Parasmani website and would like to inquire about your Ayurvedic products and services."
  )}`;

  return (
    <>
      {/* 1. Floating WhatsApp Button */}
      <a
        id="whatsapp-floating-button"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 bg-emerald-600 hover:bg-emerald-700 text-cream p-4 rounded-full shadow-[0_12px_24px_rgba(16,185,129,0.3)] hover:shadow-[0_16px_32px_rgba(16,185,129,0.5)] transition-all duration-300 group flex items-center justify-center hover:scale-110 active:scale-95"
      >
        <span className="absolute right-full mr-3 bg-forest-900/95 text-cream text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-sans uppercase tracking-widest border border-gold-500/20">
          Enquire on WhatsApp
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 animate-pulse group-hover:rotate-12 transition-transform duration-300"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.99C16.546 1.875 14.07 .843 11.43.843 5.994.843 1.571 5.263 1.568 10.702c0 1.696.444 3.351 1.286 4.808l-.968 3.535 3.623-.951zm12.338-7.393c-.328-.164-1.94-.959-2.241-1.07-.301-.11-.52-.164-.738.164-.219.329-.848 1.07-1.039 1.29-.192.219-.384.246-.712.081-1.09-.545-1.974-.953-2.756-2.296-.201-.345-.201-.564-.03-.736.152-.152.328-.383.492-.575.164-.192.219-.328.328-.548.11-.219.055-.411-.027-.575-.082-.164-.738-1.782-1.012-2.443-.267-.643-.538-.556-.738-.567-.19-.009-.411-.011-.63-.011-.219 0-.575.082-.876.411-.3.329-1.149 1.123-1.149 2.738 0 1.615 1.176 3.178 1.341 3.397.164.22 2.313 3.532 5.6 4.95 2.735 1.18 3.322 1.002 3.978.943.657-.059 1.94-.794 2.215-1.56.274-.767.274-1.423.192-1.56-.082-.138-.3-.22-.63-.383z" />
        </svg>
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>
      </a>

      {/* 2. Scroll to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            id="scroll-to-top-button"
            onClick={handleScrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-40 right-6 md:bottom-24 md:right-8 z-40 bg-cream dark:bg-forest-900 text-gold-500 hover:text-gold-300 p-3 rounded-full border border-gold-500/30 hover:border-gold-300 hover:scale-110 shadow-lg active:scale-95 cursor-pointer flex items-center justify-center transition-colors duration-200"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 3. Sticky Mobile Bottom Navigation Bar */}
      <nav
        id="mobile-bottom-navigation"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-cream/90 dark:bg-forest-900/90 backdrop-blur-md border-t border-line/30 flex items-center justify-around py-3 px-2 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
      >
        <button
          id="mob-nav-home"
          onClick={() => { setPage("home"); handleScrollToTop(); }}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            currentPage === "home" ? "text-leaf-500" : "text-ink-600 dark:text-cream/70"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-sans font-medium">Home</span>
        </button>

        <button
          id="mob-nav-products"
          onClick={() => { setPage("products"); handleScrollToTop(); }}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            currentPage === "products" ? "text-leaf-500" : "text-ink-600 dark:text-cream/70"
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="text-[10px] font-sans font-medium">Products</span>
        </button>

        <button
          id="mob-nav-search"
          onClick={onOpenSearch}
          className="flex flex-col items-center gap-1 cursor-pointer text-ink-600 dark:text-cream/70 hover:text-leaf-500"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-sans font-medium">Search</span>
        </button>

        <button
          id="mob-nav-cart"
          onClick={toggleCart}
          className="flex flex-col items-center gap-1 cursor-pointer text-ink-600 dark:text-cream/70 hover:text-leaf-500 relative"
        >
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-leaf-500 text-cream text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-cream animate-bounce">
              {cartCount}
            </span>
          )}
          <span className="text-[10px] font-sans font-medium">Cart</span>
        </button>

        <a
          id="mob-nav-whatsapp"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-ink-600 dark:text-cream/70 hover:text-emerald-500"
        >
          <MessageSquare className="w-5 h-5 text-emerald-500" />
          <span className="text-[10px] font-sans font-medium">WhatsApp</span>
        </a>
      </nav>

      {/* 4. Cookie Consent Bar */}
      <AnimatePresence>
        {showCookieConsent && (
          <motion.div
            id="cookie-consent-banner"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-16 md:bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-40 p-5 rounded-2xl luxury-glass dark:luxury-glass-dark shadow-[0_12px_40px_rgba(14,42,20,0.15)] flex flex-col gap-3"
          >
            <div className="flex gap-3 items-start">
              <Cookie className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold text-ink-900 dark:text-cream">
                  Nourishing Your Experience
                </h4>
                <p className="font-sans text-xs text-ink-600 dark:text-cream/80 leading-relaxed mt-1">
                  We use cookies to elevate your browsing experience, display personalized Ayurvedic solutions, and analyze organic site traffic.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2 text-xs">
              <button
                id="cookie-decline"
                onClick={() => setShowCookieConsent(false)}
                className="px-3 py-1.5 font-sans font-medium text-ink-600 dark:text-cream/70 hover:text-ink-900 dark:hover:text-cream rounded-lg transition-colors cursor-pointer"
              >
                Decline
              </button>
              <button
                id="cookie-accept"
                onClick={handleAcceptCookies}
                className="px-4 py-1.5 font-sans font-medium bg-gold-500 hover:bg-gold-300 text-forest-900 rounded-lg transition-all duration-300 cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                Accept Wisdom
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

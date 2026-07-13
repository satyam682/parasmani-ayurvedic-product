import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  currentPage: string;
  setPage: (page: string) => void;
  cartCount: number;
  toggleCart: () => void;
  onOpenSearch: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({
  currentPage,
  setPage,
  cartCount,
  toggleCart,
  onOpenSearch,
  isDarkMode,
  toggleDarkMode
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          document.documentElement.classList.add("scroll-down");
        } else {
          document.documentElement.classList.remove("scroll-down");
        }
      } else {
        document.documentElement.classList.remove("scroll-down");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.classList.remove("scroll-down");
    };
  }, []);

  const navLinks = [
    { label: "Home", key: "home" },
    { label: "About Us", key: "about" },
    { label: "Products", key: "products" },
    { label: "Export Services", key: "export" },
    { label: "Contact", key: "contact" }
  ];

  const handleLinkClick = (key: string) => {
    setPage(key);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHeaderLight = !isDarkMode;

  return (
    <>
      <header
        id="main-app-header"
        className={`fixed z-50 transition-all duration-300 font-sans left-1/2 -translate-x-1/2 w-[94%] sm:w-[92%] max-w-6xl rounded-full border backdrop-blur-md flex items-center justify-between ${
          isScrolled
            ? "top-3 py-1.5 pl-3.5 pr-4.5 min-[380px]:pl-4 min-[380px]:pr-5.5 md:px-6 bg-cream/90 dark:bg-forest-900/90 border-gold-500/25 shadow-lg shadow-gold-500/5"
            : "top-5 py-2 pl-4.5 pr-5.5 min-[380px]:pl-5 min-[380px]:pr-6.5 md:py-4 md:px-8 bg-cream/70 dark:bg-forest-900/70 border-gold-500/15 shadow-md"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          
          {/* Logo Brand Section */}
          <button
            id="brand-logo-button"
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-1.5 min-[380px]:gap-2 md:gap-2.5 cursor-pointer group text-left flex-shrink"
          >
            <div className="w-7.5 h-7.5 min-[380px]:w-8.5 min-[380px]:h-8.5 md:w-9.5 md:h-9.5 rounded-full overflow-hidden border border-gold-500/20 group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
              <img
                src="/logo.png"
                alt="Pitra Krapa Traders Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className={`font-serif leading-none tracking-wide transition-all duration-300 font-bold ${
                isScrolled ? "text-[10px] min-[380px]:text-xs sm:text-sm md:text-base" : "text-xs min-[380px]:text-sm sm:text-base md:text-lg"
              } ${isHeaderLight ? "text-forest-900" : "text-cream"} truncate`}>
                <span className="hidden min-[340px]:inline">{COMPANY_INFO.name}</span>
                <span className="inline min-[340px]:hidden">Pitra Krapa</span>
              </h1>
              <p className={`text-[7px] min-[380px]:text-[8px] md:text-[9px] tracking-widest uppercase mt-0.5 font-sans transition-all duration-300 whitespace-nowrap ${
                isHeaderLight ? "text-gold-600" : "text-gold-400"
              } hidden min-[380px]:block`}>
                {COMPANY_INFO.subtitle}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navbar-links" className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8 flex-shrink-0">
            {navLinks.map((link) => {
              const isActive = currentPage === link.key;
              return (
                <button
                  id={`navlink-${link.key}`}
                  key={link.key}
                  onClick={() => handleLinkClick(link.key)}
                  className={`relative py-2 font-medium text-xs lg:text-sm tracking-wider uppercase cursor-pointer transition-all duration-300 hover:text-gold-500 whitespace-nowrap ${
                    isActive
                      ? (isHeaderLight ? "text-forest-700 font-bold" : "text-white font-bold")
                      : isHeaderLight
                      ? "text-forest-900/80 hover:text-forest-900"
                      : "text-cream/80 hover:text-cream"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Controls Area */}
          <div className="flex items-center gap-1.5 min-[380px]:gap-2 md:gap-4 flex-shrink-0">
            
            {/* Live Search icon button */}
            <button
              id="search-utility-button"
              onClick={onOpenSearch}
              className={`p-1.5 min-[380px]:p-2 rounded-full cursor-pointer transition-colors duration-300 ${
                isHeaderLight
                  ? "text-forest-700 hover:text-forest-900 hover:bg-forest-700/5"
                  : "text-cream/90 hover:text-cream hover:bg-cream/10"
              }`}
              aria-label="Search Catalogue"
            >
              <Search className="w-4.5 h-4.5 min-[380px]:w-5 min-[380px]:h-5" />
            </button>

            {/* Slideout Cart icon trigger */}
            <button
              id="cart-utility-button"
              onClick={toggleCart}
              className={`p-1.5 min-[380px]:p-2 rounded-full cursor-pointer transition-colors duration-300 relative ${
                isHeaderLight
                  ? "text-forest-700 hover:text-forest-900 hover:bg-forest-700/5"
                  : "text-cream/90 hover:text-cream hover:bg-cream/10"
              }`}
              aria-label="View Shopping Cart"
            >
              <ShoppingCart className="w-4.5 h-4.5 min-[380px]:w-5 min-[380px]:h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 min-[380px]:top-0.5 min-[380px]:right-0.5 bg-leaf-500 dark:bg-gold-500 text-cream dark:text-forest-900 text-[8px] min-[380px]:text-[10px] font-bold h-3.5 w-3.5 min-[380px]:h-4 min-[380px]:w-4 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Enquire Now CTA button (Desktop) */}
            <button
              id="enquire-cta-header"
              onClick={() => handleLinkClick("contact")}
              className={`hidden lg:flex items-center justify-center font-sans font-medium text-xs tracking-widest uppercase py-2.5 px-5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer active:scale-95 ${
                isHeaderLight
                  ? "bg-forest-700 hover:bg-leaf-500 text-cream"
                  : "bg-gold-500 hover:bg-gold-300 text-forest-900"
              }`}
            >
              Enquire Now
            </button>

            {/* Hamburger trigger (Mobile) */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-1.5 min-[380px]:p-2 rounded-full cursor-pointer transition-colors duration-300 flex-shrink-0 mr-0.5 min-[380px]:mr-0 ${
                isHeaderLight
                  ? "text-forest-700 hover:text-forest-900 hover:bg-forest-700/5"
                  : "text-cream/90 hover:text-cream hover:bg-cream/10"
              }`}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 min-[380px]:w-6 min-[380px]:h-6" />
              ) : (
                <Menu className="w-5 h-5 min-[380px]:w-6 min-[380px]:h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Glassmorphic Hamburger Overlay (Mobile) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-cream/95 dark:bg-forest-900/98 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
              {navLinks.map((link, idx) => {
                const isActive = currentPage === link.key;
                return (
                  <motion.button
                    id={`mobile-navlink-${link.key}`}
                    key={link.key}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    onClick={() => handleLinkClick(link.key)}
                    className={`font-serif text-3xl font-medium tracking-wide text-left cursor-pointer transition-colors ${
                      isActive
                        ? "text-leaf-500 dark:text-gold-500"
                        : "text-ink-900 dark:text-cream/90 hover:text-gold-500"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}

              <motion.button
                id="mobile-menu-enquire-cta"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleLinkClick("contact")}
                className="w-full mt-6 bg-forest-700 dark:bg-gold-500 text-cream dark:text-forest-900 text-center py-4 px-6 rounded-full font-sans uppercase font-semibold text-sm tracking-widest cursor-pointer hover:bg-leaf-500 dark:hover:bg-gold-300 transition-colors shadow-md"
              >
                Enquire Now
              </motion.button>

              <div className="text-center mt-12 text-xs font-sans text-ink-600 dark:text-cream/50 tracking-widest uppercase">
                🌿 {COMPANY_INFO.subtitle} 🌿
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

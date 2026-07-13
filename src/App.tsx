import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSlideout from "./components/CartSlideout";
import FloatingUtilities from "./components/FloatingUtilities";
import SEO from "./components/SEO";

// Views
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ProductsView from "./components/ProductsView";
import ExportView from "./components/ExportView";
import ContactView from "./components/ContactView";

// Data types & assets
import { Product, CartItem } from "./types";
import { PRODUCTS, COMPANY_INFO, maskPrice } from "./data";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageFromPath = (path: string) => {
    const cleaned = path.replace(/^\//, "");
    if (!cleaned) return "home";
    const validPages = ["home", "about", "products", "export", "contact"];
    if (validPages.includes(cleaned)) {
      return cleaned;
    }
    return "home";
  };
  const currentPage = getPageFromPath(location.pathname);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [activeProductInModal, setActiveProductInModal] = useState<Product | null>(null);

  // Initialize and load states on load
  useEffect(() => {
    // 1. Load Cart
    const storedCart = localStorage.getItem("parasmani_cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (e) {
        console.error("Failed to load stored cart", e);
      }
    }

    // 2. Load Wishlist
    const storedWishlist = localStorage.getItem("parasmani_wishlist");
    if (storedWishlist) {
      try {
        setWishlist(JSON.parse(storedWishlist));
      } catch (e) {
        console.error("Failed to load stored wishlist", e);
      }
    }

    // 3. Load Dark Mode theme preference
    const storedTheme = localStorage.getItem("parasmani_dark_mode");
    if (storedTheme) {
      const parsedTheme = storedTheme === "true";
      setIsDarkMode(parsedTheme);
      document.documentElement.classList.toggle("dark", parsedTheme);
    } else {
      // Fallback: Default light theme
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Sync state modifications to Local Storage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("parasmani_cart", JSON.stringify(newCart));
  };

  const saveWishlist = (newWish: string[]) => {
    setWishlist(newWish);
    localStorage.setItem("parasmani_wishlist", JSON.stringify(newWish));
  };

  // Toggle visual dark mode
  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    localStorage.setItem("parasmani_dark_mode", String(nextMode));
    document.documentElement.classList.toggle("dark", nextMode);
  };

  // Switch navigation page
  const handleSetPage = (page: string) => {
    if (page === "home") {
      navigate("/");
    } else {
      navigate(`/${page}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add Item to shopping Cart
  const handleAddToCart = (product: Product, selectedSize?: string, selectedPrice?: number) => {
    const size = selectedSize || (product.variants && product.variants.length > 0 ? product.variants[0].name : undefined);
    const price = selectedPrice || (product.variants && product.variants.length > 0 ? product.variants[0].price : product.price);

    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.selectedSize === size
    );
    let updatedCart = [...cart];

    if (existingIndex > -1) {
      updatedCart[existingIndex].quantity += 1;
    } else {
      updatedCart.push({ product, quantity: 1, selectedSize: size, selectedPrice: price });
    }

    saveCart(updatedCart);
    // Auto-open slideout cart for user feedback
    setIsCartOpen(true);
  };

  // Adjust item quantity
  const handleUpdateQuantity = (id: string, newQty: number, size?: string) => {
    if (newQty <= 0) {
      handleRemoveItem(id, size);
      return;
    }
    const updatedCart = cart.map((item) =>
      item.product.id === id && item.selectedSize === size ? { ...item, quantity: newQty } : item
    );
    saveCart(updatedCart);
  };

  // Delete line item
  const handleRemoveItem = (id: string, size?: string) => {
    const updatedCart = cart.filter(
      (item) => !(item.product.id === id && item.selectedSize === size)
    );
    saveCart(updatedCart);
  };

  // Add Item + Trigger instant WhatsApp enquiry
  const handleBuyNow = (product: Product, quantity: number = 1, selectedSize?: string, selectedPrice?: number) => {
    const size = selectedSize || (product.variants && product.variants.length > 0 ? product.variants[0].name : undefined);
    const price = selectedPrice || (product.variants && product.variants.length > 0 ? product.variants[0].price : product.price);

    // Compile single product direct message
    let message = `Hello Parasmani Support Team,\n\n`;
    message += `I would like to place an order for:\n`;
    message += `Product Name: ${product.name}${size ? ` (${size})` : ""}\n`;
    message += `Quantity: ${quantity}\n`;
    message += `Price: ₹${maskPrice(price)} each\n`;
    message += `Subtotal: ₹${maskPrice(price * quantity)}\n\n`;
    message += `Please advise on direct dispatch shipping charges to my address. Thank you!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedText}`;
    
    // Open WhatsApp link
    window.open(whatsappUrl, "_blank");
  };

  // Toggle wishlist item
  const handleToggleWishlist = (id: string) => {
    let nextWish = [...wishlist];
    if (nextWish.includes(id)) {
      nextWish = nextWish.filter((x) => x !== id);
    } else {
      nextWish.push(id);
    }
    saveWishlist(nextWish);
  };

  // Render the currently matched View
  const renderView = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomeView
            setPage={handleSetPage}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            wishlist={wishlist}
            toggleWishlist={handleToggleWishlist}
            onOpenProductModal={setActiveProductInModal}
          />
        );
      case "about":
        return <AboutView setPage={handleSetPage} />;
      case "products":
        return (
          <ProductsView
            onOpenProductModal={setActiveProductInModal}
            onBuyNow={handleBuyNow}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            toggleWishlist={handleToggleWishlist}
            activeProductInModal={activeProductInModal}
            setActiveProductInModal={setActiveProductInModal}
          />
        );
      case "export":
        return <ExportView />;
      case "contact":
        return <ContactView />;
      default:
        return (
          <HomeView
            setPage={handleSetPage}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            wishlist={wishlist}
            toggleWishlist={handleToggleWishlist}
            onOpenProductModal={setActiveProductInModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-earth dark:bg-forest-950 transition-colors duration-300">
      
      {/* 1. Dynamic Meta head injection */}
      <SEO page={currentPage} activeProduct={activeProductInModal} />

      {/* 2. Sticky transparent visual header */}
      <Header
        currentPage={currentPage}
        setPage={handleSetPage}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
        onOpenSearch={() => {
          handleSetPage("products");
          setTimeout(() => {
            const input = document.getElementById("search-products-field");
            if (input) input.focus();
          }, 200);
        }}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* 3. Render matched main viewport page contents */}
      <main className="min-h-[70vh]">
        {renderView()}
      </main>

      {/* 4. Elegant footer */}
      <Footer setPage={handleSetPage} />

      {/* 5. Persistent utilities: WhatsApp, Back to Top, Cookies */}
      <FloatingUtilities
        currentPage={currentPage}
        setPage={handleSetPage}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
        onOpenSearch={() => {
          handleSetPage("products");
          setTimeout(() => {
            const input = document.getElementById("search-products-field");
            if (input) input.focus();
          }, 200);
        }}
        isDarkMode={isDarkMode}
      />

      {/* 6. Slide-out cart drawer panel */}
      <CartSlideout
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

    </div>
  );
}

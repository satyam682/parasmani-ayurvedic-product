import { X, Plus, Minus, Trash2, ShoppingBag, MessageSquare } from "lucide-react";
import { CartItem } from "../types";
import { COMPANY_INFO } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface CartSlideoutProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, newQty: number, size?: string) => void;
  onRemoveItem: (id: string, size?: string) => void;
}

export default function CartSlideout({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem
}: CartSlideoutProps) {
  
  const subtotal = cart.reduce((acc, item) => acc + (item.selectedPrice || item.product.price) * item.quantity, 0);

  // WhatsApp checkout message generator
  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `Hello Parasmani Ayurvedic Team,\n\nI would like to place an order with the following details:\n\n`;
    
    cart.forEach((item, index) => {
      const price = item.selectedPrice || item.product.price;
      const sizeStr = item.selectedSize ? ` - Variant: ${item.selectedSize}` : "";
      message += `${index + 1}. Product: ${item.product.name}${sizeStr}\n   Qty: ${item.quantity}\n   Price: ₹${price} each\n   Total: ₹${price * item.quantity}\n\n`;
    });

    message += `--------------------------------\n`;
    message += `Subtotal: ₹${subtotal}\n`;
    message += `--------------------------------\n\n`;
    message += `Please confirm the total shipping charges and shared payment/bank details to proceed.\nThank you!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop blur overlay */}
          <motion.div
            id="cart-overlay-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-900/40 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Cart Panel Drawer */}
          <motion.div
            id="cart-drawer-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#FAF7F0] dark:bg-[#0E2A14] shadow-2xl z-50 flex flex-col font-sans border-l border-[#BFA05A]/20"
          >
            {/* Header section */}
            <div className="p-6 border-b border-[#BFA05A]/15 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-[#BFA05A]" />
                <h3 className="font-serif text-lg font-bold text-[#0E2A14] dark:text-[#FAF7F0]">
                  Your Ayurvedic Cart
                </h3>
                {cart.length > 0 && (
                  <span className="bg-[#1B5E20] text-[#FAF7F0] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)} items
                  </span>
                )}
              </div>
              <button
                id="cart-close-button"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#1B5E20]/5 dark:hover:bg-[#FAF7F0]/5 text-[#0E2A14] dark:text-[#FAF7F0] cursor-pointer transition-colors"
                aria-label="Close Cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Line items list or empty state */}
            <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-5 no-scrollbar">
              {cart.length === 0 ? (
                <div className="flex-grow flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#1B5E20]/5 dark:bg-[#BFA05A]/5 border border-[#BFA05A]/15 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-[#BFA05A]" />
                  </div>
                  <div className="max-w-xs">
                    <h4 className="font-serif text-base font-bold text-[#0E2A14] dark:text-[#FAF7F0]">
                      Your Cart is Empty
                    </h4>
                    <p className="font-sans text-xs text-stone-600 dark:text-[#FAF7F0]/60 leading-relaxed mt-1">
                      No Ayurvedic healing formulas have been added yet. Visit our shop to select organic ointments, supplements, or oil blends.
                    </p>
                  </div>
                  <button
                    id="cart-empty-shop-cta"
                    onClick={onClose}
                    className="mt-2 bg-[#1B5E20] hover:bg-[#2E7D32] text-[#FAF7F0] text-xs uppercase tracking-widest py-3 px-6 rounded-full shadow-sm cursor-pointer transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => {
                  const itemPrice = item.selectedPrice || item.product.price;
                  const itemKey = `${item.product.id}-${item.selectedSize || "default"}`;
                  return (
                    <div
                      key={itemKey}
                      className="flex gap-4 p-4 rounded-xl bg-stone-100 dark:bg-[#07190B]/30 border border-[#BFA05A]/10 hover:border-[#BFA05A]/30 transition-colors relative"
                    >
                      {/* Item thumbnail */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-stone-200">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Item parameters */}
                      <div className="flex-grow flex flex-col gap-1 text-left">
                        <h4 className="font-serif text-sm font-bold text-[#0E2A14] dark:text-[#FAF7F0] leading-snug line-clamp-1 pr-6">
                          {item.product.name}
                        </h4>
                        
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className="text-[9px] font-sans uppercase text-[#BFA05A] font-semibold tracking-wider">
                            {item.product.category}
                          </span>
                          {item.selectedSize && (
                            <span className="text-[9px] font-mono bg-[#BFA05A]/10 text-[#BFA05A] dark:text-[#DCC79A] px-1.5 py-0.5 rounded font-bold uppercase">
                              {item.selectedSize}
                            </span>
                          )}
                        </div>

                        <p className="font-serif text-xs text-[#BFA05A] font-bold mt-0.5">
                          ₹{itemPrice} <span className="text-[9px] font-sans text-stone-600 dark:text-[#FAF7F0]/40 font-light">each</span>
                        </p>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            id={`cart-minus-${itemKey}`}
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1, item.selectedSize)}
                            className="p-1 rounded-full bg-[#FAF7F0] dark:bg-[#0E2A14] hover:bg-[#BFA05A]/10 border border-[#BFA05A]/15 text-[#1B5E20] dark:text-[#FAF7F0] cursor-pointer transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-sans text-xs font-semibold px-2">
                            {item.quantity}
                          </span>
                          <button
                            id={`cart-plus-${itemKey}`}
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1, item.selectedSize)}
                            className="p-1 rounded-full bg-[#FAF7F0] dark:bg-[#0E2A14] hover:bg-[#BFA05A]/10 border border-[#BFA05A]/15 text-[#1B5E20] dark:text-[#FAF7F0] cursor-pointer transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Trash Delete button */}
                      <button
                        id={`cart-remove-${itemKey}`}
                        onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-rose-500/10 text-stone-500 hover:text-rose-500 transition-colors cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {/* Subtotal & Checkout Section */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#BFA05A]/15 bg-[#FAF7F0] dark:bg-[#07190B] flex flex-col gap-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-sans text-stone-600 dark:text-[#FAF7F0]/70">Subtotal Price</span>
                  <span className="font-serif text-lg font-bold text-[#BFA05A]">₹{subtotal}</span>
                </div>
                <p className="font-sans text-[10px] text-stone-500 dark:text-[#FAF7F0]/50 text-left leading-relaxed">
                  *Delivery and custom shipping charges are calculated during order finalization over WhatsApp. No advance payment required.
                </p>
                <div className="grid grid-cols-1 gap-2 mt-1">
                  <button
                    id="cart-checkout-whatsapp"
                    onClick={handleCheckoutWhatsApp}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 px-5 rounded-full font-sans font-semibold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Checkout via WhatsApp
                  </button>
                  <button
                    id="cart-continue-shop"
                    onClick={onClose}
                    className="bg-transparent text-[#1B5E20] dark:text-[#FAF7F0] py-2.5 hover:text-[#BFA05A] text-xs tracking-wider uppercase font-semibold font-sans cursor-pointer text-center"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

const navLinks = [
  { label: "Framework", href: "#framework" },
  { label: "Menu", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop floating tab bar */}
      <div className="hidden md:flex justify-center pt-4 pb-2">
        <div className="flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-md border border-border px-2 py-1.5 shadow-lg">
          <a href="#" className="font-heading font-semibold text-base px-4">
            Tapas
          </a>
          <div className="w-px h-5 bg-border mx-1" />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-full px-3.5 py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-5 bg-border mx-1" />
          <Button asChild size="sm">
            <a href={COMPANY.bookingUrl} target="_blank" rel="noopener">Free Audit</a>
          </Button>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="md:hidden bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a href="#" className="font-heading font-normal text-xl">
              Tapas Growth
            </a>
            <button
              className="p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden border-t border-border bg-background"
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild size="sm" className="w-full mt-1">
                  <a href={COMPANY.bookingUrl} target="_blank" rel="noopener" onClick={() => setMobileOpen(false)}>
                    Free Audit
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-[family-name:var(--font-playfair)]">
            Tapas Growth
          </span>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#services" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                Menu
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#about" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#testimonials" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                Reviews
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button 
          variant="default" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Book a Table
        </Button>
      </nav>
    </header>
  );
}
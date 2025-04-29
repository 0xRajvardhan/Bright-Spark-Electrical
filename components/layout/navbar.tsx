"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const routes = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Zap
              className={cn(
                "h-8 w-8 transition-colors",
                isScrolled ? "text-blue-600" : "text-yellow-500"
              )}
            />
            <span
              className={cn(
                "font-bold text-xl tracking-tight transition-colors",
                isScrolled ? "text-blue-600" : "text-white"
              )}
            >
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "font-medium hover:text-yellow-500 transition-colors",
                  isScrolled ? "text-gray-700" : "text-white"
                )}
              >
                {route.label}
              </Link>
            ))}
            <Button variant="accent" size="sm">
              Call Now: {SITE_CONFIG.phone}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white mt-2 rounded-sm px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 font-medium py-2 hover:text-blue-600 transition-colors"
                >
                  {route.label}
                </Link>
              ))}
              <Button variant="accent" size="sm" className="mt-2">
                Call Now: {SITE_CONFIG.phone}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

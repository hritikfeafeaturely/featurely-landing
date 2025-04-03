"use client";

import Link from "next/link";
import { useState } from "react";

import { OutlineButton } from "./ui/outline-button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md bg-pure-black/70 border-b border-soft-lavender/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Featurely Home">
            <div className="text-xl md:text-2xl whitespace-nowrap text-white uppercase">
              Featurely
            </div>
          </Link>

          <div className="hidden items-center md:flex gap-8 lg:gap-12">
            <Link
              href="#how-it-works"
              className="text-white text-sm uppercase hover:text-gray-300 transition-colors"
            >
              How Featurely Works
            </Link>
            <Link
              href="/blogs"
              className="text-white text-sm uppercase hover:text-gray-300 transition-colors"
            >
              Resources
            </Link>

            <Link href="/get-early-access">
              <OutlineButton className="hidden md:block">
                Get early access
              </OutlineButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden py-4 backdrop-blur-md bg-deep-space-blue/80 border-b border-slate-indigo/20 z-50">
          <div className="px-5">
            <div className="flex flex-col space-y-4">
              <Link
                href="#how-it-works"
                className="text-sm uppercase hover:text-white text-white transition-colors py-2"
              >
                How Featurely Works
              </Link>
              <Link
                href="/blogs"
                className="text-sm uppercase hover:text-white text-white transition-colors py-2"
              >
                Resources
              </Link>
              <Link
                href="/get-early-access"
                className="text-sm uppercase hover:text-white text-white transition-colors py-2"
              >
                Get early access
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

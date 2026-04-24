"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: "About", href: "/", hasDropdown: true },
    { name: "What We Do", href: "/What-We-Do", hasDropdown: true },
    { name: "Jobs", href: "/Jobs", hasDropdown: true },
    { name: "Projects", href: "/Projects", hasDropdown: false },
    { name: "TG Academy", href: "/TG-Academy", hasDropdown: false },
    { name: "Strategic Partnership", href: "/Strategic-Partnership", hasDropdown: false },
    { name: "Pricing", href: "/Pricing", hasDropdown: false },
    { name: "Book a Consultation", href: "/Book-Consultation", hasDropdown: false },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden w-8 h-8 p-2 rounded-lg bg-hue-dark hover:bg-hue-lighter transition-colors cursor-pointer flex items-center justify-center"
      >
        <Bars3Icon className="w-4 h-4 text-white" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          {/* <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setIsOpen(false)}
          ></div> */}

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-[280px] sm:w-80 bg-hue-white shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <span className="text-lg sm:text-xl font-bold text-hue-primary">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-hue-dark" />
              </button>
            </div>

            {/* Account Button in Mobile Menu */}
            <div className="p-4 border-b border-gray-200">
              <Link href="/account" onClick={() => setIsOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-[4px] bg-hue-primary text-hue-white hover:bg-hue-lighter transition-colors cursor-pointer">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple flex items-center justify-center">
                    <Image
                      src="/images/user.png"
                      alt="user-picture"
                      width={14}
                      height={14}
                      className="sm:w-4 sm:h-4"
                      priority
                    />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm">Account</span>
                  <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-hue-white" />
                </button>
              </Link>
              <Link href="/task-assessment" onClick={() => setIsOpen(false)}>
                <button className="w-full mt-3 px-4 py-2 rounded-[4px] bg-hue-secondary text-white font-semibold text-xs sm:text-sm hover:bg-hue-secondary/80 transition-colors cursor-pointer">
                  Take Assessment
                </button>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3 text-sm sm:text-base text-hue-dark hover:text-hue-primary transition-colors cursor-pointer border-b border-gray-100 last:border-0"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

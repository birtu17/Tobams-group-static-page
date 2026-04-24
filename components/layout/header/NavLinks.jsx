import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function NavLinks() {
  const navItems = [
    { name: "About", href: "/about", hasDropdown: true },
    { name: "What We Do", href: "/What-We-Do", hasDropdown: true },
    { name: "Jobs", href: "/Jobs", hasDropdown: true },
    { name: "Projects", href: "/Projects", hasDropdown: false },
    { name: "TG Academy", href: "/TG-Academy", hasDropdown: false },
    { name: "Strategic Partnership", href: "/Strategic-Partnership", hasDropdown: false },
    { name: "Pricing", href: "/Pricing", hasDropdown: false },
    { name: "Book a Consultation", href: "/Book-Consultation", hasDropdown: false },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8 py-2 lg:py-3">
      {navItems.map((item) => (
        <Link 
          key={item.name} 
          href={item.href} 
          className="relative group py-1 lg:py-2 cursor-pointer"
        >
          <span className="flex items-center gap-0.5 sm:gap-1 text-hue-dark text-xs sm:text-sm lg:text-lg  hover:text-hue-primary transition-colors duration-300 whitespace-nowrap">
            {item.name}
            {item.hasDropdown && (
              <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-hue-dark group-hover:text-hue-primary transition-colors" />
            )}
          </span>

          {/* Underline effect */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hue-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
}

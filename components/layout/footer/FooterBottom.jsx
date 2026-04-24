import Link from "next/link";

export default function FooterBottom() {
  const legalLinks = [
    { name: "Term & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookies Rule", href: "/cookies" },
  ];

  return (
    <div className="border-t border-purple/10 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1312px] mx-auto">
        
        {/* Right side - Legal Links (shows first on small screens) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 order-1 md:order-2">
          {legalLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm underline underline-offset-4 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Left side - Copyright (shows after links on small screens) */}
        <div className="text-gray-400 text-sm text-center md:text-left order-2 md:order-1">
           Copyright &copy; Tobams Group, 2024. All rights reserved.
        </div>
        
      </div>
    </div>
  );
}
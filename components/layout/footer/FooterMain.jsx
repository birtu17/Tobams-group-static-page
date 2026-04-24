import Image from "next/image";
import Link from "next/link";

export default function FooterMain() {
  // Social media links data with proper icons
 const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: "/images/linkdin.png" },
  { name: "Instagram", href: "https://instagram.com", icon: "/images/instagram.png" },
  { name: "Twitter", href: "https://twitter.com", icon: "/images/twitter.png" },
];

  // What We Do - list items
  const whatWeDoLinks = [
    { name: "Sustainability Services", href: "/Sustainability" },
    { name: "Strategy Planning and Implementation", href: "/Strategy" },
    { name: "Tech Talent Solutions", href: "/Tech" },
    { name: "Training and Development", href: "/Training" },
    { name: "IT Consulting Services", href: "/IT " },
    { name: "Social Impact", href: "/Social " },
    { name: "Talent Recruitment", href: "/Talent " },
  ];

  // Company - list items
  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Jobs", href: "/jobs" },
    { name: "Our Founder", href: "/Our-Founder" },
    { name: "Business Model", href: "/Business" },
    { name: "The Team", href: "/Team" },
    { name: "Contact Us", href: "/Contact" },
    { name: "Blog", href: "/Blog" },
    { name: "FAQs", href: "/FAQs" },
    { name: "Testimonials", href: "/Testimonials" },
  ];

  // Solutions - list items
  const solutionLinks = [
    { name: "Tobams Group Academy", href: "/Tobams" },
    { name: "Help a Tech Talent", href: "/Help" },
    { name: "Campus Ambassadors Program", href: "/Campus" },
    { name: "Join Our Platform", href: "/Join" },
    { name: "Pricing", href: "/Pricing" },
    { name: "Book a Consultation", href: "/Book" },
    { name: "Join Our Slack Community", href: "/Join" },
  ];

  return (
    <div className="bg-primary-dark w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-16 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1312px] mx-auto">
        
        {/* Column 1: Logo + Description + Social Icons */}
        <div>
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/images/company-logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          
          {/* Description */}
          <p className="text-secondary-gray text-sm leading-relaxed mb-4">
            Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
          </p>
          
          {/* Social Media Icons - Horizontal with bg-hue-white */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-hue-white rounded-full flex items-center justify-center text-hue-primary hover:bg-hue-secondary hover:text-white transition-colors"
              >
            <Image
  src={social.icon}
  alt={social.name}
  width={16}
  height={16}
  className="w-5 h-5 object-contain group-hover:brightness-0 group-hover:invert"
/>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2: What We Do */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">What We Do</h3>
          <ul className="space-y-2">
            {whatWeDoLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-hue-white hover:text-hue-white/50 transition-colors text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-hue-white hover:text-hue-white/50 transition-colors text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Solutions */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Solution</h3>
          <ul className="space-y-2">
            {solutionLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-hue-white hover:text-hue-white/50 transition-colors text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
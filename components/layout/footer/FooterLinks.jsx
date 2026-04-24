import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function FooterLinks() {
  return (
    <div className="w-full">
      <div className="bg-hue-white/6 w-full max-w-[1312px] mx-auto lg:h-[221px] lg:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-8 sm:py-12 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-16 lg:h-full lg:items-center">
          
          {/* Column 1 */}
          <div className="text-left relative">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-hue-white mb-3 sm:mb-4">
             Registered Offices
            </h3>
            <p className="text-orange-lighter mb-2 text-sm sm:text-base">United Kingdom</p>
            <p className="text-hue-white text-xs sm:text-sm leading-relaxed">
              United Kingdom 07451196 (Registered by Company House)<br/> Vine Cottages, 215 North Street, Romford, Essex, United<br/> Kingdom, RM1 4QA
            </p>
            {/* Vertical line on the right */}
            <div className="hidden lg:block absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-[1px] h-[100px] bg-purple/10"></div>
          </div>

          {/* Column 2 */}
          <div className="text-left relative">
            <div className="h-[28px] sm:h-[32px] lg:h-[40px] mb-3 sm:mb-4"></div>
            <p className="text-orange-lighter mb-2 text-sm sm:text-base">Nigeria</p>
            <p className="text-hue-white text-xs sm:text-sm leading-relaxed">
RC 1048722 (Registered by the Corporate Affairs Commission)4, Muaz Close, Angwar-Rimi
            </p>
            {/* Vertical line on the right */}
            <div className="hidden lg:block absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-[1px] h-[100px] bg-purple/10"></div>
          </div>

          {/* Column 3 */}
          <div className="text-left">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-hue-white mb-3 sm:mb-4">
              Contact Information
            </h3>
            
            {/* Email*/}
            <div className="flex items-center justify-start gap-2 sm:gap-3 mb-3">
              <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-lighter flex-shrink-0" />
              <a 
                href="mailto:info@company.com" 
                className="text-hue-white hover:text-hue-white/50 transition-colors text-xs sm:text-sm lg:text-base break-all"
              >
                theteam@tobamsgroup.com
              </a>
            </div>
            
            {/* Phone*/}
            <div className="flex items-center justify-start gap-2 sm:gap-3">
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-lighter flex-shrink-0" />
              <a 
                href="tel:+1234567890" 
                className="text-hue-white hover:text-hue-white/50 transition-colors text-xs sm:text-sm lg:text-base"
              >
                +447886600748
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
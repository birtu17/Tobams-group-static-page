export default function Section9() {
  return (
    <div className="w-full py-8 sm:py-10 lg:py-12">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="w-full max-w-[1134px] mx-auto py-6 sm:py-8 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-16 bg-hue-primary rounded-lg sm:rounded-xl lg:rounded-2xl text-hue-white">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-8 text-center">
            {/* Description */}
            <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-semibold leading-relaxed">
              Want to accelerate professional growth and development at your organisation?
              <br className="hidden sm:block" />
              See how we can help.
            </p>
            
            {/* Button */}
            <button className="w-[180px] sm:w-[190px] md:w-[200px] lg:w-[214px] h-[40px] sm:h-[42px] md:h-[44px] lg:h-[48px] bg-hue-white border-[1px] border-hue-primary text-hue-dark text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-semibold rounded-[4px] hover:bg-gray-100 transition-colors cursor-pointer">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Section1() {
  return (
    <div className="w-full min-h-[317px] lg:min-h-[511px] relative bg-[url('/images/about-bg.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content Container*/}
      <div className="relative w-full min-h-[317px] lg:min-h-[511px] flex items-center justify-center">
        <div className="w-full px-6 lg:px-16 py-10 lg:py-28">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl lg:max-w-4xl mx-auto gap-6 lg:gap-10">
            
            {/* Button 1*/}
            <button className="w-[160px] lg:w-[193px] h-[40px] lg:h-[45px] rounded-full text-hue-white font-semibold text-[12px] lg:text-[14px] bg-hue-white/10 hover:bg-hue-white/20 transition-colors cursor-pointer">
              WHAT WE DO
            </button>

            {/* Title */}
            <p className="text-[24px] lg:text-[56px] font-bold text-hue-white leading-tight">
              Training and Development
            </p>

            {/* Paragraph */}
            <p className="text-[14px] lg:text-[18px] font-semibold text-hue-white max-w-3xl">
              Our comprehensive range of programs and resources is designed to
              enhance skills, broaden knowledge, and propel careers forward in
              today's ever-evolving landscape.
            </p>

            {/* Button 2 */}
            <button className="w-[180px] lg:w-[214px] h-[40px] lg:h-[48px] rounded-[4px] text-hue-white font-semibold text-[14px] lg:text-[18px] bg-hue-primary hover:bg-hue-lighter transition-colors cursor-pointer">
              Book a Consultation
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

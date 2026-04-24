export default function FooterTop() {
  return (
    <div className="border-b border-gray-lighter bg-second-dark w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1312px] mx-auto">
        
        {/* Left side - Two sentences */}
        <div>
          <p className="text-hue-white text-[18px] lg:text-[18px] sm:text-[14px] font-normal mb-2">
            Ready to be a part of something extraordinary?
          </p>
          <p className="text-hue-white text-[28px] lg:text-[32px] sm:text-[20px] font-semibold mb-2">
            Let's work together to create a difference
          </p>
        </div>
        
        {/* Right side - Button */}
        <div>
          <button className="w-[151px] h-[48px] px-6 py-3 bg-hue-primary text-white rounded-[4px] font-semibold text-[18px] hover:bg-hue-primary/80 transition-colors whitespace-nowrap">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
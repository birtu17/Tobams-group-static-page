import Image from "next/image";

export default function Section6() {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 bg-light-gray">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[10px] lg:gap-8 xl:gap-10 p-4 sm:p-6 md:p-8 lg:p-10 rounded-[20px] bg-purple-dark">
          
          {/* Title */}
          <div className="block lg:hidden w-full text-hue-white">
            <h1 className="text-[24px] sm:text-[28px] font-semibold leading-tight">
              Management Development Program
            </h1>
          </div>
          
          {/* Image*/}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/development-program.jpg"
              alt="management-development-program"
              width={592}
              height={639}
              className="w-full max-w-[350px] sm:max-w-[450px] h-[232px] sm:h-[232px] md:max-w-[550px] lg:max-w-[592px] lg:h-[639px] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] object-cover"
              priority
            />
          </div>

          {/* Content*/}
          <div className="w-full lg:w-1/2 text-hue-white">
            
            {/* Title*/}
            <h1 className="hidden lg:block text-[24px] sm:text-[16px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold leading-tight mb-3 sm:mb-4">
              Management Development Program
            </h1>
            
            {/* Description*/}
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal mb-4 sm:mb-5 md:mb-6 lg:mb-[32px] leading-relaxed">
              Tabomas Group offers a comprehensive Management Development
              Program designed to equip corporate organisations with the
              high-performing leaders they need to thrive.
            </p>
            
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Our program includes workshops, seminars, coaching sessions,
              online courses, and experiential learning opportunities designed
              to improve leadership, strategic thinking, communication, and
              other essential managerial competencies for corporate
              organizations.
            </p>

            <div className="flex flex-col gap-[25px]">
              
              <div className="flex items-center gap-2 bg-purple-lighter px-3 sm:px-4 py-2 rounded-[8px] w-full sm:w-auto">
                <Image
                  src="/images/Vector-white.png"
                  alt="icon"
                  width={16}
                  height={16}
                  className="lg:w-[20px] lg:h-[20px] w-4 h-4 flex-shrink-0"
                />
                <span className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal">
                  Enhanced Leadership Skill
                </span>
              </div>

              <div className="flex items-center gap-2 bg-purple-lighter px-3 sm:px-4 py-2 rounded-[8px] w-full sm:w-auto">
                <Image
                  src="/images/Vector-white.png"
                  alt="icon"
                  width={16}
                  height={16}
                  className="lg:w-[20px] lg:h-[20px] w-4 h-4 flex-shrink-0"
                />
                <span className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal">
                  Improved Employee Engagement
                </span>
              </div>

              <div className="flex items-center gap-2 bg-purple-lighter px-3 sm:px-4 py-2 rounded-[8px] w-full sm:w-auto">
                <Image
                  src="/images/Vector-white.png"
                  alt="icon"
                  width={16}
                  height={16}
                  className="lg:w-[20px] lg:h-[20px] w-4 h-4 flex-shrink-0"
                />
                <span className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal">
                  Stronger Organizational Culture
                </span>
              </div>

              <div className="flex items-center gap-2 bg-purple-lighter px-3 sm:px-4 py-2 rounded-[8px] w-full sm:w-auto">
                <Image
                  src="/images/Vector-white.png"
                  alt="icon"
                  width={16}
                  height={16}
                  className="lg:w-[20px] lg:h-[20px] w-4 h-4 flex-shrink-0"
                />
                <span className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal">
                  Sustainable Growth
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

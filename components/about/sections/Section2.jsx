import Image from "next/image";

export default function Section2() {
  return (
    
    <div className="w-full py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-20 p-4 sm:p-6 md:p-8 lg:p-12 lg:px-16 bg-hue-primary/10 mx-2 sm:mx-4 md:mx-6 lg:mx-0 rounded-lg lg:rounded-none">
        
        {/* Image */}
        <div className="hidden lg:flex lg:w-auto lg:justify-center">
          <Image
            src="/images/lms.png"
            alt="learning-management-system-picture"
            width={557}
            height={568}
            className="w-[556.88px] h-[568px] rounded-[357.57px] object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full lg:w-[675.12px]">
          
          {/* Title */}
          <div className="text-center lg:text-left">
            <p className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-bold text-hue-primary leading-tight">
              Learning Management System
            </p>
          </div>

          <div className="flex justify-center lg:hidden">
            <Image
              src="/images/lms.png"
              alt="learning-management-system-picture"
              width={327}
              height={327}
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[327px] md:h-[327px] rounded-[357.57px] object-cover"
              priority
            />
          </div>

          {/* Description Box */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 rounded-lg bg-hue-primary/10">
            
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal text-gray-700 leading-relaxed">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today's competitive tech
              landscape.
            </p>

            <h3 className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-bold text-hue-primary">
              Some of our courses include:
            </h3>

            <div className="flex flex-col lg:flex-row flex-wrap gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-2 sm:gap-y-3">
              {/* Column 1 */}
              <ul className="flex flex-col gap-1 lg:gap-2 list-disc list-inside">
                <li className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-gray-700">Business Analysis</li>
                <li className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-gray-700">Entrepreneurship</li>
              </ul>

              {/* Column 2 */}
              <ul className="flex flex-col gap-1 lg:gap-2 list-disc list-inside">
                <li className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-gray-700">Design Thinking</li>
                <li className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-gray-700">Career Development</li>
              </ul>

              {/* Column 3 */}
              <ul className="flex flex-col gap-1 lg:gap-2 list-disc list-inside">
                <li className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-gray-700">Effective Communication</li>
                <li className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-gray-700">Business model</li>
              </ul>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="flex justify-start">
            <button className="w-[140px] sm:w-[146px] md:w-[150px] lg:w-[173px] h-[36px] sm:h-[38px] md:h-[42px] lg:h-[48px] rounded-[4px] py-1.5 sm:py-2 md:py-2.5 lg:py-[10.5px] px-3 sm:px-4 md:px-5 lg:px-6 bg-hue-primary text-hue-white text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-semibold transition-colors hover:bg-hue-lighter flex items-center justify-center gap-1 lg:gap-2 cursor-pointer">
              Learn More 
              <span className="text-[14px] sm:text-[15px] md:text-[18px] lg:text-[20px] inline-block transform -rotate-45">→</span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

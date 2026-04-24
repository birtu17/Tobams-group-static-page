import Image from "next/image";

export default function Section7() {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-16">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="rounded-[16px] p-4 sm:p-6 md:p-8 lg:p-10 bg-orange-lighter/20">
          
          {/*Title*/}
          <div className="text-center lg:text-left mb-6 lg:mb-8">
            <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-blue mb-2">
              Learning With Our CEO:
            </h3>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold text-hue-primary leading-tight">
              Transformation Hub With Jite Newton
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal text-hue-dark mt-4 lg:mt-6 leading-relaxed">
              Transformation Hub with Jite Newton is a flagship webinar series
              curated by the CEO, Dr. Jite Newton. Designed to elevate career
              trajectories and leadership capabilities, this exclusive event
              offers invaluable insights and strategies for personal and
              professional growth. Whether you're seeking to advance your career
              or enhance your leadership skills, the Transformation Hub provides
              a transformative learning experience to unlock your full potential
              and drive success in your endeavors.
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-[48px]">
            
            {/* Image */}
            <div className="w-full lg:w-1/2 flex items-center">
              <Image
                src="/images/transformation-hub.jpg"
                alt="transformation-hub-picture"
                width={560}
                height={340}
                className="w-full max-w-[295px] h-[232px] sm:max-w-[400px] sm:h-[280px] md:max-w-[500px] md:h-[320px] lg:max-w-[560px] lg:h-[340px] rounded-[8px] object-cover mx-auto lg:mx-0"
              />
            </div>

            {/* Lists Container */}
            <div className="w-full lg:w-1/2 bg-hue-white/30 py-6 sm:py-8 px-4 sm:px-6 lg:py-6 lg:px-8 flex items-center">
              <div className="flex flex-col w-full">
                
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full">
                  {/* Left Column Lists */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 bg-hue-white px-3 sm:px-4 py-2 rounded-[8px] mb-3 sm:mb-4">
                      <Image
                        src="/images/Vector-purple.png"
                        alt="icon"
                        width={16}
                        height={16}
                        className="lg:w-[20px] lg:h-[20px] w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal text-hue-dark">
                        Strategic Leadership
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-hue-white px-3 sm:px-4 py-2 rounded-[8px] mb-3 sm:mb-4">
                      <Image
                        src="/images/Vector-purple.png"
                        alt="icon"
                        width={16}
                        height={16}
                        className="lg:w-[20px] lg:h-[20px] w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal text-hue-dark">
                        Career Advancement
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-hue-white px-3 sm:px-4 py-2 rounded-[8px]">
                      <Image
                        src="/images/Vector-purple.png"
                        alt="icon"
                        width={16}
                        height={16}
                        className="lg:w-[20px] lg:h-[20px] w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal text-hue-dark">
                        Personal Growth
                      </span>
                    </div>
                  </div>

                  {/* Right Column Lists */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 bg-hue-white px-3 sm:px-4 py-2 rounded-[8px] mb-3 sm:mb-4">
                      <Image
                        src="/images/Vector-purple.png"
                        alt="icon"
                        width={16}
                        height={16}
                        className="lg:w-[20px] lg:h-[20px] w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal text-hue-dark">
                        Executive Coaching
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-hue-white px-3 sm:px-4 py-2 rounded-[8px] mb-3 sm:mb-4">
                      <Image
                        src="/images/Vector-purple.png"
                        alt="icon"
                        width={16}
                        height={16}
                        className="lg:w-[20px] lg:h-[20px] w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal text-hue-dark">
                        Innovation Strategy
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-hue-white px-3 sm:px-4 py-2 rounded-[8px]">
                      <Image
                        src="/images/Vector-purple.png"
                        alt="icon"
                        width={16}
                        height={16}
                        className="lg:w-[20px] lg:h-[20px] w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal text-hue-dark">
                        Sustainable Growth
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button*/}
                <div className="flex sm:justify-start mt-6 sm:mt-8">
                  <button className="w-[153px] h-[45px] rounded-[4px] py-2 px-4 bg-hue-primary text-hue-white text-[14px] sm:text-[16px] font-semibold transition-colors hover:bg-hue-lighter flex items-center justify-center gap-1 cursor-pointer">
                    Learn More 
                    <span className="text-[16px] inline-block transform -rotate-45">→</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
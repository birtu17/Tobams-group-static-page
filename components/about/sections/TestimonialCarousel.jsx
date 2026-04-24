"use client";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Container from "@/components/common/Container";

export default function TestimonialCarousel({ testimonials }) {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <Container>
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-[24px] sm:text-[20px] md:text-[32px] lg:text-[40px] xl:text-[40px] font-bold text-hue-dark mb-3 sm:mb-4">
            Testimonials
          </h2>
        </div>

        {/* Static Cards Container */}
        <div className="relative px-4 sm:px-6 md:px-8 lg:px-0">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full min-h-[220px] sm:min-h-[230px] lg:h-[244px] bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6 border-l-[2px] border-orange-500 ${
                  index >= 1 ? "hidden lg:block" : ""
                }`}
              >
                {/* User Info */}
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.userImage}
                      alt={testimonial.userName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hue-dark text-[14px] sm:text-[14px] lg:text-[16px]">
                      {testimonial.userName}
                    </h4>
                    <p className="text-[12px] sm:text-[12px] lg:text-[14px] text-gray font-normal">
                      {testimonial.profession}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-hue-dark leading-relaxed line-clamp-4 text-[13px] sm:text-[14px] lg:text-[18px]">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons*/}
        <div className="flex justify-end items-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-6 md:px-8 lg:px-0">
          {/* Previous Button */}
          <button
            className="w-[32px] h-[32px] rounded-[8px] bg-orange-50 flex items-center justify-center hover:bg-orange-100 transition-colors cursor-pointer opacity-50"
            disabled
            aria-label="Previous (disabled)"
          >
            <ChevronLeftIcon className="w-5 h-5 text-hue-secondary font-bold stroke-2" />
          </button>

          {/* Next Button */}
          <button
            className="w-[32px] h-[32px] rounded-[8px] bg-orange-50 flex items-center justify-center hover:bg-orange-100 transition-colors cursor-pointer opacity-50"
            disabled
            aria-label="Next (disabled)"
          >
            <ChevronRightIcon className="w-5 h-5 text-hue-secondary font-bold stroke-2" />
          </button>
        </div>
      </Container>
    </section>
  );
}

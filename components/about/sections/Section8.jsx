export default function Section8() {
  return (
    <div className="w-full py-8 sm:py-10 lg:py-12">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-hue-primary/10 rounded-lg">
          
          {/* Title*/}
          <div className="text-center lg:text-left mb-8 sm:mb-10 md:mb-12 lg:mb-[62px]">
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] font-bold text-hue-primary mb-3 sm:mb-4">
              Training The Consultant
            </h1>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[18px] font-semibold text-hue-primary mb-3 sm:mb-4">
              Maximise Your Potential as Certified Trainer:
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal text-hue-dark leading-relaxed max-w-4xl mx-auto lg:mx-0">
              With the help of our Training Consultants program, take a
              revolutionary step toward becoming a distinguished certified
              training consultant. Learn from professionals in the field who
              will immerse yourself in a thorough curriculum, and hone your
              training methods through interactive workshops. Participating in
              our program will enable you to gain expertise in diverse courses
              while also developing the abilities to mentor and encourage others
              in their career advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 bg-hue-primary p-4 sm:p-6 lg:p-8 rounded-lg mb-8 sm:mb-10 lg:mb-[62px]">
            
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div>
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-bold text-hue-white mb-2">
                  Expert-Led Learning
                </h3>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-hue-white/90 leading-relaxed">
                  Gain insight from seasoned professionals in the field as they
                  mentor you through the subtlety of business analysis.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-bold text-hue-white mb-2">
                  Comprehensive Curriculum
                </h3>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-hue-white/90 leading-relaxed">
                  Access a robust curriculum that covers fundamental principles
                  and advanced methodologies, ensuring a well-rounded
                  understanding.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div>
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-bold text-hue-white mb-2">
                  Interactive Workshops
                </h3>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-hue-white/90 leading-relaxed">
                  Engage in hands-on workshops designed to enhance your training
                  capabilities and provide practical insights.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-bold text-hue-white mb-2">
                  Global Recognition
                </h3>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-hue-white/90 leading-relaxed">
                  You will attain a globally recognized certification, opening
                  doors to new career opportunities and industry recognition.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-start">
            <button className="w-[140px] sm:w-[153px] lg:w-[173px] h-[40px] sm:h-[44px] lg:h-[48px] rounded-[4px] py-2 lg:py-[10.5px] px-4 lg:px-6 bg-hue-primary text-hue-white text-[14px] sm:text-[16px] lg:text-[18px] font-semibold transition-colors hover:bg-hue-lighter flex items-center justify-center gap-1 lg:gap-2 cursor-pointer">
              Learn More 
              <span className="text-[16px] lg:text-[20px] inline-block transform -rotate-45">→</span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

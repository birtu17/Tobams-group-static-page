import Image from "next/image";
export default function TypicalSections({
  title,
  description,
  listItems = [],
  imageSrc,
  imagePosition = "right",
}) {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile View */}
        <div className="md:hidden">
          <h2 className="text-2xl font-semibold text-hue-primary mb-4">{title}</h2>
          
          <div className="mb-6">
            <Image
              src={imageSrc}
              alt={title}
              width={327}
              height={229}
              className="w-full h-auto object-cover rounded-[30px_24px_40px_23px]"
              priority
            />
          </div>
          
          <p className="text-gray-600 mb-4">{description}</p>

          {listItems.length > 0 && (
            <div>
              <h3 className="font-semibold text-hue-primary mb-2">Some of our courses include:</h3>
              <div className="flex flex-col gap-2">
                {listItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Image src="/images/Vector.png" alt="icon" width={16} height={16} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tablet & Desktop View */}
        <div className={`hidden md:flex ${imagePosition === "right" ? "flex-row" : "flex-row-reverse"} gap-8 lg:gap-[120px] items-center`}>
          {/* Image */}
          <div className="w-1/2">
            <Image
              src={imageSrc}
              alt={title}
              width={600}
              height={378}
              className="w-full h-auto object-cover rounded-tl-[33px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px]"
              priority
            />
          </div>

          {/* Content */}
          <div className="w-1/2">
            <h2 className="text-2xl lg:text-[40px] font-semibold lg:font-bold text-hue-primary mb-3 lg:mb-4">
              {title}
            </h2>
            
            <p className="text-base lg:text-[18px] text-gray-600 mb-4 lg:mb-6">
              {description}
            </p>

            {listItems.length > 0 && (
              <div>
                <h3 className="font-semibold text-hue-primary mb-2 lg:mb-3 text-base lg:text-[18px]">
                  Some of our courses include:
                </h3>
                <div className="flex flex-col gap-2 lg:gap-3">
                  {listItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Image 
                        src="/images/Vector.png" 
                        alt="icon" 
                        width={16} 
                        height={16} 
                        className="lg:w-5 lg:h-5"
                      />
                      <span className="text-gray-700 text-base lg:text-[18px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

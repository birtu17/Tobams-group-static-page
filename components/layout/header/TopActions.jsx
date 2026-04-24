import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function TopActions() {
  return (
    <div className="flex items-center gap-3 sm:gap-4 lg:gap-8">
      {/* Account button */}
      <Link href="/account">
        <button className="w-[167px] h-[48px] flex items-center justify-center gap-1 sm:gap-2 lg:gap-3 px-2 sm:px-2 lg:px-4 py-2 sm:py-2 rounded-[4px] border border-hue-primary bg-hue-primary text-hue-white hover:bg-hue-lighter transition-colors cursor-pointer">
          <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full bg-purple flex items-center justify-center">
            <Image
              src="/images/user.png"
              alt="user-picture"
              width={14}
              height={14}
              className="sm:w-4 sm:h-4 lg:w-6 lg:h-6"
              priority
            />
          </div>
          <span className="text-hue-white font-semibold text-xs sm:text-sm lg:text-base whitespace-nowrap">
            Account
          </span>
          <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-hue-white" />
        </button>
      </Link>
      
      {/* Assessment button */}
      <Link href="/task-assessment">
        <button className="lg:w-[183px] lg:h-[48px] px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-[10.5px] rounded-[4px] bg-hue-secondary text-hue-white text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap hover:bg-hue-secondary/80 transition-colors cursor-pointer">
          Take Assessment
        </button>
      </Link>
    </div>
  );
}
import Link from "next/link";
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/company-logo.png"
        alt="Company Logo"
        width={165.71}
        height={64}
        className="w-[100px] h-[34px] sm:w-[123.85px] sm:h-[42px] lg:w-[165.71px] lg:h-[64px]"
        priority
      />
    </Link>
  );
}

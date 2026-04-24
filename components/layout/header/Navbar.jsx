import Logo from "./Logo";
import TopActions from "./TopActions";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="bg-hue-white w-full">
      <div className="border-b border-purple max-lg:border-none">
        <div className="px-4 sm:px-6 lg:px-16 py-3 sm:py-4 lg:py-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <Logo />
              <div className="hidden lg:block">
                <TopActions />
              </div>
              <div className="block lg:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="px-4 sm:px-6 lg:px-16 py-3 lg:py-5">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
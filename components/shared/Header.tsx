"use client";

// components
import { BrandLogo, MobileNav } from "@/components/shared";
import modifyComponentClassName from "@/utils/modifyComponentClassName";

// type
import { StaticImageData } from "next/image";
interface Props extends IExtraClassNames {
  logo: StaticImageData;
}

const Header = ({ logo, className = "" }: Props) => {
  return (
    <div
      className={modifyComponentClassName(className, "pt-5 lg:pt-8 bg-white")}
    >
      <div className="grid grid-cols-[1fr_3fr_1fr] 2md:grid-cols-2 items-center">
        {/* website logo */}
        <BrandLogo
          logo={logo}
          className="justify-self-center 2md:justify-self-start col-start-2 col-end-3 2md:col-start-1 2md:col-end-2"
        />

        {/* mobile nav button and mobile nav menu */}
        <div className="flex items-center gap-3 justify-self-end">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;

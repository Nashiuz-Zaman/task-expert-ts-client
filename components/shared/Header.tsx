"use client";

// components
import { BrandLogo, MobileNav, HeaderAuthBtns } from "@/components/shared";
import InnerContainer from "@/components/containers/InnerContainer";

// data
import logoPrimary from "@/assets/websiteLogo/logo-primary.webp";

const Header = ({ className = "" }: IExtraClassNames) => {
  return (
    <header className={`pt-5 lg:pt-6 ${className}`}>
      <InnerContainer>
        {/* login/ register/ account name */}
        <HeaderAuthBtns className="mb-5" />

        <div className="grid grid-cols-[1fr_3fr_1fr] 2md:grid-cols-2 items-center">
          {/* website logo */}
          <BrandLogo
            logo={logoPrimary}
            className="justify-self-center 2md:justify-self-start col-start-2 col-end-3 2md:col-start-1 2md:col-end-2"
          />
          {/* auth related options login/logout etc */}
          <div className="flex items-center gap-3 justify-self-end">
            {/* mobile nav button and mobile nav menu */}
            <MobileNav />
          </div>
        </div>
      </InnerContainer>
    </header>
  );
};

export default Header;

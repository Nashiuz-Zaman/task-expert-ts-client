"use client";

import { useEffect } from "react";

// components
import { CloseBtn, MobileMenuBtn, ButtonBtn } from "@/components/buttons";
import { BrandLogo } from "@/components/shared";
import DashboardNavContent from "./DashboardNav/DashboardNavContent";

// hook
import {
  useDashboardMobileNav,
  useEscapeClose,
  useLoginMethods,
  useClickOutside,
  useStopScrolling,
} from "@/hooks";

// data
import { logoPrimaryExport } from "@/uiData/imageExports";

interface IProps {
  className?: IExtraClassNames["className"];
  MenuBtnClassName?: IExtraClassNames["className"];
}

const DashboardMobileNav = ({
  className = "",
  MenuBtnClassName = "",
}: IProps) => {
  // initial functions and data extraction
  const {
    dashboardMobileNavOpen,
    openDashboardMobileNav,
    closeDashboardMobileNav,
  } = useDashboardMobileNav();
  const { handleLogout } = useLoginMethods();
  const { stopYAxisScrolling } = useStopScrolling();

  useEffect(() => {
    stopYAxisScrolling(dashboardMobileNavOpen);
  }, [dashboardMobileNavOpen, stopYAxisScrolling]);

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as Element).closest(".dashboard-mobilenav-focus")) {
      closeDashboardMobileNav();
    }
  };

  useClickOutside(dashboardMobileNavOpen, handleClickOutside);
  useEscapeClose(closeDashboardMobileNav);

  return (
    <div className={`dashboard-mobilenav-focus ${className}`}>
      <MobileMenuBtn
        className={MenuBtnClassName}
        onClickFunction={() => openDashboardMobileNav()}
      />

      {/* mobile navigation */}
      <nav
        className={`block h-screen fixed top-0 left-0 w-full xs:w-[70%] sm:w-[50%] md:w-[40%] lg:w-[35%] 2xl:w-[20%] -translate-x-full origin-center transition-all duration-default z-40 overflow-x-hidden ${
          dashboardMobileNavOpen ? "!translate-x-0" : ""
        } p-6 bg-white`}
      >
        {/* close nav button */}
        <CloseBtn
          onClickFunction={closeDashboardMobileNav}
          className="mb-4 md:mb-7 text-xl md:text-3xl"
        />

        {/* brandlogo */}
        <BrandLogo
          logo={logoPrimaryExport}
          onClickFunction={closeDashboardMobileNav}
          className="h-6 mb-6 md:mb-12 xl:h-10"
        />

        <DashboardNavContent />

        {/* signout button */}
        <ButtonBtn
          onClickFunction={() => {
            handleLogout();
            closeDashboardMobileNav();
          }}
          className="mt-11"
        >
          Sign Out
        </ButtonBtn>
      </nav>
    </div>
  );
};

export default DashboardMobileNav;

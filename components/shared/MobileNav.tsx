"use client";

// react
import { useEffect } from "react";

// next
import Link from "next/link";

// components
import { CloseBtn, ButtonBtn, MobileMenuBtn } from "./buttons";
import BrandLogo from "./BrandLogo";

// hook
// import useMobileNavigation from "@/hooks/useMobileNavigation";
// import useEscapeClose from "@/hooks/useEscapeClose";
// import useLoginMethods from "@/hooks/useLoginMethods";
// import useClickOutside from "@/hooks/useClickOutside";
// import useStopScrolling from "@/hooks/useStopScrolling";

type OnClickFunction = IOnClickFunctionGeneric["onClickFunction"];
// redux
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

// data
import logoPrimary from "@/assets/websiteLogo/logo-primary.webp";

const MobileNav = ({ className = "" }: IExtraClassNames) => {
  const { profileData } = useSelector((store: RootState) => store.auth);
  // const { mobileNavOpen, openMobileNav, closeMobileNav } =
  //   useMobileNavigation();
  // const { handleLogout } = useLoginMethods();
  // const { stopYAxisScrolling } = useStopScrolling();

  // useEffect(() => {
  //   stopYAxisScrolling(mobileNavOpen);
  // }, [mobileNavOpen, stopYAxisScrolling]);

  // const handleClickOutside: OnClickFunction = (e) => {
  //   if (!(e.target as Element).closest(".mobilenav-focus")) {
  //     // closeMobileNav();
  //   }
  // };

  // useClickOutside(mobileNavOpen, handleClickOutside);
  // useEscapeClose(closeMobileNav);

  // common classes
  const linkClasses =
    "leading-[normal] px-2 py-1 rounded-default text-neutral-500 hover:text-primary font-medium transition-all duration-default capitalize";

  return (
    //  mobile nav starts here
    <div className="mobilenav-focus">
      <MobileMenuBtn onClickFunction={() => {}} />

      <nav
        className={`block h-screen fixed top-0 right-0 w-full sm:w-[50%] md:w-[40%] lg:w-[35%] 2xl:w-[20%] translate-x-full origin-center transition-all duration-default z-40 ${
          false ? "!translate-x-0" : ""
        } p-8 bg-white ${className}`}
      >
        {/* X cross button to close nav */}
        <CloseBtn
          // onClickFunction={closeMobileNav}
          className="mb-11"
        />

        {/* brand logo */}
        <BrandLogo
          logo={logoPrimary}
          className="block w-max mx-auto sm:mx-0 sm:mr-auto mb-11 h-9"
          // onClickFunction={closeMobileNav}
        />

        {/* regular part */}
        <ul className="flex flex-col items-center sm:items-start gap-3">
          <li

          // onClick={closeMobileNav}
          >
            <Link className={linkClasses} href={"/"}>
              home
            </Link>
          </li>

          {profileData && (
            <li
            // onClick={closeMobileNav}
            >
              <Link className={linkClasses} href={""}>
                Go to Dashboard
              </Link>
            </li>
          )}

          <li
          // onClick={closeMobileNav}
          >
            <Link className={linkClasses} href={"/#learn-more"}>
              About App
            </Link>
          </li>

          <li

          // onClick={closeMobileNav}
          >
            <Link className={linkClasses} href={"/#features"}>
              Our Features
            </Link>
          </li>

          <li

          // onClick={closeMobileNav}
          >
            <Link className={linkClasses} href={"/#faq"}>
              FAQ
            </Link>
          </li>

          <li
          // onClick={closeMobileNav}
          >
            <Link
              className={linkClasses}
              href={"https://nashiuz-zaman.web.app/"}
            >
              Meet The Developer
            </Link>
          </li>
        </ul>

        {/* {profileData && (
          <ButtonBtn
            text="Sign Out"
            onClickFunction={() => {
              handleLogout();
              closeMobileNav();
            }
          }
            modifyClasses="mt-11 mx-auto sm:mx-0"
          />
        )} */}
      </nav>
    </div>
  );
};

export default MobileNav;

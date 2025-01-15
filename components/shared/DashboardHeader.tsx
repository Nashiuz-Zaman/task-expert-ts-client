"use client";

// components
import DashboardMobileNav from "./DashboardMobileNav";
import { UserProfile } from "@/components/shared";

// hooks
import { useLoginMethods } from "@/hooks";
import { RootState } from "@/lib/redux/store";

// utils
import modifyComponentClassName from "@/utils/modifyComponentClassName";

// redux
import { useSelector } from "react-redux";

const DashboardHeader = ({ className = "" }: IExtraClassNames) => {
  const { profileData } = useSelector((store: RootState) => store.auth);
  const { handleLogout } = useLoginMethods();

  return (
    <header
      className={modifyComponentClassName(
        className,
        "h-[3.5rem] md:h-[4rem] 2md:h-[5.8rem] px-4 md:px-8 flex items-centers border-b border-neutral-200"
      )}
    >
      <div className="basis-full flex items-center justify-between">
        <DashboardMobileNav className="block 2xl:hidden" />

        {/* if user is truthy, show the userprofile */}
        {profileData && (
          <UserProfile
            profileData={profileData}
            className="ml-auto"
            logoutFunction={handleLogout}
          />
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;

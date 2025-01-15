// components
import BrandLogo from "../BrandLogo";
import DashboardNavContent from "./DashboardNavContent";
import modifyComponentClassName from "@/utils/modifyComponentClassName";

import logoPrimary from "@/assets/websiteLogo/logo-primary.webp";

const DashboardNav = ({ className = "" }: IExtraClassNames) => {
  return (
    <div className={modifyComponentClassName(className, "py-9 px-6")}>
      {/* website logo */}
      <BrandLogo logo={logoPrimary} className="mb-16 lg:!h-10" />

      <DashboardNavContent />
    </div>
  );
};

export default DashboardNav;

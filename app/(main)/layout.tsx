// components
import HeaderBlock from "@/components/shared-parent-blocks/HeaderBlock";
import { Footer } from "@/components/shared";
import Backdrop from "@/components/shared/Backdrop";

const MainLayout = ({ children }: ILayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col max-w-[120rem] mx-auto overflow-x-hidden">
      <HeaderBlock />
      <Backdrop />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

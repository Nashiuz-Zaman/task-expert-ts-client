// components
import HeaderBlock from "@/components/shared-parent-blocks/HeaderBlock";
import { Footer } from "@/components/shared";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-[120rem] mx-auto overflow-x-hidden">
      <HeaderBlock />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

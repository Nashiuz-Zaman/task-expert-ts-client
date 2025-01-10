// components
// import Footer from '@/components/shared/Footer/Footer';

import HeaderBlock from "@/components/parent-blocks/HeaderBlock";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-[120rem] mx-auto overflow-x-hidden">
      <HeaderBlock />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;

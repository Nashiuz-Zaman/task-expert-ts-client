// components
import InnerContainer from "@/components/containers/InnerContainer";
import { About, Features, Faq } from "@/components/page-specific/home";
import Banner from "@/components/shared/Banner/Banner";
import {
  LoginModal,
  SignupModal,
  PasswordResetModal,
} from "@/components/modals";

const Home = () => {
  return (
    <>
      <section className="mt-sectionGapSm 2md:mt-sectionGapMd lg:mt-24 xl:mt-[7.5rem] mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          <Banner />
        </InnerContainer>
      </section>

      <section id="learn-more" className="mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          <About />
        </InnerContainer>
      </section>

      <section id="features" className="mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          <Features />
        </InnerContainer>
      </section>

      <section id="faq" className="mb-sectionGapMd md:mb-sectionGapLg">
        <Faq />
      </section>

      {/* forms */}
      <InnerContainer>
        <LoginModal />
        <SignupModal />
        <PasswordResetModal />
      </InnerContainer>
    </>
  );
};

export default Home;

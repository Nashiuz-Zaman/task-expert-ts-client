// components
import InnerContainer from "@/components/containers/InnerContainer";
import BrandLogo from "../BrandLogo";
import LinkList from "../LinkList";
import SocialLinks from "./SocialLinks";

// data
import {
  footerOptions,
  socialMediaOptions,
  currentYear,
} from "@/uiData/footerData";
import { logoWhiteExport } from "@/uiData/imageExports";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 pt-sectionGapSm md:pt-sectionGapMd pb-16 relative">
      <InnerContainer>
        {/* top part */}

        {/* address and links */}
        <div className="mb-14 grid grid-cols-1 md:grid-cols-3">
          {/* website logo */}
          <BrandLogo
            logo={logoWhiteExport}
            className="mx-auto mb-sectionGapSm lg:h-[3rem]"
          />

          {/* list of links */}
          <div className="justify-self-center mb-14 text-center md:text-left">
            <LinkList linksData={footerOptions} />
          </div>

          {/* follow us social media */}
          <SocialLinks socialLinks={socialMediaOptions} />
        </div>

        {/* copyright part */}
        <div className="text-center">
          <small className="text-white 2xl:text-lg">
            &copy; {currentYear} Task Expert Inc., Developed by Nashiuz Zaman
          </small>
        </div>
      </InnerContainer>
    </footer>
  );
};

export default Footer;

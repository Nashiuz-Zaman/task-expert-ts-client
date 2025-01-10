"use client";

// next js
import Image from "next/image";

// components
import BannerText from "./BannerText/BannerText";

// data
import { homeTopBannerTextContent } from "@/uiData/pages/home";
import bannerImg from "@/assets/banner/banner.webp";

// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Banner = () => {
  // extract heading and subheading
  const { heading, subheading } = homeTopBannerTextContent;

  useGSAP(
    () => {
      gsap.to(".banner-image", {
        x: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0.4,
        ease: "power2",
      });
    },
    { dependencies: [] }
  );

  return (
    <div className="grid grid-cols-1 gap-12 sm:gap-20 lg:gap-4 xl:gap-6 2xl:gap-8 3xl:gap-14 lg:grid-cols-2 items-center">
      {/* banner text part */}
      <BannerText heading={heading} subheading={subheading} />

      {/* banner image part */}
      <div className="banner-image w-full h-full xs:w-[27rem] sm:w-[30rem] md:w-[40rem] lg:w-full mx-auto opacity-0 translate-x-full">
        <Image
          width={600}
          height={450}
          priority={true}
          src={bannerImg}
          className="!w-full !h-full !object-cover rounded-l-full rounded-tr-full shadow-medium"
          alt="Woman working on a laptop"
        />
      </div>
    </div>
  );
};

export default Banner;

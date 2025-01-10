// component
import modifyComponentClassName from "@/utils/modifyComponentClassName";
import BannerTextBtns from "./BannerTextBtns/BannerTextBtns";

// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

interface IProps extends IExtraClassNames {
  heading: string | React.ReactNode;
  subheading: string | React.ReactNode;
}

const BannerText = ({ heading, subheading, className = "" }: IProps) => {
  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { duration: 0.4, ease: "power2" } })
        .to(".heading-1", { y: "0", opacity: 1 })
        .to(".heading-2", { x: "0", opacity: 1 })
        .to(".banner-buttons", { y: "0", opacity: 1 });
    },
    { dependencies: [] }
  );

  return (
    <div
      className={modifyComponentClassName(
        className,
        "w-full h-full flex items-center text-center lg:text-left"
      )}
    >
      <div className="w-full lg:w-[80%]">
        {/* text part */}
        <h1 className="heading-1 font-bold text-3xl sm:text-4xl md:text-[2.6rem] xl:text-5xl 3xl:text-6xl mb-4 2md:mb-5 !leading-snug opacity-0 -translate-y-[15rem]">
          {heading}
        </h1>

        <p className="heading-2 text-lg 2xl:text-[1.6rem] xs:w-[80%] md:w-[60%] lg:w-full mx-auto mb-5 2md:mb-6 !leading-snug text-neutral-500 opacity-0 -translate-x-full">
          {subheading}
        </p>

        {/* buttons */}
        <BannerTextBtns className="banner-buttons opacity-0 translate-y-[10rem]" />
      </div>
    </div>
  );
};

export default BannerText;

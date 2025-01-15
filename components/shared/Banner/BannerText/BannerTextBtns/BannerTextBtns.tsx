"use client";

// components
import ButtonBtn from "@/components/buttons/ButtonBtn";
import LinkBtn from "@/components/buttons/LinkBtn";
import IcfyIcon from "@/components/shared/IcfyIcon";
import modifyComponentClassName from "@/utils/modifyComponentClassName";

// hooks
import { useFormVisiblity } from "@/hooks";

const BannerTextBtns = ({ className = "" }: IExtraClassNames) => {
  const { setSignupFormAndBackdropOpen } = useFormVisiblity();

  return (
    <div
      className={modifyComponentClassName(
        className,
        "flex flex-col xs:flex-row gap-4 xs:gap-3 justify-center items-center lg:justify-start lg:gap-3"
      )}
    >
      <LinkBtn
        href="#learn-more"
        className="!duration-[300ms] primary-theme rounded-full"
      >
        <IcfyIcon icon="radix-icons:magnifying-glass" /> Let&apos;s Explore
      </LinkBtn>

      <ButtonBtn
        onClickFunction={() => {
          setSignupFormAndBackdropOpen(true, true);
        }}
        className="!duration-[300ms] primary-outlined-theme rounded-full px-7"
      >
        Sign Up - It&apos;s Free!
      </ButtonBtn>
    </div>
  );
};

export default BannerTextBtns;

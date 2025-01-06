"use client";

// components
import ButtonBtn from "@/components/shared/buttons/ButtonBtn";
import LinkBtn from "@/components/shared/buttons/LinkBtn";

// hooks
// import useFormVisiblity from "@/hooks/useFormVisiblity";

const BannerTextBtns = ({ modifyClasses = "" }) => {
  //   const { openSignupFormWithBackdrop } = useFormVisiblity();

  return (
    <div
      className={`flex flex-col xs:flex-row gap-4 xs:gap-3 justify-center items-center lg:justify-start lg:gap-3 ${modifyClasses}`}
    >
      <LinkBtn
        text="Let's Explore"
        url="#learn-more"
        modifyClasses="!duration-[300ms]"
      />

      <ButtonBtn
        onClickFunction={() => {}}
        text="Sign Up - It's Free!"
        colorTheme="primaryOutlined"
        modifyClasses="!duration-[300ms]"
      />
    </div>
  );
};

export default BannerTextBtns;

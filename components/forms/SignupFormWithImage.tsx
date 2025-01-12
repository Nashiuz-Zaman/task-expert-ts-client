"use client";

// react-router
import Image, { StaticImageData } from "next/image";

// components
import SignupForm from "./SignupForm";

interface IProps {
  image: StaticImageData;
}

const SignupFormWithImage = ({ image }: IProps) => {
  return (
    <div
      className={`grid grid-cols-1 2md:grid-cols-[1fr_max-content] rounded-2xl overflow-hidden mx-auto w-[17.875rem] xs:w-max 2md:w-[47.5rem] lg:w-[55rem] shadow-medium registration-custom-focus`}
    >
      {/* image */}
      <div className="hidden 2md:block w-full h-full overflow-hidden">
        <Image
          width={700}
          height={500}
          className="!w-full !h-full !object-cover"
          src={image}
          alt="cover image"
        />
      </div>

      {/* Registration form */}
      <div className="w-full flex items-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupFormWithImage;

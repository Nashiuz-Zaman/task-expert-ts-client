// next
import Image, { StaticImageData } from "next/image";

// components
import LoginForm from "./LoginForm";

interface IProps {
  image: StaticImageData;
}

const LoginFormWithImage = ({ image }: IProps) => {
  return (
    <div
      className={`grid grid-cols-1 2md:grid-cols-[60%_auto] rounded-2xl overflow-hidden mx-auto w-[17.875rem] xs:w-max 2md:w-[47.5rem] lg:w-[55rem] shadow-medium login-custom-focus`}
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

      {/* login form */}
      <div className="w-full flex items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginFormWithImage;

// next
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface IProps extends IExtraClassNames, IOnClickFunctionGeneric {
  logo: StaticImageData;
}

const BrandLogo = ({ logo, onClickFunction, className = "" }: IProps) => {
  return (
    <Link
      onClick={onClickFunction}
      className={`block w-max h-8 md:h-10 xl:h-14 ${className}`}
      href="/"
    >
      <Image
        width={500}
        height={200}
        priority={true}
        src={logo}
        alt="Company Logo"
        className="block w-auto h-[inherit]"
        quality={100}
      />
    </Link>
  );
};

export default BrandLogo;

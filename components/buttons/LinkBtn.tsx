// react router imports
import modifyComponentClassName from "@/utils/modifyComponentClassName";
import Link from "next/link";

interface IProps extends IExtraClassNames {
  children: React.ReactNode;
  href: string;
}

const LinkBtn = ({ children, href = "/", className = "" }: IProps) => {
  const allClasses = modifyComponentClassName(
    className,
    "flex items-center gap-2 w-max capitalize transition-all duration-default rounded-md text-center px-6 py-2 lg:py-4 lg:px-10 active:scale-[0.98] font-medium border focus:outline-none"
  );

  return (
    <Link className={allClasses} href={href}>
      {children}
    </Link>
  );
};

export default LinkBtn;

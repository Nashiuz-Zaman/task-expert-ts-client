// react router imports
import modifyComponentClassName from "@/utils/modifyComponentClassName";
import Link from "next/link";

interface IProps extends IExtraClassNames {
  children: React.ReactNode;
  href: string;
}

const LinkBtnTrans = ({ children, href = "/", className = "" }: IProps) => {
  const allClasses = modifyComponentClassName(
    className,
    "flex items-center gap-2 w-max capitalize transition-all duration-default text-center active:scale-[0.98] font-medium focus:outline-none"
  );

  return (
    <Link tabIndex={-1} className={allClasses} href={href}>
      {children}
    </Link>
  );
};

export default LinkBtnTrans;

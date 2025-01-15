// next
import modifyComponentClassName from "@/utils/modifyComponentClassName";
import Link from "next/link";
import IcfyIcon from "../IcfyIcon";

interface IProps extends IExtraClassNames, IOnClickFunctionGeneric {
  linkData: { icon: string; text: string; href: string };
}

const DashboardNavLink = ({
  linkData,
  onClickFunction = () => {},
  className = "",
}: IProps) => {
  const { icon, text, href } = linkData;

  return (
    <Link
      onClick={onClickFunction}
      className={modifyComponentClassName(
        className,
        "flex items-center gap-3 text-sm md:text-base lg:text-xl font-medium text-neutral-500 hover:text-primary transition-all duration-default"
      )}
      href={href}
    >
      <IcfyIcon
        style={{ fontSize: "inherit" }}
        icon={icon}
        className="inline-block"
      />

      <span style={{ fontSize: "inherit" }} className="inline-block">
        {text}
      </span>
    </Link>
  );
};

export default DashboardNavLink;

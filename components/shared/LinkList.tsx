// next
import Link from "next/link";

// utils
import modifyComponentClassName from "@/utils/modifyComponentClassName";

interface ILinkData {
  text: string;
  href: string;
}

interface IProps extends IExtraClassNames {
  linksData: ILinkData[];
  linksClassName?: string;
}

const LinkList = ({
  linksData = [],
  className = "",
  linksClassName = "",
}: IProps) => {
  const linkClasses = modifyComponentClassName(
    linksClassName,
    "transition-all duration-default capitalize xl:text-lg text-white hover:underline"
  );

  return (
    <ul
      className={modifyComponentClassName(
        className,
        "flex flex-col gap-4 md:gap-3"
      )}
    >
      {/* these links will always be here */}
      {linksData?.map((option, i) => {
        return (
          <li key={i}>
            <Link className={linkClasses} href={option.href}>
              {option.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LinkList;

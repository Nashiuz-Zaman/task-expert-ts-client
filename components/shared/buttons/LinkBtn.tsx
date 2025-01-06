// react router imports
import Link from "next/link";

// type
interface Props {
  text?: string;
  url: string;
  colorTheme?: string;
  modifyClasses?: string;
}

const LinkBtn = ({
  text,
  url,
  colorTheme = "primary",
  modifyClasses = "",
}: Props) => {
  const colorThemeClass = `${colorTheme}Classes`;
  const allClasses = `block w-max transition-all duration-default rounded-defaultLg text-center px-4 py-2 text-sm sm:text-base active:scale-[0.98] font-medium border ${colorThemeClass} ${modifyClasses}`;

  return (
    <Link className={allClasses} href={url}>
      {text}
    </Link>
  );
};

export default LinkBtn;

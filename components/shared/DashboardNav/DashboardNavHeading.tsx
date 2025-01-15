import modifyComponentClassName from "@/utils/modifyComponentClassName";

interface IProps extends IExtraClassNames {
  text: string;
}

const DashboardNavHeading = ({ text, className = "" }: IProps) => {
  return (
    <h3
      className={modifyComponentClassName(
        className,
        "font-bold text-base lg:text-lg text-neutral-500"
      )}
    >
      {text}
    </h3>
  );
};

export default DashboardNavHeading;

// utils
import modifyComponentClassName from "@/utils/modifyComponentClassName";

interface Props extends IExtraClassNames {
  text: string;
}

const Text = ({ text, className = "" }: Props) => {
  return (
    <p
      className={modifyComponentClassName(
        className,
        "text-neutral-600 text-lg lg:text-base 2xl:text-lg 3xl:text-xl !leading-normal"
      )}
    >
      {text}
    </p>
  );
};

export default Text;

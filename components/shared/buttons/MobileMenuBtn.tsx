// component
import modifyComponentClassName from "@/utils/modifyComponentClassName";
import IcfyIcon from "../IcfyIcon";

const MobileMenuBtn = ({
  onClickFunction,
  className = "",
}: IOnClickFunctionBtn & IExtraClassNames) => {
  return (
    <button
      aria-label="Open Mobile Navigation"
      className={modifyComponentClassName(
        className,
        "inline-block group rounded-md md:rounded-lg xl:rounded-xl transition-all duration-default"
      )}
      onClick={onClickFunction}
    >
      <IcfyIcon icon="bi:three-dots" className="text-4xl" />
    </button>
  );
};

export default MobileMenuBtn;

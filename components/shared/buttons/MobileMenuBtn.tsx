// component
import IcfyIcon from "../IcfyIcon";

const MobileMenuBtn = ({
  onClickFunction,
  className = "",
}: IOnClickFunctionBtn & IExtraClassNames) => {
  return (
    <button
      aria-label="Open Mobile Navigation"
      className={`inline-block border group rounded-md md:rounded-lg xl:rounded-xl transition-all duration-default ${className}`}
      onClick={onClickFunction}
    >
      <IcfyIcon icon="bi:three-dots" />
    </button>
  );
};

export default MobileMenuBtn;

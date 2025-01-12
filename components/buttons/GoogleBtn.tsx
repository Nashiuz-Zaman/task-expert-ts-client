// lib
import IcfyIcon from "../shared/IcfyIcon";

// utils
import modifyComponentClassName from "@/utils/modifyComponentClassName";

interface IProps extends IExtraClassNames, IOnClickFunctionBtn {
  disabled?: boolean;
  text?: string;
}

const GoogleBtn = ({
  onClickFunction = () => {},
  className = "",
  disabled = false,
  text = "Log in with Google",
}: IProps) => {
  return (
    <button
      type="button"
      style={{ backfaceVisibility: "hidden" }}
      disabled={disabled}
      onClick={onClickFunction}
      className={modifyComponentClassName(
        className,
        "focus:outline-none min-w-[6rem] w-full capitalize transition-all duration-default rounded-full active:scale-[0.98] disabled:opacity-60 disabled:scale-100  disabled:cursor-not-allowed flex items-center justify-center border border-neutral-300 gap-2 text-neutral-800 px-5 py-4 active:bg-neutral-200 bg-white lg:hover:bg-neutral-200"
      )}
    >
      <IcfyIcon icon="flat-color-icons:google" className="text-xl" />
      <span className="font-semibold">{text}</span>
    </button>
  );
};

export default GoogleBtn;

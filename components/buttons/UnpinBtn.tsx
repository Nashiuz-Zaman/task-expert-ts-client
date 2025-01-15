"use client";

// component
import IcfyIcon from "../shared/IcfyIcon";

// utils
import modifyComponentClassName from "@/utils/modifyComponentClassName";

interface IProps extends IExtraClassNames, IOnClickFunctionBtn {
  text?: string;
}

const UnpinBtn = ({ onClickFunction, text, className = "" }: IProps) => {
  return (
    <button
      title="Unpin Task"
      aria-label="Unpin button"
      className={modifyComponentClassName(
        className,
        "flex items-center gap-2 text-neutral-500"
      )}
      onClick={onClickFunction}
    >
      <IcfyIcon
        style={{ fontSize: "inherit" }}
        icon="iconoir:pin-slash-solid"
        className="text-inherit"
      />
      {text && (
        <span
          style={{ fontSize: "inherit" }}
          className="text-inherit capitalize"
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default UnpinBtn;

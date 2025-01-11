"use client";

// utils
import modifyComponentClassName from "@/utils/modifyComponentClassName";

interface IProps extends IExtraClassNames, IOnClickFunctionBtn {
  children: React.ReactNode;
  disabled?: boolean;
  id?: string;
  type?: "submit" | "reset" | "button";
  title?: string;
  ariaLabel?: string;
}

const ButtonBtn = ({
  children,
  onClickFunction,
  className = "",
  disabled = false,
  id = "",
  type = "button",
  title = "",
  ariaLabel = "button",
}: IProps) => {
  return (
    <button
      title={title}
      id={id}
      type={type}
      style={{ backfaceVisibility: "hidden" }}
      disabled={disabled}
      onClick={onClickFunction}
      className={modifyComponentClassName(
        className,
        "focus:outline-none flex items-center justify-center gap-2 w-max capitalize transition-all duration-default rounded-md text-center px-6 py-2 lg:py-4 lg:px-10 active:scale-[0.95] disabled:opacity-60 disabled:scale-100 disabled:hover:!scale-100 disabled:!active:scale-100 font-medium disabled:cursor-not-allowed border"
      )}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default ButtonBtn;

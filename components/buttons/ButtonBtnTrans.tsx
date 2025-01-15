"use client";

import modifyComponentClassName from "@/utils/modifyComponentClassName";

interface IProps extends IExtraClassNames, IOnClickFunctionBtn {
  children: React.ReactNode;
  disabled?: boolean;
  id?: string;
  type?: "submit" | "reset" | "button";
  title?: string;
  ariaLabel?: string;
  tabIndex?: number;
}

const ButtonBtnTrans = ({
  children,
  onClickFunction = () => {},
  className = "",
  disabled = false,
  id,
  type = "button",
  ariaLabel = "button",
  tabIndex,
}: IProps) => {
  return (
    <button
      tabIndex={tabIndex}
      id={id}
      type={type}
      style={{ backfaceVisibility: "hidden" }}
      disabled={disabled}
      onClick={onClickFunction}
      className={modifyComponentClassName(
        className,
        "focus:outline-none flex items-center justify-center gap-2 w-max capitalize transition-all duration-default text-center active:scale-[0.98] disabled:opacity-60 disabled:scale-100 font-medium disabled:cursor-not-allowed"
      )}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default ButtonBtnTrans;

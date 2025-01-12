// client component
"use client";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const Backdrop = ({
  onClickFunction,
  className = "",
}: IExtraClassNames & IOnClickFunctionGeneric) => {
  const { backdropOpen } = useSelector((store: RootState) => store.backdrop);

  return (
    <div
      onClick={onClickFunction}
      className={`fixed w-screen top-0 left-0 h-screen z-20 bg-black bg-opacity-15 backdrop-blur-sm transition-all duration-default ${
        backdropOpen ? "opacity-100 visible" : "opacity-0 collapse"
      } ${className}`}
    ></div>
  );
};

export default Backdrop;

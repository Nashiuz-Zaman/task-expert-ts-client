// lib
import { PulseLoader } from "react-spinners";

// utils
import modifyComponentClassName from "@/utils/modifyComponentClassName";

interface IProps extends IExtraClassNames {
  show: boolean;
  speed?: number;
  color?: string;
}

const LoadingSpinner = ({
  show,
  speed = 1,
  color = "#ff8631",
  className = "",
}: IProps) => {
  return (
    <div
      className={modifyComponentClassName(
        className,
        `w-full items-center justify-center z-[1] ${show ? "flex" : "hidden"}`
      )}
    >
      <PulseLoader speedMultiplier={speed} color={color} />
    </div>
  );
};

export default LoadingSpinner;

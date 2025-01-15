// toastify
import { toast, ToastPosition, TypeOptions } from "react-toastify";

export const showToast = ({
  message,
  type,
  position,
  className,
}: {
  message?: string;
  type?: TypeOptions;
  position?: ToastPosition;
  className?: string;
}) => {
  toast(message ? message : "No message provided", {
    position: position ? position : "bottom-left",
    autoClose: 2700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    type: type ? type : "success",
    className: `${className ? className : ""}`,
  });
};

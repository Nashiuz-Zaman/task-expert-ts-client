import { showToast } from "./showToast";

export const showNetworkErr = () => {
  showToast({ message: "Network Error", type: "error" });
};

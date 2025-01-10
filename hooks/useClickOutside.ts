"use client";

// react
import { useEffect } from "react";

const useClickOutside = (
  condition: boolean,
  callbackFunc: (e: MouseEvent) => void
): void => {
  useEffect(() => {
    let clickEventTimer: ReturnType<typeof setTimeout>;

    if (condition) {
      clickEventTimer = setTimeout(() => {
        window.addEventListener("click", callbackFunc);
        clearTimeout(clickEventTimer);
      }, 200);
    } else {
      window.removeEventListener("click", callbackFunc);
    }

    return () => {
      clearTimeout(clickEventTimer);
      window.removeEventListener("click", callbackFunc);
    };
  }, [condition, callbackFunc]);
};

export default useClickOutside;

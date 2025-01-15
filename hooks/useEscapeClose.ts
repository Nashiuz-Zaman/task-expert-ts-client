"use client";

// react
import { useEffect } from "react";

const useEscapeClose = (handler: (() => void) | null = null) => {
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (handler) handler();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handler]);
};

export default useEscapeClose;

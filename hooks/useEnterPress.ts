"use client";

// react
import { useEffect } from "react";

type CallbackFunction = (() => void) | null;

const useEnterPress = (
  condition: boolean,
  callbackFunc: CallbackFunction = null
) => {
  useEffect(() => {
    let eventTimer: ReturnType<typeof setTimeout>;
    let handler: ((e: KeyboardEvent) => void) | null = null;

    if (condition) {
      handler = (e) => {
        if (e?.key?.toLowerCase() === "enter") {
          e.preventDefault();
          if (callbackFunc) callbackFunc();
        }
      };

      eventTimer = setTimeout(() => {
        if (handler) window.addEventListener("keydown", handler);

        clearTimeout(eventTimer);
      }, 150);
    } else {
      if (handler) window.removeEventListener("keydown", handler);
    }

    return () => {
      clearTimeout(eventTimer);
      if (handler) window.removeEventListener("keydown", handler);
    };
  }, [condition, callbackFunc]);
};

export default useEnterPress;

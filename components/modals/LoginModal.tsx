"use client";

// react
import { useEffect, useCallback } from "react";

// components
import LoginFormWithImage from "../forms/LoginFormWithImage";

// hooks
import useClickOutside from "@/hooks/useClickOutside";
import useFormVisiblity from "@/hooks/useFormVisiblity";
import useStopScrolling from "@/hooks/useStopScrolling";
import useEnterPress from "@/hooks/useEnterPress";

// redux
import { useSelector } from "react-redux";

// data
import loginImg from "@/assets/forms/login.webp";
import { RootState } from "@/lib/redux/store";

const LoginModal = () => {
  const { loginFormOpen } = useSelector((store: RootState) => store.login);
  const { setLoginFormAndBackdropOpen } = useFormVisiblity();
  const { stopYAxisScrolling } = useStopScrolling();

  useEffect(() => {
    stopYAxisScrolling(loginFormOpen);
  }, [loginFormOpen, stopYAxisScrolling]);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const target = e?.target as Element;

      if (
        target.closest(".login-custom-focus") ||
        target.tagName.toLowerCase() === "svg" ||
        target.tagName.toLowerCase() === "path"
      ) {
        return;
      }

      setLoginFormAndBackdropOpen(false, false);
    },
    [setLoginFormAndBackdropOpen]
  );
  useClickOutside(loginFormOpen, handleClickOutside);
  useEnterPress(loginFormOpen);

  return (
    <div
      className={`fixed w-full z-40 transition-all duration-default opacity-0 collapse top-1/2 left-1/2 -translate-y-full -translate-x-1/2 ${
        loginFormOpen ? "!opacity-100 !visible !-translate-y-1/2" : ""
      }`}
    >
      <LoginFormWithImage image={loginImg} />
    </div>
  );
};

export default LoginModal;

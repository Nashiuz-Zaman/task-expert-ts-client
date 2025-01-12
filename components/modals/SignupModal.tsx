"use client";

// react
import { useEffect, useCallback } from "react";

// components
import SignupFormWithImage from "../forms/SignupFormWithImage";

// hooks
import useClickOutside from "@/hooks/useClickOutside";
import useFormVisiblity from "@/hooks/useFormVisiblity";
import useStopScrolling from "@/hooks/useStopScrolling";

// redux
import { useSelector } from "react-redux";

// data
import registrationImg from "./../../../assets/forms/registration.webp";
import { RootState } from "@/lib/redux/store";

const RegistrationModal = () => {
  const { signupFormOpen } = useSelector((store: RootState) => store.signup);
  const { closeSignupFormWithBackdrop } = useFormVisiblity();
  const { stopYAxisScrolling } = useStopScrolling();

  useEffect(() => {
    stopYAxisScrolling(signupFormOpen);
  }, [signupFormOpen, stopYAxisScrolling]);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const target = e?.target as Element;
      if (
        target.closest(".registration-custom-focus") ||
        target.tagName.toLowerCase() === "svg" ||
        target.tagName.toLowerCase() === "path"
      ) {
        return;
      }

      closeSignupFormWithBackdrop();
    },
    [closeSignupFormWithBackdrop]
  );
  useClickOutside(signupFormOpen, handleClickOutside);

  return (
    <div
      className={`fixed w-full z-40 transition-all duration-default opacity-0 collapse top-1/2 left-1/2 -translate-y-full -translate-x-1/2 ${
        signupFormOpen ? "!opacity-100 !visible !-translate-y-1/2" : ""
      }`}
    >
      <SignupFormWithImage image={registrationImg} />
    </div>
  );
};

export default RegistrationModal;

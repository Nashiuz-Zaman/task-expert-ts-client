"use client";

// react
import { useEffect, useCallback } from "react";

// components
import { PasswordResetForm } from "@/components/forms";

// hooks
import useClickOutside from "@/hooks/useClickOutside";
import useFormVisiblity from "@/hooks/useFormVisiblity";
import useStopScrolling from "@/hooks/useStopScrolling";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const PasswordResetModal = () => {
  const { passwordResetFormOpen } = useSelector(
    (store: RootState) => store.passwordReset
  );
  const { setPasswordResetFormAndBackdropOpen } = useFormVisiblity();
  const { stopYAxisScrolling } = useStopScrolling();

  useEffect(() => {
    stopYAxisScrolling(passwordResetFormOpen);
  }, [passwordResetFormOpen, stopYAxisScrolling]);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const target = e?.target as Element;
      if (target.closest(".password-reset-custom-focus")) {
        return;
      }
      setPasswordResetFormAndBackdropOpen(false, false);
    },
    [setPasswordResetFormAndBackdropOpen]
  );
  useClickOutside(passwordResetFormOpen, handleClickOutside);

  return (
    <div
      className={`fixed w-[16rem] xs:w-[20rem] sm:w-[25rem] rounded-2xl overflow-hidden z-40 transition-all duration-default opacity-0 collapse top-1/2 left-1/2 -translate-y-1/2 -translate-x-full ${
        passwordResetFormOpen ? "!opacity-100 !visible !-translate-x-1/2" : ""
      }`}
    >
      <PasswordResetForm />
    </div>
  );
};

export default PasswordResetModal;

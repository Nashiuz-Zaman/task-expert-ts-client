"use client";

// react imports
import { useEffect, useRef } from "react";

// component
import { ButtonBtn } from "@/components/buttons";

// hooks
import { useResetForm, useFormVisiblity } from "@/hooks";

// redux
import useRedux from "@/hooks/useRedux";
import {
  setPasswordResetErrors,
  //   setPasswordResetLoading,
} from "@/lib/redux/features/passwordReset/passwordResetSlice";

// utils
import { RootState } from "@/lib/redux/store";
import { Inputfield } from "../shared";

// validation function

const PasswordResetForm = ({ modifyClasses = "" }) => {
  const formEl = useRef<HTMLFormElement>(null);
  const { useSelector } = useRedux();
  const { passwordResetErrors, passwordResetFormOpen } = useSelector(
    (store: RootState) => store.passwordReset
  );
  const { resetFormFieldsAndErrors } = useResetForm();
  const { setLoginFormAndBackdropOpen, setPasswordResetFormAndBackdropOpen } =
    useFormVisiblity();

  // clear form fields and errors
  useEffect(() => {
    if (!passwordResetFormOpen) {
      resetFormFieldsAndErrors<string[] | null>(
        formEl as React.RefObject<HTMLFormElement>,
        setPasswordResetErrors
      );
    }
  }, [passwordResetFormOpen, resetFormFieldsAndErrors]);

  //   const handleForgotPassword = async (e) => {
  //     try {
  //       e.preventDefault();
  //       dispatch(setPasswordResetLoading(true));
  //       dispatch(setPasswordResetErrors([]));
  //       const email = e.target.email.value;
  //       const foundErrors = validateEmail(email);

  //       // if there are erros return from here
  //       if (foundErrors.length > 0) {
  //         dispatch(setPasswordResetErrors(foundErrors));
  //         dispatch(setPasswordResetLoading(false));
  //         return;
  //       }

  //       const res = await sendUserPasswordResetEmail(email);

  //       if (res.status === "success") {
  //         dispatch(setPasswordResetLoading(false));
  //         e.target.reset();
  //         closePasswordResetFormWithBackdrop();
  //         showToast("Email sent, Please check inbox/spam", "success");
  //       }
  //     } catch (error) {
  //       dispatch(setPasswordResetErrors([error.message]));
  //     }
  //   };

  return (
    <div
      className={`w-full bg-white mx-auto p-5 md:py-7 2md:px-6 2md:py-12 password-reset-custom-focus ${modifyClasses}`}
    >
      {/* heading */}
      <h2 className="capitalize mb-4 text-center sm:text-left text-lg 2md:text-xl xl:text-2xl font-bold">
        Reset password
      </h2>

      <form ref={formEl} onSubmit={() => {}} className="w-full">
        {/* email */}
        <Inputfield type="email" name="email" placeholder="Email" />

        {/* show errors here */}
        {Array.isArray(passwordResetErrors) &&
          passwordResetErrors?.length > 0 && (
            <div className="space-y-1 mt-3 md:mt-4">
              {passwordResetErrors.map((error) => {
                return (
                  <p
                    key={error}
                    className="text-sm text-center font-semibold text-red-600"
                  >
                    * {error}
                  </p>
                );
              })}
            </div>
          )}

        <div className="flex flex-col sm:flex-row items-center sm:justify-between mt-5">
          <ButtonBtn className="block mx-auto sm:mx-0 mb-5 sm:mb-0 rounded-full primary-theme">
            Send Email
          </ButtonBtn>

          <p className="text-sm text-center xl:text-base">
            Have password?{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                setPasswordResetFormAndBackdropOpen(false);
                setLoginFormAndBackdropOpen(true);
              }}
              className="text-primary font-semibold"
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default PasswordResetForm;

"use client";

// react imports
import { useEffect, useRef } from "react";

// component
import { ButtonBtn, ButtonBtnTrans, GoogleBtn } from "@/components/buttons";
import { Inputfield } from "@/components/shared";

// hooks
import { useLoginMethods, useResetForm, useFormVisiblity } from "@/hooks";

// redux
import { useSelector } from "react-redux";
import { setLoginErrors } from "@/lib/redux/features/login/loginSlice";
import { RootState } from "@/lib/redux/store";

const LoginForm = ({ modifyClasses = "" }) => {
  const { loginErrors, loginFormOpen } = useSelector(
    (store: RootState) => store.login
  );

  const {
    handleLoginEmail,
    // handleLoginGoogle
  } = useLoginMethods();
  const { resetFormFieldsAndErrors } = useResetForm();
  const {
    setLoginFormAndBackdropOpen,
    setSignupFormAndBackdropOpen,
    setPasswordResetFormAndBackdropOpen,
  } = useFormVisiblity();
  const formEl = useRef<HTMLFormElement>(null);

  // clear form fields and errors when it disappears
  useEffect(() => {
    if (!loginFormOpen) {
      resetFormFieldsAndErrors<string[] | null>(
        formEl as React.RefObject<HTMLFormElement>,
        setLoginErrors
      );
    }
  }, [loginFormOpen, resetFormFieldsAndErrors]);

  return (
    <div
      className={`w-full bg-white mx-auto p-5 md:py-7 2md:px-6 lg:px-8 2md:py-12 ${modifyClasses}`}
    >
      {/* heading */}
      <h2 className="capitalize mb-4 lg:mb-6 text-center text-lg 2md:text-xl xl:text-2xl font-semibold">
        Login to Account
      </h2>

      <form
        ref={formEl}
        noValidate
        onSubmit={handleLoginEmail}
        className="w-full"
      >
        <div className="w-full space-y-3 md:space-y-5 xs:w-[17rem] 2md:w-full 2md:mx-0 mx-auto">
          {/* email */}
          <Inputfield type="email" name="email" placeholder="Email" />

          <div className="space-y-3">
            {/* password field */}
            <Inputfield
              type="password"
              name="password"
              placeholder="Password"
              passwordField={true}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setLoginFormAndBackdropOpen(false);
                setPasswordResetFormAndBackdropOpen(true);
              }}
              className="w-max block ml-auto text-primary text-sm xl:text-base hover:underline"
            >
              Forgot password?
            </button>
          </div>
        </div>

        {/* show errors here */}
        {Array.isArray(loginErrors) && loginErrors?.length > 0 && (
          <div className="space-y-1 mt-3 md:mt-4">
            {loginErrors.map((error) => {
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

        <ButtonBtn className="mx-auto block my-5 rounded-full primary-theme">
          Sign In
        </ButtonBtn>

        <p className="text-sm text-center xl:text-base mb-3 md:mb-4 flex gap-1 justify-center">
          Don&apos;t have an account?{" "}
          <ButtonBtnTrans
            onClickFunction={(e) => {
              e?.preventDefault();
              setLoginFormAndBackdropOpen(false);
              setSignupFormAndBackdropOpen(true);
            }}
            className="text-primary font-semibold hover:underline"
          >
            Register
          </ButtonBtnTrans>
        </p>
      </form>

      <p className="text-center mb-3 md:mb-4">Or</p>

      <GoogleBtn
        onClickFunction={() => {
          //  handleLoginGoogle();
        }}
        className="w-max mx-auto"
      />
    </div>
  );
};

export default LoginForm;

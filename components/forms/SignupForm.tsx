// react
import { useEffect, useRef } from "react";

// components
import { ButtonBtn, ButtonBtnTrans, GoogleBtn } from "@/components/buttons";
import { ErrorsBlock, Inputfield } from "@/components/shared";
import IcfyIcon from "../shared/IcfyIcon";

// hooks
import {
  useSignupMethods,
  useLoginMethods,
  useResetForm,
  useFormVisiblity,
} from "@/hooks";

// redux
import { useSelector } from "react-redux";
import { setSignupErrors } from "@/lib/redux/features/signup/signupSlice";
import { RootState } from "@/lib/redux/store";

// utils
import modifyComponentClassName from "@/utils/modifyComponentClassName";
import LoadingSpinner from "../shared/LoadingSpinner";
import useOTP from "@/hooks/useOTP";

const SignupForm = ({ className = "" }: IExtraClassNames) => {
  const { handleSignup } = useSignupMethods();
  const { signupFormOpen, signupErrors, signupLoading } = useSelector(
    (store: RootState) => store.signup
  );
  const { OTPFormOpen, OTPLoading, OTPErrors } = useSelector(
    (store: RootState) => store.OTP
  );
  const { handleLoginGoogle } = useLoginMethods();
  const { resetFormFieldsAndErrors } = useResetForm();
  const { handleOTPVerification, handleResendOTP } = useOTP();
  const { setSignupFormAndBackdropOpen, setLoginFormAndBackdropOpen } =
    useFormVisiblity();
  const formEl = useRef<HTMLFormElement>(null);

  // clear form fields and errors when it disappears
  useEffect(() => {
    if (!signupFormOpen && formEl) {
      resetFormFieldsAndErrors<string[] | null>(
        formEl as React.RefObject<HTMLFormElement>,
        setSignupErrors
      );
    }
  }, [signupFormOpen, resetFormFieldsAndErrors]);

  return (
    <div
      className={modifyComponentClassName(
        className,
        "w-full bg-white mx-auto p-5 md:py-7 2md:px-6 lg:px-8 2md:py-12 h-full flex flex-col justify-center"
      )}
    >
      {/* heading */}
      <h2 className="capitalize mb-7 text-center font-semibold text-lg 2md:text-xl xl:text-2xl">
        Sign up. It&apos;s <span className="text-primary">Free!</span>
      </h2>

      {/* when otp form is closed show main form  */}
      {!OTPFormOpen && (
        <>
          {" "}
          <form
            ref={formEl}
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup(e);
            }}
            className="w-full h-full flex flex-col"
          >
            <div className="w-full space-y-3 md:space-y-5 xs:w-[17rem] 2md:w-full 2md:mx-0 mx-auto">
              {/* username field */}
              <Inputfield
                isRequired={true}
                name="name"
                placeholder="Full Name"
              />

              {/* email field */}
              <Inputfield
                isRequired={true}
                type="email"
                name="email"
                placeholder="Email"
              />

              {/* password field */}
              <Inputfield
                isRequired={true}
                type="password"
                name="password"
                placeholder="Password"
                passwordField={true}
              />
            </div>

            <LoadingSpinner show={signupLoading} className="grow" />

            {/* only show these buttons when the loading spinner is not active */}
            {!signupLoading && (
              <>
                {/* show errors here */}
                <ErrorsBlock errors={signupErrors} />

                <ButtonBtn
                  type="submit"
                  className="mx-auto w-full block my-5 rounded-full primary-theme"
                >
                  <IcfyIcon
                    icon="material-symbols-light:app-registration-rounded"
                    className="text-2xl"
                  />{" "}
                  Sign Up
                </ButtonBtn>

                <p className="text-sm text-center xl:text-base mb-3 md:mb-4 flex gap-1 justify-center">
                  Already have an account?{" "}
                  <ButtonBtnTrans
                    className="text-primary hover:underline"
                    onClickFunction={(e) => {
                      e?.preventDefault();
                      setSignupFormAndBackdropOpen(false);
                      setLoginFormAndBackdropOpen(true);
                    }}
                  >
                    Log In
                  </ButtonBtnTrans>
                </p>

                <p className="text-center mb-3 md:mb-4">Or</p>
                <GoogleBtn
                  text="Sign up with Google"
                  onClickFunction={() => {
                    handleLoginGoogle();
                  }}
                  className="w-full mx-auto"
                />
              </>
            )}
          </form>
        </>
      )}

      {OTPFormOpen && (
        <>
          <form
            ref={formEl}
            onSubmit={(e) => {
              e.preventDefault();
              handleOTPVerification(e);
            }}
            className="w-full"
          >
            <p className="leading-[1.7] mb-5 text-center">
              Please check your email and enter the OTP code below
            </p>

            <Inputfield
              isRequired={true}
              name="otpCode"
              placeholder="5 Digit OTP code"
            />

            <ErrorsBlock errors={OTPErrors} />

            <LoadingSpinner show={OTPLoading} className="grow" />

            {!OTPLoading && (
              <>
                {" "}
                <ButtonBtn
                  type="submit"
                  className="mx-auto w-full block mt-7 mb-8 mb rounded-full primary-theme"
                >
                  Verify OTP
                </ButtonBtn>
                <ButtonBtnTrans
                  tabIndex={-1}
                  className="underline w-full hover:text-primaryDark"
                >
                  <IcfyIcon icon="grommet-icons:power-reset" />
                  Resend OTP
                </ButtonBtnTrans>
              </>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default SignupForm;

// react
import { useEffect, useRef } from "react";

// components
import { ButtonBtn, ButtonBtnTrans, GoogleBtn } from "@/components/buttons";
import { Inputfield } from "@/components/shared";

// hooks
import {
  useSignupMethods,
  // useLoginMethods,
  useResetForm,
  useFormVisiblity,
} from "@/hooks";

// redux
import { useSelector } from "react-redux";
import { setSignupErrors } from "@/lib/redux/features/signup/signupSlice";
import { RootState } from "@/lib/redux/store";

const SignupForm = ({ className }: IExtraClassNames) => {
  const { handleSignup } = useSignupMethods();

  const { signupFormOpen, signupErrors } = useSelector(
    (store: RootState) => store.signup
  );
  // const { handleLoginGoogle } = useLoginMethods();
  const { resetFormFieldsAndErrors } = useResetForm();
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
      className={`w-full bg-white mx-auto p-5 md:py-7 2md:px-6 2md:py-12 ${className}`}
    >
      {/* heading */}
      <h2 className="capitalize mb-7 text-center font-bold text-lg 2md:text-xl xl:text-2xl">
        Sign up. It&apos;s <span className="text-primary">Free!</span>
      </h2>

      {/* form */}
      <form ref={formEl} onSubmit={handleSignup} className="w-full">
        <div className="w-full space-y-3 md:space-y-5 xs:w-[17rem] 2md:w-full 2md:mx-0 mx-auto">
          {/* username field */}
          <Inputfield name="username" placeholder="Username" />

          {/* email field */}
          <Inputfield type="email" name="email" placeholder="Email" />

          {/* password field */}
          <Inputfield
            type="password"
            name="password"
            placeholder="Password"
            passwordField={true}
          />
        </div>

        {/* show errors here */}
        {/* if array */}
        {Array.isArray(signupErrors) && signupErrors?.length > 0 && (
          <div className="space-y-1 mt-4">
            {signupErrors.map((error) => {
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

        <ButtonBtn className="mx-auto block my-5 rounded-full">
          Sign Up
        </ButtonBtn>

        <p className="text-sm text-center xl:text-base mb-3 md:mb-4">
          Already have an account?{" "}
          <ButtonBtnTrans
            className="text-primary font-semibold"
            onClickFunction={(e) => {
              e!.preventDefault();
              setSignupFormAndBackdropOpen(false);
              setLoginFormAndBackdropOpen(true);
            }}
          >
            Log In
          </ButtonBtnTrans>
        </p>
      </form>

      <p className="text-center mb-3 md:mb-4">Or</p>

      <GoogleBtn
        text="Sign up with Google"
        onClickFunction={() => {
          // handleLoginGoogle();
        }}
        className="w-max mx-auto"
      />
    </div>
  );
};

export default SignupForm;

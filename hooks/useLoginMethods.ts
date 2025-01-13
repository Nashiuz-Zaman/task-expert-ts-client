"use client";

// next
import { useRouter } from "next/navigation";

// custom hook
import useFirebaseMethods from "@/hooks/useFirebaseMethods";
import useFormVisiblity from "./useFormVisiblity";

// redux
import useRedux from "./useRedux";
import { AuthState, setProfileData } from "@/lib/redux/features/auth/authSlice";
import {
  setLoginLoading,
  setLoginErrors,
} from "@/lib/redux/features/login/loginSlice";

// utils
import { showToast } from "@/utils/showToast";

// type
import { RootState } from "@/lib/redux/store";
import { axiosCustom } from "@/utils/axios";
import { showNetworkErr } from "@/utils/showNetworkErr";
import axios, { AxiosError } from "axios";

const useLoginMethods = () => {
  const { dispatch, useSelector } = useRedux();
  const { profileData } = useSelector((store: RootState) => store.auth);
  const { loginEmail, loginGoogle, logout } = useFirebaseMethods();
  const { setLoginFormAndBackdropOpen, setSignupFormAndBackdropOpen } =
    useFormVisiblity();
  const router = useRouter();

  // handle google sign in
  const handleLoginGoogle = async () => {
    // reset errors
    dispatch(setLoginErrors(null));
    dispatch(setLoginLoading(true));
    try {
      const result = await loginGoogle();

      if (result?.user) {
        const googleUser: Partial<AuthState["profileData"]> = {
          name: result?.user?.displayName as string,
          email: result?.user?.email as string,
        };

        const googleLoginResponse = await axiosCustom.post(
          "/google-auth",
          googleUser
        );

        if (googleLoginResponse?.data?.status === "success") {
          const profileData = googleLoginResponse.data.user;

          dispatch(setProfileData(profileData));
          setLoginFormAndBackdropOpen(false, false);
          setSignupFormAndBackdropOpen(false, false);

          showToast({ message: "Logged In Successfully" });
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(setLoginErrors([error?.response?.data?.message]));
        return;
      }

      showNetworkErr();
    } finally {
      dispatch(setLoginLoading(false));
    }
  };

  // handle normal login
  const handleLoginEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // reset errors
    dispatch(setLoginErrors(null));

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const dataObject = {
      email,
      password,
    };

    try {
      dispatch(setLoginLoading(true));

      const loginResponse = await axiosCustom.post("/email-login", {
        email: dataObject.email,
      });

      if (loginResponse.data.status === "success") {
        const profileData = loginResponse.data.user;
        dispatch(setProfileData(profileData));
        setLoginFormAndBackdropOpen(false, false);
        router.push("/");

        showToast({ message: "Logged In Successfully" });
      }
    } catch {
      dispatch(setLoginErrors(["Email/Password doesn't match. Try again."]));
    } finally {
      dispatch(setLoginLoading(false));
    }
  };

  //   const handleLogout = async (manual = true) => {
  //     const email = profileData?.email;
  //     // firebase logout
  //     const res = await logout();

  //     // if firebase logout is successful
  //     if (res.status === "success") {
  //       const logoutRes = await axiosCustom.patch("/logout", { email });

  //       if (logoutRes.data.status === "success") {
  //         dispatch(setProfileData(null));

  //         localStorage.removeItem("token");
  //         localStorage.removeItem("email");

  //         if (manual) {
  //           showToast("Signed Out Successfully", "success");
  //         }

  //         if (!manual) {
  //           showToast("You Were Signed Out, Please Sign In Again", "error");
  //         }
  //       }
  //     }
  //   };

  return {
    handleLoginEmail,
    handleLoginGoogle,
    //  handleLogout,
  };
};

export default useLoginMethods;

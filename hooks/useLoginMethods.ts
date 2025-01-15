"use client";

// next
import { useRouter } from "next/navigation";

// custom hook
import useFirebaseMethods from "@/hooks/useFirebaseMethods";
import useFormVisiblity from "./useFormVisiblity";

// redux
import useRedux from "./useRedux";
import { IAuthState, setProfileData } from "@/lib/redux/features/auth/authSlice";
import {
  setLoginLoading,
  setLoginErrors,
} from "@/lib/redux/features/login/loginSlice";

// utils
import { showToast } from "@/utils/showToast";

// type
import { axiosCustom, formDataHeader } from "@/utils/axios";
import { showNetworkErr } from "@/utils/showNetworkErr";
import axios from "axios";

const useLoginMethods = () => {
  const { dispatch } = useRedux();
  const { loginGoogle } = useFirebaseMethods();
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
        const googleUser: Partial<IAuthState["profileData"]> = {
          name: result?.user?.displayName as string,
          email: result?.user?.email as string,
          image: result?.user?.photoURL as string,
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
    try {
      // reset errors
      dispatch(setLoginErrors(null));

      dispatch(setLoginLoading(true));

      const formdata = new FormData(e.target as HTMLFormElement);

      const res = await axiosCustom.post(
        "/email-auth",
        formdata,
        formDataHeader
      );
      if (res?.data?.status === "success") {
        dispatch(setProfileData(res?.data?.user));
        setLoginFormAndBackdropOpen(false, false);

        showToast({ message: "Logged In Successfully" });
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

  const handleLogout = async () => {
    try {
      const res = await axiosCustom.get("/logout");

      if (res.data.status === "success") {
        dispatch(setProfileData(null));
        router.push("/");
        showToast({ message: "You logged out" });
        return;
      }

      showNetworkErr();
    } catch {
      showNetworkErr();
    }
  };

  return {
    handleLoginEmail,
    handleLoginGoogle,
    handleLogout,
  };
};

export default useLoginMethods;

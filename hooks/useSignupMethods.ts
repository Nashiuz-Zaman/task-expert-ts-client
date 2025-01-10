"use client";

// next
import { useRouter } from "next/navigation";

// hooks
import useFirebaseMethods from "./useFirebaseMethods";
import useFormVisiblity from "./useFormVisiblity";

// redux
import { useDispatch } from "react-redux";
import { setProfileData } from "@/lib/redux/features/auth/authSlice";

// utils
import { axiosCustom } from "@/utils/axios";
import {
  setSignupErrors,
  setSignupLoading,
} from "@/lib/redux/features/signup/signupSlice";
import { FormEvent } from "react";
import { validatePassword } from "@/utils/validatePassword";

// custom hook body starts here
const useSignupMethods = () => {
  // initial data and function extractions
  const dispatch = useDispatch();

  const router = useRouter();
  const { closeSignupFormWithBackdrop } = useFormVisiblity();

  // function to run when the form is submitted
  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // reset errors
    dispatch(setSignupErrors(null));

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const foundErrors = validatePassword(password);

    // if there are erros return from here
    if (foundErrors.length) {
      dispatch(setSignupErrors(foundErrors));
      return;
    }

    // if there are no basic errors code will reach this line
    // try {
    //   dispatch(setSignupLoading(true));
    //   const userExistsResponse = await axiosCustom.post("/users/check-user", {
    //     email,
    //   });

    //   // if user exists
    //   if (userExistsResponse.data.userExists) {
    //     dispatch(setUserAlreadyRegistered(true));
    //     dispatch(setRegistrationLoading(false));
    //   } else {
    //     const signupResponse = await signup(
    //       dataObject.email,
    //       dataObject.password
    //     );

    //     if (signupResponse.user) {
    //       // if firebase sign up successful update the profile first
    //       await updateFirebaseProfile(dataObject.userName, "");

    //       const user = {
    //         name: dataObject.userName,
    //         password: dataObject.password,
    //         email: dataObject.email,
    //         imageSource: null,
    //         role: "user",
    //       };

    //       // create user in database
    //       const userCreationResponse = await axiosCustom.post("/users", user);

    //       // if success
    //       if (userCreationResponse.data.status === "success") {
    //         const profileData = userCreationResponse.data.user;
    //         dispatch(setProfileData(profileData));

    //         closeSignupFormWithBackdrop();
    //         router.push("/");
    //       }
    //     }
    //   }
    // } catch (error) {
    //   if (error) {
    //     dispatch(setSignupErrors([error.message]));
    //   }
    // } finally {
    //   dispatch(setSignupLoading(false));
    // }
  };

  return {
    handleSignup,
  };
};

export default useSignupMethods;

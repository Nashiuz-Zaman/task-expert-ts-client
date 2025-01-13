"use client";

// react
import { useCallback } from "react";

// next js
import { useRouter } from "next/navigation";

// firebase
import {
  signOut,
  signInWithPopup,
  // deleteUser,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "@/lib/firebase/firebase.config";

// auth and google auth provider
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

const useFirebaseMethods = () => {
  const router = useRouter();

  // login with google
  const loginGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  // logout function
  const logout = useCallback(() => {
    router.push("/");
    return signOut(auth)
      .then(() => {
        return { status: "success" };
      })
      .catch(() => console.error("Error occurred"));
  }, [router]);

  // delete user;
  // const deleteUserAccount = useCallback(() => {
  //   const user = auth.currentUser;

  //   return deleteUser(user)
  //     .then(() => {
  //       return { status: "success" };
  //     })
  //     .catch((error) => {
  //       throw new Error(error.message);
  //     });
  // }, []);

  return {
    loginGoogle,
    logout,
    // deleteUserAccount,
  };
};

export default useFirebaseMethods;

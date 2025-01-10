"use client";

// react
import { useEffect } from "react";

// hook
import useRedux from "./useRedux";

// redux
import {
  AuthState,
  setProfileData,
  setProfileLoading,
} from "@/lib/redux/features/auth/authSlice";

// utils
import { axiosCustom } from "@/utils/axios";

interface AppInitResponse {
  status: "success" | "failure";
  user?: AuthState["profileData"];
}

const useAuth = (): void => {
  const { dispatch } = useRedux();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data }: { data: AppInitResponse } = await axiosCustom.get(
          "/api/v1/app-init"
        );

        // if no logged in user found
        if (data?.status === "failure") {
          dispatch(setProfileData(null));
        }
        // if logged in user found
        else if (data?.status === "success" && data?.user)
          dispatch(setProfileData(data?.user));
      } catch {
        return null;
      } finally {
        dispatch(setProfileLoading(false));
      }
    };

    checkAuth();
  }, [dispatch]);
};

export default useAuth;

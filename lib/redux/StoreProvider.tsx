"use client";

import {
  AuthState,
  setProfileData,
  setProfileLoading,
} from "./features/auth/authSlice";
// redux
import { store } from "./store";
import { Provider } from "react-redux";

interface IProps {
  children: React.ReactNode;
  initialAuthData: AuthState["profileData"] | null;
}

const StoreProvider = ({ children, initialAuthData }: IProps) => {
  // same as useAuth
  if (initialAuthData) {
    store.dispatch(setProfileData(initialAuthData));
  } else {
    store.dispatch(setProfileData(null));
  }

  store.dispatch(setProfileLoading(false));

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

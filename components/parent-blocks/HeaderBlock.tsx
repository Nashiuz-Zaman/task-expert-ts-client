"use client";

import { useSelector } from "react-redux";
import { Header, HeaderAuthBtns } from "../shared";

import { useFormVisiblity } from "@/hooks";
import { RootState } from "@/lib/redux/store";
import InnerContainer from "../containers/InnerContainer";
import logoPrimary from "@/assets/websiteLogo/logo-primary.webp";

const HeaderBlock = () => {
  const { profileData, profileLoading } = useSelector(
    (store: RootState) => store.auth
  );

  const { openLoginFormWithBackdrop, openSignupFormWithBackdrop } =
    useFormVisiblity();

  return (
    <header>
      <HeaderAuthBtns
        data={{ profileData, profileLoading }}
        functions={{
          openLoginFormWithBackdrop,
          openSignupFormWithBackdrop,
        }}
      />
      
      <InnerContainer>
        <Header logo={logoPrimary} />
      </InnerContainer>
    </header>
  );
};

export default HeaderBlock;

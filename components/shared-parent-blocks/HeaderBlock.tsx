"use client";

import { useSelector } from "react-redux";
import { Header, HeaderAuthBtns } from "../shared";

import { useFormVisiblity } from "@/hooks";
import { RootState } from "@/lib/redux/store";
import InnerContainer from "../containers/InnerContainer";
import { logoPrimaryExport } from "@/uiData/imageExports";

const HeaderBlock = () => {
  const { profileData, profileLoading } = useSelector(
    (store: RootState) => store.auth
  );
  const { setLoginFormAndBackdropOpen, setSignupFormAndBackdropOpen } =
    useFormVisiblity();

  return (
    <header>
      <HeaderAuthBtns
        data={{ profileData, profileLoading }}
        functions={{
          setLoginFormAndBackdropOpen,
          setSignupFormAndBackdropOpen,
        }}
      />

      <InnerContainer>
        <Header logo={logoPrimaryExport} />
      </InnerContainer>
    </header>
  );
};

export default HeaderBlock;

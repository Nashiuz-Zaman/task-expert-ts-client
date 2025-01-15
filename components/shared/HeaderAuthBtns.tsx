// next
import Link from "next/link";

// utils
import modifyComponentClassName from "@/utils/modifyComponentClassName";

// type imports
import { IAuthState } from "@/lib/redux/features/auth/authSlice";
import IcfyIcon from "./IcfyIcon";
import InnerContainer from "../containers/InnerContainer";
import { ButtonBtnTrans } from "@/components/buttons";
import { useLoginMethods } from "@/hooks";

// types
interface Data {
  profileData: IAuthState["profileData"];
  profileLoading: IAuthState["profileLoading"];
}

interface Functions {
  setLoginFormAndBackdropOpen: FormAndBackdropOpenFunction;
  setSignupFormAndBackdropOpen: FormAndBackdropOpenFunction;
}

interface IProps extends IExtraClassNames {
  data: Data | null;
  functions: Functions | null;
}

const HeaderAuthBtns = ({
  data = null,
  functions = null,
  className = "",
}: IProps) => {
  const btnClasses = "hover:underline";
  const { setLoginFormAndBackdropOpen, setSignupFormAndBackdropOpen } =
    functions as Functions;
  const { handleLogout } = useLoginMethods();

  return (
    <div className="bg-primaryLight h-[3rem] text-white flex items-center">
      <InnerContainer
        className={modifyComponentClassName(
          className,
          `flex ${
            data?.profileData
              ? "flex-col gap-2 sm:flex-row sm:gap-4"
              : "flex-row gap-4"
          } justify-center items-center 2md:justify-end text-sm xs:text-base lg:text-lg font-medium`
        )}
      >
        {/* if no user then login and registration btns are shown */}
        {!data?.profileLoading && !data?.profileData && (
          <>
            <ButtonBtnTrans
              className={btnClasses}
              onClickFunction={() => {
                setLoginFormAndBackdropOpen(true, true);
                setSignupFormAndBackdropOpen(false);
              }}
            >
              <IcfyIcon icon="stash:signin-alt" className="text-2xl" /> Login
            </ButtonBtnTrans>
            |
            <ButtonBtnTrans
              className={btnClasses}
              onClickFunction={() => {
                setSignupFormAndBackdropOpen(true, true);
                setLoginFormAndBackdropOpen(false);
              }}
            >
              <IcfyIcon
                icon="material-symbols-light:app-registration-rounded"
                className="text-2xl"
              />{" "}
              Register
            </ButtonBtnTrans>
          </>
        )}
        {/* if user available then show name and go to dashboard and logout btns */}
        {!data?.profileLoading && data?.profileData && (
          <>
            <p className="inline-flex items-center gap-1">
              <IcfyIcon icon="mdi:user" className="text-2xl" />

              <span className="font-semibold">{data.profileData.name}</span>
            </p>
            <Link
              href={`/dashboard/home`}
              className={`${btnClasses} underline underline-offset-[3px] text-white`}
            >
              Visit Dashboard
            </Link>

            <ButtonBtnTrans
              onClickFunction={() => {
                handleLogout();
              }}
            >
              {" "}
              Sign Out
            </ButtonBtnTrans>
          </>
        )}
      </InnerContainer>
    </div>
  );
};

export default HeaderAuthBtns;

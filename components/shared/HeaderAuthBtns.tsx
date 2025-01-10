// next
import Link from "next/link";

// utils
import modifyComponentClassName from "@/utils/modifyComponentClassName";

// type imports
import { AuthState } from "@/lib/redux/features/auth/authSlice";
import IcfyIcon from "./IcfyIcon";
import InnerContainer from "../containers/InnerContainer";

// types
interface Data {
  profileData: AuthState["profileData"];
  profileLoading: AuthState["profileLoading"];
}

interface Functions {
  openLoginFormWithBackdrop: (withBackdrop?: boolean) => void;
  openSignupFormWithBackdrop: (withBackdrop?: boolean) => void;
}

interface Props extends IExtraClassNames {
  data: Data | null;
  functions: Functions | null;
}

const HeaderAuthBtns = ({
  data = null,
  functions = null,
  className = "",
}: Props) => {
  const btnClasses = "hover:underline";

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
        {data?.profileLoading && (
          <IcfyIcon className="text-4xl mr-8" icon="eos-icons:bubble-loading" />
        )}
        {/* if no user then login and registration btns are shown */}
        {!data?.profileLoading && !data?.profileData && (
          <>
            <button
              className={btnClasses}
              onClick={() => functions?.openLoginFormWithBackdrop()}
            >
              Login
            </button>
            <button
              className={btnClasses}
              onClick={() => functions?.openSignupFormWithBackdrop()}
            >
              Register
            </button>
          </>
        )}
        {/* if user available then show name and go to dashboard and logout btns */}
        {!data?.profileLoading && data?.profileData && (
          <>
            <p>
              Logged in as: <span className="font-semibold">Nashiuz Zaman</span>
            </p>
            <Link
              href={`/manage-tasks?id=1`}
              className={`${btnClasses} underline text-primary`}
            >
              Visit Dashboard
            </Link>
            <button onClick={() => {}} className={btnClasses}>
              Sign Out
            </button>
          </>
        )}
      </InnerContainer>
    </div>
  );
};

export default HeaderAuthBtns;

// next
import Link from "next/link";

// icon
import { Icon } from "@iconify/react";

// hooks
// import useLoginMethods from "@/hooks/useLoginMethods";
import useFormVisiblity from "@/hooks/useFormVisiblity";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import modifyComponentClassName from "@/utils/modifyComponentClassName";

const HeaderAuthBtns = ({ className = "" }: IExtraClassNames) => {
  const { profileData, profileLoading } = useSelector(
    (store: RootState) => store.auth
  );
  const { openLoginFormWithBackdrop, openSignupFormWithBackdrop } =
    useFormVisiblity();
  // const { handleLogout } = useLoginMethods();

  // common btn classes
  const btnClasses = "hover:text-primary transition-all duration-default";

  return (
    <div
      className={modifyComponentClassName(
        className,
        `flex ${
          profileData ? "flex-col gap-2 sm:flex-row sm:gap-4" : "flex-row gap-4"
        } justify-center items-center 2md:justify-end text-sm xs:text-base lg:text-lg font-medium`
      )}
    >
      {profileLoading && (
        <Icon className="text-4xl mr-8" icon="eos-icons:bubble-loading" />
      )}

      {/* if no user then login and registration btns are shown */}
      {!profileLoading && !profileData && (
        <>
          <button
            onClick={() => openLoginFormWithBackdrop}
            className={btnClasses}
          >
            Login
          </button>

          <button
            onClick={() => openSignupFormWithBackdrop}
            className={btnClasses}
          >
            Register
          </button>
        </>
      )}

      {/* if user available then show name and go to dashboard and logout btns */}
      {!profileLoading && profileData && (
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
    </div>
  );
};

export default HeaderAuthBtns;

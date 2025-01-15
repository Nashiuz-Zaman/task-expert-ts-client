"use client";

// react
import { useState } from "react";

// next
import Image from "next/image";

// hooks
import useClickOutside from "@/hooks/useClickOutside";
import useEscapeClose from "@/hooks/useEscapeClose";

import { IAuthState } from "@/lib/redux/features/auth/authSlice";
import { ButtonBtnTrans, LinkBtnTrans } from "../buttons";
import IcfyIcon from "./IcfyIcon";

interface IProps extends IExtraClassNames {
  profileData: IAuthState["profileData"];
  logoutFunction: () => void;
}

const UserProfile = ({
  profileData,
  logoutFunction,
  className = "",
}: IProps) => {
  const [showInfoPanel, setShowInfoPanel] = useState(false);

  const handleShowInfoPanel = () => {
    setShowInfoPanel((prev) => {
      return !prev;
    });
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as Element).closest(".userpanel-focus")) {
      setShowInfoPanel(false);
    }
  };
  useClickOutside(showInfoPanel, handleClickOutside);
  useEscapeClose(() => {
    setShowInfoPanel(false);
  });

  const optionsClasses =
    "flex text-neutral-500 items-center gap-2 hover:text-primary transition-all duration-200";

  // declare name and photo variables
  let name, image;

  if (profileData) {
    // assign name and photo variables
    name = profileData?.name;
    image = profileData?.image;

    return (
      <div
        className={`h-8 md:h-10 xl:h-14 cursor-pointer relative ${className}`}
      >
        {/* profile image container div */}
        <div
          onClick={handleShowInfoPanel}
          className="w-full h-full aspect-square border border-neutral-300  rounded-full overflow-hidden"
        >
          {/* if no photo provided show default silhoutte photo */}
          {!image && (
            <div className="w-full h-full p-2 flex items-center justify-center">
              <IcfyIcon
                className="w-full h-full text-neutral-300"
                icon="mingcute:user-3-fill"
              />
            </div>
          )}

          {/* if there is photo show this part */}
          {image !== null && (
            <Image
              width={400}
              height={400}
              className="w-full h-full object-cover"
              src={image}
              alt="user image"
            />
          )}
        </div>

        {/* positioned div for userpanel menu */}
        <div
          className={`rounded-2xl w-[12rem] md:w-[15rem] bg-white border border-neutral-200 shadow-md p-4 absolute z-30 bottom-0 right-0 translate-y-[105%] space-y-5 text-left cursor-default userpanel-focus ${
            showInfoPanel ? "block" : "hidden"
          }`}
        >
          <p className="font-bold md:text-lg">{name}</p>

          <LinkBtnTrans href="/" className={optionsClasses}>
            <IcfyIcon icon="icon-park-solid:home" /> Home
          </LinkBtnTrans>

          <LinkBtnTrans
            href={`/settings?id=${profileData?._id}`}
            className={optionsClasses}
          >
            <IcfyIcon icon="iconamoon:settings-fill" /> Settings
          </LinkBtnTrans>

          <ButtonBtnTrans
            className={optionsClasses}
            onClickFunction={logoutFunction}
          >
            <IcfyIcon icon="mdi:logout" /> Sign Out
          </ButtonBtnTrans>
        </div>
      </div>
    );
  }
};

export default UserProfile;

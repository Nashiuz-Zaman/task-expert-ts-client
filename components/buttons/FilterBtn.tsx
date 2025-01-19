"use client";

// react
import { useState } from "react";

// icon
import { Icon } from "@iconify/react";
import ButtonBtn from "./ButtonBtn";

interface IProps {
  text?: string;
  renderChildren: (
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
}

const FilterBtn = ({ text = "Filter", renderChildren }: IProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="relative ml-auto mr-3">
      <ButtonBtn
        onClickFunction={handleClick}
        className="px-3 py-2 lg:px-4 lg:py-2 rounded-full white-black-theme"
      >
        <Icon className="text-lg" icon="ph:sliders-light" />{" "}
        <p className="hidden md:block">{text}</p>
      </ButtonBtn>

      {renderChildren && renderChildren(showMenu, setShowMenu)}
    </div>
  );
};

export default FilterBtn;

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

const SortBtn = ({ text = "Sort", renderChildren }: IProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="relative focus:outline-none">
      <ButtonBtn
        onClickFunction={handleClick}
        className="px-3 py-2 lg:px-4 lg:py-2 rounded-full white-black-theme"
      >
        <Icon className="text-lg" icon="ph:sort-descending-light" />{" "}
        <p className="hidden md:block">{text}</p>
      </ButtonBtn>

      {renderChildren && renderChildren(showMenu, setShowMenu)}
    </div>
  );
};

export default SortBtn;

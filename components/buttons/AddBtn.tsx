"use client";

import IcfyIcon from "../shared/IcfyIcon";
import ButtonBtn from "./ButtonBtn";

const AddBtn = ({ text = "Add", onClickFunction }: ITaskInteractionBtn) => {
  return (
    <ButtonBtn
      onClickFunction={onClickFunction}
      className="primary-outlined-theme px-3 py-2 lg:px-4 lg:py-2 rounded-full"
    >
      <IcfyIcon className="text-lg" icon="mdi:add-bold" />
      <p className="hidden md:block text">{text}</p>
    </ButtonBtn>
  );
};

export default AddBtn;

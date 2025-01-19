"use client";

import IcfyIcon from "../shared/IcfyIcon";

const EditBtn = ({
  onClickFunction,
  text,
  className = "",
}: ITaskInteractionBtn) => {
  return (
    <button
      type="button"
      title="Edit"
      aria-label="Edit button"
      className={`flex items-center gap-2 text-neutral-500 hover:text-primary ${className}`}
      onClick={onClickFunction}
    >
      <IcfyIcon
        style={{ fontSize: "inherit" }}
        className="text-inherit"
        icon="ic:round-edit"
      />

      {text && (
        <span
          style={{ fontSize: "inherit" }}
          className="text-inherit capitalize"
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default EditBtn;

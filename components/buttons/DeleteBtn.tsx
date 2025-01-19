"use client";

// icons
import IcfyIcon from "../shared/IcfyIcon";

const DeleteBtn = ({
  onClickFunction,
  text,
  className = "",
}: ITaskInteractionBtn) => {
  return (
    <button
      type="button"
      title="Delete"
      aria-label="Delete button"
      className={`flex items-center gap-2 text-red-500 ${className}`}
      onClick={onClickFunction}
    >
      <IcfyIcon
        style={{ fontSize: "inherit" }}
        className="text-inherit"
        icon="material-symbols:delete"
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

export default DeleteBtn;

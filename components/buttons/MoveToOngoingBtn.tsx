"use client";

// icons
import IcfyIcon from "../shared/IcfyIcon";

const MoveToOngoingBtn = ({
  onClickFunction,
  text,
  className = "",
}: ITaskInteractionBtn) => {
  return (
    <button
      type="button"
      title="Move to Ongoing"
      aria-label="Move to Ongoing button"
      className={`flex items-center gap-2 text-neutral-500 hover:text-primary ${className}`}
      onClick={onClickFunction}
    >
      <IcfyIcon
        style={{ fontSize: "inherit" }}
        className="text-inherit"
        icon="ph:clock-clockwise-duotone"
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

export default MoveToOngoingBtn;

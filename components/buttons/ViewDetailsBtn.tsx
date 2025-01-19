"use client";

// icons
import IcfyIcon from "../shared/IcfyIcon";

const ViewDetailsBtn = ({
  onClickFunction,
  text,
  className = "",
}: ITaskInteractionBtn) => {
  return (
    <button
      type="button"
      title="View Details"
      aria-label="View Details Button"
      className={`flex items-center gap-2 text-neutral-500 hover:text-primary ${className}`}
      onClick={onClickFunction}
    >
      <IcfyIcon
        style={{ fontSize: "inherit" }}
        className="text-inherit"
        icon="ph:magnifying-glass-plus-fill"
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

export default ViewDetailsBtn;

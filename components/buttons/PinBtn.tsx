"use client";

// icons
import IcfyIcon from "../shared/IcfyIcon";

const PinBtn = ({
  onClickFunction,
  text,
  className = "",
}: ITaskInteractionBtn) => {
  return (
    <button
      type="button"
      title="Pin Task"
      aria-label="Pin button"
      className={`flex items-center gap-2 text-neutral-500 hover:text-primary ${className}`}
      onClick={onClickFunction}
    >
      <IcfyIcon
        style={{ fontSize: "inherit" }}
        className="text-inherit"
        icon="iconoir:pin-solid"
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

export default PinBtn;

"use client";

// icons
import IcfyIcon from "../shared/IcfyIcon";

const MoveToTodoBtn = ({
  onClickFunction,
  text,
  className = "",
}: ITaskInteractionBtn) => {
  return (
    <button
      type="button"
      title="Move to Todo"
      aria-label="Move to Todo button"
      className={`flex items-center gap-2 text-neutral-500 hover:text-primary ${className}`}
      onClick={onClickFunction}
    >
      <IcfyIcon
        style={{ fontSize: "inherit" }}
        className="text-inherit"
        icon="fluent:clipboard-task-list-ltr-24-filled"
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

export default MoveToTodoBtn;

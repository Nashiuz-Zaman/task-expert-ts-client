import IcfyIcon from "../shared/IcfyIcon";

const CloseBtn = ({
  onClickFunction,
  className = "",
}: IExtraClassNames & IOnClickFunctionBtn) => {
  return (
    <button
      title="Close"
      aria-label="Close button"
      className={`ml-auto w-max block text-2xl focus:outline-none ${className}`}
      onClick={onClickFunction}
    >
      <IcfyIcon
        style={{ fontSize: "inherit" }}
        icon="iconamoon:close-duotone"
      />
    </button>
  );
};

export default CloseBtn;

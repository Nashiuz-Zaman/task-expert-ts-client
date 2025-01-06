// component
// import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";

// type
interface Props {
  text: string;
  onClickFunction:
    | (() => void)
    | ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  colorTheme: string;
  modifyClasses: string;
  loading?: boolean;
  disabled?: boolean;
}

const ButtonBtn = ({
  text,
  onClickFunction,
  colorTheme = "primary",
  modifyClasses = "",
  loading = false,
  disabled = false,
}: Props) => {
  const colorThemeClass = `${colorTheme}Classes`;

  const allClasses = `block min-w-[6rem] w-max capitalize transition-all duration-default rounded-defaultLg text-center text-sm sm:text-base px-4 py-2 active:scale-[0.98] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed font-medium border ${colorThemeClass} ${modifyClasses}`;

  return (
    <button
      style={{ backfaceVisibility: "hidden" }}
      disabled={disabled}
      onClick={onClickFunction}
      // decide the design of button according to the props
      className={allClasses}
    >
      {/* {loading && (
        <LoadingSpinner
          onlyLoader={true}
          loaderSizeClass="text-xl xl:text-2xl"
        />
      )} */}
      {!loading && text}
    </button>
  );
};

export default ButtonBtn;

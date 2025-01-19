// icons
import { Icon } from "@iconify/react";

const DotsMenuBtn = ({
  onClickFunction,
  className = "",
}: IExtraClassNames & IOnClickFunctionBtn) => {
  return (
    <button
      type="button"
      onClick={onClickFunction}
      className={`block text-neutral-500 hover:text-primary transition-all duration-default ${className}`}
    >
      <Icon
        className="text-4xl text-inherit"
        icon="heroicons-solid:dots-horizontal"
      />
    </button>
  );
};

export default DotsMenuBtn;

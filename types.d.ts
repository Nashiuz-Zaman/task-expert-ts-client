interface IExtraClassNames {
  className?: string;
}

interface IOnClickFunctionBtn {
  onClickFunction?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}



type FormAndBackdropOpenFunction = (
  formOpen: boolean,
  backdropOpen?: boolean | null
) => void;

interface IinputFieldType {
  placeholder: string;
  name: string;
  value?: string;
  isRequired?: boolean;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
}

interface IOnChangeInput {
  onChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IOnClickFunctionGeneric {
  onClickFunction?: (e: React.MouseEvent<HTMLElement>) => void;
}

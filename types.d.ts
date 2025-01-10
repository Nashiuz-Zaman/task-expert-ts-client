interface IExtraClassNames {
  className?: string;
}

interface IOnClickFunctionBtn {
  onClickFunction?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IOnClickFunctionGeneric {
  onClickFunction?: (e: React.MouseEvent<HTMLElement>) => void;
}

import createRegex from "./createRegex";

const modifyComponentClassName = (
  extraClassNamesStr: string,
  originalClassNamesStr: string
): string => {
  const classNameArr = extraClassNamesStr.split(" ");
  const customRegexes = classNameArr.map((className) => createRegex(className));

  let newClassNamesStr = originalClassNamesStr;

  customRegexes.forEach((regex, i) => {
    newClassNamesStr = newClassNamesStr.replace(regex, classNameArr[i]);
  });

  return newClassNamesStr;
};

export default modifyComponentClassName;

"use client";

// core
import { useState } from "react";

// lib
import { Icon } from "@iconify/react";
import modifyComponentClassName from "@/utils/modifyComponentClassName";
import IcfyIcon from "./IcfyIcon";

interface IProps extends IExtraClassNames, IOnChangeInput, IinputFieldType {
  labelText?: string;
  passwordField?: boolean;
  labelTextClassName?: string;
  inputClassName?: string;
  labelContainerClassName?: string;
  icon?: string | null;
  iconClassName?: string;
  passwordVisibilityIconClassName?: string;
  passwordVisibilityIconBoxClassName?: string;
  placeholderClassName?: string;
  invertIconPosition?: boolean;
}

const Inputfield = ({
  labelText,
  type = "text",
  placeholder = "No placeholder provided",
  name = "",
  passwordField = false,
  labelTextClassName = "",
  inputClassName = "",
  className = "",
  labelContainerClassName = "",
  icon = null,
  iconClassName = "",
  passwordVisibilityIconClassName = "",
  passwordVisibilityIconBoxClassName = "",
  placeholderClassName = "",
  isRequired = true,
  invertIconPosition = false,
  value,
  onChangeFunction = () => {},
}: IProps) => {
  const [passHidden, setPassHidden] = useState<boolean>(true);

  return (
    <label
      className={`block w-full !rounded-[inherit] text-textMain ${className}`}
    >
      {(labelText || passwordField) && (
        <div
          className={modifyComponentClassName(
            labelContainerClassName,
            `${
              labelText && passwordField ? "flex items-center" : ""
            } text-inherit`
          )}
        >
          {labelText && (
            <p
              className={modifyComponentClassName(
                labelTextClassName,
                "text-inherit"
              )}
            >
              {labelText}
            </p>
          )}

          {passwordField && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setPassHidden((prev) => !prev);
              }}
              className={`flex items-center gap-1 ml-auto mr-1 text-inherit mb-1 ${passwordVisibilityIconBoxClassName}`}
            >
              <IcfyIcon
                icon={passHidden ? "mdi:eye" : "el:eye-close"}
                className={passwordVisibilityIconClassName}
              />

              <span className="block">{passHidden ? "Show" : "Hide"}</span>
            </button>
          )}
        </div>
      )}

      <div
        className={`bg-white border rounded-md border-neutral-300 p-2 items-center w-full lg:px-4 lg:py-3 ${
          icon
            ? `grid ${
                invertIconPosition
                  ? "grid-cols-[auto_1fr]"
                  : "grid-cols-[1fr_auto]"
              } `
            : "block"
        } ${inputClassName}`}
      >
        <input
          onChange={onChangeFunction}
          style={{
            color: "inherit",
            fontSize: "inherit",
            backgroundColor: "inherit",
            lineHeight: "inherit",
          }}
          name={name}
          placeholder={placeholder}
          className={`block w-full focus:outline-none ${
            invertIconPosition ? "order-2" : "order-1"
          } ${placeholderClassName}`}
          type={passwordField ? (passHidden ? "password" : "text") : type}
          required={isRequired}
          value={value}
        />
        {icon && (
          <Icon
            icon={icon}
            className={`block my-1 mx-3 w-max text-inherit ${
              invertIconPosition ? "order-1" : "order-2"
            } ${iconClassName}`}
          />
        )}
      </div>
    </label>
  );
};

export default Inputfield;

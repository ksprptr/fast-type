import React from "react";
import { getVariant } from "@/utils/functions/button-functions";
import { ExtendedProps } from "@/utils/types/global-types";

// Props interface
interface Props extends ExtendedProps {
  type?: "button" | "submit" | "reset";
  styleType?: "solid" | "outline";
  rounded?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Component representing a button
 */
export default function Button({ type = "button", styleType = "solid", rounded = false, disabled = false, onClick, children, className, style }: Props) {
  return (
    <button type={type} onClick={onClick} style={style} className={`${getVariant(styleType)} ${rounded ? "rounded-full" : "rounded-lg"} font-medium py-2 px-4 duration-150 select-none ${className}`} disabled={disabled}>
      {children}
    </button>
  );
}

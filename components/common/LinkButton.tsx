import Link from "next/link";
import React from "react";
import { getVariant } from "@/utils/functions/button-functions";
import { ExtendedProps } from "@/utils/types/global-types";

// Props interface
interface Props extends ExtendedProps {
  styleType?: "solid" | "outline";
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rounded?: boolean;
}

/**
 * Component representing a link button
 */
export default function LinkButton({ styleType = "solid", href, target = "_self", rounded = false, children, className, style }: Props) {
  return (
    <div>
      <Link href={href} target={target} style={style} className={`${getVariant(styleType)} ${rounded ? "rounded-full" : "rounded-lg"} font-medium py-2 px-4 duration-150 select-none ${className}`}>
        {children}
      </Link>
    </div>
  );
}

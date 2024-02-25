import React, { PropsWithChildren } from "react";

/**
 * Component representing a popup
 */
export default function Popup({ children }: PropsWithChildren) {
  return <div className="h-screen w-screen z-10 bg-black bg-opacity-50 rounded-lg flex fixed top-0 left-0 bottom-0">{children}</div>;
}

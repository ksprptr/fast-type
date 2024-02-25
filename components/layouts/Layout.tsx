import React, { PropsWithChildren } from "react";

/**
 * Component representing a layout
 */
export default function Layout({ children }: PropsWithChildren) {
  return <div className="max-w-screen-2xl px-4 mx-auto">{children}</div>;
}

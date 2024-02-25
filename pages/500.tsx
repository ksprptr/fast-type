import Logo from "@/public/favicon.ico";
import Image from "next/image";
import React from "react";
import LinkButton from "@/components/common/LinkButton";
import CenterLayout from "@/components/layouts/CenterLayout";

/**
 * Component representing a custom 500 page
 */
export default function Custom500() {
  return (
    <CenterLayout>
      <div className="text-center text-lg text-zinc-900">
        <Image src={Logo} alt="Logo" width={20} height={20} className="mx-auto" />
        <h1 className="my-8 text-zinc-50">500 | Internal Server Error</h1>
        <LinkButton href="/" className="text-sm">
          Return to home
        </LinkButton>
      </div>
    </CenterLayout>
  );
}

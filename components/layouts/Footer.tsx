import Link from "next/link";
import React from "react";

/**
 * Component representing a footer
 */
export default function Footer() {
  return (
    <footer className="text-zic-50 text-center">
      <div className="flex flex-col py-4 text-lg text-gray-50">
        <span>&copy; FastType {new Date().getFullYear()}</span>
        <span>
          Created by{" "}
          <Link href="https://ksprptr.dev" target="_blank" className="text-primary hover:underline duration-150 font-medium">
            Petr Kaspar
          </Link>
        </span>
      </div>
    </footer>
  );
}

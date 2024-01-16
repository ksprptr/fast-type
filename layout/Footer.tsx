import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-zic-50 text-center">
      <div className="flex flex-col py-4 text-lg text-gray-50">
        <h3>&copy; FastType {new Date().getFullYear()}</h3>
        <h3>
          Created by{" "}
          <Link href="https://kasparpetr.com" target="_blank" className="text-lime-500 hover:underline duration-150 font-medium">
            Petr Kaspar
          </Link>
        </h3>
      </div>
    </footer>
  );
}

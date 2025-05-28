"use client";
import Link from "next/link";
import { useState } from "react";
import LoginButton from "../Authorization/LoginButton";

export function NavBarSmallScreen({
  sessionEmail,
}: {
  sessionEmail: string | null;
}) {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const styleTranslate = showLinks
    ? { transform: "translateX(0%)" }
    : { transform: "translateX(-100%)" };
  return (
    <div className="max-w-[90%] md:hidden w-7xl  flex justify-between items-center">
      <Link onClick={handleShowLinks} href="/">
        <img className="size-8 " src="/logo_simple_camaleonic.png" />
      </Link>
      <LoginButton sessionEmail={sessionEmail} />
      <button onClick={handleShowLinks}>
        <img src="/navBars.png" className="w-8 h-8" />
      </button>
      <div
        style={styleTranslate}
        className="absolute top-14 right-0  w-screen p-8  flex flex-col  bg-gray-600 transition-transform duration-300 ease-in-out"
      >
        <div className="flex flex-col gap-8">
          <Link
            onClick={handleShowLinks}
            className="text-text-primary hover:text-text-secondary transition-colors"
            href="/"
          >
            Home
          </Link>

          <Link
            onClick={handleShowLinks}
            className="text-text-primary hover:text-text-secondary transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            onClick={handleShowLinks}
            className="text-text-primary hover:text-text-secondary transition-colors"
            href="/tables"
          >
            Tables
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavBarSmallScreen;

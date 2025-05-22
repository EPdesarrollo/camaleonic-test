"use client";
import { useState } from "react";

export function NavBarSmallScreen() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const styleTranslate = showLinks
    ? { transform: "translateX(0%)" }
    : { transform: "translateX(-100%)" };
  return (
    <div className="max-w-[90%] md:hidden w-7xl  flex justify-between items-center">
      <a onClick={handleShowLinks} href="/">
        <img className="size-8 " src="/logo_simple_camaleonic.png" />
      </a>
      <button onClick={handleShowLinks}>
        <img src="/navBars.png" className="w-8 h-8" />
      </button>

      <div
        style={styleTranslate}
        className="absolute top-14 right-0  w-screen p-8  flex flex-col  bg-gray-600 transition-transform duration-300 ease-in-out"
      >
        <div className="flex flex-col gap-8">
          <a
            onClick={handleShowLinks}
            className="text-text-primary hover:text-text-secondary transition-colors"
            href="/"
          >
            Home
          </a>

          <a
            onClick={handleShowLinks}
            className="text-text-primary hover:text-text-secondary transition-colors"
            href="/dashboard"
          >
            Dashboard
          </a>
          <a
            onClick={handleShowLinks}
            className="text-text-primary hover:text-text-secondary transition-colors"
            href="/tables"
          >
            Tables
          </a>
        </div>
      </div>
    </div>
  );
}
export default NavBarSmallScreen;

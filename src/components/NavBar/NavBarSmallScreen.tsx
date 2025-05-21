"use client";
import { useState } from "react";

export function NavBarSmallScreen() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    console.log("show links");
    setShowLinks(!showLinks);
  };
  return (
    <div className="md:hidden w-7xl  flex justify-between items-center">
      <a href="/">
        <img className="size-8 " src="/logo_simple_camaleonic.png" />
      </a>
      <button onClick={handleShowLinks}>
        <img src="/navBars.png" className="w-8 h-8" />
      </button>
      {showLinks && (
        <div className="absolute top-14 right-0  w-screen p-8  flex flex-col  bg-gray-600">
          <div className="flex flex-col gap-8">
            <a
              className="text-text-primary hover:text-text-secondary transition-colors"
              href="/"
            >
              Home
            </a>

            <a
              className="text-text-primary hover:text-text-secondary transition-colors"
              href="/dashboard"
            >
              Dashboard
            </a>
            <a
              className="text-text-primary hover:text-text-secondary transition-colors"
              href="/tables"
            >
              Tables
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
export default NavBarSmallScreen;

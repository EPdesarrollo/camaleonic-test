import NavBarSmallScreen from "./NavBar/NavBarSmallScreen";
import NavBarBigScreen from "./NavBar/NavBarBigScreen";

export function NavBar() {
  return (
    <nav className="fixed w-screen p-3 flex justify-center  bg-black ">
      {/* big screen */}
      <NavBarBigScreen />

      {/* smallScreen */}
      <NavBarSmallScreen />
    </nav>
  );
}

export default NavBar;

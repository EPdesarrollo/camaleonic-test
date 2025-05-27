import { auth0 } from "@/lib/auth0";
import NavBarSmallScreen from "./NavBarSmallScreen";
import NavBarBigScreen from "./NavBarBigScreen";

export async function NavBar() {
  const session = await auth0.getSession();

  return (
    <nav className="fixed w-screen p-3 flex justify-center  bg-black ">
      <NavBarBigScreen session={session} />
      <NavBarSmallScreen session={session} />
    </nav>
  );
}

export default NavBar;

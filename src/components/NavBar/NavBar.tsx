import { auth0 } from "@/lib/auth0";
import NavBarSmallScreen from "./NavBarSmallScreen";
import NavBarBigScreen from "./NavBarBigScreen";

export async function NavBar() {
  const session = await auth0.getSession();
  const sessionEmail = session?.user?.email || null;

  return (
    <nav className="fixed w-screen p-3 flex justify-center  bg-gray-950 ">
      <NavBarBigScreen sessionEmail={sessionEmail} />
      <NavBarSmallScreen sessionEmail={sessionEmail} />
    </nav>
  );
}

export default NavBar;

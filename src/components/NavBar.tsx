import LoginButton from "./Authorization/LoginButton";

export function NavBar() {
  return (
    <nav className="w-screen  p-3 flex justify-center  bg-black fixed">
      <div className="w-7xl content-center flex justify-between items-center">
        <a href="/">
          <img className="size-8 text " src="/logo_simple_camaleonic.png" />
        </a>
        <div className="flex gap-8">
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
        <LoginButton />
      </div>
    </nav>
  );
}

export default NavBar;

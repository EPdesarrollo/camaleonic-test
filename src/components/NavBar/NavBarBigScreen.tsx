import Image from "next/image";
import Link from "next/link";
import LoginButton from "../Authorization/LoginButton";

export function NavBarBigScreen({
  sessionEmail,
}: {
  sessionEmail: string | null;
}) {
  return (
    <div className="hidden md:inline">
      <div className="w-[1200px] max-w-[90vw] content-center flex justify-between items-center">
        <Link className="w-[30%] flex justify-center" href="/">
          <Image
            alt="logo"
            className="size-8 "
            src="/logo_simple_camaleonic.png"
          />
        </Link>
        <div className="w-[30%] flex justify-center gap-5">
          <Link
            className="text-text-primary hover:text-text-secondary transition-colors"
            href="/"
          >
            Home
          </Link>

          <Link
            className="text-text-primary hover:text-text-secondary transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="text-text-primary hover:text-text-secondary transition-colors"
            href="/tables"
          >
            Tables
          </Link>
        </div>
        <LoginButton sessionEmail={sessionEmail} />
      </div>
    </div>
  );
}

export default NavBarBigScreen;

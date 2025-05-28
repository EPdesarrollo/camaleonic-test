export function LoginButton({ sessionEmail }: { sessionEmail: string | null }) {
  if (!sessionEmail) {
    return (
      <div className="w-[50%] md:w-[30%] flex justify-center gap-x-4">
        <a
          className="hidden md:inline text-white"
          href="/auth/login?screen_hint=signup"
        >
          Sign up
        </a>
        <a className="text-white" href="/auth/login">
          Log in
        </a>
      </div>
    );
  }
  return (
    <div className="w-[30%]  flex justify-center gap-x-4">
      <h1 className="text-white hidden md:inline">{sessionEmail}</h1>
      <a className="text-white" href="/auth/logout">
        Log out
      </a>
    </div>
  );
}

export default LoginButton;

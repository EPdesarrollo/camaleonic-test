import { auth0 } from "@/lib/auth0";

export async function LoginButton() {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <div className="flex gap-x-4">
        <a className="text-white" href="/auth/login?screen_hint=signup">
          Sign up
        </a>
        <a className="text-white" href="/auth/login">
          Log in
        </a>
      </div>
    );
  }
  return (
    <div className="flex gap-x-4">
      <h1 className="text-white">{session.user.name}!</h1>
      <a className="text-white" href="/auth/logout">
        Log out
      </a>
    </div>
  );
}

export default LoginButton;

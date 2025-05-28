import Link from "next/link";
import { auth0 } from "@/lib/auth0";
import { addUser } from "./actions";
import Graphics from "@/components/Home/Graphics";

export default async function Home() {
  const session = await auth0.getSession();
  if (session) {
    await addUser(session.user.nickname!, session.user.email!);
  }
  return (
    <main className="min-h-screen w-screen ">
      <section className=" h-screen w-screen p-8 grid place-items-center">
        <div className="w-11/12 md:w-3xl lg:w-5xl   flex flex-col gap-10 items-center justify-center">
          <img className="w-60 md:w-80 lg:w-96" src="/logo_camaleonic.png" />
          <h1 className="text-2xl text-center text-white font-bold  md:text-5xl lg:text-6xl">
            Real time data analysis to improve decision making
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
            <Link href="/dashboard">Go to dashboard</Link>
          </button>
        </div>
      </section>
      <div className="pt-20 pb-30 bg-white ">
        <Graphics />
        <section className="w-11/12 md:w-3xl lg:w-5xl m-auto mt-30 gap-16">
          <p className="text-center text-gray-700 text-2xl   ">
            <em>
              &apos; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed bibendum ipsum ut vulputate bibendum. Donec congue, sapien a
              finibus sollicitudin, diam sem convallis nibh, pulvinar varius
              dolor libero quis quam. Aliquam vel ligula imperdiet enim mollis
              pharetra nec et leo. &apos;
            </em>
          </p>
        </section>
      </div>
    </main>
  );
}

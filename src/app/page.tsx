import Graphics from "@/components/Home/Graphics";
import { auth0 } from "@/lib/auth0";

async function fetchData(session: any) {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session: session,
      }),
    });
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    if (data.status !== 200) {
      throw new Error();
    }
    return data;
  } catch (err) {
    return null;
  }
}
export async function Home() {
  // session check
  const session = await auth0.getSession();
  if (session) {
    await fetchData(session);
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
            <a href="/dashboard">Go to dashboard</a>
          </button>
        </div>
      </section>
      <Graphics />
      <section className="w-11/12 md:w-3xl lg:w-5xl m-auto mt-40 gap-16">
        <p className="text-center text-white text-2xl  mb-40 ">
          <em>
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            bibendum ipsum ut vulputate bibendum. Donec congue, sapien a finibus
            sollicitudin, diam sem convallis nibh, pulvinar varius dolor libero
            quis quam. Aliquam vel ligula imperdiet enim mollis pharetra nec et
            leo. '
          </em>
        </p>
      </section>
    </main>
  );
}

export default Home;

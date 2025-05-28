import Link from "next/link";

export function Unauthorization({ pageTitle }: { pageTitle: string }) {
  return (
    <main className="min-h-screen w-screen p-4 pt-20 bg-white grid place-items-center">
      <div className="max-w-[90%] md:w-[500px]  p-10 bg-gray-200 rounded-md shadow-md text-center">
        <h1 className="mb-4 text-3xl md:text-4xl text-black font-bold ">
          {pageTitle}
        </h1>
        <p className="text-black">Log in to access this page.</p>
        <Link href="/auth/login">
          <button className="mt-4 px-4 py-1  bg-sky-600 text-white  rounded-md hover:bg-cyan-700 transition duration-200">
            Log in
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Unauthorization;

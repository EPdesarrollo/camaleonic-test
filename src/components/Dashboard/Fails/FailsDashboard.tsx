import Link from "next/link";
export function FailDashboard({
  title,
  linkTo,
  buttonText,
}: {
  title: string;
  linkTo: string;
  buttonText: string;
}) {
  return (
    <main className="min-h-screen w-screen p-4 pt-20 bg-white grid place-items-center">
      <div className="max-w-[90%] md:w-[500px]  p-10 bg-gray-200 rounded-md shadow-md text-center">
        <h1 className="mb-4 text-2xl md:text-3xl text-black font-bold ">
          {title}
        </h1>
        <Link href={linkTo}>
          <button className="mt-4 px-4 py-1  bg-sky-600 text-white  rounded-md hover:bg-cyan-700 transition duration-200">
            {buttonText}
          </button>
        </Link>
      </div>
    </main>
  );
}

export default FailDashboard;

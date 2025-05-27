import { auth0 } from "@/lib/auth0";
import { fetchData } from "@/lib/fetchData";
import DataTable from "@/components/Tables/DataTable";
import Unauthorization from "@/components/Authorization/Unauthorization";

export async function tables() {
  const session = await auth0.getSession();
  if (!session) {
    return <Unauthorization pageTitle="Tables" />;
  }
  const data = await fetchData(session.user.nickname || "");
  if (!data) {
    return (
      <main className="min-h-screen w-screen p-4 pt-20 bg-white grid place-items-center">
        <div className="max-w-[90%] md:w-[500px]  p-10 bg-gray-200 rounded-md shadow-md text-center">
          <h1 className="mb-4 text-2xl md:text-3xl text-black font-bold ">
            Error: Fetch posts failed!
          </h1>
        </div>
      </main>
    );
  }
  const posts = data.posts;

  return (
    <main className="min-h-screen w-screen pt-20 pb-20   bg-white position-relative">
      <section className="w-[1200px] max-w-[95vw] md:max-w-[90vw] m-auto">
        <div className=" flex col gap-1 md:gap-2">
          <div className=" w-1/6 px-1 py-1 grid place-items-center bg-gray-200 text-[0.6rem] md:text-base  ">
            <p>Post ID</p>
          </div>
          <div className=" w-1/6 px-1 py-1 grid place-items-center bg-gray-200 text-[0.6rem] md:text-base ">
            <p>Date</p>
          </div>
          <div className=" w-1/6 px-1 py-1 grid place-items-center  bg-gray-200 text-[0.6rem] md:text-base  ">
            <p>Likes</p>
          </div>
          <div className=" w-1/6 px-1 py-1 grid place-items-center  bg-gray-200 text-[0.6rem] md:text-base  ">
            <p>Coments</p>
          </div>
          <div className=" w-1/6 px-1 py-1 grid place-items-center  bg-gray-200 text-[0.6rem] md:text-base  ">
            <p>Shares</p>
          </div>
          <div className=" w-1/6 px-1 py-1 grid place-items-center  bg-gray-200 text-[0.6rem] md:text-base  ">
            <p>Saves</p>
          </div>
          <div className=" w-1/6 px-1 py-1 grid place-items-center  bg-gray-200 text-[0.6rem] md:text-base  ">
            <p>Unlikes</p>
          </div>
          <div className=" w-1/6 px-1 py-1 grid place-items-center  bg-gray-200 text-[0.6rem] md:text-base  ">
            <p>Reports</p>
          </div>
        </div>
        <DataTable posts={posts} userSession={session.user.nickname} />
      </section>
    </main>
  );
}

export default tables;

import { auth0 } from "@/lib/auth0";
import PostRow from "@/components/Tables/PostRow";
import Unauthorization from "@/components/Authorization/Unauthorization";

export async function tables() {
  const session = await auth0.getSession();
  if (!session) {
    return <Unauthorization pageTitle="Tables" />;
  }
  return (
    <main className="min-h-screen w-screen pt-20 pb-20   bg-white position-relative">
      <section className="w-[1200px] max-w-[95vw] md:max-w-[90vw] m-auto">
        <div className=" flex col gap-1 md:gap-2">
          <div className=" w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-[0.75rem] md:text-base  ">
            <p>Post ID</p>
          </div>
          <div className="w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-[0.75rem] md:text-base ">
            <p>Date</p>
          </div>
          <div className="w-1/5 px-2 py-1 grid place-items-center flex justify-center bg-gray-200 text-[0.75rem] md:text-base  ">
            <p>Likes</p>
          </div>
          <div className="w-1/5 px-2 py-1 grid place-items-center flex justify-center bg-gray-200 text-[0.75rem] md:text-base  ">
            <p>Coments</p>
          </div>
          <div className="w-1/5 px-2 py-1 grid place-items-center flex justify-center bg-gray-200 text-[0.75rem] md:text-base  ">
            <p>Shares</p>
          </div>
        </div>
        <PostRow />
      </section>
    </main>
  );
}

export default tables;

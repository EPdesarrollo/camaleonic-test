import { auth0 } from "@/lib/auth0";
import PostRow from "@/components/Tables/PostRow";
import Unauthorization from "@/components/Authorization/Unauthorization";

export async function tables() {
  const session = await auth0.getSession();
  if (!session) {
    return <Unauthorization />;
  }
  return (
    <main className="min-h-screen w-screen p-8 pt-20 bg-white position-relative">
      <section className="w-11/12 md:w-3xl lg:w-5xl m-auto ">
        <div className="flex col gap-2">
          <div className="w-3/5 bg-gray-200 px-6 py-2">
            <p>Post ID</p>
          </div>
          <div className="w-36 bg-gray-200 px-6 py-2">
            <p>Date</p>
          </div>
          <div className="w-36 bg-gray-200 px-6 py-2 flex justify-center">
            <p>Likes</p>
          </div>
          <div className="w-36 bg-gray-200 px-6 py-2 flex justify-center">
            <p>Coments</p>
          </div>
          <div className="w-36 bg-gray-200 px-6 py-2 flex justify-center">
            <p>Shares</p>
          </div>
          <div className="w-36 bg-gray-200 px-6 py-2 flex justify-center">
            <p>Saves</p>
          </div>
        </div>
        <PostRow />
      </section>
    </main>
  );
}

export default tables;

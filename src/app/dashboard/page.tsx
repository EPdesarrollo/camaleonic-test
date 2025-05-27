import { auth0 } from "@/lib/auth0";
import { fetchData } from "@/lib/fetchData";
import DashboardMain from "@/components/Dashboard/DashboardMain";
import Unauthorization from "@/components/Authorization/Unauthorization";

export async function dashboard() {
  const session = await auth0.getSession();
  if (!session) {
    return <Unauthorization pageTitle="Dashboard" />;
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
  if (posts.length === 0) {
    return (
      <main className="min-h-screen w-screen p-4 pt-20 bg-white grid place-items-center">
        <div className="max-w-[90%] md:w-[500px]  p-10 bg-gray-200 rounded-md shadow-md text-center">
          <h1 className="mb-4 text-2xl md:text-3xl text-black font-bold ">
            Add a post in order to start viewing the graphics
          </h1>
          <a href="/tables">
            <button className="mt-4 px-4 py-1  bg-blue-500 text-white  rounded-md hover:bg-blue-600 transition duration-200">
              Add Post
            </button>
          </a>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen w-screen pt-20 pb-10 md:pb-20 bg-gray-700  ">
      <DashboardMain posts={posts} />
      <p className="w-[1000px] max-w-[90vw] m-auto mt-10 text-white ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        faucibus sed magna sed tincidunt. Fusce finibus magna iaculis dapibus
        fermentum. Vestibulum lacinia id massa non ultrices. Vivamus ex felis,
        rhoncus et fermentum nec, molestie quis ipsum. Proin non leo consequat
        enim efficitur accumsan. Duis dolor ex, lobortis et dictum sed,
        tincidunt quis nulla. Aliquam ornare vestibulum risus et auctor. Ut at
        augue ac nulla convallis facilisis.
      </p>
    </main>
  );
}
export default dashboard;

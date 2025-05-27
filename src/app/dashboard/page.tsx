import { auth0 } from "@/lib/auth0";
import { fetchData } from "@/lib/fetchData";
import DashboardMain from "@/components/Dashboard/DashboardMain";
import Unauthorization from "@/components/Authorization/Unauthorization";

export async function dashboard() {
  const session = await auth0.getSession();
  if (!session) {
    return <Unauthorization pageTitle="Tables" />;
  }
  const data = await fetchData(session.user.nickname || "");
  if (!data) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white">
        <p>Error: Fetch posts failed!</p>;
      </div>
    );
  }
  const posts = data.posts;

  return (
    <main className="min-h-screen w-screen pt-20 pb-10 md:pb-20 bg-white  ">
      <DashboardMain posts={posts} />
      <p className="w-[1200px] max-w-[90vw] m-auto mt-10 text-gray-500 ">
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

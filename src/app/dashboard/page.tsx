import Link from "next/link";
import { auth0 } from "@/lib/auth0";
import { fetchData } from "@/lib/fetchData";
import DashboardMain from "@/components/Dashboard/DashboardMain";
import Unauthorization from "@/components/Authorization/Unauthorization";
import FailDashboard from "@/components/Dashboard/Fails/FailsDashboard";

export default async function Dashboard() {
  const session = await auth0.getSession();
  if (!session) {
    return <Unauthorization pageTitle="Dashboard" />;
  }
  const data = await fetchData(session.user.nickname || "");
  if (!data) {
    return (
      <FailDashboard
        title="Error: Fetch posts failed!"
        linkTo="/"
        buttonText="Go Home"
      />
    );
  }
  const posts = data.posts;
  if (posts.length === 0) {
    return (
      <FailDashboard
        title="Add a post in order to start viewing the graphics"
        linkTo="/tables"
        buttonText="Add post"
      />
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

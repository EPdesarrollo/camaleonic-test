import { auth0 } from "@/lib/auth0";
import DashboardMain from "@/components/Dashboard/DashboardMain";
import DashboardOptions from "@/components/Dashboard/DashboardOptions";
import Unauthorization from "@/components/Authorization/Unauthorization";

export async function dashboard() {
  const session = await auth0.getSession();

  if (!session) {
    return <Unauthorization pageTitle="Dashboard" />;
  }
  return (
    <main className="min-h-screen w-screen pt-20 pb-10 md:pb-20 bg-white  ">
      <div className="w-[1200px]  max-w-[90vw] mx-auto">
        <h1 className=" mb-2 md:mb-4 text-4xl font-bold text-black">
          Dashboard
        </h1>
        <select className="pl-2 pr-2 pt-1 pb-1 border border-gray-300 rounded-md ">
          <option value="" hidden>
            Filter data
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className="flex flex-col-reverse md:flex-row col gap-2">
          <DashboardOptions />
          <DashboardMain />
        </div>
      </div>
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

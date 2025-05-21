import { auth0 } from "@/lib/auth0";
import DashboardMain from "@/components/Dashboard/DashboardMain";
import DashboardOptions from "@/components/Dashboard/DashboardOptions";
import Unauthorization from "@/components/Authorization/Unauthorization";

export async function dashboard() {
  const session = await auth0.getSession();
  if (session) {
    console.log("Session: ", session.user);
  }
  if (!session) {
    return <Unauthorization pageTitle="Dashboard" />;
  }
  return (
    <main className="min-h-screen w-screen p-8 pt-20 bg-white  ">
      <h1 className="mb-4 text-4xl font-bold text-black">Dashboard</h1>
      <div>
        <select className="pl-2 pr-2 pt-1 pb-1 border border-gray-300 rounded-md ">
          <option value="" hidden>
            Filter data
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="flex col gap-4">
        <DashboardOptions />
        <DashboardMain />
      </div>
    </main>
  );
}
export default dashboard;

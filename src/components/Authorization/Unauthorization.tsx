export function Unauthorization() {
  return (
    <main className="min-h-screen w-screen p-4 pt-20 bg-white grid place-items-center">
      <div className="p-5 bg-gray-100 rounded-md shadow-md text-center">
        <h1 className="mb-4 text-4xl font-bold text-black">Dashboard</h1>
        <p>Forbidden: Log in to access this page.</p>
        <a href="/auth/login">
          <button className="mt-4 px-4 py-1  bg-blue-500 text-white  rounded-md hover:bg-blue-600 transition duration-200">
            Log in
          </button>
        </a>
      </div>
    </main>
  );
}

export default Unauthorization;

export function Graphics() {
  return (
    <section className="w-11/12 md:w-3xl lg:w-5xl m-auto  gap-16">
      <div className="mb-14">
        <h1 className="text-4xl font-bold">General graphic</h1>
        <p className="text-lg text-gray-500">Welcome to the graphics page!</p>
        <img className="w-full" src="/placeholderGraphics2.png" />
      </div>
      <div className="flex gap-8 justify-between">
        <div className="w-full">
          <h1 className="text-4xl font-bold">Secondary grapchic</h1>
          <p className="text-lg text-gray-500">Welcome to the graphics page!</p>
          <img className="w-full" src="/placeholderGraphics.png" />
        </div>
        <div className="w-full">
          <h1 className="text-4xl font-bold">Table</h1>
          <p className="text-lg text-gray-500">Welcome to the graphics page!</p>
          <img className="w-full" src="/placeholderGraphics.png" />
        </div>
      </div>
    </section>
  );
}

export default Graphics;

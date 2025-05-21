export function Graphics() {
  return (
    <section className="w-11/12 md:w-3xl lg:w-5xl m-auto ">
      <div className="mb-8 md:mb-14">
        <h1 className="text-3xl md:text-4xl text-white font-bold">
          General graphic
        </h1>
        <p className="mb-2 text-base md:text-lg text-gray-200">
          Welcome to the graphics page!
        </p>
        <img className="w-full" src="/placeholderGraphics2.png" />
      </div>
      <div className="flex flex-col gap-8 justify-between md:flex-row">
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl text-white font-bold">
            Secondary grapchic
          </h1>
          <p className="mb-2 text-base md:text-lg text-gray-200">
            Welcome to the graphics page!
          </p>
          <img className="w-full" src="/placeholderGraphics.png" />
        </div>
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl text-white font-bold">Table</h1>
          <p className="mb-2 text-base md:text-lg text-gray-200">
            Welcome to the graphics page!
          </p>
          <img className="w-full" src="/placeholderGraphics.png" />
        </div>
      </div>
    </section>
  );
}

export default Graphics;

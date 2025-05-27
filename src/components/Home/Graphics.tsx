export function Graphics() {
  return (
    <section className="w-11/12 md:w-3xl lg:w-5xl m-auto ">
      <div className="mb-14 ">
        <h1 className="text-3xl md:text-4xl text-white font-bold">
          General graphic
        </h1>
        <p className="mb-2 text-base  text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper
          felis sit amet enim aliquam tristique. Nulla egestas tellus nec ligula
          vulputate, nec porttitor nunc aliquam. Nulla quis faucibus ex.
          Suspendisse cursus nulla vitae felis cursus, faucibus dictum magna
          malesuada.
        </p>
        <img className="w-full rounded-2xl" src="/chartBar.png" />
      </div>
      <div className="flex flex-col gap-14 justify-between md:flex-row">
        <div className="w-full ">
          <h1 className="text-3xl md:text-4xl text-white font-bold">
            Secondary graphic
          </h1>
          <p className="mb-2 text-base  text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper felis sit amet enim aliquam tristique.
          </p>
          <img className="w-full rounded-2xl" src="/chartDoughnut.png" />
        </div>
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl text-white font-bold">Table</h1>
          <p className="mb-2 text-base  text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper felis sit amet enim aliSed sodales ligula in.
          </p>
          <img className="w-full rounded-2xl" src="/chartPolarArea.png" />
        </div>
      </div>
    </section>
  );
}

export default Graphics;

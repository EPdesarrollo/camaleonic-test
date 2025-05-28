import Image from "next/image";

export function Graphics() {
  return (
    <section className="w-11/12 md:w-3xl lg:w-5xl m-auto ">
      <div className="mb-14 ">
        <h1 className="mb-1 text-3xl md:text-4xl text-gray-800  font-bold">
          General graphic
        </h1>
        <p className="mb-5 text-base/5 md:text-base/6  text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper
          felis sit amet enim aliquam tristique. Nulla egestas tellus nec ligula
          vulputate, nec porttitor nunc aliquam. Nulla quis faucibus ex.
          Suspendisse cursus nulla vitae felis cursus, faucibus dictum magna
          malesuada.
        </p>
        <Image
          alt="chart"
          className="w-full p-5 md:p-18 bg-white border border-gray-200 shadow-lg rounded-2xl"
          src="/chartBar.png"
        />
      </div>
      <div className="flex flex-col gap-14 justify-between md:flex-row">
        <div className="w-full ">
          <h1 className="mb-1 text-2xl md:text-3xl text-gray-800  font-bold">
            Secondary graphic
          </h1>
          <p className="mb-5 text-base/5 md:text-base/6  text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper felis sit amet enim aliquam tristique.
          </p>
          <Image
            alt="chart"
            className="w-full p-5 md:p-8 bg-white  border border-gray-200 shadow-lg rounded-2xl"
            src="/chartDoughnut.png"
          />
        </div>
        <div className="w-full">
          <h1 className="mb-1 text-2xl md:text-3xl text-gray-800  font-bold">
            Table
          </h1>
          <p className="mb-5 text-base/5 md:text-base/6  text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper felis sit amet enim aliSed sodales ligula in.
          </p>
          <Image
            alt="chart"
            className="w-full p-5 md:p-8 bg-white  border border-gray-200 shadow-lg rounded-2xl"
            src="/chartPolarArea.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Graphics;

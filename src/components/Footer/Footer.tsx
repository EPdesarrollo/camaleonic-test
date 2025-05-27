export function Footer() {
  return (
    <footer className="w-screen  p-10 bg-black">
      <div className="m-auto flex flex-col md:flex-row justify-center items-center ">
        <p className="text-sm md:text-base text-neutral-300">
          © Camaleonic Analytics
        </p>{" "}
        <span className="hidden md:inline m-5 text-blue-50"> | </span>
        <p className="text-sm md:text-base text-neutral-300">
          {" "}
          All rights reserved
        </p>
      </div>
    </footer>
  );
}
export default Footer;

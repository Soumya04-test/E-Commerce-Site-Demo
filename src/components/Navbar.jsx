import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="bg-black w-full flex flex-row  items-center justify-around  ">
      <div>
        <h1 className="text-white font-bold text-4xl uppercase tracking-widest">
          Logo
        </h1>
      </div>
      {/* Nav Links */}
      <div>
        <ul className="flex flex-row space-x-4 text-white font-semibold items-center ">
          {/* <Link
            to={"/"}
            target="_self"
            className={`${
              pathname === "/" ? "text-zinc-500 border border-zinc-200 p-1" : ""
            }`}
          >
            <li className="cursor-pointer hover:text-zinc-300">Home</li>
          </Link>
          <Link
            to={"/about"}
            target="_self"
            className={`${
              pathname === "/about"
                ? "text-zinc-500 border border-zinc-200 p-1"
                : ""
            }`}
          >
            <li className="cursor-pointer hover:text-zinc-300">About</li>
          </Link>
          <Link
            to={"/contact"}
            target="_self"
            className={`${
              pathname === "/contact"
                ? "text-zinc-500 border border-zinc-200 p-1"
                : ""
            }`}
          >
            <li className="cursor-pointer hover:text-zinc-300">Contact</li>
          </Link> */}
          <Link
            to={"/shopping"}
            target="_self"
            className={`${
              pathname === "/shopping"
                ? "text-zinc-500 border border-zinc-200 p-1"
                : ""
            }`}
          >
            <li className="cursor-pointer hover:text-zinc-300">Shopping</li>
          </Link>
          <Link
            to={"/createnewproduct"}
            target="_self"
            className={`${
              pathname === "/createnewproduct"
                ? "text-zinc-500 border border-zinc-200 p-1"
                : ""
            }`}
          >
            <li className="cursor-pointer hover:text-zinc-300">CreateProduct</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

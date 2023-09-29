import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div
        className=" flex justify-between items-center h-24
     max-w-[1240] mx-auto px-4 text-black bg-slate-200"
      >
        <h1 className="w-full text-3xl font-bold text-blue-600 "><img src="/H logo.png" alt=""  width={"78px"} /></h1>
        <ul className="hidden md:flex gap-8 ">
          <li className="p- border-b border-gray-600 hover:text-blue-600 font-serif">
            Home
          </li>
          <li className="p- border-b border-gray-600 hover:text-blue-600 font-serif">
            Company
          </li>
          <li className="p- border-b border-gray-600 hover:text-blue-600 font-serif">
            About
          </li>
          <li className="p- border-b border-gray-600 hover:text-blue-600 font-serif">
            Contact
          </li>
          <li className="p- border-b border-gray-600 hover:text-blue-600 font-serif">
            Services
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%] "
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            <img src="image.logo.jpg" alt="" />
          </h1>
          <ul className="uppercase p-4 text-white">
            <li className="p-4 hover:text-blue-600 font-bold">Home</li>
            <li className="p-4 hover:text-blue-600 font-bold">Company</li>
            <li className="p-4 hover:text-blue-600 font-bold">About</li>
            <li className="p-4 hover:text-blue-600 font-bold">Contact</li>
            <li className="p-4 hover:text-blue-600 font-bold">Services</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

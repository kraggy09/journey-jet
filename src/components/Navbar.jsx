import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="flex font-medium lg:justify-around justify-between m-5">
      <div>
        <p className="text-xl capitalize">JourneyJet</p>
      </div>

      <div className={`lg:block hidden`}>
        <ul className="flex lg:flex-row flex-col">
          <li className="px-2">Home</li>
          <li className="px-2">About</li>
          <li className="px-2">Vehicle Models</li>
          <li className="px-2">Testimonials</li>
          <li className="px-2">Our Team</li>
          <li className="px-2">Contact</li>
        </ul>
      </div>
      <div
        className={
          nav
            ? "h-[100vh] fixed left-0 top-0 w-[100%] bg-gray-300  ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <AiOutlineClose
          onClick={() => {
            setNav(!nav);
            console.log(!nav);
          }}
          className="absolute top-2 right-3 hover:text-orange-600 hover:cursor-pointer ease-in duration-300"
          size={35}
        />
        <ul
          className={`${
            nav
              ? "flex h-[90vh] z-3 flex-col items-center ease-in justify-center"
              : ""
          }`}
        >
          <li className="px-2 my-5 text-xl font-bold hover:border-b-2 ease-in duration-300  hover:border-b-orange-600 hover:cursor-pointer">
            Home
          </li>
          <li className="px-2 my-5 text-xl font-bold hover:border-b-2 ease-in duration-300 hover:border-b-orange-600 hover:cursor-pointer">
            About
          </li>
          <li className="px-2 my-5 text-xl font-bold hover:border-b-2 ease-in duration-300 hover:border-b-orange-600 hover:cursor-pointer">
            Vehicle Models
          </li>
          <li className="px-2 my-5 text-xl font-bold hover:border-b-2 ease-in duration-300 hover:border-b-orange-600 hover:cursor-pointer">
            Testimonials
          </li>
          <li className="px-2 my-5 text-xl font-bold hover:border-b-2 ease-in duration-300 hover:border-b-orange-600 hover:cursor-pointer">
            Our Team
          </li>
          <li className="px-2 my-5 text-xl font-bold hover:border-b-2 ease-in duration-300 hover:border-b-orange-600 hover:cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>
      <div
        onClick={() => {
          setNav(!nav);
          console.log(!nav);
        }}
        className="lg:hidden block"
      >
        {!nav ? (
          <AiOutlineMenu
            className="hover:text-orange-600 hover:cursor-pointer ease-in duration-300"
            size={35}
          />
        ) : (
          <AiOutlineClose
            className="hover:text-orange-600 hover:cursor-pointer ease-in duration-300"
            size={35}
          />
        )}
      </div>
      <div className="lg:block hidden">
        <button>Login</button>
        <button className="bg-orange-600 hover:bg-orange-700 hover:shadow-orange-400 ease-in duration-300 shadow-lg shadow-orange-200 py-3 px-6 rounded-lg text-white mx-4">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="flex font-medium lg:justify-around justify-between m-5">
      <div>
        <p className="text-xl capitalize">JourneyJet</p>
      </div>

      <div className={`lg:block hidden`}>
        <ul className="flex lg:flex-row flex-col">
          <NavLink to="/" className="hover:text-orange-600 px-2">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" className="hover:text-orange-600 px-2">
            <li>About</li>
          </NavLink>
          <NavLink to="/models" className="hover:text-orange-600 px-2">
            <li>Vehicle Models</li>
          </NavLink>
          <NavLink to="/testimonials" className="hover:text-orange-600 px-2">
            <li>Testimonials</li>
          </NavLink>
          <NavLink to="/team" className="hover:text-orange-600 px-2">
            <li>Our Team</li>
          </NavLink>
          <NavLink to="/contact" className="hover:text-orange-600 px-2">
            <li>Contact</li>
          </NavLink>
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
          <NavLink
            to="/"
            onClick={() => {
              setNav(!nav);
            }}
            className="px-2 my-5 text-xl font-bold hover:text-orange-600 ease-in duration-300 hover:cursor-pointer"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            onClick={() => {
              setNav(!nav);
            }}
            to="/about"
            className="px-2 my-5 text-xl font-bold hover:text-orange-600 ease-in duration-300 hover:cursor-pointer"
          >
            <li>About</li>
          </NavLink>
          <NavLink
            onClick={() => {
              setNav(!nav);
            }}
            to="/models"
            className="px-2 my-5 text-xl font-bold hover:text-orange-600 ease-in duration-300 hover:cursor-pointer"
          >
            <li>Vehicle Models</li>
          </NavLink>
          <NavLink
            onClick={() => {
              setNav(!nav);
            }}
            to="/testimonials"
            className="px-2 my-5 text-xl font-bold hover:text-orange-600 ease-in duration-300 hover:cursor-pointer"
          >
            <li>Testimonials</li>
          </NavLink>

          <NavLink
            onClick={() => {
              setNav(!nav);
            }}
            to="/team"
            className="px-2 my-5 text-xl font-bold hover:text-orange-600 ease-in duration-300 hover:cursor-pointer"
          >
            <li>Our Team</li>
          </NavLink>

          <NavLink
            onClick={() => {
              setNav(!nav);
            }}
            to="/contact"
            className="px-2 my-5 text-xl font-bold hover:text-orange-600 ease-in duration-300 hover:cursor-pointer"
          >
            <li>Contact</li>
          </NavLink>
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

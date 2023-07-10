import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex bg-slate-50 w-full items-center justify-center mb-20">
      <footer className="grid  md:grid-cols-2 gap mt-32 lg:w-[90%] grid-cols-1 xl:grid-cols-4">
        <div className="flex flex-col mt-6 md:mt-0 ">
          <h3 className="my-1  md:text-start text-center  text-3xl mx-16">
            <span className="font-bold">CAR</span> Rental
          </h3>
          <h6 className="my-3 md:text-start  text-gray-400 text-center md:mx-16 mx-6">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </h6>
          <div className="my-3   mx-auto md:mx-16 ">
            <span className="flex items-center md:justify-start justify-center">
              <BsFillTelephoneFill className="text-black mr-3 " />
              <span className="font-semibold hover:cursor-pointer hover:text-orange-600 ">
                (123)- 456-789
              </span>
            </span>
            <span className="flex items-center md:justify-start mt-3 justify-center ">
              <AiOutlineMail className="text-black mr-3" />
              <span className="font-semibold  hover:cursor-pointer hover:text-orange-600 ">
                journeyjet@gmail.com
              </span>
            </span>
            <span className="flex items-center md:justify-start  hover:cursor-pointer hover:text-orange-600  mt-3 justify-center ">
              <a
                href="https://github.com/kraggy09"
                rel="noreferrer"
                target="_blank"
              >
                Designed By Kaif Shaikh
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-16 md:mt-0 ">
          <h3 className="my-1  md:text-start text-center text-2xl font-bold">
            COMPANY
          </h3>
          <h6 className="my-1 md:text-start  text-center ">New York</h6>
          <h6 className="my-1 md:text-start  text-center ">Careers</h6>
          <h6 className="my-1 md:text-start  text-center ">Mobile</h6>
          <h6 className="my-1 md:text-start  text-center ">Blog</h6>
          <h6 className="my-1 md:text-start  text-center ">How we work</h6>
        </div>
        <div className="flex flex-col lg:mt-0 mt-16 ">
          <h3 className="my-1  md:text-start text-center font-bold text-2xl mx-16">
            WORKING HOURS
          </h3>
          <h6 className="mt-1 md:text-start  text-gray-400 text-center mx-16">
            Mon - Fri: 9:00AM - 9:00PM
          </h6>
          <h6 className="mt-1 md:text-start  text-gray-400 text-center mx-16">
            Sat: 9:00AM - 19:00PM
          </h6>
          <h6 className="mt-1 md:text-start  text-gray-400 text-center mx-16">
            Sun: Closed
          </h6>
        </div>
        <div className="flex flex-col lg:mt-0 mt-16 ">
          <h3 className="my-1 md:text-start text-center text-2xl font-bold">
            SUBSCRIPTION
          </h3>
          <h6 className="my-1 md:text-start mx-6 md:mx-0  md:ml-0 md:mr-9  text-center ">
            Subscribe your Email address for latest news & updates.
          </h6>
          <input
            type="text"
            placeholder="Enter Email Address"
            className="mx-6 mt-3 bg-slate-100 rounded text-gray-400 py-1.5 text-lg px-10 md:ml-0 md:mr-9"
          />
          <button className="mt-3 bg-orange-700 py-1.5 font-semibold text-white mx-6 md:ml-0 md:mr-9 rounded shadow-lg">
            Submit
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

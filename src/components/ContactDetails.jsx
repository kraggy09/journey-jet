import { BsEnvelopeFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
const ContactDetails = () => {
  return (
    <div className="flex flex-col mt-20  lg:flex-row items-center ">
      <span className="lg:w-[600px] lg:ml-10 xl:mr-32">
        <h1 className="mt-2 text-center lg:text-start text-4xl lg:text-5xl lg:mt-6 font-bold lg:mx-0 mx-6 md:mx-36">
          Need additional information?
        </h1>
        <p className="mt-2 lg:text-start lg:mx-0 lg:mt-6 text-center text-gray-500 md:mx-32  mx-10">
          A multifaceted professional skilled in multiple fields of research,
          development as well as a learning specialist. Over 15 years of
          experience.
        </p>
        <div className="my-3   flex flex-col items-center lg:items-start  ">
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
            <FaLocationDot />
            Mumbai,India
          </span>
        </div>
      </span>
      <form className="w-full lg:w-[50%] lg:ml-16 mt-10 lg:mt-0">
        <span className="flex flex-col">
          <label
            htmlFor="full_name"
            className="mx-auto lg:mx-0 text-lg font-bold my-6 lg:my-3"
          >
            Full Name <code className="text-orange-600">*</code>
          </label>
          <input
            type="text"
            className="w-[85%] bg-gray-100 text-lg pl-6 tex-gray-400 py-3 mx-auto lg:mx-0"
            placeholder={`E.g. "Kaif Shaikh" `}
            name="full_name"
            id=""
          />
        </span>
        <span className="flex flex-col">
          <label
            htmlFor="email"
            className="mx-auto lg:mx-0 text-lg font-bold my-6 lg:my-3"
          >
            Email <code className="text-orange-600">*</code>
          </label>
          <input
            type="email"
            className="w-[85%] bg-gray-100 text-lg pl-6 tex-gray-400 py-3 mx-auto lg:mx-0"
            placeholder={`youremail@example.com `}
            name="email"
          />
        </span>
        <span className="flex flex-col">
          <label
            htmlFor="tell_us"
            className="mx-auto lg:mx-0 text-lg font-bold my-6 lg:my-3"
          >
            Full Name <code className="text-orange-600">*</code>
          </label>
          <textarea
            className="w-[85%] pt-3 text-gray-400 bg-gray-100 text-lg pl-6 tex-gray-400  mx-auto lg:mx-0 resize-none"
            name=""
            id=""
            placeholder="Write Here..."
            cols="15 "
            rows="10"
          ></textarea>
        </span>
        <button className="w-[85%] mt-6 flex items-center justify-center  text-white font-bold text-lg pl-6 tex-gray-400 py-3 text-center md:mx-14 bg-orange-600 mx-10 lg:mx-0">
          <BsEnvelopeFill className="mr-3" />
          Send Message
        </button>
      </form>
    </div>
  );
};
export default ContactDetails;

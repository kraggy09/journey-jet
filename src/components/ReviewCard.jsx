import { FaQuoteRight } from "react-icons/fa";
const ReviewCard = ({ review, name, location, img }) => {
  return (
    <div className="w-[90%] md:w-[85%]   lg:w-[40%] rounded-lg shadow-xl min-h-[320px] shadow-gray-400 pt-16 md:pt-0 mx-auto mb-16 lg:mb-0 lg:mx-6">
      <h3 className="text-center md:text-start md:py-10 md:mx-16 mx-10 font-semibold text-2xl">
        {review}
      </h3>
      <span className="flex justify-around items-center mt-10 md:mt-0">
        <span className="flex w-full md:w-auto items-center justify-center mb-10">
          <img className="rounded-full w-20 h-20" src={img} />
          <span className="ml-6">
            <h3 className="text-xl font-semibold">{name}</h3>
            <h3 className="text-xl font-semibold">{location}</h3>
          </span>
        </span>
        <span className="hidden md:block text-orange-600 text-3xl">
          <FaQuoteRight />
        </span>
      </span>
    </div>
  );
};
export default ReviewCard;

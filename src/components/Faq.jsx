import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Faq = () => {
  const content = [
    {
      id: 1,
      ques: "1. What is special about comparing rental car deals?",
      ans: "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
      open: true,
    },
    {
      id: 2,
      ques: "2. How do I find the car rental deals?",
      ans: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
      open: false,
    },
    {
      id: 3,
      ques: "3. How do I find such low rental car prices?",
      ans: "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
      open: false,
    },
  ];

  const [showAns, setShowAns] = useState({
    1: "block",
    2: "hidden",
    3: "hidden",
  });

  return (
    <div>
      <div className="shadow-lg mx-auto w-[40%] shadow-gray-300">
        {content.map((faq) => {
          return (
            <div className="" key={faq.id}>
              <div className="flex items-start justify-between">
                <h3>{faq.ques}</h3>
                <FaAngleDown />
              </div>
              <div className={`hidden`}>{faq.ans}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;

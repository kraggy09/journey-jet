const Plan = () => {
  return (
    <article className="min-h-[100vh] mt-28 min-w-[97vw] flex flex-col items-center justify-center">
      <span className="flex w-full items-center flex-col justify-center mb-10">
        <h3 className="text-2xl lg:text-3xl lg:font-semibold font-medium">
          Plan your trip now
        </h3>
        <h3 className="text-4xl lg:text-5xl lg:font-[500] text-center font-extrabold mt-6 mx-10">
          Quick & easy car rental
        </h3>
      </span>
      <span className="flex flex-col lg:flex-row">
        <span className="flex flex-col items-center my-6 justify-center">
          <img
            className="animate-pulse"
            src="../src/assets/images/plan/icon1.png"
          />
          <h1 className="text-3xl text-center font-extrabold mt-2 mx-16">
            Select Car
          </h1>
          <h3 className="text-center mx-3 md:mx-24 mt-2 text-gray-400">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </h3>
        </span>
        <span className="flex flex-col items-center my-6 justify-center">
          <img
            className="animate-pulse"
            src="../src/assets/images/plan/icon2.png"
          />
          <h1 className="text-3xl text-center font-extrabold mt-2 mx-16">
            Contact Operator
          </h1>
          <h3 className="text-center md:mx-24 mx-3 mt-2 text-gray-400">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </h3>
        </span>
        <span className="flex flex-col items-center my-6 justify-center">
          <img
            className="animate-pulse"
            src="../src/assets/images/plan/icon3.png"
          />
          <h1 className="text-3xl text-center font-extrabold mt-2 mx-16">
            Let`s Drive
          </h1>
          <h3 className="text-center md:mx-24 mx-3 mt-2 text-gray-400">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </h3>
        </span>
      </span>
    </article>
  );
};

export default Plan;

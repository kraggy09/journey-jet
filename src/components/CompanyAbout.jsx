const CompanyAbout = () => {
  return (
    <section>
      <div className="mx-6 flex flex-col xl:flex-row xl:mx-64 md:mx-36 ">
        <img
          src="/assets/images/about/about-main.jpg"
          className=" md:mx-6 lg:my-16 lg:mx-0"
        />
        <span className="flex w-full  flex-col lg:mt-0 mt-10 lg:mb-0 lg:mx-16 mb-10">
          <h3 className="text-2xl lg:text-3xl lg:font-semibold text-center lg:text-start font-medium">
            About Company
          </h3>
          <h3 className="text-4xl lg:text-5xl lg:font-[500] lg:text-start text-center font-extrabold lg:mt-2 mt-6 ">
            You start the engine and your adventure begins
          </h3>
          <p className="text-center lg:text-lg text-gray-400 lg:text-start mt-6">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className="flex flex-col md:flex-row w-full justify-center items-center mt-16">
            <span className="px-9 md:px-0 w-[45%] my-6 md:mx-6">
              <img src="/assets/images/about/icon1.png" />

              <span className="flex flex-col items-start mx-auto ">
                <h3 className="font-extrabold text-6xl">20</h3>
                <h3 className="text-xl">Car Types</h3>
              </span>
            </span>

            <span className="px-9 md:px-0 w-[45%] my-6 md:mx-6">
              <img src="/assets/images/about/icon2.png" />

              <span className="flex flex-col items-start mx-auto ">
                <h3 className="font-extrabold text-6xl">85</h3>
                <h3 className="text-xl">Rental Options</h3>
              </span>
            </span>
            <span className="px-9 md:px-0 w-[45%] my-6 md:mx-6">
              <img src="/assets/images/about/icon3.png" />

              <span className="flex flex-col items-start mx-auto ">
                <h3 className="font-extrabold text-6xl">75</h3>
                <h3 className="text-xl">Repair Shops</h3>
              </span>
            </span>
          </div>
        </span>
      </div>
    </section>
  );
};

export default CompanyAbout;

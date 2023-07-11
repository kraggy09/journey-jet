const Hero = ({ name }) => {
  return (
    <div className="h-[50vh] flex flex-col justify-center">
      <h3 className="text-xl font-semibold ml-6 my-6">{name}</h3>
      <img
        className="absolute -z-30 top-0 h-[55vh] w-full object-cover md:left-0 md:min-w-auto opacity-10"
        src="/assets/images/hero/heroes-bg.png"
      />
      <h3 className="text-xl font-semibold ml-6 mb-6">Home/{name}</h3>
    </div>
  );
};

export default Hero;

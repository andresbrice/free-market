const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-800 to-cyan-600 py-8">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="flex justify-center">
          <img
            className="w-auto h-auto max-h-72"
            src="https://firebasestorage.googleapis.com/v0/b/free-market-929b7.appspot.com/o/hero.svg?alt=media&token=fb698cf8-907b-46db-a36f-75467a552aef"
            alt="Hero"
          />
        </div>

        <div className="flex flex-col justify-center items-center text-white font-poppins  text-center ">
          <h1 className=" mt-4 font-semibold text-3xl md:text-4xl lg:text-5xl">
            ¡Welcome to Free Market!
          </h1>
          <p className="text-md md:text-lg lg:text-xl mt-2 md:mt-4 lg:mt-6">
            Where your cravings come to life. Discover delicious food options
            and treat yourself to something tasty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

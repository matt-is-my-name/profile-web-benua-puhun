function Hero() {
  return (
    <div className="flex flex-1 mt-52 text-white h-[500px] ">
      <div className="mx-auto text-center p-2">
        <h1 className="text-3xl font-semibold md:text-5xl lg:text-7xl">
          Desa Benua Puhun
        </h1>
        <p className="text-xl font-light mt-2 md:text-2xl md:mt-5 lg:text-3xl">
          Muara Kaman, Kutai Kartanegara
        </p>
        <button>
          <a
            href=""
            className="px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors mt-5 rounded-lg md:mt-10"
          >
            Get Started
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;

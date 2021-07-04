import HolidayImg from "../images/homepage/this_holiday_539.png";

function Holiday() {
  return (
    <section className="hero holiday xl:mx-20">
      <div>
        <img className="hero-img" src={HolidayImg} alt="img" />
      </div>

      <div className="overlay bg-gray-800 text-center px-10 py-20 text-white sm:bg-transparent sm:text-left">
        <h2 className="font-semibold text-xl mb-2">
          Find your joy, this holiday season
        </h2>
        <p className="mb-2 text">
          Follow the story of Rufus, a pup whose dream takes him into Microsoft
          worlds like Minecraft, Flight Simulator, and Halo.
        </p>
        <button className="bg-white text-black py-2 px-5 hover:bg-opacity-80">
          Watch Now
        </button>
      </div>
    </section>
  );
}

export default Holiday;

import headphone from "../../assets/headphone.png";
import Cards from "./Cards";
export default function Home() {
  return (
    <div className="max-w-7xl h-full mx-auto px-4 mt-6">
  <div className="bg-gray-200 rounded-2xl p-6 sm:p-10 
                  flex flex-col-reverse lg:flex-row 
                  items-center justify-between">

    {/* TEXT */}
    <div className="text-center lg:text-left lg:w-1/2">
      <p className="text-gray-700 font-semibold">Beats Solo</p>

      <h1 className="text-3xl sm:text-5xl font-bold mt-2">
        Wireless
      </h1>

      <h2 className="text-4xl sm:text-7xl font-extrabold text-white opacity-80">
        HEADPHONE
      </h2>

      <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full">
        Shop By Category
      </button>
    </div>

    {/* IMAGE */}
    <img
      src={headphone}
      className="w-56 sm:w-80 mb-6 lg:mb-0"
    />
  </div>
  <Cards />
</div>
  );
}
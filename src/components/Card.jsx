import { FaRegCalendarTimes, FaStreetView } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiSolarTime } from "react-icons/gi";

const Card = () => {
  return (
    <div className="p-4">
      <div className=" w-full lg:w-auto m-4  mx-auto p-4 space-y-2 overflow-hidden rounded-lg shadow-md bg-indigo-300 text-secondary hover:scale-105 hover:bg-indigo-500 ">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <p className="text-xl font-bold">User Name</p>
            <p>useEmail</p>
          </div>
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/100x100/?5"
            alt=""
            className="w-full"
          />
          <h2 className="mb-1 text-2xl font-bold">TouristSpot name</h2>
          <p className="text-sm">short description</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2 flex justify-center items-center gap-1">
            <div className="bg-purple-500 p-1 flex items-center gap-2 rounded-md text-white">
              <FaLocationDot /> : <span>Sylet</span>
            </div>
          </div>
          <div className="flex space-x-2 font-bold ">
            <div className="bg-purple-500 p-1 rounded-md text-white">
              <p>Country : Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2 flex justify-center items-center gap-1">
            <div className="bg-purple-500 p-1 flex items-center gap-2 rounded-md text-white">
              <FaRegCalendarTimes /> : <span>6 days</span>
            </div>
            <div className="bg-purple-500 p-1 flex items-center gap-2 rounded-md text-white">
              <FaStreetView />:<span> 10000 P/Y</span>
            </div>
          </div>
          <div className="flex space-x-2 font-bold ">
            <div className="bg-purple-500 p-1 flex items-center gap-2 rounded-md text-white">
              <GiSolarTime /> :<span>Summer</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button className="btn btn-primary">View details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { FaRegCalendarTimes, FaStreetView } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiSolarTime } from "react-icons/gi";
import { Link } from "react-router-dom";

const Card = ({ spot }) => {
  const {
    Email,
    _id,
    Country,
    Cost,
    Location,
    Photo,
    Season,
    SpotName,
    UserName,
    Description,
    Traveltime,
    Visitor
  } = spot;
  return (
    <div className="p-4">
      <div className=" w-full lg:max-w-96 m-4  mx-auto p-4 space-y-2 overflow-hidden rounded-lg shadow-md bg-indigo-300 text-secondary hover:scale-105 hover:bg-indigo-500 ">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <p className="text-xl font-bold">{UserName}</p>
            <p>{Email}</p>
          </div>
        </div>
        <div>
          <img src={Photo} alt="" />
          <h2 className="mb-1 text-2xl font-bold">{SpotName}</h2>
          <p className="text-sm">{Description}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2 flex justify-center items-center gap-1">
            <div className="bg-purple-500 p-1 flex items-center gap-2 rounded-md text-white">
              <FaLocationDot /> : <span>{Location}</span>
            </div>
          </div>
          <div className="flex space-x-2 font-bold ">
            <div className="bg-purple-500 p-1 rounded-md text-white">
              <p>Country : {Country}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2 flex justify-center items-center gap-1">
            <div className="bg-purple-500 p-1 flex items-center gap-2 rounded-md text-white">
              <FaRegCalendarTimes /> : <span>{Traveltime}</span>
            </div>
            <div className="bg-purple-500 p-1 flex items-center gap-2 rounded-md text-white">
              <FaStreetView />:<span> {Visitor}</span>
            </div>
          </div>
          <div className="flex space-x-2 font-bold ">
            <div className="bg-purple-500 p-1 flex items-center gap-2 rounded-md text-white">
              <GiSolarTime /> :<span>{Season}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Link to={`/spot/${_id}`}>
            <button className="btn btn-primary">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

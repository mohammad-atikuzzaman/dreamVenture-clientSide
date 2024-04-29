import { FaRegCalendarTimes, FaStreetView } from "react-icons/fa";
import { GiSolarTime } from "react-icons/gi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ spot }) => {
  const {
    _id,
    Photo,
    Season,
    SpotName,
    Traveltime,
    Visitor,
    Cost
  } = spot;
  return (
    <div className="px-2 md:p-4">
      <div className=" w-full lg:max-w-96 m-4  mx-auto p-4 space-y-2 overflow-hidden rounded-lg shadow-md bg-indigo-300 text-secondary hover:scale-105 hover:bg-indigo-500 ">
        <div>
          <img src={Photo} alt="" />
          <h2 className="mb-1 text-2xl font-bold">{SpotName}</h2>
        </div>
        <div>
          <div className="bg-purple-500 p-1 flex items-center gap-2 rounded-md text-white">
            Average Cost : <span>{Cost}</span>
          </div>
        </div>
        <div className=" space-y-2">
          <div className="space-y-2">
            <div className="text-purple-secondary border-2 border-purple-secondary p-1 flex justify-between items-center gap-2 rounded-md ">
              <div className="flex items-center gap-2">
                <p>Travel Time</p>
                <FaRegCalendarTimes />
              </div>{" "}
              : <p>{Traveltime}</p>
            </div>
            <div className="text-purple-secondary border-2 border-purple-secondary p-1 flex justify-between items-center gap-2 rounded-md ">
              <div className="flex items-center gap-2">
                <p>Total visitor per year</p>
                <FaStreetView />
              </div>
              :<p> {Visitor}</p>
            </div>
          </div>
          <div className=" space-x-2 font-bold ">
            <div className="text-purple-secondary border-2 border-purple-secondary p-1 flex justify-between items-center gap-2 rounded-md ">
              <div className="flex items-center gap-2">
                <p>Season</p> <GiSolarTime />
              </div>
              :<p>{Season}</p>
            </div>
          </div>
        </div>
        <div className="">
          <Link to={`/spot/${_id}`}>
            <button className="btn btn-primary w-full">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Card.propTypes ={
  spot: PropTypes.object
}

export default Card;

import { useLoaderData } from "react-router-dom";

const Spot = () => {
 const loaderData = useLoaderData()
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 bg-primary rounded-lg my-8">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img src={loaderData.Photo} alt="" className="w-full bg-primary" />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-secondary">
          <div className="space-y-2">
            <p className=" text-2xl text-white font-bold sm:text-3xl">
              {loaderData.SpotName}
            </p>
            <p className=" text-white">
              <span className="text-xs">By</span>
              <br />
              <span className="font-semibold text-xl hover:underline">
                {loaderData.UserName}
              </span>
              <br />
              <span>{loaderData.Email}</span>
            </p>
          </div>
          <div className="text-white flex justify-between">
            <p className="bg-primary p-1 rounded-md">
              Country : {loaderData.Country}
            </p>
            <p className="bg-primary p-1 rounded-md">
              Location : {loaderData.Location}
            </p>
          </div>
          <div className="text-white font-bold flex justify-between">
            <p className="text-primary border-2 border-primary p-1 rounded-md">
              Cost : {loaderData.Cost} USD
            </p>
            <p className="text-primary border-2 border-primary p-1 rounded-md">
              TravelTime : {loaderData.Traveltime}
            </p>
            <p className="text-primary border-2 border-primary p-1 rounded-md">
              Visitor : {loaderData.Visitor}
            </p>
            <p className="text-primary border-2 border-primary p-1 rounded-md">
              Season : {loaderData.Season}
            </p>
          </div>

          <div className="text-white">
            <p>{loaderData.Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spot;

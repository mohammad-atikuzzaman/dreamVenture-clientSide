import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const { id } = useParams();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const SpotName = form.touristspotname.value;
    const Location = form.location.value;
    const Photo = form.photo.value;
    const Description = form.description.value;
    const Country = form.country.value;
    const Cost = form.cost.value;
    const Season = form.season.value;
    const Traveltime = form.traveltime.value;
    const Visitor = form.visitor.value;
    const spot = {
      SpotName,
      Location,
      Photo,
      Description,
      Country,
      Cost,
      Season,
      Traveltime,
      Visitor,
    };

    fetch(`https://dreamventure.vercel.app/spots/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <section className="p-6 text-primary">
      <form
        onSubmit={handleUpdate}
        className="container flex flex-col mx-auto space-y-12">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-indigo-300">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <h2 className="font-bold text-2xl">Update Tourist spots</h2>
            <p className="text-xs font-semibold">
              Here update information about place for travel, who brings
              happiness in mind
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="touristspotname"
                className="text-sm font-semibold">
                Tourist Spot Name
              </label>
              <input
                id="touristspotname"
                name="touristspotname"
                type="text"
                placeholder="Tourist Spot Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="location" className="text-sm font-semibold">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Location"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="photo" className="text-sm font-semibold">
                Photo URL
              </label>
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="description" className="text-sm font-semibold">
                Short Description
              </label>
              <input
                id="description"
                name="description"
                type="text"
                placeholder="Short Description"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="country" className="text-sm font-semibold">
                Country
              </label>

              <select
                name="country"
                id="country"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary ">
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="cost" className="text-sm font-semibold">
                Average Cost
              </label>
              <input
                id="cost"
                name="cost"
                type="number"
                placeholder="Average Cost"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="season" className="text-sm font-semibold">
                Season
              </label>

              <select
                name="season"
                id="season"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary ">
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
                <option value="Rainy">Rainy</option>
                <option value="Autumn">Autumn</option>
                <option value="Late Autumn">Late Autumn</option>
                <option value="Spring">Spring</option>
              </select>
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="traveltime" className="text-sm font-semibold">
                Travel Time
              </label>

              <select
                name="traveltime"
                id="traveltime"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary ">
                <option value="1 day">1 day</option>
                <option value="2 day">2 day</option>
                <option value="3 day">3 day</option>
                <option value="4 day">4 day</option>
                <option value="5 day">5 day</option>
                <option value="6 day">6 day</option>
                <option value="6 day">6 day</option>
                <option value="7 day">7 day</option>
                <option value="8 day">8 day</option>
                <option value="9 day">9 day</option>
                <option value="10 day">10 day</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="visitor" className="text-sm font-semibold">
                Total Visitor PerYear
              </label>
              <input
                id="visitor"
                name="visitor"
                type="number"
                placeholder="Total  Visitor PerYear"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              />
            </div>
          </div>
        </fieldset>

        <input
          className="bg-secondary w-full p-2 rounded-lg font-semibold"
          type="submit"
          value="Update"
        />
      </form>
    </section>
  );
};

export default UpdateSpot;

const AddTouristSpot = () => {
  const handleAddSpot = (e) => {
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
    const Email = form.email.value;
    const UserName = form.username.value;
    const spot = {SpotName, Location, Photo, Description, Country, Cost, Season, Traveltime, Visitor, Email, UserName}
    console.log("spot",spot)

    fetch("http://localhost:4000/addSpot",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(spot)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  };

  return (
    <section className="p-6 text-primary">
      <form
        onSubmit={handleAddSpot}
        className="container flex flex-col mx-auto space-y-12">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-indigo-300">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <h2 className="font-bold text-2xl">Add Tourist spots</h2>
            <p className="text-xs font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
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
              {/* <input
                id="city"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              /> */}

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
                type="text"
                placeholder="Average Cost"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="season" className="text-sm font-semibold">
                Season
              </label>
              {/* <input
                id="season"
                name="season"
                type="text"
                placeholder="Season"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              /> */}
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
              {/* <input
                id="traveltime"
                name="traveltime"
                type="text"
                placeholder="Travel Time"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              /> */}

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
                type="text"
                placeholder="Total  Visitor PerYear"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              />
            </div>

            <div className="col-span-full ">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="username" className="text-sm font-semibold">
                User Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="User Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-secondary focus:ring-violet-400 border-gray-700"
              />
            </div>
          </div>
        </fieldset>

        <input
          className="bg-secondary w-full p-2 rounded-lg font-semibold"
          type="submit"
          value="Add Spot"
        />
      </form>
    </section>
  );
};

export default AddTouristSpot;

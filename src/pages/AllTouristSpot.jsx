import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";


const AllTouristSpot = () => {
  const loadData = useLoaderData()
  // const {SpotName, Location, Photo, Description, Country, Cost, Season, Traveltime, Visitor, Email, UserName} =loadData;
  console.log(loadData)
  return (
    <div>
      this is all tourist spot
      <div>
        {
          loadData.map(data => <Card key={data._id} data={data}></Card>)
        }
      </div>
    </div>
  );
};

export default AllTouristSpot;
import { useEffect, useState } from "react";
import Card from "../components/Card";

const AllTouristSpot = () => {
  const [spots, setSpots] = useState([]);
  const [displaySpot, setDisplaySpot] = useState([]);
  useEffect(() => {
    fetch("https://dreamventure.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, []);

  const handleSort = () => {
    spots.sort(function (a, b) {
      return b.Cost - a.Cost;
    });
    setDisplaySpot(spots);
  };

  return (
    <div>
      <h2 className="text-center text-3xl text-primary font-bold mt-6">
        All Spots We are Exploring
      </h2>
      <p className="text-center text-secondary font-semibold ">
        Embark on a global journey of culture, cuisine, and adventure – let each
        country be a chapter in your epic travel tale!
      </p>
      <div className="flex justify-end mr-4">
        <details className="dropdown relative">
          <summary className="m-1 btn btn-primary">Sort</summary>
          <ul className="p-2 absolute top-15 right-0 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={handleSort}>
              <a>By Average costs</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spots.map((spot) => (
          <Card key={spot._id} spot={spot}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;

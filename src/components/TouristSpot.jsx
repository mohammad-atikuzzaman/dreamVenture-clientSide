import Marquee from "react-fast-marquee";
import Card from "./Card";
import { useEffect, useState } from "react";

const TouristSpot = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/spots")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, []);

  const [displaySpots, setDisplaySpot] = useState([]);
  useEffect(() => {
    const sSpot = spots.slice(0, 6);
    spots.length > 6 ? setDisplaySpot(sSpot) : setDisplaySpot(spots);
  }, [spots]);

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-primary">
        Top tourist spot
      </h2>
      <p className="text-center font-medium text-secondary">
        Come for the sights, stay for the memories – our tourist spots will
        leave you spellbound!
      </p>
      <div className="grid gap-4 md:grid-cols-2  lg:hidden">
        {displaySpots.map((spot) => (
          <Card key={spot._id} spot={spot}></Card>
        ))}
      </div>
      <div className="hidden lg:block">
        <Marquee pauseOnHover={true}>
          {displaySpots.map((spot) => (
            <Card key={spot._id} spot={spot}></Card>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TouristSpot;

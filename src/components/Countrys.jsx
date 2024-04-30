import { useEffect, useState } from "react";
import Country from "./Country";
import Marquee from "react-fast-marquee";

const Countrys = () => {
  const [countrys, setCountrys] = useState([]);
  useEffect(() => {
    fetch("https://dreamventure.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountrys(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-primary text-center font-bold">
        The Countries
      </h2>
      <p className="text-secondary text-center font-medium">
        From ancient wonders to modern marvels, our world is your playground –
        explore the globe one country at a time!
      </p>
      <div className="grid md:grid-cols-2 gap-4 lg:hidden">
        {countrys.map((country) => (
          <Country key={country._id} cun={country}></Country>
        ))}
      </div>
      <div className="hidden lg:block">
        <Marquee pauseOnHover={true} direction="right">
          {countrys.map((country) => (
            <Country key={country._id} cun={country}></Country>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Countrys;

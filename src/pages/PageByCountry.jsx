import CardByCountryName from "../components/CardByCountryName";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Mycontext } from "../contexts/ContextElement";

const PageByCountry = () => {
  const { loading } = useContext(Mycontext);
  const { country } = useParams();

  const [loaderData, setLoaderData] = useState([]);
  useEffect(() => {
    fetch(`https://dreamventure.vercel.app/myCountries/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setLoaderData(data);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl text-primary text-center font-bold mt-8">All of the Spots in this country</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {loaderData.map((data) => (
          <CardByCountryName key={data._id} spot={data}></CardByCountryName>
        ))}
      </div>
    </div>
  );
};

export default PageByCountry;

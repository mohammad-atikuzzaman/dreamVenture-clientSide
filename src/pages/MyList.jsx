import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../contexts/ContextElement";
import Table from "../components/Table";

const MyList = () => {
  const { user } = useContext(Mycontext);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    fetch(`https://dreamventure.vercel.app/mySpots/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoadedData(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-primary text-center font-bold mt-8">My List</h2>
      <div className="overflow-x-auto rounded-md my-8">
        <table className="table">
          <tbody>
            {loadedData.map((data, index) => (
              <Table key={index} data={data}></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;

import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Mycontext } from "../contexts/ContextElement";
import PropTypes from "prop-types"

const Table = ({ data }) => {
  const { setLoading } = useContext(Mycontext);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        fetch(`https://server-iota-inky.vercel.app/spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((Ddata) => {
            console.log(Ddata);
            console.log("delete success full", data);
            if (Ddata.deletedCount > 0) {
              setLoading(false);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <tr className="bg-blue-300 rounded-xl">
      <td>
        <div>
          <img src={data.Photo} className="w-60 rounded-xl" />
          <h2 className="font-bold text-xl text-primary">{data.SpotName}</h2>
          <p className="text-secondary font-semibold">
            Location : {data.Location}
          </p>
          <p className="text-secondary font-semibold">
            Country : {data.Country}
          </p>
        </div>
      </td>
      <td>
        <Link to={`/update/${data._id}`}>
          <button className="btn btn-secondary">Update</button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(data._id)}
          className="btn btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

Table.propTypes ={
  data: PropTypes.object
}

export default Table;

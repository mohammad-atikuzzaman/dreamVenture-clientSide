import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Country = ({ cun }) => {
  return (
    <Link to={`/pagebycountry/${cun.country}`}>
      <div className="p-4">
        <div className="card w-full lg:max-w-96 bg-purple-200 shadow-xl hover:scale-105 hover:bg-blue-300">
          <figure>
            <img src={cun?.photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{cun.country}</h2>
            <p>{cun.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
Country.propTypes = {
  cun: PropTypes.object,
};
export default Country;

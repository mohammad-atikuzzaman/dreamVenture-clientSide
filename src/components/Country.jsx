const Country = () => {
  return (
    <div className="p-4">
      <div className="card w-full lg:max-w-96 bg-purple-200 shadow-xl hover:scale-105 hover:bg-blue-300">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Country
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
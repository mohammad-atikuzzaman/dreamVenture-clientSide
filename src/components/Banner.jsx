const Banner = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item flex items-center justify-center relative w-full">
        <img
          src="https://i.postimg.cc/zB2j6VyS/houseof-Almiughty.jpg"
          className="w-full h-[80%] rounded-xl"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item  flex items-center justify-center relative w-full">
        <img
          src="https://i.postimg.cc/vmzX7PMK/bandarban.jpg"
          className="w-full h-[80%] rounded-xl"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item  flex items-center justify-center relative w-full">
        <img
          src="https://i.postimg.cc/4yK5gstC/thepeacefall.jpg"
          className="w-full h-[80%] rounded-xl"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item  flex items-center justify-center relative w-full">
        <img
          src="https://i.postimg.cc/528sy4rb/vallyofviscosity.jpg"
          className="w-full h-[80%] rounded-xl"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

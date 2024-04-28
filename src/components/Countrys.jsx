import Country from "./Country";
import Marquee from "react-fast-marquee";

const Countrys = () => {
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
        <Country></Country>
        <Country></Country>
        <Country></Country>
        <Country></Country>
        <Country></Country>
      </div>
      <div className="hidden lg:block">
        <Marquee pauseOnHover={true} direction="right">
          <Country></Country>
          <Country></Country>
          <Country></Country>
          <Country></Country>
          <Country></Country>
        </Marquee>
      </div>
    </div>
  );
};

export default Countrys;

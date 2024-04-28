import Marquee from "react-fast-marquee";
import Card from "./Card";

const TouristSpot = () => {
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
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="hidden lg:block">
        <Marquee pauseOnHover={true}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Marquee>
      </div>
    </div>
  );
};

export default TouristSpot;
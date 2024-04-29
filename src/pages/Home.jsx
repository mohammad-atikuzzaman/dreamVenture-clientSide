import Banner from "../components/Banner";
import Countrys from "../components/Countrys";
import FeedbackForm from "../components/FeedbackForm";
import Feedbacks from "../components/Feedbacks";
import TouristSpot from "../components/TouristSpot";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TouristSpot></TouristSpot>
      <Countrys></Countrys>
      <FeedbackForm></FeedbackForm>
      <Feedbacks></Feedbacks>
    </div>
  );
};

export default Home;
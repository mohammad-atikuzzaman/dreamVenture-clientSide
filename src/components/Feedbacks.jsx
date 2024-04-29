import { useEffect, useState } from "react";
import FeedBack from "./FeedBack";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("https://server-iota-inky.vercel.app/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  }, []);

  return (
    <div className="my-6">
      <h2 className="text-3xl text-primary text-center font-bold my-6">Visitors Feedback</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {feedbacks.map((feedback) => (
          <FeedBack key={feedback._id} feedback={feedback}></FeedBack>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;

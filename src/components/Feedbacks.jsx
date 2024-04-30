import { useContext, useEffect, useState } from "react";
import FeedBack from "./FeedBack";
import { Mycontext } from "../contexts/ContextElement";

const Feedbacks = () => {
  const { loading } = useContext(Mycontext);
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("https://dreamventure.vercel.app/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
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
    <div className="my-6">
      <h2 className="text-3xl text-primary text-center font-bold my-6">
        Visitors Feedback
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {feedbacks.map((feedback) => (
          <FeedBack key={feedback._id} feedback={feedback}></FeedBack>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;

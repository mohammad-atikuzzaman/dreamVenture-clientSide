import { useContext } from "react";
import { toast } from "react-toastify";
import { Mycontext } from "../contexts/ContextElement";

const FeedbackForm = () => {
  const { setLoading } = useContext(Mycontext);
  const handleFeedBack = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;
    const email = form.email.value;
    const message = form.message.value;
    const userData = { user, email, message };
    setLoading(true);
    fetch("https://dreamventure.vercel.app/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        toast.success("Feedback sent successful");
        form.reset();
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-primary text-center font-bold  my-6">
        Please Give us Your feedback
      </h2>
      <div className="bg-blue-300 rounded-lg  overflow-hidden">
        <form onSubmit={handleFeedBack} className="bg-blue-300">
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-blue-300 text-white">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-bold text-2xl">Your Feedback</p>
              <p className="">You can send us your feedback without register</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-primary"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="Email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-primary"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="message" className="text-sm">
                  Feedback
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Feedback"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-primary"></textarea>
              </div>
              <div className="col-span-full">
                <div className="flex items-center space-x-2">
                  <input
                    type="submit"
                    value="Submit"
                    className="px-4 py-2 border rounded-md dark:border-gray-800 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;

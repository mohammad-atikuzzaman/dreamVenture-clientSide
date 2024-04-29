import PropTypes from "prop-types"

const FeedBack = ({feedback}) => {
  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-purple-400 text-white">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <h4 className="font-bold">{feedback.user}</h4>
            <span className="text-xs text-white">{feedback.email}</span>
          </div>
        </div>
       
      </div>
      <div className="p-4 space-y-2 text-sm text-white">
        <p>
          {feedback.message
          }
        </p>
      </div>
    </div>
  );
};

FeedBack.propTypes ={
  feedback: PropTypes.object
}

export default FeedBack;

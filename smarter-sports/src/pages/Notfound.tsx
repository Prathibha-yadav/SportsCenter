import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound: React.FC = () => {
  const navigate = useNavigate();
  const ButtonClick = () => {
    navigate("/articles");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-3xl text-gray-600">404 Page Not Found</p>
      <br />
      <button
        id="backToHomeButton"
        onClick={ButtonClick}
        className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 mr-2 text-sm font-medium text-white"
      >
        Home
      </button>
    </div>
  );
};
export default Notfound;
import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();

  return (
    <div>
      {" "}
      <h2 className="bg-gray-600 text-white text-3xl text-center  p-10">
        User: {userid}
      </h2>
    </div>
  );
};

export default User;

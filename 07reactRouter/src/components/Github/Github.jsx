import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/surya1712")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    // <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
    //   Github Followers: {data.followers}
    //   {/* Github Followers: {data.name} */}
    //   <img
    //     className="text-center rounded-full p-4"
    //     src={data.avatar_url}
    //     alt="Git picture"
    //     width={300}
    //   />
    // </div>
    <div className="p-6 bg-gray-100 sm:rounded-lg">
      <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold mb-6 text-center">
        Github Name: {data.name}
      </h1>

      {/* Main layout: image on the left, info on the right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/* Left: Avatar */}
        <div className="flex justify-center">
          <img
            className="rounded-full shadow-lg"
            src={data.avatar_url}
            alt="GitHub Avatar"
            width={250}
            height={250}
          />
        </div>

        {/* Right: Info */}
        <div className="space-y-4 text-gray-700">
          <p className="text-2xl">Followers: {data.followers}</p>
          <p className="text-2xl">Following: {data.following}</p>
          <p className="text-2xl">Public Repos: {data.public_repos}</p>
          <p className="text-2xl">Twitter Username: {data.twitter_username}</p>
          <p className="text-2xl">
            Location: {data.location || "Not available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/surya1712");
  return response.json();
};

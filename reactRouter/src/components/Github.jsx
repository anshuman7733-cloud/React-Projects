import React, { useEffect, useState } from "react";
import { data, useLoaderData, useParams } from "react-router";

function Github() {
  const data = useLoaderData();

  return (
    <>
      <div className="bg-gray-600 text-4xl text-white p-5 text-center">
        Github Followers: {data.followers}
        <img src={data.avatar_url} className="w-75 relative"/>
      </div>
      {/* <div className="flex justify-center p-2">
      </div> */}
    </>
  );
}

export default Github;

export const githubLoaderInfo = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary")
  return res.json();
}

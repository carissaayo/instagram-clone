import { useEffect, useState } from "react";
import { DUMMY_DATA } from "../utils/DUMMY_DATA";

const Suggestions = () => {
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {DUMMY_DATA.slice(1, 6).map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={profile.img}
            alt="image"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm"> {profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company}
            </h3>
          </div>
          <button className="text-blue-400 text-sm"> Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;

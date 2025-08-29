import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white text-black inline-block p-2 text-center rounded font-bold m-4 shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-green-100 duration-300 w-[255px]">
      <img
        className="mx-auto h-32 w-32 rounded-full mb-3"
        src={props.photue}
        alt="profile_image"
      />
      <h1 className="text-2xl font-semibold mb-4">{props.user}</h1>
      <h4 className="text-blue-400">{props.profession}</h4>
      <h2>
        City:{props.city}, age:{props.age}
      </h2>
      <button className="bg-emerald-700 text-white px-4 py-2 mt-5">
        Add Friend
      </button>
    </div>
  );
};

export default Card;

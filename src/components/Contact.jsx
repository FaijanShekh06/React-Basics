import React from "react";

const Contact = (props) => {
  return (
    <div>
      <div className="card flex flex-col items-center justify-center w-[30vw]  mx-auto my-10 relative">
        <div className="top bg-cyan-300 w-full text-left p-10 text-gray-900 font-bold text-4xl rounded-t-lg flex items-center justify-between">
          <h2>{props.name}</h2>
          <img
            className=" w-34 rounded-full border-4 border-white absolute right-5 top-12"
            src={props.imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom bg-cyan-100 w-full text-left p-10 text-cyan-900 rounded-b-lg space-y-2 text-xl font-semibold">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

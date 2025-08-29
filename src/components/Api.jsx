import React, { useState } from "react";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    console.log(response.data);
  };
  return (
    <div className="inline-block w-full items-center justify-center text-center">
      <button
        onClick={getData}
        className="bg-cyan-900 text-amber-50 font-semibold text-2xl px-6 py-3 rounded-lg mt-10 hover:bg-cyan-700"
      >
        Get Data
      </button>
      <div className="p-10 m-10 bg-gray-900">
        {data.map((elem, id) => {
          return (
            <div className="inline-block m-4 p-4 bg-cyan-100 text-black rounded-lg shadow-lg  hover:scale-105 hover:shadow-2xl duration-300">
              <img
                key={id}
                className="m-2 h-48 w-48 rounded-lg"
                src={elem.download_url}
                alt="img"
              />
              <h1 className="text-lg font-bold">{elem.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Api;

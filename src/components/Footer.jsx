import React from "react";
import { DataContext } from "../Context/UserContext";

const Footer = () => {
  const username = React.useContext(DataContext);
  return (
    <div className=" text-center w-full py-6 bg-green-950 text-2xl">
      This is Footer copyright &#169; {username}
    </div>
  );
};

export default Footer;

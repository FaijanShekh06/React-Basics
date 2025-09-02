import React from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/UserContext";

const Header = () => {
  const username = React.useContext(DataContext);
  return (
    <div className="py-17 px-10 bg-emerald-600 text-white flex items-center justify-between">
      <h2 className="text-2xl">{username}</h2>
      <div className="text-xl font-semibold flex gap-10">
        <Link to="/navbar">Navbar</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/card">Card</Link>
        <Link to="/api">Api</Link>
      </div>
    </div>
  );
};

export default Header;

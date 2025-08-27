import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex py-10 px-5 items-center justify-between bg-green-950">
        <h2 className="text-2xl font-extrabold">Faijan Shekh</h2>
        <div className="flex items-center gap-10 font-semibold">
          <h4 className="text-xl">About</h4>
          <h4 className="text-xl">Contact</h4>
          <h4 className="text-xl">Services</h4>
          <h4 className="text-xl">Your Account</h4>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

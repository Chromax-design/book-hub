import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full min-h-20 pt-6 p-4 md:px-5 lg:px-3">
      <div className="container max-w-5xl mx-auto flex flex-col gap-5 md:flex-row justify-between items-center">
        <NavLink to={'/'} className="flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faBook} className="text-3xl" />
          <span className="ml-1 font-bold text-xl">Book-Hub</span>
        </NavLink>
        <div className="flex gap-3">
          <NavLink
            to={"/"}
            className="hover:tracking-wider transition-all hover:underline"
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="hover:tracking-wider transition-all hover:underline"
          >
            About Us
          </NavLink>
        </div>
      </div>
      <div className="container max-w-5xl mx-auto ">
        <p className="text-center text-sm pt-5 pb-3 text-slate-400">&copy; Copyright {new Date().getFullYear()} created by Chromax </p>
      </div>
    </footer>
  );
};

export default Footer;

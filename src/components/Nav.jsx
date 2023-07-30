import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {
  const [isMenu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <nav className="flex justify-between items-center">
      <NavLink
        to={"/"}
        className={"text-white flex items-center cursor-pointer"}
      >
        <FontAwesomeIcon icon={faBook} className="text-3xl" />
        <span className="ml-1 font-bold text-xl">Book-Hub</span>
      </NavLink>
      <div className="text-white text-3xl">
        <FontAwesomeIcon
          icon={faBars}
          className="cursor-pointer hover:scale-105 md:hidden"
          onClick={openMenu}
        />
      </div>
      <div
        className={
          isMenu
            ? "text-white fixed top-0 right-0 flex flex-col bg-black px-6 w-[50vw] md:w-[45vw] h-full gap-5 font-semibold uppercase pt-[60px]"
            : "fixed top-0 right-0 flex flex-col bg-black px-6 w-[50vw] h-full gap-5 font-semibold pt-[60px] translate-x-[100%] transition-all md:relative md:flex-row md:bg-transparent md:text-white md:px-0 md:pt-0 md:translate-x-0 md:w-auto"
        }
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="cursor-pointer hover:scale-105 text-3xl absolute top-4 right-5 md:hidden"
          onClick={closeMenu}
        />
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
    </nav>
  );
};

export default Nav;

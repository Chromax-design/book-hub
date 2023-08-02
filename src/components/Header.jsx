import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/context";

const Header = () => {
  const { setsearch } = useContext(Context);
  const searchText = useRef("");
  useEffect(() => {
    searchText.current.focus();
  }, []);
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.current.value.length == 0) {
      setsearch('legacy');
    } else {
      setsearch(searchText.current.value);
    }
    navigator("/");
  };

  return (
    <header className="bg-[url('assets/bg-hero.jpg')] min-h-[500px] bg-no-repeat bg-cover relative md:h-[70vh] md:bg-center selection:bg-black selection:text-white">
      <div className="absolute min-w-full min-h-full bg-black opacity-70"></div>
      <div className="container max-w-5xl mx-auto relative md:px-5 lg:px-3">
        <div className="absolute top-0 left-0 w-full p-4">
          {/* Nav */}.
          <Nav />
          {/* Hero section */}
          <div className="max-w-lg mx-auto flex justify-center items-center mt-12 py-8 flex-col text-center text-white">
            <h1 className="text-4xl capitalize font-bold">
              Welcome to books hub
            </h1>
            <p className="mt-3 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              animi quas assumenda enim sapiente, tempore nemo exercitationem
              pariatur at quis!
            </p>
            <form
              action=""
              className="w-full flex gap-4 mt-5 items-center border-white border-[2px] px-5 py-3 rounded-[3rem] shadow-2xl bg-white text-black"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="w-full flex-1 h-10 border-none outline-none p-3 bg-transparent placeholder:capitalize placeholder:italic"
                placeholder="Harry potter..."
                ref={searchText}
                onSubmit={handleSubmit}
              />
              <button type="submit">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-2xl cursor-pointer hover:scale-105 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

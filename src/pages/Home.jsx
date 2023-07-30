import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Book from "../components/Book";
import Loader from "../assets/loader.gif";
import Error from "../assets/error.gif";
import axios from "axios";
import Pagination from "../components/Pagination";

const Home = () => {
  const [search, setsearch] = useState("greed");
  const [loading, setloading] = useState(false);
  const [result, setresult] = useState([]);

  // pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [bookPerPage] = useState(20);

  const url = `https://openlibrary.org/search.json?title=${search}`;
  const getData = async () => {
    try {
      setloading(true);
      const { data } = await axios.get(url);
      setresult(data.docs);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = () => {
    getData();
  };

  const lastBookIndex = currentPage * bookPerPage;
  const firstBookIndex = lastBookIndex - bookPerPage;
  const requiredBooks = result.slice(firstBookIndex, lastBookIndex);

  return (
    <>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate animi quas assumenda enim sapiente, tempore nemo
                exercitationem pariatur at quis!
              </p>
              <form
                action=""
                className="w-full flex gap-4 mt-5 items-center border-white border-[2px] px-5 py-3 rounded-[3rem] shadow-2xl bg-white text-black"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
              >
                <input
                  type="text"
                  className="w-full flex-1 h-10 border-none outline-none p-3 bg-transparent placeholder:capitalize placeholder:italic"
                  placeholder="search a book..."
                  value={search}
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-2xl cursor-pointer hover:scale-105 transition-transform"
                  onClick={handleSearch}
                />
              </form>
            </div>
          </div>
        </div>
      </header>
      {/* main */}
      <main className="my-7 px-3">
        {loading && (
          <div className="flex justify-center items-center transition-all bg-white flex-col my-3 py-3">
            <img src={Loader} className=" w-20 block mx-auto" />
            <h2 className="mt-2 text-center font-bold">Loading books...</h2>
          </div>
        )}

        {result.length == 0 && loading == false && (
          <div className="flex justify-center items-center transition-all bg-white flex-col my-3 py-3">
            <img src={Error} className=" w-20 block mx-auto" />
            <h2 className="mt-2 text-center font-bold">Book not found...</h2>
          </div>
        )}

        <section className="max-w-5xl mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {requiredBooks.map((book) => {
            return <Book book={book} key={book.key} />;
          })}
        </section>

        <section className="my-5 py-3 max-w-5xl mx-auto">
          <Pagination
            booksTotal={result.length}
            booksPerPage={bookPerPage}
            setPage={setcurrentPage}
            current={currentPage}
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
// https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg

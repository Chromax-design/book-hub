import React, { useState, useEffect, useCallback, useContext } from "react";
import Book from "../components/Book";
import Loader from "../assets/loader.gif";
import Error from "../assets/error.gif";
import Pagination from "../components/Pagination";
import Context from "../context/context";

const Home = () => {

  const {loading, result} = useContext(Context);
  // pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [bookPerPage] = useState(20);

  const lastBookIndex = currentPage * bookPerPage;
  const firstBookIndex = lastBookIndex - bookPerPage;
  const requiredBooks = result.slice(firstBookIndex, lastBookIndex);

  return (
    <>
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
    </>
  );
};

export default Home;
// https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg

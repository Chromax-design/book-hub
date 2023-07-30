import React from "react";

const Pagination = ({ booksTotal, booksPerPage, setPage, current }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(booksTotal / booksPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center items-center flex-wrap">
      {pages.map((page) => {
        return (
          <button
            key={page}
            className={
              page == current
                ? "px-4 py-2 m-2 bg-red-700 font-semibold text-white mx-2 hover:bg-red-900 hover:scale-105"
                : "px-4 py-2 m-2 bg-black font-semibold text-white mx-2 hover:bg-slate-900 hover:scale-105"
            }
            onClick={() => {
              setPage(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;

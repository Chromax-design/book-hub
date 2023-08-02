import React from "react";
import { Link } from "react-router-dom";

// /works/OL15829189W
const Book = ({book}) => {
  let id = book.key.split('/');
  id = id[2];
  return (
    <div className="p-4 shadow-lg rounded-md group selection:bg-black selection:text-white">
      <Link className="" to={`${id}`}>
        <img
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
              : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
          }
          alt=""
          className="block w-full lg:h-[300px] object-cover group-hover:scale-105 transition cursor-pointer"
        />
      </Link>

      <h2 className="font-bold my-3 capitalize">{ book.title.length > 30 ? book.title.slice(0, 30)  + '...' :book.title }</h2>
      <h3>{book.author_name}</h3>
      {/* {console.log(book.key)} */}
    </div>
  );
};

export default Book;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../assets/loader.gif";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { bookId } = useParams();
  const [details, setdetails] = useState([]);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const detailsurl = `https://openlibrary.org/works/${bookId}.json`;
  const getDetails = async () => {
    setLoading(true);
    const { data } = await axios.get(detailsurl);
    setdetails(data);
    setLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);

  const description = details.description
    ? details.description.value || details.description
    : "Book has no description";
  const Booktitle = details.title;
  const img = details.covers && details.covers.length > 0 && details.covers[0];
  const imgUrl = img
    ? `https://covers.openlibrary.org/b/id/${img}-L.jpg`
    : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

  return (
    <>
      <main>
        {Loading && (
          <div className="flex justify-center items-center transition-all bg-white flex-col my-3 py-3">
            <img src={Loader} className=" w-20 block mx-auto" />
            <h2 className="mt-2 text-center font-bold">
              Loading book details...
            </h2>
          </div>
        )}

        {/* book details */}
        {Loading == false && (
          <section className="my-5 py-3 max-w-5xl mx-auto px-5">
            <button
              className="text-md text-white bg-slate-950 px-4 py-2 capitalize font-bold mb-5 hover:bg-slate-600"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go back
            </button>
            <div className="flex justify-center gap-5 flex-col sm:flex-row">
              <div className="min-w-[200px] shadow-lg">
                <img src={imgUrl} alt="" className="w-full" />
              </div>
              <div className="p-1 md:overflow-y-scroll md:max-h-80">
                <h2 className="text-2xl">
                  <span className="font-bold">Book Title</span>: {Booktitle}
                </h2>
                <h3 className="font-bold text-2xl">Book description</h3>
                <p>{description}</p>
                <div className="flex gap-3 flex-wrap mt-2">
                  <h3 className="font-bold text-2xl">Tags:</h3>
                  {details.subjects?.slice(0, 10)?.map((subject) => {
                    return (
                      <span className="bg-black text-white p-2 inline-block text-xs font-bold cursor-pointer">
                        {" "}
                        #{subject}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default Details;

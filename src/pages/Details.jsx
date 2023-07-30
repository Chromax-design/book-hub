import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import axios from "axios";
import Loader from "../assets/loader.gif";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { bookid } = useParams();
  const [details, setdetails] = useState([]);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const detailsurl = `https://openlibrary.org/works/${bookid}.json`;
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
      <header className="bg-[url('assets/bg-hero.jpg')] min-h-[450px] bg-no-repeat bg-cover relative md:h-[70vh] md:bg-center selection:bg-black selection:text-white">
        <div className="absolute min-w-full min-h-full bg-black opacity-70"></div>
        <div className="container max-w-5xl mx-auto relative md:px-5 lg:px-3">
          <div className="absolute top-0 left-0 w-full p-4">
            {/* Nav */}.
            <Nav />
            {/* Hero section */}
            <div className="max-w-lg mx-auto flex justify-center items-center mt-[80px] md:mt-[150px] py-8 flex-col text-center text-white">
              <h1 className="text-5xl md:text-6xl capitalize font-black">
                About The book
              </h1>
            </div>
          </div>
        </div>
      </header>
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
            <button className="text-md text-white bg-slate-950 px-4 py-2 capitalize font-bold mb-5 hover:bg-slate-600" onClick={()=>{
                navigate(-1);
            }}>
              Go back
            </button>
            <div className="flex justify-center gap-5 flex-col sm:flex-row">
              <div className="min-w-[200px] shadow-lg">
                <img src={imgUrl} alt="" className="w-full" />
              </div>
              <div className="">
                <h2 className="text-2xl">
                  <span className="font-bold">Book Title</span>: {Booktitle}
                </h2>
                <h3 className="font-bold text-2xl">Book description</h3>
                <p>{description}</p>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Details;
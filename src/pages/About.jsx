import React from "react";
import Nav from "../components/Nav";
import image1 from "../assets/pic-1.jpg";
import image2 from "../assets/pic-2.jpg";
import image3 from "../assets/pic-3.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <header className="bg-[url('assets/bg-hero.jpg')] min-h-[450px] bg-no-repeat bg-cover relative md:h-[70vh] md:bg-center selection:bg-black selection:text-white">
        <div className="absolute min-w-full min-h-full bg-black opacity-70"></div>
        <div className="container max-w-5xl mx-auto relative md:px-5 lg:px-3">
          <div className="absolute top-0 left-0 w-full p-4">
            {/* Nav */}
            <Nav />
            {/* Hero section */}
            <div className="max-w-lg mx-auto text-white text-center">
              <h1 className="text-6xl font-extrabold mt-[30%]">About Us</h1>
              <p className="text-xs tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, culpa.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* main section */}
      <main className="container max-w-5xl mx-auto p-4 md:px-5 lg:px-3 py-4 selection:bg-black selection:text-white">
        <section className="flex flex-col gap-8 my-6 justify-between items-start md:flex-row">
          <div className="flex-1 pt-8">
            <h2 className="capitalize text-3xl font-black">Our vision</h2>
            <p className="text-md py-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              dignissimos molestias delectus aspernatur dicta iusto, laboriosam
              nihil, officia doloribus deleniti porro est! Alias doloremque
              rerum accusamus! Illo possimus corrupti sequi.
            </p>
            <p className="text-md py-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              dignissimos molestias delectus aspernatur dicta iusto, laboriosam
              nihil, officia doloribus deleniti porro est! Alias doloremque
              rerum accusamus! Illo possimus corrupti sequi.
            </p>
          </div>
          <div className="flex-0 md:flex-1 h-[450px] overflow-y-hidden w-[100%]">
            <img
              src={image1}
              alt=""
              className="block w-full h-full object-cover object-center"
            />
          </div>
        </section>
        <section className="flex flex-col-reverse my-6 gap-8 justify-between items-start md:flex-row">
          <div className="flex-0 md:flex-1  h-[450px] overflow-y-hidden w-[100%]">
            <img
              src={image2}
              alt=""
              className="block w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex-1 pt-8">
            <h2 className="capitalize text-3xl font-black">Our approach</h2>
            <p className="text-md py-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              dignissimos molestias delectus aspernatur dicta iusto, laboriosam
              nihil, officia doloribus deleniti porro est! Alias doloremque
              rerum accusamus! Illo possimus corrupti sequi.
            </p>
            <p className="text-md py-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              dignissimos molestias delectus aspernatur dicta iusto, laboriosam
              nihil, officia doloribus deleniti porro est! Alias doloremque
              rerum accusamus! Illo possimus corrupti sequi.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-8 my-6 justify-between items-start md:flex-row">
          <div className="flex-1 pt-8">
            <h2 className="capitalize text-3xl font-black">Our Process</h2>
            <p className="text-md py-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              dignissimos molestias delectus aspernatur dicta iusto, laboriosam
              nihil, officia doloribus deleniti porro est! Alias doloremque
              rerum accusamus! Illo possimus corrupti sequi.
            </p>
            <p className="text-md py-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              dignissimos molestias delectus aspernatur dicta iusto, laboriosam
              nihil, officia doloribus deleniti porro est! Alias doloremque
              rerum accusamus! Illo possimus corrupti sequi.
            </p>
          </div>
          <div className="flex-0 md:flex-1 h-[450px] overflow-y-hidden w-[100%]">
            <img
              src={image3}
              alt=""
              className="block w-full h-full object-cover object-center"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;

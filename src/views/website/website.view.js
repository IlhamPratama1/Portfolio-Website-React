import React, { useState } from "react";
import Navbar from "../templates/navbar";
import { motion } from "framer-motion";
import { fade } from '../../animation/pageTransition';

function WebsiteView() {
  const data = [
    "/static/images/web/fashionshop.PNG",
    "/static/images/web/arrow.PNG"
  ];
  const [image, setImage] = useState("/static/images/web/fashionshop.PNG");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen bg-black">
      <Navbar />
      <motion.div initial="exit" animate="enter" variants={fade} className="h-5/6">
        <div className="flex h-full">
          <img style={{filter: `brightness(75%)`}} alt="website" src={image} className="transition-500 m-auto hidden lg:block lg:w-3/6" />
        </div>
        <div className="absolute top-0 w-full h-full flex">
          <div className="m-auto lg:flex lg:space-x-44 space-y-10">
            <a href="https://pratamailham.pythonanywhere.com/" target="noopener noreferrer" onMouseEnter={() => setImage(data[0])} className="">
              <h1 className="font-zefani uppercase text-5xl lg:text-7xl text-purple hover:text-white text-center transition-200">Fashion <br></br> Shop</h1>
            </a>
            <h1 className="font-zefani uppercase text-5xl lg:text-7xl text-white text-center">/</h1>
            <br />
            <br />
            <a href="https://the-arrow-news.herokuapp.com/" target="noopener noreferrer" onMouseEnter={() => setImage(data[1])} className="font-zefani uppercase text-5xl lg:text-7xl text-purple hover:text-white text-center transition-200">
              <h1 className="font-zefani uppercase text-5xl lg:text-7xl text-purple hover:text-white text-center transition-200">The Arrow <br></br> News</h1>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WebsiteView;

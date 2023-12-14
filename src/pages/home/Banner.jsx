import React from "react";
import bannerImage from "../../../public/image/Banner.png";
import { FaShoppingBag } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-1/2 mt-20">
          <img
            src={bannerImage}
            alt=""
            className="mx-auto h-full md:h-[562px] md:w-[442px] w-full"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            You can explore ans shop many different collection from various
            brands here.
          </p>
          <button className="bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold flex gap-2 items-center rounded-md">
            <FaShoppingBag className="inline-flex" /> Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

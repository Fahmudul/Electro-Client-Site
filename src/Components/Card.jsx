import React from "react";
import img1 from "../assets/img4.jpg";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
const Card = ({ product, height }) => {
  const { category } = product;
  return (
    <div
      className={`group max-h-[${height}px] border flex px-4 pt-5 pb-6 items-center justify-center hover:shadow-xl rounded-md transition-all duration-300`}
    >
      <div className="flex gap-2 items-center justify-between">
        <div>
          <h3 className="text-gray-400 text-sm">{category}</h3>
          <p className="text-secondary text-base font-semibold">
            Ultra Wireless S50 Headphones S50 with Bluetooth
          </p>
          <div className="flex justify-center">
            <img
              src={img1}
              className="group-hover:scale-105 transition-all duration-300"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center my-1">
            <span className="text-xl">$79.00</span>
            <FaCartArrowDown className="text-4xl bg-primary text-white p-[5px] rounded-full" />
          </div>
          <hr className="my-3" />
          <div className="flex justify-between my-2">
            <span className="flex flex-row-reverse items-center gap-1 hover:font-semibold transition-all duration-300">
              Compare <MdOutlineCompareArrows className="text-lg" />
            </span>
            <span className="flex flex-row-reverse items-center gap-1 hover:font-semibold transition-all duration-300">
              Add to wishlist <CiHeart className="text-lg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

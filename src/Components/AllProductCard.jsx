import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import img1 from "../assets/img2.jpg";
import { Link } from "react-router-dom";
const AllProductCard = ({ product }) => {
  const { category, description, price, id } = product;
  return (
    <Link
      to={`/products/${product.id}`}
      className=" mx-auto bg-card rounded-lg shadow-lg overflow-hidden group no-underline"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="overflow-hidden ">
        <img
          className="w-full h-48 object-contain group:hover:scale-105 transition-all duration-300"
          src={img1}
          alt="Game Console Controller"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold #333333">
          Game Console Controller + USB 3.0 Cable
        </h2>
        <p className="text-muted-foreground #666666">Game Consoles</p>
        <p className="text-xl font-semibold #388E3C">${price}</p>
        <p className="text-muted-foreground mt-2">
          {description.slice(0, 100)}...
        </p>
        <div className="flex justify-between items-center mt-4 text-[#808080]">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 fill-current text-primary mr-1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <span className="text-muted-foreground">4.5 (245 reviews)</span>
          </div>
          <div className="text-muted-foreground">
            Created on: 21st Oct, 2021
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="border-[#CCCCCC] shadow-[#00000029] text-secondary-foreground border active:scale-95 transition-all duration-300 px-4 py-2 rounded-lg">
            Add to Cart
          </button>
          <button className="text-muted-foreground  active:scale-95 transition-all duration-300 shadow-md px-4 py-2 rounded-lg">
            Add to Wishlist
          </button>
        </div>
      </div>
    </Link>
  );
};

export default AllProductCard;

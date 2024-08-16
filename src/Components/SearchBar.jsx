import React, { useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import useAxios from "../hooks/useAxios";
import { Link, useNavigate } from "react-router-dom";
import img3 from "../assets/img3.jpg";
const SearchBar = () => {
  const navigate = useNavigate();
  const [searchedProducts, setSearchedProducts] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const axiosBase = useAxios();
  const handleSearch = async () => {
    const searchedProducts = await axiosBase.get(
      `/products?search=${searchText}`
    );
    setSearchedProducts(searchedProducts.data);
  };
  useEffect(() => {
    const suggestionList = document.querySelector(".suggestion ");

    suggestionList.addEventListener("click", (e) => {
      e.target.parentNode.classList.add("hidden");
      navigate(`/products`);
    });
  });
  return (
    <div className="lg:flex-1 relative ">
      <div className="flex items-center ">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search product by name e.g Laptop, Moblie, Camera"
          className="py-2 px-4 outline-primary outline rounded-tl-full rounded-bl-full rounded-br-none rounded-tr-none w-full  "
        />
        <button
          className="p-[11px] bg-primary rounded-tr-full rounded-br-full outline-none border-none"
          onClick={() => handleSearch()}
        >
          <CiSearch className="text-2xl" />
        </button>
      </div>
      {/** Searched Products container */}
      <div
        className={`${
          searchedProducts.length === 0
            ? "hidden"
            : "h-auto border w-[58%] mx-auto absolute bg-[#f5f5f5] z-[5] suggestion"
        }`}
      >
        <ul className="overflow-y-auto suggestion">
          {searchedProducts.slice(0, 3).map((product) => (
            <li key={product._id}>
              <div className="bg-[#f5f5f5] flex w-auto border min-h-[140px] items-center p-2">
                <div className="w-36">
                  <img src={img3} alt="" />
                </div>
                <div className="text-lg   flex flex-col justify-between flex-1  h-[100px]">
                  <h4></h4>
                  <span className="font-bold">$ {23.45}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="text-center block my-3 text-primary font-bold cursor-pointer ">
          Show All
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

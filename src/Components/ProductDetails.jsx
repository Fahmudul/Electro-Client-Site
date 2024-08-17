import React, { useEffect } from "react";
import bigImg from "../assets/details.jpg";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const axiosBase = useAxios();
  function formatDate(dateStr) {
    // Split the input string into day, month, and year
    const [day, month, year] = dateStr.split(":");

    // Convert month from number to name
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthName = months[parseInt(month, 10) - 1];

    // Get the correct ordinal suffix for the day
    const dayNum = parseInt(day, 10);
    let suffix = "th";
    if (dayNum === 1 || dayNum === 21 || dayNum === 31) suffix = "st";
    else if (dayNum === 2 || dayNum === 22) suffix = "nd";
    else if (dayNum === 3 || dayNum === 23) suffix = "rd";

    // Return the formatted date
    return `${dayNum}${suffix} ${monthName}, 20${year}`;
  }

  const requestSingleProduct = async () => {
    const product = await axiosBase.get(`/product/${id}`);
    console.log(product.data);
    setProduct(product.data);
  };
  useEffect(() => {
    requestSingleProduct();
  }, []);

  const { productName, productImage, description, price, category, ratings } =
    product;
  return (
    <div className="flex   border rounded-lg shadow-lg overflow-hidden bg-white container mx-auto lg:min-h-[calc(100vh-30vh)]">
      <div className="w-1/2 p-4">
        <img
          src={bigImg}
          alt={productName}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col ">
        <p className="text-xl font-semibold text-gray-700/70 my-2">
          Category/{category}
        </p>
        <h1 className="text-3xl font-semibold text-gray-800">{productName}</h1>
        <p className="text-lg text-gray-600 mt-2">{description}</p>
        <p className=" text-[#333333] mt-4 text-4xl">
          ${price} <span className="text-xl line-through">${price + 1000}</span>
        </p>
        <p className="text-lg text-yellow-500 mt-2">Ratings: {ratings}</p>
        <p className="text-sm text-gray-500 mt-2 mb-3">
          Created on:{" "}
          {product?.creationDate ? formatDate(product?.creationDate) : "N/A"}
        </p>
        <button className="new-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;

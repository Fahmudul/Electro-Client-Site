import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import MiniCard from "../../Components/miniCard";
import DiscountCard from "../../Components/DiscountCard";
import Card from "../../Components/Card";
import useAxios from "../../hooks/useAxios";
import bigCard from "../../assets/bigcard.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [categorizedProducts, setCategorizedProducts] = useState([]);
  const axiosSecure = useAxios();
  const [tabName, setActiveTab] = useState("");
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  // Random product
  const randomProduct = async () => {
    const response = await axiosSecure("/allproduct?limit=8");
    setProducts(response?.data);
  };
  useEffect(() => {
    const handleClick = (e) => {
      setActiveTab();
      // Add class on active tab
      navigate(`/?category=${e.target.innerText.split("%20")[0]}`);
    };
    const liElements = document.querySelectorAll(".tabsmenu li");
    liElements.forEach((li) => {
      li.addEventListener("click", handleClick);
    });

    return () => {
      liElements.forEach((li) => {
        li.removeEventListener("click", handleClick);
      });
    };
  });
  useEffect(() => {
    // console.log(category);
    const getProducts = async () => {
      const categorizedProduct = await axiosSecure(
        `/allproduct?category=${category}`
      );
      setCategorizedProducts(categorizedProduct?.data);
    };

    getProducts();
  }, [category, axiosSecure]);
  useEffect(() => {
    randomProduct();
  }, []);
  return (
    <div>
      <Hero />
      {/* Mini Card */}
      <div className="container mx-auto grid lg:grid-cols-4 gap-4 grid-cols-1 my-7">
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>

      {/* Discount and other product Card */}
      <div className="grid grid-cols-4 container mx-auto gap-6">
        <div className="col">
          <DiscountCard />
        </div>
        <div className="col-span-3 grid grid-cols-4 gap-2">
          {products.map((product) => (
            <Card key={product._id} product={product} height={490} />
          ))}
        </div>
      </div>
      {/* Tabs */}
      <div className="bg-[#f9f9f9] my-20 p-3">
        <div className="container mx-auto">
          <ul className="flex justify-center gap-6 border-b tabsmenu [&>li]:cursor-pointer [&>li]:text-lg [&>li]:text-secondary  [&>li]:py-4 [&>li]:px-4 [&>li]:hover:bg-[#f7f7f7]">
            <li>Laptop</li>
            <li>Mobile</li>
            <li>Gaming Console</li>
            <li>Camera</li>
            <li>Audio System</li>
          </ul>
          <div className="grid grid-cols-1 lg:grid-cols-6 p-3">
            <div className="lg:col-span-2 grid lg:grid-cols-2 gap-1">
              {categorizedProducts
                .slice(0, categorizedProducts.length / 2)
                .map((product) => (
                  <Card key={product._id} product={product} height={440} />
                ))}
            </div>
            <div className="lg:col-span-2 group h-full">
              <img
                src={bigCard}
                className="w-full group-hover:shadow-lg rounded-md border"
                alt=""
              />
            </div>
            <div className="lg:col-span-2 grid lg:grid-cols-2 gap-1">
              {categorizedProducts
                .slice(
                  categorizedProducts.length / 2,
                  categorizedProducts.length
                )
                .map((product) => (
                  <Card key={product._id} product={product} height={440} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import MiniCard from "../../Components/miniCard";
import DiscountCard from "../../Components/DiscountCard";
import Card from "../../Components/Card";
import useAxios from "../../hooks/useAxios";
import bigCard from "../../assets/bigcard.png";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.css";
import "swiper/css/pagination";
import "../../style.css";
import { Pagination } from "swiper/modules";
import AllCategoryList from "../../Components/AllCategoryList";
const Home = () => {
  const tabItems = [
    {
      name: "Laptop",
    },
    {
      name: "Mobile",
    },
    {
      name: "Gaming Console",
    },
    {
      name: "Camera",
    },
    {
      name: "Audio System",
    },
  ];
  const [products, setProducts] = useState([]);
  const [categorizedProducts, setCategorizedProducts] = useState([]);
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const [productCategory, setProductCategory] = useState("Laptop");
  // Random product
  const randomProduct = async () => {
    const response = await axiosSecure("/allproduct?limit=8");
    setProducts(response?.data);
  };
  useEffect(() => {
    const handleClick = (e) => {
      // Add class on active tab

      navigate(`/?category=${e.target.innerText}`);
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
        `/allproduct?category=${category || "Laptop"}`
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
      <div>
        {/* Page content here */}
        <div className="hero-background bg-cover lg:bg-transparent lg:h-[500px] mt-10 lg:mt-5 ">
          <div className="container mx-auto min-h-[340px] flex justify-between">
            <AllCategoryList />
            <div className="lg:w-[80%] w-full border-2 border-blue-600">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper relative -z-10"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* Mini Card */}
      <div className="container mx-auto grid lg:grid-cols-4 gap-4 grid-cols-1 my-7">
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>

      {/* Discount and other product Card */}
      <div className="grid lg:grid-cols-4 container mx-auto gap-6">
        <div className="col">
          <DiscountCard />
        </div>
        <div className="lg:col-span-3 grid lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <Card key={product._id} product={product} height={490} />
          ))}
        </div>
      </div>
      {/* Tabs */}
      <div className="bg-[#f9f9f9] my-20 p-3 mx-2 lg:mx-0">
        <div className="container mx-auto">
          <ul className="flex justify-center gap-6 border-b tabsmenu overflow-y-scroll lg:overflow-y-auto px-2">
            {tabItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setProductCategory(item.name)}
                className={`tab ${
                  productCategory === item.name
                    ? "border-b-2 border-primary"
                    : ""
                }`}
                // className="border"
              >
                {item.name}
              </li>
            ))}
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

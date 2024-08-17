import React, { useEffect, useState } from "react";
import { Slider, RangeSlider, Row, Col, InputGroup, InputNumber } from "rsuite";
// We can use deep compare effect to catch deep nested change in state
// import { useDeepCompareEffect } from "use-deep-compare-effect";
import "../../../node_modules/rsuite/dist/rsuite.css";
import brandList from "./Brand";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import useAxios from "../../hooks/useAxios";
import { debounce } from "lodash";
import AllProductCard from "../../Components/AllProductCard";
const AllProductPage = () => {
  const axiosBase = useAxios();
  const [value, setValue] = React.useState([0, 90]);
  const minValue = 150;
  const maxValue = 1500;
  const [products, setProducts] = useState([]);
  let brandName = [];
  let categoryName = [];
  const [filter, setFilter] = useState({
    brand: [],
    category: [],
    price: [0, 90],
  });
  const categories = [
    "Laptop",
    "Mobile",
    "Gaming Console",
    "Camera",
    "Audio System",
  ];

  const normalizeToSliderRange = (price) => {
    return ((price - minValue) / (maxValue - minValue)) * 100;
  };

  // Denormalize slider value to real-world price
  const denormalizeToActualValue = (sliderValue) => {
    return (sliderValue / 100) * (maxValue - minValue) + minValue;
  };
  // console.log(filter);
  const handleCheckboxChange = (Name, property) => {
    // console.log(Name);
    setFilter((prevFilter) => {
      // Check if the brand is already in the list
      if (prevFilter[property].includes(Name)) {
        // Remove the brand from the list
        return {
          ...prevFilter,
          [property]: prevFilter[property].filter(
            (brand) => brand !== Name.toLowerCase()
          ),
        };
      } else {
        // Add the brand to the list
        return {
          ...prevFilter,
          [property]: [...prevFilter[property], Name.toLowerCase()],
        };
      }
    });
  };

  const [visible, setVisible] = useState(true);
  const [bransVisible, setbransVisible] = useState(true);
  useEffect(() => {
    console.log(filter);
    const debouncedApiCall = debounce(async () => {
      try {
        const filteredProducts = await axiosBase.post(
          "/filteredproducts",
          filter
        );

        console.log("Filtered products:", filteredProducts.data);
        setProducts(filteredProducts.data);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    }, 300); // Adjust the delay as needed (e.g., 300ms)

    // Call the debounced function
    debouncedApiCall();

    // Cleanup function to cancel the debounce if the effect is triggered again
    return () => debouncedApiCall.cancel();
  }, [filter]);
  return (
    <div className="container mx-auto  min-h-[80vh]">
      <div className="grid lg:grid-cols-5 gap-3">
        <div className="[&>div]:shadow-lg">
          {/* Price Range */}
          <div className="p-3 w-full mb-2 bg-[#f5f5f5]">
            <h3 className="text-2xl">Price Range</h3>
            <Row className="flex w-full flex-col gap-5">
              <Col md={10} xs={12} id="price-range-1">
                <RangeSlider
                  progress
                  style={{ width: "100%", backgroundColor: "red" }}
                  value={[
                    normalizeToSliderRange(filter.price[0]),
                    normalizeToSliderRange(filter.price[1]),
                  ]}
                  onChange={(sliderValue) => {
                    const actualMinPrice = denormalizeToActualValue(
                      sliderValue[0]
                    );
                    const actualMaxPrice = denormalizeToActualValue(
                      sliderValue[1]
                    );

                    setValue(sliderValue);
                    setFilter({
                      ...filter,
                      price: [actualMinPrice, actualMaxPrice],
                    });
                  }}
                />
              </Col>
              <Col md={8} xs={12} id="price-range-2">
                <InputGroup>
                  <InputNumber
                    min={150}
                    value={filter.price[0]}
                    onChange={(nextValue) => {
                      const [_, end] = filter.price;
                      if (nextValue > end) return;

                      setFilter({ ...filter, price: [nextValue, end] });

                      setValue([
                        normalizeToSliderRange(nextValue),
                        normalizeToSliderRange(end),
                      ]);
                    }}
                  />
                  <InputGroup.Addon>to</InputGroup.Addon>
                  <InputNumber
                    min={150}
                    max={1500}
                    value={filter.price[1]}
                    onChange={(nextValue) => {
                      const [start, _] = filter.price;
                      if (start > nextValue) return;

                      setFilter({ ...filter, price: [start, nextValue] });

                      setValue([
                        normalizeToSliderRange(start),
                        normalizeToSliderRange(nextValue),
                      ]);
                    }}
                  />
                </InputGroup>
              </Col>
            </Row>
          </div>

          {/* Category */}
          <div className="py-5 px-3 w-full mb-2 bg-[#f5f5f5]">
            <h3 className="text-2xl flex items-center justify-between">
              Brand{" "}
              <span
                onClick={() => setVisible(!visible)}
                className="transition-all duration-300"
              >
                {visible ? (
                  <IoIosArrowUp className="transition-all duration-300 cursor-pointer" />
                ) : (
                  <IoIosArrowDown className="transition-all duration-300  cursor-pointer" />
                )}
              </span>
            </h3>
            <div
              className={
                visible
                  ? "block mt-4 pl-1 lg:h-[450px] overflow-auto smooth-height"
                  : "hidden"
              }
            >
              {brandList.map((brand, idx) => (
                <div key={idx} className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text text-lg">{brand}</span>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={() => handleCheckboxChange(brand, "brand")}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div className="py-5 px-3 w-full mb-5 bg-[#f5f5f5]">
            <h3 className="text-2xl flex items-center justify-between">
              Category{" "}
              <span
                onClick={() => setbransVisible(!bransVisible)}
                className="transition-all duration-300"
              >
                {bransVisible ? (
                  <IoIosArrowUp className="transition-all duration-300 cursor-pointer" />
                ) : (
                  <IoIosArrowDown className="transition-all duration-300  cursor-pointer" />
                )}
              </span>
            </h3>
            <div
              className={
                bransVisible
                  ? "block mt-4 pl-1  smooth-height-2 overflow-auto"
                  : "hidden"
              }
            >
              {categories.map((category, idx) => (
                <div key={idx} className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text text-lg">{category}</span>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={() => handleCheckboxChange(category, "category")}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Clear Filter */}
        </div>

        {/* Products */}
        <div className="col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-3">
          {products?.map((product) => (
            <AllProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AllProductPage;

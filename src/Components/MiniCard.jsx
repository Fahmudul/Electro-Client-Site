import React from "react";
import img3 from "../assets/img3.jpg";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const MiniCard = () => {
  return (
    <div className="bg-[#f5f5f5] flex w-auto min-h-[140px] items-center p-2">
      <div>
        <img src={img3} alt="" />
      </div>
      <div className="text-lg w-36 border h-[80%] flex flex-col justify-between">
        <h4>
          CATCH BIG ON THE <span className="font-semibold">DEALS</span> CAMERAS
        </h4>
        <Link className="flex items-center gap-3">
          Show Now <FaCircleChevronRight className="text-primary" />
        </Link>
      </div>
    </div>
  );
};

export default MiniCard;

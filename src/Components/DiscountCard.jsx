import React from "react";

const DiscountCard = () => {
  return (
    <div className=" bg-card rounded-3xl  px-6 border-primary border-2 pb-3">
      <div className="flex justify-between mt-4 text-secondary">
        <h2 className="text-lg font-bold  ">
          Special <br /> Offer
        </h2>
        <span className="bg-yellow-400 rounded-full w-[75px] h-[75px] text-sm font-semibold flex-col justify-center flex items-center">
          Save <br />
          <span className="text-xl font-bold"> $120</span>
        </span>
      </div>
      <img
        // undefinedhidden="true"
        alt="Game Console Controller"
        src="https://transvelo.github.io/electro-html/2.0/assets/img/320X300/img1.jpg"
        className="mt-4 mx-auto"
      />
      <h3 className="text-xl font-semibold text-center mt-4">
        Game Console Controller
        <br />
        <span className="text-muted-foreground">+ USB 3.0 Cable</span>
      </h3>
      <div className="flex justify-center mt-2">
        <span className="line-through text-muted-foreground">$99,00</span>
        <span className="text-red-600 text-2xl font-bold ml-2">$79,00</span>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <p className="text-sm text-muted-foreground">
            Available: <span className="font-semibold">6</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Already Sold: <span className="font-semibold">28</span>
          </p>
        </div>
        <div className="w-full bg-zinc-200 rounded-full mt-2">
          <div
            className="bg-primary h-[18px] rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-2">
          Hurry Up! Offer ends in:
        </p>
        <div className="flex justify-center space-x-4 mt-1">
          <div className="text-center ">
            <span className="text-lg bg-gray-200/50 rounded-md p-2 font-bold ">
              00
            </span>
            <br className=""/>
            <span className="text-sm text-muted-foreground">HOURS</span>
          </div>
          <div className="text-center ">
            <span className="text-lg bg-gray-200/50 rounded-md p-2 font-bold">
              00
            </span>
            <br />
            <span className="text-sm text-muted-foreground">MINS</span>
          </div>
          <div className="text-center ">
            <span className="text-lg bg-gray-200/50 rounded-md p-2 font-bold">
              00
            </span>
            <br />
            <span className="text-sm text-muted-foreground">SECS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;

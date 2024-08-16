import { IoIosList } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";

const AllCategoryList = ({ hidden, visible }) => {
  return (
    <div
      className={`bg-white dark:bg-card rounded-lg shadow-md  w-[270px] hidden lg:block`}
    >
      <h2 className="text-lg font-bold bg-primary flex items-center gap-2 text-secondary py-2 px-3 rounded-tr-lg rounded-tl-lg">
        <IoIosList className="text-2xl " />
        All Departments
      </h2>
      <ul className=" space-y-2 [&>li]:border-b [&>li]:pb-1 p-4">
        <li className="text-muted-foreground hover:text-primary cursor-pointer flex items-center justify-between">
          Value of the Day
        </li>
        <li className="text-muted-foreground hover:text-primary cursor-pointer flex items-center justify-between">
          Top 100 Offers
        </li>
        <li className="text-muted-foreground hover:text-primary cursor-pointer flex items-center justify-between">
          New Arrivals
        </li>
        <li className="text-muted-foreground hover:text-primary cursor-pointer flex items-center justify-between">
          Computers & Accessories{" "}
          <span className="text-muted">
            <MdChevronRight className="text-xl  text-gray-300" />
          </span>
        </li>
        <li className="text-muted-foreground hover:text-primary cursor-pointer flex items-center justify-between">
          Cameras, Audio & Video{" "}
          <span className="text-muted">
            <MdChevronRight className="text-xl  text-gray-300" />
          </span>
        </li>
        <li className="text-muted-foreground hover:text-primary cursor-pointer flex items-center justify-between">
          Mobiles & Tablets{" "}
          <span className="text-muted">
            <MdChevronRight className="text-xl  text-gray-300" />
          </span>
        </li>
        <li className="text-muted-foreground hover:text-primary cursor-pointer flex items-center justify-between">
          Movies, Music & Video Game{" "}
          <span className="text-muted">
            <MdChevronRight className="text-xl  text-gray-300" />
          </span>
        </li>
        <li className="text-muted-foreground hover:text-primary cursor-pointer flex items-center justify-between">
          TV & Audio{" "}
          <span className="text-muted">
            <MdChevronRight className="text-xl  text-gray-300" />
          </span>
        </li>
        <li className="text-muted-foreground hover:text-primary cursor-pointer flex items-center justify-between">
          Watches & Eyewear{" "}
          <span className="text-muted">
            <MdChevronRight className="text-xl  text-gray-300" />
          </span>
        </li>
        <li className="text-muted-foreground hover:text-primary cursor-pointer flex items-center justify-between">
          Car, Motorbike & Industrial{" "}
          <span className="text-muted">
            <MdChevronRight className="text-xl  text-gray-300" />
          </span>
        </li>
        <li className="text-muted-foreground hover:text-primary cursor-pointer flex items-center justify-between">
          Accessories{" "}
          <span className="text-muted">
            <MdChevronRight className="text-xl  text-gray-300" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AllCategoryList;

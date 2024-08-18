import compo from "../assets/compo.png";
import { IoMenu } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import AllCategoryList from "./AllCategoryList";
import SearchBar from "./SearchBar";
import useAuth from "../hooks/useAuth";
import auth from "../FireBaseConfig/FirebaseConfig";
import { signOut } from "firebase/auth";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log(user);
  const currentPath = window.location.pathname;
  const NavItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Store Locator",
      link: "/store-locator",
    },
    {
      name: "Track Your Order",
      link: "/track-your-order",
    },
  ];
  return (
    <div className="lg:mt-5">
      <nav className="lg:flex justify-between hidden container mx-auto mb-4">
        <h1 className="text-secondary text-2xl">
          Welcome to Worldwide Electronics Store
        </h1>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-3 text-lg">
            {NavItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  className={
                    currentPath === item.link
                      ? "text-secondary font-bold"
                      : "before:[content-''] text-secondary before:w-0 relative before:absolute   before:hover:w-[60%] before:transition-all before:duration-500   before:bg-secondary before:h-[2px] before:-bottom-2"
                  }
                  style={{ textDecoration: "none" }}
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {user ? (
            <>
              <div className="avatar">
                <div className="mask  w-12 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    title={user?.displayName}
                  />
                </div>
              </div>
              <button
                className="new-btn font-semibold"
                onClick={() => signOut(auth)}
              >
                Log Out
              </button>
            </>
          ) : (
            <button
              className="new-btn font-semibold"
              onClick={() => navigate("/signin-out")}
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
      <hr />
      <div className=" my-5">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  flex flex-col">
            {/* Hero */}
            <div className="w-full flex items-center bg-primary lg:bg-transparent container mx-auto">
              <div className="flex-none lg:hidden relative top-[3px]">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex w-full items-center justify-between ">
                <div className=" text-3xl lg:text-5xl font-bold lg:w-[20.5%] flex justify-between items-center lg:pr-8">
                  <span>
                    electro<span className="text-primary">.</span>
                  </span>
                  <IoMenu />
                </div>
                <div className=" flex lg:hidden space-x-2 [&>li]:list-none items-center">
                  <li>
                    <CiSearch className="text-2xl" />
                  </li>
                  <li>
                    <Link to="">
                      <AiOutlineUser className="text-2xl" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <HiOutlineShoppingBag className="text-2xl" />
                    </Link>
                  </li>
                </div>
                <SearchBar />
                <div className="ml-4">
                  <img src={compo} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              <AllCategoryList visible={"lg:hidden"} hidden={" "} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

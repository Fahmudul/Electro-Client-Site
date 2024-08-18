import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../FireBaseConfig/FirebaseConfig";

const LoginSignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [showLogin, setShowLogin] = React.useState(true); //showLogin
  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        //
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1000);
      })
      .catch((error) => {
        //
        if (error.code === "auth/invalid-credential") {
          toast.error("No User Found!");
        }
      });
  };
  // Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: userName,
        })
          .then(async (res) => {
            toast.success("User Created Successfully!");
          })
          .catch((error) => {
            console.error(error);
          });
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Google Sign In
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    // console.log()
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        //

        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {});
  };
  return (
    <div className="container mx-auto min-h-screen flex items-center">
      <div
        className={`${
          showLogin
            ? "flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl"
            : "hidden"
        }`}
      >
        <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
          <h1 className="text-3xl font-bold text-[#4B5563]  my-auto ">
            Electro<span className="text-primary">.</span>
          </h1>
        </div>
        <div className="text-sm font-light text-[#6B7280] pb-8 mx-auto">
          Login First!
        </div>
        <form className="flex flex-col" onSubmit={handleSignIn}>
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Email
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                type="email"
                name="email"
                id="email"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                placeholder="name@company.com"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="pb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Password
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-asterisk"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8.5 14 7-4"></path>
                  <path d="m8.5 10 7 4"></path>
                </svg>
              </span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••••"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                autoComplete="new-password"
              />
            </div>
          </div>
          <input
            className="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
            type="submit"
            value="Login"
          />

          <div className="text-sm font-light text-[#6B7280] ">
            Don{"'"}t have an accout yet?{" "}
            <button
              type="button"
              className="font-medium text-[#4F46E5] hover:underline"
              onClick={() => setShowLogin(false)}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-[1px] border-gray-200"></div>{" "}
          <span className="flex-shrink mx-4 font-medium text-gray-500">OR</span>
          <div className="flex-grow border-t border-[1px] border-gray-200"></div>
        </div>

        <div className="flex flex-row gap-2 justify-center">
          <button
            className="flex flex-row   items-center border text-black p-2 rounded-md "
            onClick={() => handleGoogleSignIn()}
          >
            <FaGoogle className="mr-2" />
            <span className="font-medium mx-auto">Google</span>
          </button>
        </div>
      </div>
      <div
        className={`${
          showLogin
            ? "hidden"
            : "flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl"
        }`}
      >
        <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
          <h1 className="text-3xl font-bold text-[#4B5563]  my-auto">
            Electro<span className="text-primary">.</span>
          </h1>
        </div>
        <div className="text-sm font-light text-[#6B7280] pb-8 mx-auto">
          Create account to get started
        </div>
        <form className="flex flex-col" onSubmit={handleSignUp}>
          <div className="pb-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Name
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                type="text"
                name="name"
                id="name"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                placeholder="your name"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Email
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                type="email"
                name="email"
                id="email"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                placeholder="name@company.com"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="pb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Password
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-square-asterisk"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8.5 14 7-4"></path>
                  <path d="m8.5 10 7 4"></path>
                </svg>
              </span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••••"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                autoComplete="new-password"
              />
            </div>
          </div>
          <input
            className="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
            type="submit"
            value="Sign Up"
          />
          <div className="text-sm font-light text-[#6B7280] ">
            Already have an account?{" "}
            <button
              type="button"
              className="font-medium text-[#4F46E5] hover:underline"
              onClick={() => setShowLogin(true)}
            >
              Log in
            </button>
          </div>
        </form>
        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-[1px] border-gray-200"></div>{" "}
          <span className="flex-shrink mx-4 font-medium text-gray-500">OR</span>
          <div className="flex-grow border-t border-[1px] border-gray-200"></div>
        </div>

        <div className="flex flex-row gap-2 justify-center">
          <button
            className="flex flex-row   items-center border text-black p-2 rounded-md "
            onClick={() => handleGoogleSignIn()}
          >
            <FaGoogle className="mr-2" />
            <span className="font-medium mx-auto">Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;

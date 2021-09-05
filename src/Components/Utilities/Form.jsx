import { FaFacebook, FaGoogle, FaSms, FaTimes } from "react-icons/fa";
import { LogoDraw } from "../svg/WhiteLogoText";

function Form({ setShowModal, setPhone }) {
  return (
    <div className="text-gray-700 z-50 absolute top-0 left-0 w-full h-screen bg-white md:bg-[rgba(0,0,0,.5)] md:grid place-items-center">
      <div className="relative md:w-[450px]  bg-white p-4 rounded-lg">
        <div className=" grid place-items-center">
          <LogoDraw size={"40px"} logo={"red"} />
        </div>
        <FaTimes
          onClick={() => {
            setShowModal(false);
          }}
          className="absolute top-8 right-8 text-black text-xl"
        />
        <h1 className="text-center font-bold text-2xl my-2 ">Get Started</h1>
        <p className="text-sm text-center my-6">
          By clicking on login, you have agreed to our terms. Learn how we
          process data in our privacy policy and Cookie policy{" "}
        </p>
        <div className="flex items-center space-x-3 w-full border-2 border-gray-500 rounded-full p-4 mt-2 hover:shadow-md active:scale-95 transition-all duration-300">
          <FaGoogle className="text-red-500" />
          <p className="flex-grow text-center">Login With Google</p>
        </div>
        <div className="flex items-center space-x-3 w-full border-2 border-gray-500 rounded-full p-4 mt-2 hover:shadow-md active:scale-95 transition-all duration-300">
          <FaFacebook className="text-blue-500" />
          <p className="flex-grow text-center">Login With Facebook</p>
        </div>
        <div
          onClick={() => {
            setPhone(true);
            setShowModal(false);

            console.log("hello");
          }}
          className="flex items-center space-x-3 w-full border-2 border-gray-500 rounded-full p-4 mt-2 hover:shadow-md active:scale-95 transition-all duration-300"
        >
          <FaSms />
          <p className="flex-grow text-center">Login With Phonenumber</p>
        </div>
        <p className="text-center my-8 text-base underline">
          Trouble logging in?
        </p>
      </div>
    </div>
  );
}

export default Form;

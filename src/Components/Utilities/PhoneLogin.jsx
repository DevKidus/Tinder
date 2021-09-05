import {
  FaAngleLeft,
  FaFacebook,
  FaGoogle,
  FaSms,
  FaTimes,
} from "react-icons/fa";
import { LogoDraw } from "../svg/WhiteLogoText";

function PhoneLogin({ setShowModal, setPhone, setCode }) {
  return (
    <div className="text-gray-700 z-50 absolute top-0 left-0 w-full h-screen bg-white md:bg-[rgba(0,0,0,.5)] md:grid place-items-center">
      <div className="relative md:w-[450px]  bg-white p-4 rounded-lg">
        <div className=" grid place-items-center">
          <LogoDraw size={"40px"} logo={"red"} />
        </div>
        <FaAngleLeft
          onClick={() => {
            setShowModal(true);
            setPhone(false);
          }}
          className="absolute top-8 left-8 text-black text-2xl"
        />
        <h1 className="text-center font-bold text-2xl my-2 ">
          Enter your phonenumber
        </h1>
        <p className="text-base text-center my-6">
          We will send you a confirmation page to your phone
        </p>
        <div className="border-2 border-gray-500 px-3 py-1 rounded-full flex items-center">
          <div>+251</div>
          <input
            className="flex-grow px-2 bg-transparent outline-none py-1 text-red-600"
            type="number"
            placeholder="eg. 936356338"
          />
        </div>
        <div className="grid place-items-center ">
          <button
            onClick={() => {
              setCode(true);
              setPhone(false);
            }}
            className="mt-10 text-white bg-gradient-to-r from-red-600 to-red-300 text-xl px-10 py-3 rounded-full font-semibold shadow-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhoneLogin;

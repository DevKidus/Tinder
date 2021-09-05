import { Logo } from "./svg/WhiteLogoText";
import { FaBars, FaRegRegistered, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import Form from "./Utilities/Form";
import PhoneLogin from "./Utilities/PhoneLogin";
import CodeConfirm from "./Utilities/CodeConfirm";

const Start = () => {
  let sideBar = useRef();
  let [showModal, setShowModal] = useState(false);
  let [phone, setPhone] = useState(false);
  let [code, setCode] = useState(false);

  return (
    <div className="bg-image text-white text-xl font-semibold flex flex-col max-w-screen-lg overflow-x-hidden relative">
      <header className="flex justify-between p-4 ">
        {/* Left  */}
        <div className="flex items-center space-x-0 md:space-x-8 cursor-pointer ">
          <Logo size={"150px"} text={"white"} logo={"white"} />
          <nav
            ref={sideBar}
            className="absolute top-0 -right-full h-screen w-full text-black p-4 space-y-3 nav-childs bg-white nav-desktop transition-all duration-300"
          >
            <div className="p-4 flex items-center justify-between md:hidden">
              <Logo size={"120px"} text={"rgb(60, 60, 60)"} logo={"red"} />
              <FaTimes
                onClick={() => {
                  sideBar.current.classList.replace("-right-0", "-right-full");
                }}
              />
            </div>
            <p>Products</p>
            <p>learn</p>
            <p>safety</p>
            <p>support</p>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="md:hidden w-full text-white bg-gradient-to-r from-red-600 to-red-300 text-xl px-10 py-3 rounded-full font-semibold shadow-lg hover:scale-[.99] transition-all duration-150"
            >
              Login
            </button>
          </nav>
        </div>
        {/* Right  */}
        <div className=" space-x-5 items-center hidden md:inline-flex">
          <p className="underline cursor-pointer">English</p>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="bg-white text-red-500 font-semibold px-6 hover:bg-red-500 hover:text-white transition-all duration-200 rounded-md py-2"
          >
            Login
          </button>
        </div>
        <div
          onClick={() => {
            sideBar.current.classList.replace("-right-full", "-right-0");
          }}
          className="p-2 md:hidden cursor-pointer"
        >
          <FaBars />
        </div>
      </header>
      <section className="flex-grow h-full grid place-items-center">
        <div className="flex flex-col items-center space-y-8">
          <h1 className=" font-extrabold whitespace-nowrap text-5xl lg:text-8xl flex">
            Swipe Right
            <FaRegRegistered />
          </h1>
          <button
            className="bg-gradient-to-r from-red-600 to-red-300 text-xl px-10 py-3 rounded-full font-semibold shadow-lg hover:scale-[.99] transition-all duration-150"
            onClick={(e) => {
              setShowModal(true);
            }}
          >
            Continue
          </button>
        </div>
      </section>
      {showModal && <Form setShowModal={setShowModal} setPhone={setPhone} />}
      {phone && (
        <PhoneLogin
          setShowModal={setShowModal}
          setPhone={setPhone}
          setCode={setCode}
        />
      )}
      {code && <CodeConfirm setPhone={setPhone} setCode={setCode} />}
    </div>
  );
};

export default Start;

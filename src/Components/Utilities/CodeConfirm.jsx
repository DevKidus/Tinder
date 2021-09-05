import { useRef, useState } from "react";
import {
  FaAngleLeft,
  FaFacebook,
  FaGoogle,
  FaSms,
  FaTimes,
} from "react-icons/fa";
import { LogoDraw } from "../svg/WhiteLogoText";

function CodeConfirm({ setCode, setPhone }) {
  let [one, setOne] = useState();
  let [two, setTwo] = useState();
  let [three, setThree] = useState();
  let [four, setFour] = useState();
  let [five, setFive] = useState();
  let [six, setSix] = useState();

  let oneRef = useRef();
  let twoRef = useRef();
  let threeRef = useRef();
  let fourRef = useRef();
  let fiveRef = useRef();
  let sixRef = useRef();

  return (
    <div className="text-gray-700 z-50 absolute top-0 left-0 w-full h-screen bg-white md:bg-[rgba(0,0,0,.5)] md:grid place-items-center">
      <div className="relative md:w-[450px]  bg-white p-4 rounded-lg">
        <div className=" grid place-items-center">
          <LogoDraw size={"40px"} logo={"red"} />
        </div>
        <FaAngleLeft
          onClick={() => {
            setPhone(true);
            setCode(false);
          }}
          className="absolute top-8 left-8 text-black text-2xl"
        />
        <h1 className="text-center font-bold text-2xl my-2 ">Enter code</h1>
        <p className="text-base text-center my-6">
          We have send message to your Number please confirm
        </p>
        <div className="flex justify-around ">
          <input
            className="w-10 h-10 border-2 text-center outline-none rounded-md focus:border-red-500"
            type="number"
            ref={oneRef}
            value={one}
            onChange={(e) => {
              if (e.target.value.length >= 1) {
                setOne(e.target.value[0]);
                twoRef.current.focus();
              } else {
                setOne(e.target.value);
              }
            }}
          />
          <input
            className="w-10 h-10 border-2 text-center outline-none rounded-md focus:border-red-500"
            type="number"
            ref={twoRef}
            value={two}
            onChange={(e) => {
              if (e.target.value.length >= 1) {
                setTwo(e.target.value[0]);
                threeRef.current.focus();
              } else {
                setTwo(e.target.value);
              }
            }}
          />
          <input
            className="w-10 h-10 border-2 text-center outline-none rounded-md focus:border-red-500"
            type="number"
            ref={threeRef}
            value={three}
            onChange={(e) => {
              if (e.target.value.length >= 1) {
                setThree(e.target.value[0]);
                fourRef.current.focus();
              } else {
                setThree(e.target.value);
              }
            }}
          />
          <input
            className="w-10 h-10 border-2 text-center outline-none rounded-md focus:border-red-500"
            type="number"
            ref={fourRef}
            value={four}
            onChange={(e) => {
              if (e.target.value.length >= 1) {
                setFour(e.target.value[0]);
                fiveRef.current.focus();
              } else {
                setFour(e.target.value);
              }
            }}
          />
          <input
            className="w-10 h-10 border-2 text-center outline-none rounded-md focus:border-red-500"
            type="number"
            ref={fiveRef}
            value={five}
            onChange={(e) => {
              if (e.target.value.length >= 1) {
                setFive(e.target.value[0]);
                sixRef.current.focus();
              } else {
                setFive(e.target.value);
              }
            }}
          />
          <input
            className="w-10 h-10 border-2 text-center outline-none rounded-md focus:border-red-500"
            type="number"
            ref={sixRef}
            value={six}
            onChange={(e) => {
              if (e.target.value.length >= 1) {
                setSix(e.target.value[0]);
              } else {
                setSix(e.target.value);
              }
            }}
          />
        </div>
        <div className="grid place-items-center ">
          <button
            onClick={() => {
              setCode(false);
            }}
            className="mt-10 text-white bg-gradient-to-r from-red-600 to-red-300 text-xl px-10 py-3 rounded-full font-semibold shadow-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );

  console.log(oneRef);
}

export default CodeConfirm;

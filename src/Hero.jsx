import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[300px] bg-slate-300">
      <div className="grid grid-cols-2 justify-between px-8">
        <div>
          <h1 className="text-2xl text-white font-bold py-8">
            Learn to code by <br /> watching others
          </h1>
          <p className="text-white py-3">
            See how experienced developers solve problems in real-time.
          </p>
          <button className="bg-white text-green-500 font-bold px-4 py-2 rounded-lg">
            Try it free 7 days
          </button>
        </div>

        <div className="flex justify-center items-center">
          {/*vector illustration online*/}
          <img
            src="./src/assets/heronew.png"
            alt="hero"
            className="px-4 py-4 ml-10 w-[200px] h-[200px]"
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Img from "../component/home/Img";
import Title from "../component/home/Title";

function Home() {
  return (
    <div className="bg-[#FFFFFF] md:p-[80px] px-8 py-[70px] relative">
      <div className="md:w-[130px] w-[70px] absolute md:top-[105px] md:left-14 xs:top-[65px] xs:left-5">
        <img
          src="/assets/Vector.png"
          className="w-max h-max object-contain"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-2">
        <Title />
        <Img />
      </div>
    </div>
  );
}

export default Home;

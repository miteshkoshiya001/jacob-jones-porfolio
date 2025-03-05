import { motion } from "framer-motion";
import React, { useState } from "react";
import { MdEast, MdWest } from "react-icons/md";
import { workSlideImg, workTextSlide } from "../../data/worksData";

function WorkImg() {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 3) newIndex = 1;
      if (newIndex < 1) newIndex = 3;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };
  return (
    <div className="bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] lg:px-[80px] px-[35px] py-[50px] grid gap-4">
      <div className="text-center grid gap-2 text-white">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1 }}
          className="italic font-semibold text-lg"
        >
          Testimonial
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:text-4xl text-xl pb-8 font-bold uppercase"
        >
          What they says
        </motion.h1>
      </div>
      <div className="flex flex-wrap 2xl:flex-nowrap items-center justify-center gap-16 border-b">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xs flex-shrink-0"
        >
          <img
            src="/assets/workslide1.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </motion.div>

        <div className="flex flex-col gap-8 flex-grow">
          {workTextSlide.map((slide, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 laptop:text-start text-center text-black ${
                slideIndex === index + 1 ? "block" : "hidden"
              }`}
            >
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ duration: 1 }}
                className="md:text-xl text-sm text-white md:text-balance line-clamp-3 text-wrap font-semibold w-full overflow-hidden"
              >
                {slide.desc}
              </motion.p>
              <div>
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 1 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="text-white font-medium md:text-base text-sm"
                >
                  {slide.title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-white md:text-sm text-xs"
                >
                  {slide.text}
                </motion.p>
              </div>
            </div>
          ))}
          <div className="flex laptop:justify-start 2xl:justify-start justify-center gap-4 mb-4">
            <motion.div
              onClick={() => plusSlides(-1)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 1 }}
              className="bg-white rounded-full p-2 cursor-pointer"
            >
              <MdWest size={22} />
            </motion.div>
            <motion.div
              onClick={() => plusSlides(1)}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 1 }}
              className="bg-white rounded-full p-2 cursor-pointer"
            >
              <MdEast size={22} />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:justify-between justify-center items-center pt-8 gap-8">
        {workSlideImg.map((value, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
              key={index}
              className="md:w-[120px] cursor-pointer w-[100px]"
            >
              <img
                src={value.img}
                className="w-max h-max object-contain"
                alt=""
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkImg;

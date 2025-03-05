import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";
import { faqData } from "../data/serviceData";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    // setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div className="font-plexSans px-8 md:px-14 lg:px-10 xl:px-32 grid gap-6 md:gap-10 py-[60px] md:py-16">
      <div className="grid gap-1 md:gap-3">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1 }}
          className="italic text-base md:text-lg font-semibold"
        >
          Services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1 }}
          className="uppercase text-2xl md:text-4xl font-bold"
        >
          My Expertise
        </motion.h1>
      </div>
      {faqData.map((value, index) => {
        const isOpen = true;
        // const isOpen = clickedIndex === index;

        return (
          <motion.div
            onClick={() => handleClick(index)}
            key={index}
            className="flex flex-col md:flex-row items-start justify-between w-full border-b-2 border-b-gray-200 pb-4 md:pb-6 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <div className="flex items-center gap-2 md:gap-4">
              <div
                className={`rounded-full w-2 h-2 ${
                  isOpen ? "bg-[#B86ADF]" : "bg-black"
                }`}
              ></div>

              <h1
                className={`text-lg md:text-xl font-bold ${
                  isOpen
                    ? "bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-transparent bg-clip-text"
                    : ""
                }`}
              >
                {value.title}
              </h1>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-0">
              <div className="w-full md:w-[450px] grid gap-2 md:gap-4">
                {/* <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        className="w-full h-full object-contain"
                        src={value.img}
                        alt=""
                      />
                    </motion.div>
                  )}
                </AnimatePresence> */}
                <p className="text-sm md:text-sm text-[rgba(20,19,19,0.6)] text-balance font-medium">
                  {value.desc}
                </p>
              </div>

              {/* <div>
                {isOpen ? (
                  <Remove
                    onClick={() => handleClick(index)}
                    className="text-black cursor-pointer"
                    sx={{ width: 35, height: 35 }}
                  />
                ) : (
                  <Add
                    onClick={() => handleClick(index)}
                    className="text-black cursor-pointer"
                    sx={{ width: 35, height: 35 }}
                  />
                )}
              </div> */}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Services;

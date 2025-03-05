import { motion } from "framer-motion";
import React from "react";
import { homeData } from "../../data/homeData";

function Img() {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center laptop:flex-nowrap 2xl:flex-nowrap md:items-center md:mt-0 mt-12 md:gap-12 gap-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          className="w-full h-full object-cover"
          src="/assets/Img.png"
          alt="Profile"
        />
      </motion.div>

      <div className="flex md:flex-col items-center gap-4">
        {homeData.map((item, index) => (
          <motion.a
            href={item.link}
            target="_blank"
            key={item.id}
            className="border border-gray-600 rounded-full p-3 cursor-pointer hover:bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            {item.icon}
          </motion.a>
        ))}

        <motion.div
          className="border-2 bg-gray-500 border-gray-500 rounded-md cursor-pointer md:w-1 md:!h-32 w-16 !h-1"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100%" }}
          transition={{ duration: 1, delay: 1 }}
        ></motion.div>
      </div>
    </div>
  );
}

export default Img;

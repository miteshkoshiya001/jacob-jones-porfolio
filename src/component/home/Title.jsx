import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { homeDesc } from "../../data/homeData";
import { useNavigate } from "react-router-dom";

function Title() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col gap-12 md:py-8">
        <motion.h1
          className="font-plexSans font-normal z-10 md:text-6xl text-3xl text-balance uppercase"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          My name is <span className="font-bold">Krishna Dholiya...</span>
        </motion.h1>

        <motion.h1
          className="md:text-3xl text-xl font-plexSans lg:text-balance"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="font-bold italic">Flutter Developer</span> based in
          <span className="font-medium italic"> London</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 1, x: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Button
            onClick={() => navigate("/about")}
            className="!bg-[#141313] !rounded-none !text-white hover:bg-none flex md:gap-8 gap-2 h-12 md:w-[248px] w-[210px]"
          >
            Let’s talk with me
            <NorthEastIcon className="bg-gradient-to-r from-[#FFB147] w-6 h-6 via-[#FF6C63] to-[#B86ADF] text-white" />
          </Button>
        </motion.div>

        <div className="flex gap-8 flex-wrap md:flex-nowrap lg:flex-wrap">
          {homeDesc.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
            >
              <a
                href={item.link}
                className="flex items-center gap-3 cursor-pointer font-semibold text-lg hover:underline"
              >
                {item.icon} {item.text}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Title;

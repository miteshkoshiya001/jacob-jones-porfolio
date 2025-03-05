import { NorthEast } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { blogData } from "../data/blogData";
import { motion } from "framer-motion";

function Blog() {
  return (
    <div className="font-plexSans flex flex-col items-center px-6 py-[60px] lg:px-[100px] gap-6 lg:py-[40px]">
      <div>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1 }}
          className="italic font-semibold text-lg text-center"
        >
          Blog
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="uppercase text-4xl font-bold text-center pt-2"
        >
          Read my blog
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 laptop:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 gap-12">
        {blogData.map((value, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
              key={value.id}
              className="flex flex-col gap-3 border-b border-b-gray-300 pb-5 cursor-pointer"
            >
              <div>
                <img
                  src={value.img}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
              <p className="font-medium">{value.title}</p>
              <p className="text-lg text-balance font-semibold">{value.desc}</p>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Button className="!bg-[#141313] !rounded-none !text-white hover:bg-none flex gap-2 w-max !px-6 !py-3 !mt-12">
          Load more
          <NorthEast className="bg-gradient-to-r from-[#FFB147] w-6 h-6 via-[#FF6C63] to-[#B86ADF] text-white" />
        </Button>
      </motion.div>
    </div>
  );
}

export default Blog;

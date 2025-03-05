import { NorthEast } from "@mui/icons-material";
import React from "react";
import { workData } from "../../data/worksData";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

function WorkSection() {
  return (
    <div className="px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
        {workData.map((value, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
              className="flex flex-wrap laptop:flex-nowrap items-center 2xl:flex-nowrap gap-4"
            >
              <div className="grid md:gap-2 gap-4">
                <p className="text-base font-medium italic">{value.title}</p>
                <p className="font-bold md:text-3xl text-2xl text-balance">
                  {value.desc}
                </p>
                {/* <NorthEast sx={{ width: 30, height: 30, cursor: "pointer" }} /> */}
              </div>
              {/* <div>
                <img
                  className="w-full h-full object-cover"
                  src={value.img}
                  alt=""
                />
              </div> */}
            </motion.div>
          );
        })}
      </div>
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center my-4 items-center"
      >
        <Button className="!bg-[#141313] !rounded-none !text-white hover:bg-none flex gap-2 w-max !px-6 !py-3 !mt-12">
          Load more
          <NorthEast className="bg-gradient-to-r from-[#FFB147] w-6 h-6 via-[#FF6C63] to-[#B86ADF] text-white" />
        </Button>
      </motion.div> */}
    </div>
  );
}

export default WorkSection;

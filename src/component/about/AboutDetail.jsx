import { NorthEast } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { aboutData } from "../../data/aboutData";
import { motion } from "framer-motion";

function AboutDetail() {
  return (
    <div className="bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-white grid grid-cols-1 2xl:grid-cols-2 laptop:grid-cols-2 md:p-[100px] px-8 py-12 gap-8 mt-14">
      <div className="flex flex-col gap-10">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1 }}
          className="italic text-lg font-semibold"
        >
          Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:text-5xl text-2xl uppercase font-bold"
        >
          My experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-balance w-full text-lg"
        >
          Hello there! My name is Krishna Dholiya. I am a Flutter Developer,
          and I'm very passionate and dedicated to my work.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Button
            component="span"
            className="!bg-[#141313] !rounded-none md:!text-[15px] !text-xs !text-white flex gap-2 md:h-12 h-10 md:w-[248px] w-[210px]"
          >
            <a
              href="/pdf/resume.pdf"
              download="resume.pdf"
              className="flex items-center gap-2"
            >
              Download my resume
              <NorthEast className="bg-gradient-to-r from-[#FFB147] md:!w-6 md:!h-6 !w-4 !h-4 via-[#FF6C63] to-[#B86ADF] text-white" />
            </a>
          </Button>
        </motion.div>
      </div>
      <div className="flex flex-col gap-12">
        {aboutData.map((value, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ duration: 1, delay: 0.2 + index * 0.3 }}
              className="flex flex-col gap-3 border-b pb-6"
            >
              <div className="flex flex-wrap md:flex-nowrap gap-2 justify-between items-center">
                <p className="md:text-xl text-base font-medium italic">
                  {value.t1}
                </p>
                <p className="md:text-base text-sm">{value.t2}</p>
              </div>
              <h1 className="md:text-3xl text-xl font-bold tracking-wide uppercase">
                {value.desc}
              </h1>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutDetail;

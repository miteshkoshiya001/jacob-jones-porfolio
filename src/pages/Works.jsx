import React from "react";
import WorkSection from "../component/works/WorkSection";
import WorkImg from "../component/works/WorkImg";
import { motion } from "framer-motion";

function Works() {
  return (
    <div className="font-plexSans md:px-[100px] grid gap-10 md:py-[60px] pt-[60px]">
      <div className="grid gap-2 px-8">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1 }}
          className="italic font-semibold text-lg"
        >
          Work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:text-4xl text-2xl font-bold uppercase"
        >
          Recent project
        </motion.h1>
      </div>
      <div>
        <WorkSection />
      </div>
      <WorkImg />
    </div>
  );
}

export default Works;

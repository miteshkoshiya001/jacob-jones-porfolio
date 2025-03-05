import React from "react";
import ImgSection from "../component/about/ImgSection";
import AboutDetail from "../component/about/AboutDetail";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="font-plexSans">
      <div className="md:px-[55px] px-8 pt-16">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1 }}
          className="italic font-semibold"
        >
          Nice to meet you!
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-bold text-4xl"
        >
          Welcome to...
        </motion.h1>
      </div>
      <div>
        <ImgSection />
        <AboutDetail />
      </div>
    </div>
  );
}

export default About;

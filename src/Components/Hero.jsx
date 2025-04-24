import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className={`${styles.paddingX} max-w-7xl inset-0 absolute top-[120px] items-start flex flex-row gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="rounded-full w-5 h-5 bg-[#915eff]" />
          <div className=" w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Mansoor</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            I build from scratch, driven by curiosity and a rational mindset to constantly learn and grow.
          </p>
        </div>
      </div>
  
        <ComputersCanvas />
      <div className="w-full absolute flex justify-center items-center xs:bottom-10 bottom-32 mt-30">
        <div className="h-10 w-7 border-4 border-white flex justify-center align-center flex-start rounded-full">
          <a href="#about">
            <motion.div
              animate={{
                y: [0, 20, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            >
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full max-h-fit mx-auto flex flex-col z-0">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5 mt-24 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-52 h-28 violet-gradient" />
        </div>

        <div className="space-y-6">
          <h1
            className={`${styles.heroHeadText} text-white sm:text-5xl text-3xl`}
          >
            Hi, I'm<span className="text-[#4cb87b]">Tahseen</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 leading-0`}
            // style={{ fontSize: "1.5rem" }}
          >
            An enthusiastic <br className="md:hidden block" />
            <TypeAnimation
              sequence={["Frontend", 1000, "Backend", 1000, "Fullstack", 1000]}
              wrapper="span"
              speed={{ type: "keyStrokeDelayInMs", value: 150 }}
              style={{ color: "#FF66FF" }}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
            developer
            <br /> proficient in creating efficient and dynamic web
            applications.
          </p>
        </div>
      </div>

      <div className="w-full mx-auto z-10 h-fit md:h-[60vh] md:-mt-6">
        <ComputersCanvas />
      </div>

      {/* Scroll GIF */}
      <div
        className="absolute hidden lg:flex items-center justify-end top-[70vh] right-[7vw] w-full z-10"
        title="contact"
      >
        <a href="#contact">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="font-extrabold text-2xl mb-1"
            >
              &darr;
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

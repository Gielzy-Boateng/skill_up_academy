"use client";
import Image from "next/image";
import WidthConstraint from "./width-constraint";
import CustomButton from "./custom-button";

import { motion, spring } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-full bg-customGradient bg-customSize animate-customAnimation scroll-smooth">
      <WidthConstraint className="flex  flex-col lg:gap-y-0 lg:flex-row justify-center lg:justify-between items-center py-28 lg:py-0">
        <div className="flex flex-col lg:translate-y-16 max-w-[600px] text-[#F0F0F0] font-bold items-center lg:items-start justify-between gap-y-7">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, type: spring, bounce: 10 }}
            // transition={{ type: "spring", stiffness: 100, damping: 20 }}
            // transition={{ type: "spring", bounce: 2, duration: 2 }}
            className="bebasNeue tracking-wider text-[60px] lg:text-[64px]   text-center lg:text-start drop-shadow-[8px_4px_6px_black]"
          >
            Unlock Your Future with SkillUp Academy
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl text-center lg:text-start drop-shadow-[3px_3px_5px_black]"
          >
            Gain in-demand skills in data analytics and coding to advance your
            career with confidence.
          </motion.h1>
          <CustomButton
            btn={false}
            href={"#contact"}
            className="bg-white text-xl font-semibold transition-all hover:text-white hover:bg-black duration-500 text-black rounded-lg shadow-black hover:shadow-white shadow-lg"
          >
            Start Learning Today
          </CustomButton>
        </div>
        <div className="hidden lg:block">
          <Image
            src={"/assets/home/hero.png"}
            alt="Hero"
            width={600}
            height={600}
            className="rounded-xl"
            priority
          />
        </div>
      </WidthConstraint>
    </div>
  );
}

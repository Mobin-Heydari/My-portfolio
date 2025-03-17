"use client";

import React from 'react'
import { Spotlight } from '../ui/Spotlight'
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/Hero-Highlight";




const Hero = () => {
  return (
    <div className=''>
        <div className=''>
            <HeroHighlight>
                <motion.h2
                    initial={{
                    opacity: 0,
                    y: 20,
                    }}
                    animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                    }}
                    transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                    I transform ideas into impactful digital realities with front-end finesse and back-end power.{" "}
                    <div className='my-3 px-3'>
                        <Highlight className="text-black dark:text-white">
                        Crafting scalable solutions
                        </Highlight>
                    </div>
                </motion.h2>
                <div className='flex flex-col justify-center items-center mt-8'>
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-white backdrop-blur-2xl text-2xl md:text-2xl lg:text-2xl font-bold">
                            get started
                        </span>
                    </button>
                </div>
            </HeroHighlight>
        </div>
    </div>
  )
}

export default Hero

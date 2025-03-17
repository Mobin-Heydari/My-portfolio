"use client";

import React from 'react'
import { Spotlight } from '../ui/Spotlight'
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/Hero-Highlight";
import MagicBotton from '../ui/MagicBotton';
import { FaLocationArrow } from 'react-icons/fa';




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
                <a href="#about">
                    <MagicBotton 
                        title='Read more' 
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </HeroHighlight>
        </div>
    </div>
  )
}

export default Hero

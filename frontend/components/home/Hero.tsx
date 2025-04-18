"use client";

import React from 'react'
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/Hero-Highlight";
import MagicButton from '../ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';




const Hero = () => {
  return (
    <div className='w-full h-full'>
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
                className="w-full h-full text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center text-wrap"
            >
                I transform ideas into impactful digital realities. With the perfect blend of front-end finesse and back-end strength, I craft scalable solutions that drive results.{" "}
                <div>
                    <span className='bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-Primary via-sky-300 to-blue-700 [text-shadow:0_0_rgba(0,0,0,0.1)]'>
                        Let’s build something extraordinary together.
                    </span>
                </div>
            </motion.h2>
            <a href="/about">
                <MagicButton 
                    title='Read more' 
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </HeroHighlight>
    </div>
  )
}

export default Hero

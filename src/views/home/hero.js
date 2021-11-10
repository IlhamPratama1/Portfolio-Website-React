import React, { useEffect, useRef } from 'react';
import Navbar from '../templates/navbar';
import './particles.css';
import { motion } from "framer-motion";
import { backVariants } from '../../animation/pageTransition';
import { gsap } from "gsap";

export default function HeroView() {
    const hero = useRef();
    const MathUtils = {
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b,
        // distance between two points
        distance: (x1,y1,x2,y2) => Math.hypot(x2-x1, y2-y1),
        // Random float
        getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
    }

    useEffect(() => {
        hero.current.addEventListener('mousemove', (e) => {
            console.log("move");
        })
    });

    return(
        <div className="lg:h-screen">
            <Navbar />
            <motion.div ref={hero} initial="exit" animate="enter" variants={backVariants} className="hero relative z-10">
                <div className="px-6 lg:px-28 my-20">
                    <div className="flex items-end space-x-4 lg:space-x-40">
                        <div className="hidden lg:block space-y-0 text-gray text-md lg:text-lg font-geo uppercase">
                            <p className="">INA</p>
                            <p className="">GMT 7: 23:56:59</p>
                        </div>
                        <div className="w-100 lg:w-108 space-y-2">
                            <div className="flex justify-between">
                                <p className="text-gray text-xs lg:text-lg font-geo uppercase w-64 lg:w-82 leading-tight lg:leading-tight tracking-wide">WEB DEVELOPER & GAME DEVELOPER WITH 2 YEARS EXPERIENCET BASED IN KEDIRI</p>
                                <p className="px-2 pt-1 lg:pt-2 bg-black-s text-purple uppercase font-geo italic text-sm lg:text-lg">ina</p>
                            </div>
                            <div className="bg-gray h-px w-full"></div>
                            <p className="text-white text-6xl lg:text-9xl font-zefani uppercase leading-snug">explore my project</p>
                            <p className="text-gray text-4xl lg:text-6xl font-zefani uppercase">portfolio</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
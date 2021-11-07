import React from 'react';
import { backVariants } from "../../animation/pageTransition";
import Navbar from "../templates/navbar";
import { motion } from "framer-motion";

export default function AboutView() {
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-black h-screen">
            <div className="absolute w-full">
                <Navbar />
                <p className="flex justify-center text-white text-sm lg:text-xl uppercase font-geo">ABOUT</p>
            </div>
            <div className="h-full flex">
                <motion.div initial="exit" animate="enter" variants={backVariants} className="m-auto">
                    <div className="flex items-end">
                        <img alt="about" src="/static/images/game.jpg" className="hidden lg:block w-102" />
                        <div className="space-y-3 lg:space-y-6 lg:-ml-36">
                            <div className="lg:w-102">
                                <p className="text-white text-5xl lg:text-8xl font-zefani uppercase leading-snug">ilham</p>
                                <p className="text-center text-white text-5xl lg:text-8xl font-zefani uppercase leading-snug">pratama</p>
                            </div>
                            <p className="text-gray text-sm lg:text-xl font-made">software developer</p>
                            <div className="flex space-x-3">
                                <div className="h-px w-36 bg-gray"></div>
                                <p className="w-52 lg:w-100 text-purple font-geo text-sm lg:text-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
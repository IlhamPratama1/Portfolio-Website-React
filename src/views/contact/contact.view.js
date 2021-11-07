import React from 'react';
import Navbar from '../templates/navbar';
import { motion } from "framer-motion";
import { backVariants } from '../../animation/pageTransition';

export default function ContactView() {
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} className="bg-purple h-screen">
            <Navbar />
            <motion.div initial="exit" animate="enter" variants={backVariants}>
                <p className="flex justify-center text-black text-sm lg:text-xl uppercase font-geo">CONTACT</p>
                <div className="px-6 lg:px-28 my-40 space-y-3">
                    <div className="flex justify-center h-full">
                        <h1 className="text-black text-5xl lg:text-9xl uppercase font-zefani">get in touch</h1>
                    </div>
                    <p className="flex justify-center text-black text-sm lg:text-xl uppercase font-geo">or see</p>
                    <div className="bg-black h-px w-full"></div>
                    <div className="flex justify-between pt-3">
                        <p className="text-black text-sm lg:text-2xl uppercase font-zefani">linkedin</p>
                        <p className="text-black text-sm lg:text-2xl uppercase font-zefani">dribbble</p>
                        <p className="text-black text-sm lg:text-2xl uppercase font-zefani">gitlab</p>
                        <p className="text-black text-sm lg:text-2xl uppercase font-zefani">facebook</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
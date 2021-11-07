import { motion } from "framer-motion";
import React from "react";
import Navbar from "../templates/navbar";
import { backVariants } from "../../animation/pageTransition";

export default function GameView() {
    const datas = [
        {
            title: "Find Me Out"
        },
        {
            title: "Prison Escape"
        },
        {
            title: "Arenaaas"
        },
        {
            title: "Omoarage"
        },
        {
            title: "Boku"
        },
        {
            title: "Belajar Geometry"
        },
        {
            title: "Get The Water"
        },
        {
            title: "Dawn of Singasari"
        },
        {
            title: "Village Hand"
        },
        {
            title: "Kapal-Kapal"
        },
    ];
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-black">
            <Navbar />
            <div className="h-full flex">
                <motion.div initial="exit" animate="enter" variants={backVariants} className="mx-10 lg:mx-28 my-24">
                    <ul className="space-y-10 lg:space-y-16">
                        {datas.map((data, i) => {
                            return(
                                <li key={i} className="font-zefani uppercase text-5xl lg:text-8xl text-gray hover:text-white transition-200">
                                    <p className="font-made text-puple text-sm lg:text-lg">0{i + 1}</p>
                                    <a target="noopener noreferrer" href="https://ilhampratama.itch.io/" className="relative z-20">{data.title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
}
import { motion } from "framer-motion";
import React from "react";
import Navbar from "../templates/navbar";
import { backVariants } from "../../animation/pageTransition";

export default function ApiView() {
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-purple h-screen">
            <Navbar />
            <motion.div initial="exit" animate="enter" variants={backVariants} className="mx-10 lg:mx-28 space-y-12 lg:space-y-28 my-12 lg:my-28">
                <div className="lg:flex lg:space-x-40 space-y-4 lg:space-y-0">
                    <div className="space-y-2">
                        <div className="font-made text-gray text-sm lg:text-md">01</div>
                        <a href="https://gitlab.com/pratamailham206/exam-project-rest-api" target="noopener noreferrer" className="font-zefani text-gray hover:text-black-s text-4xl lg:text-7xl uppercase">EXAM APP</a>
                        <div className="flex lg:justify-end font-geo text-sm lg:text-xl uppercase text-gray">API FOR EXAM WEBSITE</div>
                    </div>
                    <div className="space-y-2">
                        <div className="font-made text-gray text-sm lg:text-md">02</div>
                        <a href="https://gitlab.com/pratamailham206/arrows-website-api-django-rest-framework" target="noopener noreferrer" className="font-zefani text-gray hover:text-black-s text-4xl lg:text-7xl uppercase">THE ARROWS</a>
                        <div className="flex lg:justify-end font-geo text-sm lg:text-xl uppercase text-gray">API FOR THE ARROWS NEWS WEBSITE</div>
                    </div>
                </div>
                <div className="lg:flex lg:space-x-40 lg:ml-12 lg:justify-end space-y-4 lg:space-y-0">
                    <div className="space-y-2">
                        <div className="font-made text-gray text-sm lg:text-md">03</div>
                        <a href="https://gitlab.com/pratamailham206/sosial-media-rest-api" target="noopener noreferrer" className="font-zefani text-gray hover:text-black-s text-4xl lg:text-7xl uppercase">SOCIAL MEDIA APP</a>
                        <div className="flex lg:justify-end font-geo text-sm lg:text-xl uppercase text-gray">API FOR SOCIAL MEDIA WEBSITE APPLICATION</div>
                    </div>
                    <div className="space-y-2">
                        <div className="font-made text-gray text-sm lg:text-md">04</div>
                        <a href="https://gitlab.com/pratamailham206/my-blog-api-django-rest-framework" target="noopener noreferrer" className="font-zefani text-gray hover:text-black-s text-4xl lg:text-7xl uppercase">MY BLOG</a>
                        <div className="flex lg:justify-end font-geo text-sm lg:text-xl uppercase text-gray">API FOR MY BLOG WEBSITE</div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
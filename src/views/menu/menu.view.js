import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../templates/navbar";
import { gsap } from "gsap";
import { fade } from "../../animation/pageTransition";

export default function MenuView() {
    const datas = [
        {
            title: "Game",
            src: '/static/images/1.png',
            url: '/project/game'
        },
        {
            title: "Website",
            src: '/static/images/2.jpg',
            url: '/project/website'
        },
        {
            title: "API",
            src: '/static/images/3.jpg',
            url: '/project/api'
        },
        {
            title: "About",
            src: '/static/images/4.jpg',
            url: '/about'
        },
        {
            title: "Contact",
            src: '/static/images/5.jpg',
            url: '/contact'
        },
    ];

    const revealRefs = useRef([]);
    revealRefs.current = [];

    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    const imageRefs = useRef([]);
    imageRefs.current = [];

    const addToImage = el => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };

    useEffect(() => {
        revealRefs.current.forEach((el, i) => {
            const image = imageRefs.current[i];
            
            el.addEventListener('mouseenter', (e) => {
              gsap.to(image, { autoAlpha: 1 })
            })
            
            el.addEventListener('mouseleave', (e) => {
              gsap.to(image, { autoAlpha: 0 })
            })
            
            el.addEventListener('mousemove', (e) => {
              gsap.set(image, { 
                    top: e.clientY + 'px',
                    left: e.clientX + 'px'
                })
            })
        })
    });

    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-black h-screen">
            <div className="absolute w-full">
                <Navbar />
            </div>
            <div className="h-full flex">
                <motion.div initial="exit" animate="enter" variants={fade} className="m-auto">
                    <ul className="text-center space-y-8">
                        {datas.map((data, i) => {
                            return(
                                <li key={i} className="font-zefani uppercase text-5xl lg:text-7xl text-purple hover:text-red transition-200">
                                    <Link to={data.url} ref={addToRefs} className="relative z-20">{data.title}</Link>
                                    <img ref={addToImage} className="top-1/2 left-1/2 z-10 absolute w-52 opacity-0 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src={data.src} />
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
}
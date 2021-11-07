import React from 'react';
import Navbar from '../templates/navbar';
import Particles from "react-tsparticles";
import './particles.css';
import { motion } from "framer-motion";
import { backVariants } from '../../animation/pageTransition';

export default function HeroView() {
    return(
        <div className="lg:h-screen">
            <Navbar />
            <Particles
                id="tsparticles"
                style={{ 
                    position: 'absolute',
                    zIndex: 0
                }}
                options={{
                    detectRetina: false,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble"
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 40,
                                duration: 2,
                                opacity: 8,
                                size: 7.5,
                                speed: 3
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#ff0000",
                        },
                        lineLinked: {
                            blink: false,
                            color: "random",
                            consent: false,
                            distance: 30,
                            enable: true,
                            opacity: 0.4,
                            width: 0.75
                        },
                        move: {
                            attract: {
                                enable: false,
                                rotate: {
                                    x: 600,
                                    y: 1200
                                }
                            },
                            bounce: false,
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: true,
                            speed: 0.75,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: false,
                                area: 1000
                            },
                            limit: 0,
                            value: 75
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.05,
                                speed: 2,
                                sync: false
                            },
                            random: false,
                            value: 2
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            animation: {
                                enable: false,
                                minimumValue: 0.1,
                                speed: 40,
                                sync: false
                            },
                            random: true,
                            value: 3
                        }
                    },
                    polygon: {
                        draw: {
                            enable: true,
                            lineColor: "rgba(255,255,255,0.25)",
                            lineWidth: 0.5
                        },
                        move: {
                            radius: 10
                        },
                        inlineArrangement: "equidistant",
                        scale: 0.9,
                        type: "inline",
                        url: "https://particles.js.org/images/smalldeer.svg"
                    }
                }}
                />
            <motion.div initial="exit" animate="enter" variants={backVariants} className="hero relative z-10">
                <div className="mx-6 lg:mx-28 my-20">
                    <div className="flex items-end space-x-4 lg:space-x-40">
                        <div className="hidden lg:block space-y-0 text-gray text-md lg:text-lg font-geo uppercase">
                            <p className="">INA</p>
                            <p className="">GMT 7: 23:56:59</p>
                        </div>
                        <div className="w-96 lg:w-108 space-y-2">
                            <div className="flex justify-between">
                                <p className="text-gray text-sm lg:text-lg font-geo uppercase w-81 lg:w-82 leading-tight lg:leading-tight tracking-wide">WEB DEVELOPER & GAME DEVELOPER WITH 2 YEARS EXPERIENCET BASED IN KEDIRI</p>
                                <p className="px-2 pt-1 lg:pt-2 bg-black-s text-purple uppercase font-geo italic text-md lg:text-lg">ina</p>
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
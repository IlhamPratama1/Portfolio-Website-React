import React, { useEffect, useRef } from 'react';
import Navbar from '../templates/navbar';
import './particles.css';
import { motion } from "framer-motion";
import { backVariants } from '../../animation/pageTransition';
import { gsap } from "gsap";

export default function HeroView() {
    const hero = useRef();
    const imageRefs = useRef([]);
    imageRefs.current = [];

    const addToImage = el => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };
    useEffect(() => {
        let lastMousePos = {x: 0, y: 0};
        let cacheMousePos = {x: 0, y: 0};
        const MathUtils = {
            lerp: (a, b, n) => (1 - n) * a + n * b,
            distance: (x1,y1,x2,y2) => Math.hypot(x2-x1, y2-y1),
            getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
        }
        let mousePos = lastMousePos = cacheMousePos = {x: 0, y: 0};
        const getMouseDistance = () => MathUtils.distance(mousePos.x,mousePos.y,lastMousePos.x,lastMousePos.y);

        let index = 0;
        let imageTotal = imageRefs.current.length;
        let zIndex = 10;
        
        cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
        cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

        
        const getMousePos = (ev) => {
            let posx = 0;
            let posy = 0;
            if (!ev) ev = hero.event;
            if (ev.pageX || ev.pageY) {
                posx = ev.pageX;
                posy = ev.pageY;
            }
            else if (ev.clientX || ev.clientY) 	{
                posx = ev.clientX + document.body.scrollLeft + hero.current.scrollLeft;
                posy = ev.clientY + document.body.scrollTop + hero.current.scrollTop;
            }
            return {x: posx, y: posy};
        }

        hero.current.addEventListener('mousemove', ev => { 
            mousePos = getMousePos(ev);
            const imageShow = imageRefs.current[index];

            if ( getMouseDistance() > 100 && !gsap.isTweening(imageShow)) {
            
                gsap.timeline()
                .set(imageShow, {
                    startAt: {opacity: 0},
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    zIndex: zIndex,
                    x: mousePos.x - imageShow.width/2,
                    y: mousePos.y - imageShow.height/2,
                    transformOrigin: '50% -10%'
                }, 0)
                // then make it disappear
                .to(imageShow, {
                    duration: 0.5,
                    ease: "power1.easeOut",
                    opacity: 0
                }, 0.4)
                // translate down the image
                .to(imageShow, {
                    duration: 0.2,
                    ease: "quad.easeIn",
                    scaleX: 0.5,
                    scaleY: 2
                }, 0.4)
                // translate down the image
                .to(imageShow, {
                    duration: 0.5,
                    ease: "expo.easeOut",
                    scaleX: 0.7,
                    scaleY: 1.7,
                    y: `+=${MathUtils.getRandomFloat(hero.height/2,hero.height)}`
                }, 0.6);

                zIndex = zIndex < 20 ? zIndex + 1 : 10;
                index = index < imageTotal - 1 ? index + 1 : 0;
                lastMousePos = mousePos;
            }
        });
        
    }, []);

    return(
        <div className="lg:h-screen">
            <Navbar />
            <motion.div ref={hero} initial="exit" animate="enter" variants={backVariants} className="hero relative z-10">
                <div>
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/1.png" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/2.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/3.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/4.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/5.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/6.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/7.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/9.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/10.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/1.png" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/2.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/3.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/4.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/5.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/6.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/7.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/9.jpg" />
                    <img ref={addToImage} className="opacity-0 z-10 absolute w-52 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src="/static/images/10.jpg" />
                </div>
                <div className="px-6 lg:px-28 my-20 relative z-20">
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
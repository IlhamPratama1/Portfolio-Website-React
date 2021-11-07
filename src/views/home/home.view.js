import React, { useEffect, useRef } from 'react';
import HeroView from './hero';
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { backVariants2 } from '../../animation/pageTransition';

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="exit"
      variants={backVariants2}
    >
      {children}
    </motion.div>
  );
}

export default function HomeView() {
    const images = [
        "/static/images/web/fashionshop.PNG",
        "/static/images/game/2.PNG",
        "/static/images/game/10.PNG",
        "/static/images/game/16.PNG",
        "/static/images/game/18.PNG",
        "/static/images/web/arrow.PNG",
        "/static/images/game/24.PNG",
        "/static/images/game/25.PNG",
        "/static/images/game/29.PNG",
        "/static/images/game/30.PNG",
        "/static/images/game/34.PNG",
        "/static/images/game/j2.PNG",
    ];

    const datas = [
        {
            title: "Game",
            src: '/static/images/3.jpg',
            url: '/project/game'
        },
        {
            title: "Website",
            src: '/static/images/4.jpg',
            url: '/project/website'
        },
        {
            title: "API",
            src: '/static/images/5.jpg',
            url: '/project/api'
        }
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
                    left: e.offsetX,
                    top: e.offsetY
                })
            })
        })
    });
    
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black">
            <HeroView />

            {/* section 1 */}
            <section>
                <div className="space-y-5 pb-8">
                    <p className="text-center text-white font-geo uppercase text-sm lg:text-lg">what i do</p>
                    <div className="circle">
                        <div className="bg-gray h-px w-full"></div>
                        <div className="hidden lg:flex justify-end -mt-36 mx-24">
                            <div className="flex items-center rounded-full p-auto w-40 h-40 bg-purple text-black font-geo uppercase">
                                <div className="mx-auto space-y-3">
                                    <p className="text-center text-5xl">1/3</p>
                                    <p className="text-center text-xl">section</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Marquee style={{overflow: `hidden`}} gradient={false} speed={200}>
                    <h1 className="italic text-5xl lg:text-8xl font-made text-black-s uppercase">DEVELOP GAME OR WEBSITE AND BACKEND STUFF</h1>
                </Marquee>
                <FadeInWhenVisible>
                    <div className="mt-16 lg:mt-40 mx-6 lg:mx-28 space-y-6 lg:space-y-10">
                        <div className="flex items-center space-x-3">
                            <div className="h-px w-20 bg-gray"></div>
                            <p className="uppercase font-geo text-xs lg:text-xl text-red">now you see</p>
                        </div>
                        <h1 className="w-80 lg:w-108 font-zefani uppercase text-4xl lg:text-7xl text-white">all project showcase overview</h1>
                        <p className="text-gray text-xs lg:text-lg font-geo uppercase w-80 lg:w-108 leading-tight lg:leading-tight tracking-wide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((img, i) => {
                                return(
                                    <div key={i}>
                                        <img alt="project" src={img} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeInWhenVisible>
            </section>

            {/* section 2 */}
            <div className="space-y-24 py-24">
                <div className="title">
                    <div className="space-y-5">
                        <p className="mx-6 lg:mx-28 text-white font-geo uppercase text-sm lg:text-lg">more in</p>
                        <div className="bg-gray h-px w-full"></div>
                    </div>
                    <div className="circle">
                        <div className="hidden lg:flex justify-end -mt-20 mx-24">
                            <div className="flex items-center rounded-full p-auto w-40 h-40 bg-purple text-black font-geo uppercase">
                                <div className="mx-auto space-y-3">
                                    <p className="text-center text-5xl">2/3</p>
                                    <p className="text-center text-xl">section</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FadeInWhenVisible>
                        <div className="mt-4 lg:mt-0 mx-6 lg:mx-28 space-y-3 lg:space-y-10">
                            <h1 className="w-80 lg:w-108 font-zefani uppercase text-4xl lg:text-7xl text-white">project list</h1>
                            <p className="text-gray text-xs lg:text-lg font-geo uppercase w-80 lg:w-102 leading-tight lg:leading-tight tracking-wide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </FadeInWhenVisible>
                </div>
                <div className="mx-6 lg:mx-28">
                    <FadeInWhenVisible>
                        <div className="space-y-4 lg:space-y-8">
                            <div className="bg-gray h-px w-full"></div>
                            {datas.map((data, i) => {
                                return(
                                    <div key={i} className="relative space-y-4 lg:space-y-8">
                                        <Link to={data.url} className="text-purple hover:text-red">
                                            <p className="text-xs lg:text-lg font-geo uppercase">0{i + 1}</p>
                                            <h1 ref={addToRefs} className="relative z-20 text-4xl lg:text-7xl font-made italic uppercase -mt-2 lg:-mt-4">{data.title}</h1>
                                        </Link>
                                        <div className="relative z-0 bg-gray h-px w-full"></div>
                                        <img ref={addToImage} className="top-0 left-1/2 z-10 absolute w-60 opacity-0 transform -translate-x-1/2 -translate-y-1/2" alt="menu" src={data.src} />
                                    </div>
                                );
                            })}
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>

            {/* section 3 */}
            <div className="h-100 space-y-6">
                <div className="circle">
                    <div className="hidden lg:flex justify-end -mb-28 px-24">
                        <div className="flex items-center rounded-full p-auto w-40 h-40 bg-purple mix-blend-difference before:bg-black after:bg-black text-black font-geo uppercase">
                            <div className="mx-auto space-y-3">
                                <p className="text-center text-5xl">3/3</p>
                                <p className="text-center text-xl">section</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-white font-geo uppercase text-sm lg:text-lg">contact</p>
                <div className="bg-purple h-full pb-20 px-6 lg:px-28">
                    <div className="flex flex justify-center items-center h-full">
                        <FadeInWhenVisible>
                            <div className="m-auto text-center space-y-3">
                                <div className="flex items-end justify-center space-x-2">
                                    <p className="text-gray text-4xl lg:text-6xl uppercase font-zefani">interested</p>
                                    <p className="text-black text-md lg:text-xl uppercase font-geo">let's</p>
                                </div>
                                <h1 className="text-black text-5xl lg:text-9xl uppercase font-zefani">get in touch</h1>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                    <div className="bg-black h-px w-full"></div>
                    <div className="flex justify-between pt-3">
                        <FadeInWhenVisible>
                            <div className="flex items-center space-x-4 lg:space-x-8">
                                <p className="text-black-s text-sm lg:text-lg uppercase font-geo">linkedin</p>
                                <p className="text-black-s text-sm lg:text-lg uppercase font-geo">dribbble</p>
                                <p className="text-black-s text-sm lg:text-lg uppercase font-geo">gitlab</p>
                                <p className="text-black-s text-sm lg:text-lg uppercase font-geo">facebook</p>
                            </div>
                        </FadeInWhenVisible>
                        <p className="text-black text-sm lg:text-lg uppercase font-geo">@2021</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
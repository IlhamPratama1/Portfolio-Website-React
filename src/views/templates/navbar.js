import React from 'react';
import { useLocation } from 'react-router';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const container = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.75,
      staggerDirection: -1
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export default function Navbar() {
    const location = useLocation();
    const styleColor = 
        location.pathname.includes('/api') ||
        location.pathname.includes('/contact')
     ? 'text-black-s' : 'text-white';

     const styleColor2 = 
        location.pathname.includes('/api') ||
        location.pathname.includes('/contact')
     ? 'text-black-s' : 'text-red';

    return(
        <motion.div
            initial="initial"
            animate="enter"
            variants={container} className={`relative w-full z-10 header px-10 lg:px-28 pt-16 flex justify-between ${styleColor} text-xs lg:text-sm tracking-wider`}>
            <Link to="/" variants={item} className="font-made tracking-widest uppercase">Hamka</Link>
            <Link to="/menu" variants={item} className={`font-geo leading-tight tracking-wider hover:underline hover:font-bold ${styleColor2} uppercase pl-4`}>Menu</Link>
        </motion.div>
    );
}
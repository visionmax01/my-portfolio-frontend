import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import images
import html5 from "../assets/img/html5.png";
import css3 from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import react from "../assets/img/react.png";
import laravel from "../assets/img/laravel.png";
import nodeJs from "../assets/img/nodeJs.png";
import php from "../assets/img/php.png";
import express from "../assets/img/express.png";
import tailwind from "../assets/img/tailwind.png";
import figma from "../assets/img/figma.png";
import mongoDb from "../assets/img/mongooDb.png";
import office from "../assets/img/office.png";
import photoshop from "../assets/img/photoshop.png";
import adobePremiere from "../assets/img/adobepr.png";


const MyExpertise = ({ darkMode }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const images = [
    html5,
    css3,
    javascript,
    react,
    laravel,
    nodeJs,
    php,
    express,
    tailwind,
    figma,
    mongoDb,
    office,
    photoshop,
    adobePremiere,
  ];

  return (
    <div className="relative my-expertise  px-4 lg:mt-8  pt-12 bg-red-200/40 pb-8 shadow-md backdrop-blur-md p-4 flex  flex-col items-center justify-center" ref={ref}>
      <h2 className={`absolute -top-4 w-full text-center text-3xl font-bold mb-4 ${darkMode ? 'bg-gray-400 px-4 py-1' : 'text-white bg-blue-800/70 px-4 py-1'}`}>My Expertise</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Expertise ${index + 1}`}
            className={`object-cover rounded-lg w-16 p-3 h-16 ${darkMode ? 'bg-color-white/70' : 'bg-color-black/45'}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default MyExpertise;

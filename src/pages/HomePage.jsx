import React, { useState } from "react";
import ProfileImg from "../assets/img/my-photo1.png"; // Ensure this path is correct
import ProfileImg1 from "../assets/img/homemainimg-1.png"; // Ensure this path is correct
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MyExpertise from "../components/ExpertiesComponent";
import MyCertificateHome from "../components/MyCertificateHome";

const HomePage = ({ darkMode }) => {
  const [downloading, setDownloading] = useState(false);
  const { ref: leftRef, inView: leftInView } = useInView({ threshold: 0.1 });
  const { ref: mleftRef, inView: mleftInView } = useInView({ threshold: 0.1 });
  const { ref: rightRef, inView: rightInView } = useInView({ threshold: 0.1 });

  console.log(ProfileImg1); // Check if this outputs the correct path

const handleDownloadCv = () => {
    // Add error handling
    try {
        setDownloading(true);
        setTimeout(() => {
            const link = document.createElement("a");
            link.href = "../assets/my-resume/Bhishan-sah_Resume_CV.pdf"; // Check this path too
            link.download = "Bhishan-sah_Resume_CV.pdf";
            link.click();
            setDownloading(false);
        }, 1000);
    } catch (error) {
        console.error("Error downloading CV:", error);
        setDownloading(false);
    }
};


  return (
    <div className="lg:mt-12 mt-2 overflow-hidden">
      {/* Mobile Image Section */}
      <motion.div
          className="w-full block sm:hidden px-4 "
          ref={mleftRef}
          initial={{ opacity: 0, x: -100 }}
          animate={mleftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-yellow-700 to-blue-700 rounded-lg mb-8">
          <img
            src={ProfileImg}
            alt="Profile"
            className=" object-fit h-80 w-full mx-auto  rounded-lg"
          />
          </div>
          
        </motion.div>

      {/* Hero Section */}
      <div className="flex w-full lg:mb-0 mb-8">
        <motion.div
          className="lg:w-1/4 hidden sm:block"
          ref={leftRef}
          initial={{ opacity: 0, x: -100 }}
          animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={ProfileImg1}
            alt="Profile"
            className="object-cover w-full h-auto rounded-lg"
          />
        </motion.div>

        {/* Intro Section Details */}
        <div className="lg:mx-8 lg:w-3/4 mx-4 lg:flex flex-col justify-center items-center">
          <div className="lg:text-center">
            <p
              className={`md:text-5xl text-2xl font-extrabold font-modern uppercase tracking-[3px] ${
                darkMode ? "text-white" : "text-blue-800"
              }`}
            >
              Bhishan Prasad Sah
            </p>
            <span className="text-[12px] text-left w-full font-semibold tracking-[3px]">
              Computer Engineer
            </span>
          </div>

          <h1 className="flex lg:w-[25%] gap-4 py-2 font-semibold">
            <span className="text-red-600 text-xl">I'M</span>
            <span className="text-xl tracking-[1px]">
              <Typewriter
                words={[
                  "Web Developer",
                  "Photographer",
                  "UI/UX Designer",
                  "Videographer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="text-lg font-light text-justify lg:text-center lg:w-3/4">
            I'm a web developer who is passionate about building beautiful and
            functional websites and learning new technologies or ways of doing
            new things.
          </p>

          <motion.button
            onClick={handleDownloadCv}
            className={`mt-4 px-4 py-2 flex gap-2 items-center bg-blue-800 hover:bg-color-blue text-white rounded font-bold transition-transform duration-300 ${
              downloading ? "cursor-not-allowed" : ""
            }`}
            disabled={downloading}
          >
            <i className={`fa-solid fa-cloud-arrow-down`}></i>
            {downloading ? "Downloading..." : "Download CV"}
          </motion.button>
        </div>

        <motion.div
          className="lg:w-1/4 hidden sm:block px-12"
          ref={rightRef}
          initial={{ opacity: 0, x: 100 }}
          animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={ProfileImg}
            alt="Profile"
            className="object-cover rounded-full w-full h-auto"
          />
        </motion.div>
      </div>

      <div className="w-full mt-12 ">
        {/* experties setion */}
        <MyExpertise darkMode={darkMode}/>
      </div>
      <div className="mb-6">
      <MyCertificateHome darkMode={darkMode}/>
      </div>
    </div>
  );
};

export default HomePage;

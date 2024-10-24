import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Import images from the assets/img directory
import HTML5 from '../assets/img/HTML5_BHISHAN_SAH_21SOECE11636_page-0001.jpg';
import htmlSololearn from '../assets/img/html bhishan sololearn_page-0001.jpg';
import CSS3 from '../assets/img/CSS3_BHISHAN_SAH_21SOECE11636_page-0001.jpg';
import cssSololearn from '../assets/img/sololearm bhishan css_page-0001.jpg';
import JAVA from '../assets/img/JAVA_BHISHAN_SAH_21SOECE11636_page-0001.jpg';
import JavaLanguage from '../assets/img/Java_language.jpg';
import JavaFundamental from '../assets/img/java_funtamental.jpg';
import SE8Java from '../assets/img/se8_java.jpg';
import Python from '../assets/img/python.jpg';
import PythonCore from '../assets/img/python-core.jpg';
import LanguageC from '../assets/img/language-c.jpg';
import SparkAR from '../assets/img/spark-ar.jpg';
import MahendraExp from '../assets/img/mahendra-exp.jpg';
import Hackathon from '../assets/img/hackithon.jpg';
import Hackathon2 from '../assets/img/hackithon-2.jpg';

const MyCertificateHome = ({darkMode}) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const { current } = scrollRef;
    if (current) {
      setShowLeftArrow(current.scrollLeft > 0);
      setShowRightArrow(
        current.scrollLeft < current.scrollWidth - current.clientWidth
      );
    }
  };

  // Sample card data
  const cards = [
    { id: 1, image: HTML5, name: 'HTML5', content: 'Certificate in HTML5 development.' },
    { id: 2, image: htmlSololearn, name: 'HTML Certification', content: 'Completed HTML certification from SoloLearn.' },
    { id: 3, image: CSS3, name: 'CSS3', content: 'Certificate in CSS3 development.' },
    { id: 4, image: cssSololearn, name: 'CSS Certification', content: 'Completed CSS certification from SoloLearn.' },
    { id: 5, image: JAVA, name: 'Java', content: 'Certificate in Java programming.' },
    { id: 6, image: JavaLanguage, name: 'Java Language', content: 'Completed Java Language course.' },
    { id: 7, image: JavaFundamental, name: 'Java Fundamentals', content: 'Certificate in Java Fundamentals.' },
    { id: 8, image: SE8Java, name: 'SE8 Java', content: 'Java SE8 certification.' },
    { id: 9, image: Python, name: 'Python', content: 'Certificate in Python programming.' },
    { id: 10, image: PythonCore, name: 'Python Core', content: 'Completed Python Core course.' },
    { id: 11, image: LanguageC, name: 'C Language', content: 'Certificate in C programming.' },
    { id: 12, image: SparkAR, name: 'Spark AR', content: 'Certificate in Spark AR development.' },
    { id: 13, image: MahendraExp, name: 'Mahendra Experience', content: 'Certificate from Mahindra.' },
    { id: 14, image: Hackathon, name: 'Hackathon Participation', content: 'Participated in Hackathon.' },
    { id: 15, image: Hackathon2, name: 'Hackathon 2', content: 'Participated in second Hackathon.' },
  ];

  return (
    <div className=" rounded-lg relative">
      <div className=" w-full  md:bg-opacity-15 rounded-lg ">
            <div className="flex justify-center my-4">
            <h1 className={`text-center w-fit text-white capitalize text-3xl py-1 px-4 rounded-tr-xl rounded-bl-xl font-bold   ${darkMode ? 'bg-gray-400' :'bg-blue-800/70'}`}>Certificate's</h1>
            </div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 md:space-x-8 px-6 no-scrollbar rounded-lg"
          onScroll={handleScroll}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex-shrink-0 bg-brand-light bg-opacity-25 lg:w-96 w-[85%] h-auto md:w-60 md:h-70 rounded-lg shadow-md  flex flex-col ${darkMode ? 'border-2 border-white' : 'border-blue-600 border-2'}`}
            >
              <img
                src={card.image}
                className="w-full h-48  lg:h-60  rounded"
                alt={card.name}
              />
            </div>
          ))}

       
        </div>

          {showLeftArrow && (
            <button
                onClick={() => scroll('left')}
                className="md:block hidden text-black  absolute top-1/2 left-5   p-2 "
            >
                <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
            </button>
            )}
            {showRightArrow && (
            <button
                onClick={() => scroll('right')}
                className="hidden md:block  text-black absolute top-1/2 right-5   p-2  "
            >
                <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
            </button>
            )}
      </div>
    </div>
  );
};

export default MyCertificateHome;

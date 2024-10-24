import React, { useEffect } from "react";

// Import images
import myppimage from "../assets/img/myppimage.jpg";
import myPic from "../assets/img/my-pic.jpg";
import littleStarSchool from "../assets/img/little-star-english-school.jpg";
import technicalEducationCollege from "../assets/img/technical-education-college.jpg";
import rkuniversity from "../assets/img/rkuniversity.jpg";
import reading from "../assets/img/reading.png";
import running from "../assets/img/running.png";
import cooking from "../assets/img/cooking.png";
import movies from "../assets/img/movies.png";
import netflix from "../assets/img/netflix.png";
import coding from "../assets/img/coding.jpg";
import traveling from "../assets/img/traveling.jpg";

const AboutPage = ({ darkMode }) => {
  useEffect(() => {
    document.title = "Bhishan Sah - About Me";

    // Set meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Here is my document certificate of my education";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="lg:w-[85%] w-[90%] mx-auto">
      <div className="w-full mx-auto ">
        <div className="">
          <div className="mb-8">
            <div className="">
              <div className="flex items-center justify-center gap-4 w-full">
                <div className="h-1 w-[30%] lg:w-[45%] bg-blue-500 "></div>
                <h1 className="lg:text-3xl w-[30%] lg:w-[20%] text-center text-xl font-bold ">
                  ABOUT <span className="text-blue-500">ME</span>
                </h1>
                <div className="h-1 w-[30%] lg:w-[45%] bg-blue-500 "></div>
              </div>
              <div>
                <p className="lg:text-sm text-[8px] text-center">
                  ALLOW ME TO INTRODUCE MYSELF
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center lg:gap-32 md:flex-row py-4">
              <div className="flex  mb-6">
                <img
                  className="w-[100%] rounded-tr-[50px] rounded-lg rounded-bl-[50px]  lg:h-96 lg:object-fit  h-72 lg:object-cover  object-cover border-blue-600 border-2 mr-4"
                  src={myppimage}
                  alt="Profile"
                />
              </div>

              <div className="w-full lg:w-1/2 ">
                <h1 className="text-2xl font-extrabold underline mb-2">
                  Introduction
                </h1>
                <p className=" mb-4 text-justify">
                  I'm a web developer who is passionate about building beautiful
                  and functional websites. I'm also passionate about learning
                  new technologies and new ways of doing things.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold underline mb-4">
              Education
            </h2>
            {[
              {
                title: "10th Class",
                institution:
                  "Little Star Higher Secondary English Boarding School",
                location: "Lahan-7, Siraha, Nepal, pincode - 56500",
                major: "Science & English",
                passedYear: "2016 A.D",
                gradePercentage: "67%",
                gpa: "2.68",
                image: littleStarSchool,
              },
              {
                title: "Diploma in Mechanical Engineering",
                institution:
                  'Srm Global Institute of Technical Education "HSBTE BOARD"',
                location:
                  "Village-Bhurewala, Naraingarh, Ambala, Haryana, pincode - 134203",
                major: "Drawing & AutoCAD",
                passedYear: "2019 A.D",
                gradePercentage: "69%",
                gpa: "2.76",
                image: technicalEducationCollege,
                website: "https://hsbte.org.in/",
              },
              {
                title: "B-Tech in Computer Engineering",
                institution: "RK University",
                location: "Village-Tramba, Rajkot, Gujarat, pincode - 360020",
                major: "Software Engineering",
                passedYear: "2025 A.D",
                gradePercentage: "74% up to 6th sem only",
                gpa: "7.4",
                image: rkuniversity,
                website: "https://rku.ac.in/",
              },
            ].map((edu, index) => (
              <div key={index} className={`flex justify-between mb-6 text-left border-b-2  pb-4  rounded-lg   ${darkMode ? 'bg-gray-700/80' : 'bg-color-black/5 border-blue-600'}`}>
                <div className="list-disc text-justify flex flex-col gap-4 mb-4 rounded-lg  lg:text-md text-sm">
                <h3 className="text-lg lg:w-fit w-full  font-semibold bg-purple-400/30 text-center lg:text-left  py-2">{edu.title}</h3>
                <h4 className="text-md bg-blue-600/25 p-2 rounded-lg mx-4">{edu.institution}</h4>
                <div className="px-4 lg:px-8">
                <li>{edu.location}</li>
                <li>
                  Major Subject - <strong>{edu.major}</strong>
                </li>
                <li>
                  Passed year - <strong>{edu.passedYear}</strong>
                </li>
                <li>
                  Grade Percentage - <strong>{edu.gradePercentage}</strong>
                </li>
                <li>
                  Grade - <strong>{edu.gpa}</strong> GPA
                </li>
                {edu.website && (
                  <li>
                    Website URL -{" "}
                    <a className="text-blue-500" href={edu.website}>
                      {edu.website}
                    </a>
                  </li>
                )}
                </div>
                </div>
               
                <img className="w-1/4 h-48 mt-2 hidden sm:block" src={edu.image} alt={edu.title} />
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className={`lg:flex justify-between gap-8   rounded-lg px-4 lg:px-8 py-3 ${darkMode ? 'bg-gradient-to-r to-cyan-500/70 from-blue-700/70' : 'bg-gradient-to-r to-orange-300/50 from-blue-400'}`}>
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold  mb-4">
                EXPERIENCE
              </h2>
              <ul className={`list-disc  text-justify flex flex-col gap-4 mb-4   rounded-lg p-6 lg:text-md text-sm ${darkMode ? 'bg-gray-900/50':"bg-gray-200/50"}`}>
                <li>
                  <strong>1 Year</strong> Experience in user account management
                  at Vianet Communication Pvt. Ltd.
                </li>
                <li>
                  <strong>2 Years</strong> of field experience with knowledge of
                  wiring, connection & layout designing.
                </li>
                <li>
                  <strong>8 Months</strong> of experience as supervisor at Shree
                  Krishna Distribution Janakpur.
                </li>
              </ul>
            </div>

            {/* Certificates Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold  mb-4">
                CERTIFICATES
              </h2>
              <ul className={`list-disc  text-justify flex flex-col gap-4 mb-4  bg-gray-500/50 rounded-lg p-6 lg:text-md text-sm ${darkMode ? 'bg-gray-900/50':"bg-gray-200/50"}`}>
                <li>
                  <strong>8 Months</strong> Experience certificate of mechanical
                  at Shree Krishna Distribution Mahendra Company.
                </li>
                <li>CISCO Networking</li>
                <li>Java Language Features</li>
                <li>Java Programming Fundamentals</li>
                <li>Java SE 8 Features</li>
              </ul>
            </div>
          </div>

          <div className={`w-full my-6 flex flex-wrap justify-between  rounded-lg px-4 lg:px-8 py-3 ${darkMode ? 'bg-gradient-to-r from-cyan-500/70 to-blue-700/70' : 'bg-gradient-to-r from-orange-300/50 to-blue-400'}`}>
            
          {/* Things I Love Section */}
          <div >
            <h1 className="text-2xl font-bold  mb-1">
              THINGS I LOVE
            </h1>
            <div className={`flex flex-wrap rounded-lg p-1 ${darkMode ? 'bg-gray-900/50':"bg-gray-200/50"}`}>
              {[
                reading,
                running,
                cooking,
                movies,
                netflix,
                coding,
                traveling,
              ].map((image, index) => (
                <img
                  key={index}
                  className=" w-8 h-8  m-2 object-cover"
                  src={image}
                  alt="Hobbies"
                />
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-4 w-full">
            <h1 className="text-2xl font-bold  mb-1">
              LOOK WHAT I CAN DO
            </h1>
            <div className={`lg:grid grid-cols-2 w-full p-3  flex flex-col gap-4 rounded-lg  ${darkMode ? 'bg-gray-900/50':"bg-gray-200/50"}`}>
              {[
                "Web Designing",
                "UI / UX Designing",
                "Familiar with React/Vite",
                "Familiar with Laravel",
                "App Development: Flutter & React Native",
                "PhotoShop PSD Designing",
                "Video Editing",
                "API Integrity & Creating APIs",
                "Full Stack Web Development MERN",
              ].map((skill, index) => (
                <div key={index} className="flex items-center ">
                  <span className={`text-2xl mr-2  ${darkMode ? 'text-green-600' : 'text-orange-700'}`}>+</span>
                  <p className=" lg:text-lg text-md">{skill}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import Tilt from 'react-parallax-tilt';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.png';
import img4 from '../../assets/img4.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import image from '../../assets/image.png';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Viscora',
    description: 'A next-gen daily diary that not only records your experiences but also leverages Generative AI to provide actionable insights and suggestions.',
    sourceCode: 'https://github.com/Sumandeep2004/Viscora',
    demo: 'https://viscora-daily-diary.vercel.app/',
    image: image,
  },
  {
    name: 'Movie-Search-app',
    description: 'After learning all the basic concepts of React I made this simple movie search app.',
    sourceCode: 'https://github.com/Sumandeep2004/Movie-Search-app',
    demo: 'https://movie-search-app-theta-seven.vercel.app/',
    image: img1,
  },
  {
    name: 'Weather-App',
    description: 'A sleek React-based weather app that fetches real-time weather data using an API and displays temperature, conditions, and location-specific forecasts.',
    sourceCode: 'https://github.com/Sumandeep2004/Freelancer-app',
    demo: 'https://sumandeep2004.github.io/Weather-App/',
    image: img2,
  },
  
 
  {
    name: 'Counter-App',
    description: 'A smart text analyzer that counts words and characters in real-time while ensuring your content stays within the character limits of platforms like Instagram and X.',
    sourceCode: 'https://github.com/Sumandeep2004/Counter-App',
    demo: 'https://sumandeep2004.github.io/Counter-App/',
    image: img4,
  },
  {
    name: 'Password Generator',
    description: 'A customizable password generator that lets users adjust password length, choose between characters or digits, and copy the generated password with a single click.',
    sourceCode: 'https://github.com/Sumandeep2004/Password-Generator',
    demo: 'https://password-generator-d377.vercel.app/',
    image: img6,
  },
  {
    name: 'To-Do-List App',
    description: 'A user-friendly to-do list app built with React that lets you add, delete, and manage tasks efficiently, with data stored in local storage for persistence.',
    sourceCode: 'https://github.com/Sumandeep2004/To-do-List-app',
    demo: 'to-do-list-app-tau-black.vercel.app',
    image: img7,
  },
];

const Work = () => {
  return (
    <div className="p-6 md:p-10 text-gray-800 mt-36" id="work">
      <h1 className="text-5xl font-bold mb-4 text-center poppins-bold-italic text-[#9F3D3D]">PROJECTS</h1>
      <p className="text-center mb-8 text-xl max-w-2xl mx-auto patrick-hand-regular text-[#6E6E6E]">
        A collection of my projects showcasing my skills and experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={250}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="w-full"
            >
              <div className="bg-[#FDF2EA] rounded-2xl shadow p-6 border-3 border-black">
                <img
                  src={project.image}
                  alt={project.name}
                 className="w-full h-72 object-cover rounded-lg mb-4 hover:opacity-90 transition duration-200 cursor-zoom-in"
                />
                <h3 className="text-xl  mb-2 .poppins-semibold text-center font-bold text-black">{project.name}</h3>
                <p className="text-sm mb-4 text-[#2E2E2E] patrick-hand-regular font-bold">{project.description}</p>
                <div className="flex gap-4 justify-center">
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 bg-[#9F3D3D] text-white rounded-lg hover:bg-[#a63b3b] transition-all">
                      Source Code
                    </button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 bg-[#6E6E6E] text-white rounded-lg hover:bg-[#5a5858] transition-all">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;

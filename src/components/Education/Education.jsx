import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Guru Nanak Dev Engineering College',
    degree: 'B.Tech in CSE',
    year: '2022 - 2026',
    grade : '9 SGPA',
    description: 'I am pursuing my B.Tech in Computer Science and Engineering. During my time here, I have gained hands-on experience in software development, data structures, algorithms, web technologies, and project-based learning. ',
    
  },
  {
    institution: 'Nankana Sahib Sen. Sec. Public School',
    degree: 'CBSE XII Class',
    year: '2021-2022',
    grade : '94 %',
    description: 'Studied science and computer science subjects.',
  },
  {
    institution: 'Nankana Sahib Sen. Sec. Public School',
    degree: 'CBSE X Class',
    year: '2019-2020',
    grade : '93.6 %',
    description: 'Completed high school with a focus on science subjects.',
  },
];

const Education = () => {
  return (
    <div className="p-6 md:p-12 text-gray-800 relative max-w-5xl mx-auto mt-36" id='education'>
     
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center poppins-bold-italic text-[#9F3D3D] ">
        EDUCATION
      </h1>
      <p className="text-center mb-12 text-lg md:text-xl max-w-2xl mx-auto patrick-hand-regular text-[#6E6E6E]">
        A timeline of my educational journey from school to college.
      </p>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-[#9F3D3D] z-0"></div>

        {/* Cards */}
        <div className="flex flex-col gap-12 md:gap-16">
          {educationData.map((edu, index) => {
            const isRight = index % 2 === 0; // First card on right

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRight ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`relative flex ${isRight ? 'justify-end' : 'justify-start'} w-full`}
              >
                {/* Dot */}
                <div
                  className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 z-10"
                >
                  <div className="w-5 h-5 bg-[#9F3D3D] rounded-full border-4 border-white shadow-md"></div>
                </div>

                {/* Connector line - reversed direction */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${
                    isRight ? 'left-1/2' : 'right-1/2'
                  } w-12 md:w-16 h-0.5 bg-[#9F3D3D] z-0 ${isRight ? 'ml-2' : 'mr-2'}`}
                ></div>

                {/* Card */}
                <div
                  className={`bg-[#FDF2EA] w-full max-w-[280px] md:max-w-[360px] min-h-[180px] rounded-xl shadow-lg p-6 border-l-4 border-[#9F3D3D] z-10 ${
                    isRight ? 'ml-[4.5rem] md:ml-[5.5rem]' : 'mr-[4.5rem] md:mr-[5.5rem]'
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-[#9F3D3D] text-center ">{edu.degree}</h3>
                  <h4 className="text-lg font-medium text-center text-[#6E6E6E] mt-1 patrick-hand-regular">{edu.institution}</h4>
                  <p className="text-sm text-center mt-2 text-[#6E6E6E] patrick-hand-regular">{edu.year}</p>
                  <p className="text-sm text-center mt-2 text-[#9F3D3D] patrick-hand-regular">{edu.grade}</p>
                  <p className="text-sm text-center mt-4 text-gray-600 patrick-hand-regular">{edu.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
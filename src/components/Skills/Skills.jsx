import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React Js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  ],
  languages: [
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  ],
  tools: [
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1662146027/front/favicon/vercel/152x152.png' },
    { name: 'Netlify', logo: 'https://www.netlify.com/v3/img/components/logomark.png' },
  ],
};

const Skills = () => {
  return (
    
    <div className="p-6 md:p-10 text-gray-800 mt-36" id='skills'>
      
      <h1 className="text-5xl font-bold mb-4 text-center poppins-bold-italic text-[#9F3D3D]">SKILLS</h1>
      <p className="text-center mb-8 text-xl max-w-2xl mx-auto patrick-hand-regular text-[#6E6E6E]">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillSection title="FRONTEND" color="text-[#9F3D3D]" data={skills.frontend} />
        <SkillSection title="LANGUAGES" color="text-[#9F3D3D]" data={skills.languages} />
        <SkillSection title="TOOLS" color="text-[#9F3D3D]" data={skills.tools} />
      </div>
    </div>
  );
};

const SkillSection = ({ title, color, data }) => (
  <motion.div
    className="bg-[#FDF2EA] rounded-2xl shadow p-6 border-3 border-black"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: 'easeOut' }} // Slow down the initial load of the section
  >
    <h2 className={`text-2xl font-bold mb-4 text-center ${color}`}>{title}</h2>
    <div className="flex flex-wrap gap-3 justify-center">
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6,    // Slow down the animation duration for each item
            delay: index * 0.15 // Staggered delay for each card
          }}
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={250}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="w-auto"
          >
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all bg-white">
              <img src={item.logo} alt={item.name} className="w-7 h-7" />
              <span className="text-base font-medium">{item.name}</span>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Skills;

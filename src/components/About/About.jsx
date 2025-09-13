import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Typewriter } from 'react-simple-typewriter';
import me from 'resume_photo.jpg';
const About = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-[7vw] py-16 mt-24"
      id="about"
    >
      <div>
        <h1 className='text-[#2E2E2E] poppins-extrabold-italic text-4xl md:text-5xl leading-tight'>
          Hi, I am <br /> Suman Grewal
        </h1>
        <h2 className="text-[#9F3D3D] text-2xl mt-4 poppins-semibold">
          I am a{' '}
          <Typewriter
            words={[' Computer Science Student', '  Frontend React Developer']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-[#4A4A4A] mt-4 patrick-hand-regular text-2xl">
          I’m a passionate React Developer with a solid foundation in HTML, CSS, JavaScript, and React.js. I also have working knowledge of C++ and MySQL.
          <br /><br />
          I love building responsive, user-friendly interfaces and bringing designs to life through clean, efficient code.
          <br /><br />
          Currently, I’m focused on becoming a full-fledged Full Stack MERN Developer while contributing to real-world projects and learning every day.
        </p>

        {/* Download CV Button */}
        <a
          href="./Resume.pdf" // replace with your actual CV file path
          download
          className="inline-block mt-8 px-6  py-3  bg-[#9F3D3D] text-white text-2xl font-semibold rounded-lg shadow-md transition duration-300 ease-in-out border-3 border-black  hover:bg-[#832f2f]"
        >
          Download CV
        </a>
      </div>

      <Tilt
  tiltMaxAngleX={15}
  tiltMaxAngleY={15}
  perspective={1000}
  scale={1.05}
  transitionSpeed={1000}
  gyroscope={true}
  className="flex justify-center items-center"
>
  <img
     src={me} // Replace with your actual image path
    alt="Suman Grewal"
    className="rounded-full shadow-lg w-96 h-96 object-cover border-3 border-black"
  />
</Tilt>

    </div>
  );
};

export default About;

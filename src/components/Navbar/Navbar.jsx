import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import '../../index.css';

const Navbar = () => {
  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Projects' },
    // { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    
    { id: 'contact', label: 'Contact' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleMenuItemClick = (sectionID) => {
    setActiveSection(sectionID);
    setIsOpen(false);

    // Scroll to section (optional)
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`bg-[#F4B6C2] shadow-md fixed top-0 w-full z-50 px-[7vw] md:px-[7vw] lg:px-[20vw] transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="poppins-regular text-[#2E2E2E] flex justify-between items-center px-6">
          <div className="patrick-hand-regular text-[#9F3D3D] text-4xl">
            <span>
              Suman <br /> Grewal
            </span>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8 text-lg">
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer transition-all duration-300 hover:text-[#9F3D3D] glow-hover ${activeSection === item.id ? 'font-bold text-[#9F3D3D]' : ''}`}>
                <button onClick={() => handleMenuItemClick(item.id)} className="font-medium">{item.label}</button>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 text-2xl">
            <a href="https://github.com/Sumandeep2004" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sumandeep-kaur-grewal-45aa772a6/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden text-2xl cursor-pointer ml-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-start px-6 pt-4 pb-2 text-lg space-y-4">
            {menuItems.map((item) => (
              <li key={item.id} className="cursor-pointer hover:text-[#9F3D3D]">
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;

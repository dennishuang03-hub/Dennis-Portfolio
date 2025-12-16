import { useState, useEffect } from 'react';
import ReactLogo from "../assets/icons/logo192.png";
import Flask from "../assets/icons/Flask.png";
import NET from "../assets/icons/NET.png";
import Python from "../assets/icons/Python.png";
import MySQL from "../assets/icons/MySQL.png";
import JavaScript from "../assets/icons/JavaScript.png";
import Tailwind from "../assets/icons/Tailwind CSS.png";
import CSharp from "../assets/icons/CSharp.png";
import CPP from "../assets/icons/CPlusPlus.png";
import Docker from "../assets/icons/Docker.png";
import Git from "../assets/icons/Git.png";
import GitLab from "../assets/icons/GitLab.png";
import HTML5 from "../assets/icons/HTML5.png";
import Bootstrap from "../assets/icons/Bootstrap.png";
import CSS3 from "../assets/icons/CSS3.png";


export default function Stack() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("stack");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [hasAnimated]);

  const technologies = [
    { name: 'React.js', icon: ReactLogo, type: 'image' },
    { name: 'Flask', icon: Flask, type: 'image' },
    { name: 'ASP.NET Core', icon: NET, type: 'image' },
    { name: 'Python', icon: Python, type: 'image' },
    { name: 'Docker', icon: Docker, type: 'image' },
    { name: 'MySQL', icon: MySQL, type: 'image' },
    { name: 'JavaScript', icon: JavaScript, type: 'image' },
    { name: 'Tailwind CSS', icon: Tailwind, type: 'image' },
    { name: 'C#', icon: CSharp, type: 'image' },
    { name: 'C++', icon: CPP, type: 'image' },
    { name: 'Git', icon: Git, type: 'image' },
    { name: 'GitLab', icon: GitLab, type: 'image' },
    { name: 'HTML5', icon: HTML5, type: 'image' },
    { name: 'CSS3', icon: CSS3, type: 'image' },
    { name: 'Bootstrap', icon: Bootstrap, type: 'image' },
  ];

  return (
    <section
      id="stack"
      className="w-full min-h-screen flex flex-col items-center justify-start pt-16 pb-16
                 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white overflow-x-hidden"
    >
      {/* Header Title */}
      <div className={`relative inline-block mb-12 transition-all duration-700 ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="font-minecraft text-4xl md:text-5xl tracking-tight">
          Tech Stack
          <div className="flex items-center justify-center mt-4">
            <span className="h-1 w-20 bg-gradient-to-r from-transparent to-lime-400 rounded-full" />
            <span className="mx-2 w-3 h-3 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50" />
            <span className="h-1 w-20 bg-gradient-to-l from-transparent to-lime-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <p className={`text-gray-400 text-lg text-center max-w-2xl mb-16 transition-all duration-700 delay-100 ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        Technologies and frameworks I've worked with
      </p>

      {/* Tech Grid */}
    <div className="w-full max-w-7xl isolate"> {/* 👈 Added 'isolate' */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
            <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                relative group
                transition-all duration-700
                ${hoveredIndex === index 
                    ? 'z-50 scale-105'  // 👈 scale helps visual pop
                    : 'z-10'
                }
                ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 50}ms` }}
            >
                {/* Icon Container */}
                <div
                className={`
                    relative flex items-center justify-center
                    w-full h-28
                    rounded-xl
                    bg-neutral-800 border border-neutral-700
                    transition-all duration-300 ease-out
                    cursor-pointer
                    ${hoveredIndex === index 
                    ? 'scale-110 shadow-2xl border-lime-400/50 -translate-y-2' 
                    : 'scale-100'
                    }
                `}
                style={{
                    boxShadow: hoveredIndex === index
                    ? '0 20px 60px -15px rgba(163, 230, 53, 0.5)'
                    : 'none'
                }}
                >
                {/* Gradient Background on Hover */}
                <div
                    className={`
                    absolute inset-0 rounded-xl
                    bg-lime-400/10
                    transition-opacity duration-300
                    ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                    `}
                />
                
                {/* Icon - Image or Emoji */}
                {tech.type === 'image' ? (
                    <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 object-contain relative z-10 transition-transform duration-300"
                    style={{
                        transform: hoveredIndex === index 
                        ? 'scale(1.1) rotate(5deg)' 
                        : 'scale(1) rotate(0deg)'
                    }}
                    />
                ) : (
                    <span 
                    className="text-5xl relative z-10 transition-transform duration-300"
                    style={{
                        transform: hoveredIndex === index 
                        ? 'scale(1.1) rotate(5deg)' 
                        : 'scale(1) rotate(0deg)'
                    }}
                    >
                    {tech.icon}
                    </span>
                )}
                </div>

                {/* Tech Name Tooltip — now safely above everything */}
                {hoveredIndex === index && (
                <div
                    className={`
                    absolute -top-12 left-1/2 transform -translate-x-1/2
                    whitespace-nowrap px-4 py-2 rounded-lg
                    bg-lime-400 text-black text-sm font-semibold
                    shadow-lg shadow-lime-400/50
                    transition-all duration-300
                    z-[60] 
                    `}
                >
                    {tech.name}
                    {/* Arrow pointing up */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-lime-400 rotate-45" />
                </div>
                )}
            </div>
            ))}
        </div>
    </div>
    </section>
  );
}
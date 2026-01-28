
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import { Section } from '../types';
import profileImg from "images/366dd543-7f94-4923-99fb-2d07a32d753f.jpg";

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    'Full Stack Developer',
    'AI Automation Specialist',
    'Software Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        timer = setTimeout(handleType, typingSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 md:px-8 relative overflow-hidden bg-slate-950">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[10%] -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[10%] -right-20 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[150px]" />
      
      {/* Professional Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 mb-8 backdrop-blur-sm">
            <Sparkles size={14} className="animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Engineer & Innovator</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            Hi, I'm <br />
            <span className="gradient-text">{PERSONAL_DETAILS.name}</span>
          </h1>
          
          <p className="text-2xl md:text-4xl font-light text-gray-300 mb-10 h-14">
            I am a <span className="text-green-500 font-medium italic border-r-2 border-emerald-500/50 pr-2">{text}</span>
          </p>
          
          <p className="text-lg text-gray-400 max-w-lg mb-12 leading-relaxed font-light">
            Dedicated to developing intelligent, scalable, and impactful software solutions. Specialized in React ecosystems and AI-driven automation.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button 
              onClick={() => scrollTo(Section.CONTACT)}
              className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold flex items-center space-x-3 transition-all hover:-translate-y-1 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.4)]"
            >
              <span className="text-lg">Get in touch</span>
              <ArrowRight size={22} />
            </button>
            
            <div className="flex items-center space-x-5">
              <a href={PERSONAL_DETAILS.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 rounded-2xl text-gray-400 hover:text-emerald-400 transition-all hover:scale-110">
                <Github size={24} />
              </a>
              <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 rounded-2xl text-gray-400 hover:text-emerald-400 transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative group">
            {/* Outer Decorative Rings */}
            <div className="absolute -inset-10 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-1000" />
            <div className="absolute -inset-4 border-2 border-emerald-500/10 rounded-full animate-[spin_20s_linear_infinite] opacity-50" />
            <div className="absolute -inset-8 border border-emerald-500/5 rounded-full animate-[spin_30s_linear_infinite_reverse] opacity-30" />
            
            {/* Avatar Mask */}
            <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] rounded-full p-2 bg-gradient-to-tr from-emerald-500/20 to-transparent border border-emerald-500/20 shadow-2xl backdrop-blur-xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.03]">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-900 shadow-inner">
               <img
                  src={profileImg}
                  alt={PERSONAL_DETAILS.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay for professional depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40 pointer-events-none" />
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -top-4 -right-4 p-4 glass-morphism rounded-2xl border border-emerald-500/20 shadow-xl animate-float">
              <Sparkles className="text-emerald-400" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

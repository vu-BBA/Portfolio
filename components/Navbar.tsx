
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { Section } from '../types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(Section.HOME);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = Object.values(Section);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: Section.HOME, icon: <Home size={20} />, label: 'Home' },
    { id: Section.ABOUT, icon: <User size={20} />, label: 'About' },
    { id: Section.SKILLS, icon: <Code size={20} />, label: 'Skills' },
    { id: Section.PROJECTS, icon: <Briefcase size={20} />, label: 'Projects' },
    { id: Section.CONTACT, icon: <Mail size={20} />, label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-morphism' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <button onClick={() => scrollTo(Section.HOME)} className="text-2xl font-bold font-heading gradient-text">BBA.Dev</button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`flex items-center space-x-2 transition-colors duration-200 ${activeSection === link.id ? 'text-emerald-400' : 'text-gray-400 hover:text-white'}`}
            >
              {link.icon}
              <span className="text-sm font-medium">{link.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-morphism absolute top-full left-0 right-0 py-6 px-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`flex items-center space-x-4 p-3 rounded-xl transition-all ${activeSection === link.id ? 'bg-emerald-500/20 text-emerald-400' : 'text-gray-400'}`}
              >
                {link.icon}
                <span className="text-lg font-medium">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
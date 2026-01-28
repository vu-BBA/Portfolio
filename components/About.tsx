
import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import { Target, Zap, Rocket, Quote } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-emerald-400" />,
      title: 'Strategic Learner',
      text: 'Dedicated to mastering high-impact technologies like the MERN stack and AI automation.'
    },
    {
      icon: <Zap className="text-green-400" />,
      title: 'Excellence First',
      text: 'Prioritizing clean, maintainable code and exceptional user experiences in every commit.'
    },
    {
      icon: <Rocket className="text-teal-400" />,
      title: 'Engineer Growth',
      text: 'Combining academic Software Engineering principles with real-world project development.'
    }
  ];

  return (
    <section id="about" className="py-32 px-4 md:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-heading tracking-tight">Personal Profile</h2>
            <div className="w-24 h-2 bg-emerald-500 rounded-full" />
          </div>
          <p className="text-gray-500 font-medium mt-4 md:mt-0 tracking-widest uppercase text-sm">Beyond the Code</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="relative">
              <Quote className="absolute -top-6 -left-8 text-emerald-500/10 w-20 h-20" />
              <p className="text-2xl text-gray-300 leading-relaxed font-light italic relative z-10">
                "{PERSONAL_DETAILS.bio}"
              </p>
            </div>
            
            <div className="grid gap-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex space-x-6 group">
                  <div className="shrink-0 w-14 h-14 bg-slate-900 border border-emerald-500/10 rounded-2xl flex items-center justify-center transition-all group-hover:border-emerald-500/40 group-hover:bg-emerald-500/5 shadow-xl">
                    {item.icon}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Visual Frame */}
            <div className="aspect-[4/5] bg-slate-900 rounded-[2.5rem] border border-emerald-500/10 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] relative group">
              <img 
                src={"images/Gray and Green Professional Resume A3 Landscape (1).png"} 
                alt={PERSONAL_DETAILS.name} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              {/* Branding Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs mb-2">Portfolio 2024</p>
                <h3 className="text-3xl font-bold text-white mb-2">{PERSONAL_DETAILS.name}</h3>
                <p className="text-gray-400 text-sm">{PERSONAL_DETAILS.profession}</p>
              </div>
            </div>
            
            {/* Decorative background accent */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 p-8 glass-morphism rounded-[2rem] shadow-2xl border border-emerald-500/10 animate-float">
              <div className="flex space-x-8">
                <div className="text-center">
                  <p className="text-4xl font-black text-emerald-400">10+</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Projects</p>
                </div>
                <div className="w-px h-12 bg-gray-800" />
                <div className="text-center">
                  <p className="text-4xl font-black text-white">24/7</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

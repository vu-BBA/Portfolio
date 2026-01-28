
import React from 'react';
import { SKILLS } from '../constants';

const Skills = () => {
  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'ai', name: 'AI & Automation' },
    { id: 'tools', name: 'Tools' },
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Technical Arsenal</h2>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-300 px-2">{category.name}</h3>
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === category.id).map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-4 glass-morphism rounded-xl flex items-center space-x-4 group hover:border-emerald-500/50 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="text-emerald-400 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

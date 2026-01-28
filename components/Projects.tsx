
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group glass-morphism rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white text-gray-900 rounded-full hover:bg-emerald-500 hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <button className="p-3 bg-white text-gray-900 rounded-full hover:bg-emerald-500 hover:text-white transition-colors">
                    <ExternalLink size={24} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 text-emerald-300 text-xs font-semibold rounded-full border border-white/10 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                
                <div className="space-y-3">
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

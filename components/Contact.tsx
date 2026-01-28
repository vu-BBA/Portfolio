
import React from 'react';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <h3 className="text-3xl font-bold leading-tight">
              Have a project in mind? <br />
              <span className="text-emerald-400">Let's build something amazing together.</span>
            </h3>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_DETAILS.email}`} className="flex items-center space-x-6 p-6 glass-morphism rounded-3xl hover:border-emerald-500 transition-all group">
                <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Me</p>
                  <p className="text-xl font-medium">{PERSONAL_DETAILS.email}</p>
                </div>
              </a>

              <div className="flex items-center space-x-6 p-6 glass-morphism rounded-3xl group">
                <div className="p-4 bg-green-500/10 text-green-400 rounded-2xl group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-xl font-medium">Remote / Available Globally</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href={PERSONAL_DETAILS.github} target="_blank" rel="noreferrer" className="flex-1 p-6 glass-morphism rounded-3xl flex items-center justify-center space-x-3 text-gray-400 hover:text-white hover:border-emerald-500 transition-all">
                <span className="font-bold tracking-widest uppercase text-xs">GitHub Repository</span>
              </a>
              <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noreferrer" className="flex-1 p-6 glass-morphism rounded-3xl flex items-center justify-center space-x-3 text-gray-400 hover:text-white hover:border-emerald-500 transition-all">
                <span className="font-bold tracking-widest uppercase text-xs">LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="glass-morphism rounded-3xl p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" 
                    placeholder={PERSONAL_DETAILS.name} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" 
                    placeholder={PERSONAL_DETAILS.email} 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="Project Discussion" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Message</label>
                <textarea className="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all h-32 resize-none" placeholder="Tell me more about your project..." />
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all group">
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

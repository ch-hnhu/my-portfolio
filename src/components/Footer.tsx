import React from 'react';
import { Heart, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Chung Hue Nhu
            </h3>
            <p className="text-gray-300 max-w-sm">
              Fullstack Web Developer passionate about creating impactful digital experiences 
              through creative and technical excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:hnhu07012004@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>hnhu07012004@gmail.com</span>
              </a>
              <a
                href="tel:0777365083"
                className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>0777365083</span>
              </a>
              <a
                href="https://github.com/tako0w0skw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <Github className="h-4 w-4" />
                <span>tako0w0skw</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Chung Hue Nhu. All rights reserved.
          </p>
          <p className="flex items-center text-gray-400 text-sm mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
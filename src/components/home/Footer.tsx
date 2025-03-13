
import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white pt-6 pb-4 mt-auto mb-8">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-league-spartan font-bold text-lg">LocalPuls</h3>
            <p className="text-gray-300 text-sm">Deine lokale Community-Plattform</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold mb-1">Links</h4>
              <Link to="/" className="text-gray-300 hover:text-[#4EACE5] text-sm transition-colors">Home</Link>
              <Link to="/profile" className="text-gray-300 hover:text-[#4EACE5] text-sm transition-colors">Profil</Link>
              <Link to="/ask" className="text-gray-300 hover:text-[#4EACE5] text-sm transition-colors">Frage stellen</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold mb-1">Kategorien</h4>
              <span className="text-[#1F45CD] text-sm hover:opacity-80 transition-colors cursor-pointer">#Freizeit</span>
              <span className="text-[rgba(10,157,47,1)] text-sm hover:opacity-80 transition-colors cursor-pointer">#Verkehr</span>
              <span className="text-[rgba(209,44,155,1)] text-sm hover:opacity-80 transition-colors cursor-pointer">#Politik</span>
              <span className="text-[rgba(229,146,78,1)] text-sm hover:opacity-80 transition-colors cursor-pointer">#Wohnen</span>
            </div>
            
            <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-1">Kontakt</h4>
              <a href="mailto:info@localpuls.de" className="text-gray-300 hover:text-[#4EACE5] text-sm transition-colors">info@localpuls.de</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} LocalPuls. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

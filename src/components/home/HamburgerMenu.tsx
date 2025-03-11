
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, HelpCircle, MessageSquare, Newspaper, User } from "lucide-react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: "home", name: "Home", icon: Home, path: "/" },
    { id: "fragen", name: "Fragen", icon: HelpCircle, path: "/questions" },
    { id: "meinung", name: "Meinung", icon: MessageSquare, path: "/opinions" },
    { id: "news", name: "News", icon: Newspaper, path: "/news" },
    { id: "profile", name: "Profil", icon: User, path: "/profile" }
  ];

  return (
    <div className="z-50 md:hidden">
      <button
        onClick={toggleMenu}
        className="fixed bottom-4 right-4 bg-[#4EACE5] p-3 rounded-full shadow-md hover:bg-[#3897CE] transition-colors z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in"
          onClick={toggleMenu}
        />
      )}

      {/* Menu */}
      <div
        className={`fixed bottom-16 right-4 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 z-50 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ width: "200px" }}
      >
        <div className="p-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              <item.icon className="w-5 h-5 text-[#4EACE5]" />
              <span className="text-gray-700 font-league-spartan">{item.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="border-t border-gray-200 p-4">
          <div className="text-[#4EACE5] font-bold font-league-spartan">LocalPuls</div>
          <div className="text-xs text-gray-500 mt-1">Deine lokale Community</div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

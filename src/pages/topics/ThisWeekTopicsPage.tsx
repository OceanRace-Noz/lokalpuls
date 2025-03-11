
import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/home/Footer";

const ThisWeekTopicsPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[rgba(242,242,242,1)] min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[#2C2C2C] p-4 flex items-center sticky top-0 z-10">
        <button 
          onClick={() => navigate("/")}
          className="p-2 text-white hover:opacity-80 transition-opacity mr-4"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-white text-xl font-medium">Diese Woche in Melle</h1>
      </div>
      
      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-6 flex-grow">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Umleitung Bahnhofstraße</h2>
          <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-[rgba(10,157,47,1)] text-white">#Verkehr</div>
          <p className="text-gray-700 mb-4">
            Die Umleitung an der Bahnhofstraße sorgt für Staus in den Nachbarstraßen. Wie lange müssen wir damit noch rechnen und gibt es alternative Routen?
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>7 Antworten</div>
            <div>53 Aufrufe</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Wohnungssuche für Studenten</h2>
          <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-[rgba(229,146,78,1)] text-white">#Wohnen</div>
          <p className="text-gray-700 mb-4">
            Kennt jemand günstige Wohnmöglichkeiten für Studenten in Melle? Ich studiere in Osnabrück und suche eine bezahlbare Alternative zur Stadt.
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>4 Antworten</div>
            <div>38 Aufrufe</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Stadtfest Planung</h2>
          <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-[rgba(209,44,155,1)] text-white">#Politik</div>
          <p className="text-gray-700 mb-4">
            Es gibt Gerüchte, dass das Stadtfest dieses Jahr größer ausfallen soll. Hat jemand Infos zu den Planungen und den genauen Terminen?
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>3 Antworten</div>
            <div>45 Aufrufe</div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ThisWeekTopicsPage;

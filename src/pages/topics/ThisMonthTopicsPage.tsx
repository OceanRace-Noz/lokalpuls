
import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/home/Footer";

const ThisMonthTopicsPage: React.FC = () => {
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
        <h1 className="text-white text-xl font-medium">Diesen Monat in Melle</h1>
      </div>
      
      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-6 flex-grow">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Mietpreise Innenstadt</h2>
          <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-[rgba(229,146,78,1)] text-white">#Wohnen</div>
          <p className="text-gray-700 mb-4">
            Die Mietpreise in der Innenstadt scheinen stark gestiegen zu sein. Hat jemand Erfahrungen oder Informationen dazu, wie sich der Wohnungsmarkt entwickelt?
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>8 Antworten</div>
            <div>67 Aufrufe</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Fahrradwege ausbauen</h2>
          <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-[rgba(10,157,47,1)] text-white">#Verkehr</div>
          <p className="text-gray-700 mb-4">
            Wie steht ihr zum Ausbau der Fahrradwege in Melle? Welche Strecken sollten priorisiert werden und gibt es Pläne seitens der Stadt?
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>12 Antworten</div>
            <div>94 Aufrufe</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Kulturangebot erweitern</h2>
          <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-[#1F45CD] text-white">#Freizeit</div>
          <p className="text-gray-700 mb-4">
            Was fehlt eurer Meinung nach im kulturellen Angebot in Melle? Welche Veranstaltungen oder Einrichtungen würdet ihr euch wünschen?
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>6 Antworten</div>
            <div>51 Aufrufe</div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ThisMonthTopicsPage;

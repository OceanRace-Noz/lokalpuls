
import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/home/Footer";

const YesterdayTopicsPage: React.FC = () => {
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
        <h1 className="text-white text-xl font-medium">Gestern in Melle</h1>
      </div>
      
      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-6 flex-grow">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Schwimmbad-Öffnungszeiten</h2>
          <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-[#1F45CD] text-white">#Freizeit</div>
          <p className="text-gray-700 mb-4">
            Kann mir jemand sagen, ob das Schwimmbad in Melle während der Ferienzeit längere Öffnungszeiten hat? Auf der Website finde ich keine aktuellen Informationen.
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>3 Antworten</div>
            <div>26 Aufrufe</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Straßensperrung Bismarckstraße</h2>
          <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-[rgba(10,157,47,1)] text-white">#Verkehr</div>
          <p className="text-gray-700 mb-4">
            Seit gestern ist die Bismarckstraße gesperrt. Weiß jemand, wie lange die Sperrung andauern wird und was genau dort gemacht wird?
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>5 Antworten</div>
            <div>42 Aufrufe</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Neue Bäckerei im Zentrum</h2>
          <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-[#1F45CD] text-white">#Freizeit</div>
          <p className="text-gray-700 mb-4">
            Hat jemand schon die neue Bäckerei in der Fußgängerzone ausprobiert? Wie sind die Backwaren und die Preise?
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>2 Antworten</div>
            <div>18 Aufrufe</div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default YesterdayTopicsPage;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, ChevronDown } from "lucide-react";

type City = "Melle" | "Osnabrück" | "Bramsche";

const Header: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City>("Melle");
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const cities: City[] = ["Melle", "Osnabrück", "Bramsche"];

  return (
    <div className="w-full">
      <div className="w-full" data-testid="top">
        <div className="bg-[#2C2C2C] w-full">
          <div className="flex justify-between items-center bg-[#2C2C2C] min-h-[50px] px-4">
            <div className="flex items-center gap-2 text-lg text-[rgba(246,246,246,1)] font-bold">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/32dbd905763e5af50c7069e025a965892f32ba851790801ea973110566f51451?placeholderIfAbsent=true"
                alt="LocalPuls Logo"
                className="w-10 h-10 object-contain rounded-[10px]"
              />
              <div className="font-league-spartan">LocalPuls</div>
            </div>
            <div className="flex items-center gap-2.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/6ab9ae18ddef4844631a6c60c52a81b9b4a0144d38fbcd49a6719ea36e529b4c?placeholderIfAbsent=true"
                alt="Notification"
                className="w-6 h-6 object-contain"
              />
              <Link to="/profile" className="relative">
                <div className="w-[50px] h-[50px] bg-[#4E5166] rounded-full flex items-center justify-center overflow-hidden">
                  <User className="text-white w-7 h-7" />
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/0f2b056e307a28b74570e86d1286633a01f25d0a6efc336bcbb56a495072c22f?placeholderIfAbsent=true"
                  alt="Status"
                  className="w-[15px] absolute bottom-0 right-0"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2C2C2C] w-full">
        <div className="container mx-auto max-w-4xl px-4 py-4 space-y-4">
          <div className="text-[rgba(232,232,232,1)] font-medium font-league-spartan">
            Guten Morgen, <span className="font-bold">Stefan!</span>
          </div>
          <div className="flex items-center gap-2 text-[rgba(78,172,229,1)] font-bold relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/34c18c8df71c138c3a9c219a0d2eddedd74c951d10f017f6a28b24c3b9acf487?placeholderIfAbsent=true"
              alt="Location"
              className="w-4 h-4"
            />
            <div 
              className="flex items-center gap-1 font-league-spartan cursor-pointer"
              onClick={() => setShowCityDropdown(!showCityDropdown)}
            >
              <div>{selectedCity}</div>
              <ChevronDown size={16} className={`transition-transform ${showCityDropdown ? 'rotate-180' : ''}`} />
            </div>
            
            {/* City Dropdown */}
            {showCityDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md z-20 min-w-[150px]">
                {cities.map((city) => (
                  <div 
                    key={city}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${selectedCity === city ? 'text-[rgba(78,172,229,1)]' : 'text-gray-800'}`}
                    onClick={() => {
                      setSelectedCity(city);
                      setShowCityDropdown(false);
                    }}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

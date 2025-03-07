
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Upload, Camera } from "lucide-react";

const Profile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <main className="bg-[rgba(242,242,242,1)] flex max-w-[480px] w-full flex-col items-stretch mx-auto pb-[75px] font-dongle">
      {/* Header */}
      <div className="bg-[#2C2C2C] w-full text-white p-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-[rgba(78,172,229,1)] hover:opacity-80 transition-opacity">
            <ChevronLeft size={24} />
            <span className="font-league-spartan ml-1">Zurück</span>
          </Link>
          <h1 className="font-league-spartan text-xl font-semibold mx-auto">
            Profil
          </h1>
        </div>
      </div>
      
      {/* Profile Content */}
      <div className="px-5 py-8">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center mb-8">
          <div 
            className="relative w-32 h-32 rounded-full bg-[#4E5166] flex items-center justify-center mb-4 overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-white text-5xl">
                <Camera size={48} />
              </div>
            )}
            
            {/* Upload Overlay */}
            <label 
              className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
            >
              <Upload className="text-white mb-2" size={32} />
              <span className="text-white text-lg font-medium">Bild ändern</span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
                className="hidden" 
              />
            </label>
            
            {/* Status Badge */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/0f2b056e307a28b74570e86d1286633a01f25d0a6efc336bcbb56a495072c22f?placeholderIfAbsent=true"
              alt="Status"
              className="absolute bottom-0 right-0 w-6 h-6 z-10"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#393939] mb-1">Stefan</h2>
          <p className="text-lg text-[#858585]">Melle</p>
        </div>
        
        {/* User Stats */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
          <h3 className="text-xl font-semibold text-[#393939] mb-4 font-league-spartan">Aktivität</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-[rgba(78,172,229,1)]">12</p>
              <p className="text-sm text-[#858585]">Fragen</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[rgba(78,172,229,1)]">48</p>
              <p className="text-sm text-[#858585]">Antworten</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[rgba(78,172,229,1)]">156</p>
              <p className="text-sm text-[#858585]">Upvotes</p>
            </div>
          </div>
        </div>
        
        {/* Settings Section */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold text-[#393939] mb-4 font-league-spartan">Einstellungen</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-xl text-[#393939]">Benachrichtigungen</span>
              <div className="w-12 h-6 bg-[rgba(78,172,229,1)] rounded-full flex items-center p-1 cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full transform translate-x-6"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-xl text-[#393939]">Standort</span>
              <div className="flex items-center text-[rgba(78,172,229,1)] font-bold">
                <span>Melle</span>
                <ChevronLeft size={20} className="transform rotate-180" />
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-xl text-[#393939]">Sprache</span>
              <div className="flex items-center text-[rgba(78,172,229,1)] font-bold">
                <span>Deutsch</span>
                <ChevronLeft size={20} className="transform rotate-180" />
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <span className="text-xl text-[#393939]">Theme</span>
              <div className="flex items-center text-[rgba(78,172,229,1)] font-bold">
                <span>Hell</span>
                <ChevronLeft size={20} className="transform rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;

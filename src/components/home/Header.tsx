import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full" data-testid="top">
        <div className="bg-[#2C2C2C] w-full">
          <div className="container mx-auto justify-between items-center bg-[#2C2C2C] flex min-h-[50px] gap-[40px_100px] px-4">
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
        <div className="container mx-auto px-4 py-4 space-y-4">
          <div className="text-[rgba(232,232,232,1)] font-medium font-league-spartan">
            Guten Morgen, <span className="font-bold">Stefan!</span>
          </div>
          <div className="flex items-center gap-2 text-[rgba(78,172,229,1)] font-bold">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/34c18c8df71c138c3a9c219a0d2eddedd74c951d10f017f6a28b24c3b9acf487?placeholderIfAbsent=true"
              alt="Location"
              className="w-4 h-4"
            />
            <div className="flex items-center gap-1 font-league-spartan">
              <div>Melle</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/451932fcf0ca91185692e62932f8b1e82ee0647b1ea7838a8722d5ad8711b419?placeholderIfAbsent=true"
                alt="Arrow"
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full" data-testid="top">
        <div className="bg-[#2C2C2C] w-full">
          <div className="justify-between items-center bg-[#2C2C2C] flex min-h-[50px] w-full gap-[40px_100px] pl-2.5 pr-5">
            <div className="self-stretch flex items-stretch text-lg text-[rgba(246,246,246,1)] font-bold whitespace-nowrap w-28 my-auto rounded-[10px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/32dbd905763e5af50c7069e025a965892f32ba851790801ea973110566f51451?placeholderIfAbsent=true"
                alt="LocalPuls Logo"
                className="aspect-[1] object-contain w-10 shrink-0 rounded-[10px]"
              />
              <div className="mt-5 font-league-spartan">LocalPuls</div>
            </div>
            <div className="self-stretch relative flex items-center gap-2.5 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/6ab9ae18ddef4844631a6c60c52a81b9b4a0144d38fbcd49a6719ea36e529b4c?placeholderIfAbsent=true"
                alt="Notification"
                className="aspect-[1] object-contain w-6 self-stretch z-0 shrink-0 my-auto"
              />
              <Link to="/profile" className="relative">
                <div className="w-[50px] h-[50px] bg-[#4E5166] rounded-full flex items-center justify-center overflow-hidden">
                  <User className="text-white w-7 h-7" />
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/0f2b056e307a28b74570e86d1286633a01f25d0a6efc336bcbb56a495072c22f?placeholderIfAbsent=true"
                  alt="Status"
                  className="aspect-[0.88] object-contain w-[15px] absolute z-0 shrink-0 h-[17px] right-px bottom-0"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

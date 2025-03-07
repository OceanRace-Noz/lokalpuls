
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
      <div className="justify-center items-stretch bg-[#2C2C2C] flex min-h-16 w-full flex-col overflow-hidden text-base px-5 py-3.5">
        <div className="text-[rgba(232,232,232,1)] font-medium font-league-spartan">
          Guten Morgen, <span className="font-bold">Stefan!</span>
        </div>
        <div className="flex items-center gap-0.5 text-[rgba(78,172,229,1)] font-bold whitespace-nowrap underline mt-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/34c18c8df71c138c3a9c219a0d2eddedd74c951d10f017f6a28b24c3b9acf487?placeholderIfAbsent=true"
            alt="Location"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch flex items-center gap-px my-auto font-league-spartan">
            <div className="self-stretch my-auto">Melle</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/451932fcf0ca91185692e62932f8b1e82ee0647b1ea7838a8722d5ad8711b419?placeholderIfAbsent=true"
              alt="Arrow"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


import React from "react";

const WeeklyQuestion: React.FC = () => {
  return (
    <div className="w-full pt-[15px] rounded-[0px_0px_0px_0px]">
      <div className="bg-[rgba(78,172,229,1)] flex flex-col items-stretch justify-center px-[5px] py-[3px] rounded-[5px]">
        <div className="bg-[rgba(224,235,242,1)] z-10 flex mt-[-5px] w-full flex-col items-stretch pt-4 pb-2.5 px-4 rounded-[5px] transition-transform duration-300 hover:scale-[1.01] cursor-pointer">
          <div className="text-[rgba(78,172,229,1)] text-sm font-medium">
            Frage der Woche
          </div>
          <div className="text-[#393939] text-2xl font-normal leading-tight mt-5">
            "Welche Veranstaltungen sollte man in Melle im Herbst auf keinen
            Fall verpassen?"
          </div>
          <div className="flex w-full items-center gap-[40px_100px] justify-between mt-5">
            <div className="text-[rgba(133,133,133,1)] text-xs font-bold leading-none underline self-stretch my-auto cursor-pointer hover:text-[rgba(78,172,229,1)] transition-colors">
              32 Antworten
            </div>
            <div className="self-stretch flex items-center gap-[9px] text-[10px] text-[#858585] font-medium whitespace-nowrap my-auto">
              <div className="self-stretch flex items-center gap-[3px] my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/3adcad42f4e024be9277137ce539b69cebb8c78e1633ee1408d7203867fde929?placeholderIfAbsent=true"
                  alt="Upvote"
                  className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch my-auto">58</div>
              </div>
              <div className="self-stretch flex items-center gap-[3px] my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/f53ea48d8f9a9246f4f05993f40dbea66a53c72cde277073bb1c5ecf73b100de?placeholderIfAbsent=true"
                  alt="Views"
                  className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch my-auto">12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyQuestion;

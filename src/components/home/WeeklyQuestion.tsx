
import React, { useState } from "react";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const WeeklyQuestion: React.FC = () => {
  const [voted, setVoted] = useState<'up' | 'down' | null>(null);
  const [votes, setVotes] = useState<number>(58);

  const handleVote = (voteType: 'up' | 'down') => {
    if (voted === voteType) {
      // Unvote
      setVoted(null);
      setVotes(58);
    } else if (voted === null) {
      // New vote
      setVoted(voteType);
      setVotes(voteType === 'up' ? 59 : 57);
    } else {
      // Change vote direction
      setVoted(voteType);
      setVotes(voteType === 'up' ? 59 : 57);
    }
  };

  return (
    <div className="w-full pt-[15px] rounded-[0px_0px_0px_0px]">
      <div className="bg-[rgba(78,172,229,1)] flex flex-col items-stretch justify-center px-[5px] py-[3px] rounded-[5px]">
        <Link 
          to="/question/weekly"
          className="bg-[rgba(224,235,242,1)] z-10 flex mt-[-5px] w-full flex-col items-stretch pt-4 pb-2.5 px-4 rounded-[5px] transition-all duration-300 hover:scale-[1.01] cursor-pointer"
        >
          <div className="text-[rgba(78,172,229,1)] text-sm font-medium font-league-spartan">
            Frage der Woche
          </div>
          <div className="text-[#393939] text-2xl font-normal leading-tight mt-5 font-dongle">
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
                  className={`aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto cursor-pointer ${voted === 'up' ? 'filter brightness-0 saturate-100 invert-[22%] sepia-[99%] saturate-[7451%] hue-rotate-[93deg] brightness-[96%] contrast-[110%]' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleVote('up');
                  }}
                />
                <div className={`self-stretch my-auto ${voted === 'up' ? 'text-green-500' : (voted === 'down' ? 'text-red-500' : '')}`}>{votes}</div>
              </div>
              <div className="self-stretch flex items-center gap-[3px] my-auto">
                <Eye size={12} className="text-[#858585]" />
                <div className="self-stretch my-auto">128</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WeeklyQuestion;

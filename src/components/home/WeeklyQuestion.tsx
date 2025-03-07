
import React, { useState } from "react";
import { Eye } from "lucide-react";

const WeeklyQuestion: React.FC = () => {
  const [voted, setVoted] = useState<'up' | 'down' | null>(null);
  const [votes, setVotes] = useState<number>(58);
  const [answered, setAnswered] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

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

  // Placeholder answers for the weekly question
  const placeholderAnswers = [
    {
      id: 1,
      author: "Maria L.",
      content: "Das Meller Herbstfest ist ein absolutes Muss! Tolle Stimmung, leckeres Essen und viele lokale Händler. Unbedingt hingehen!",
      likes: 12
    },
    {
      id: 2,
      author: "Thomas K.",
      content: "Die Kürbisausstellung im Gartencenter sollte man auf keinen Fall verpassen. Perfekt für tolle Herbstfotos und die Kinder lieben es.",
      likes: 8
    },
  ];

  return (
    <div className="w-full pt-[15px] rounded-[0px_0px_0px_0px]">
      <div className="bg-[rgba(78,172,229,1)] flex flex-col items-stretch justify-center px-[5px] py-[3px] rounded-[5px]">
        <div 
          className="bg-[rgba(224,235,242,1)] z-10 flex mt-[-5px] w-full flex-col items-stretch pt-4 pb-2.5 px-4 rounded-[5px] transition-all duration-300 hover:scale-[1.01] cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="text-[rgba(78,172,229,1)] text-sm font-medium font-league-spartan">
            Frage der Woche
          </div>
          <div className="text-[#393939] text-2xl font-normal leading-tight mt-5 font-dongle">
            "Welche Veranstaltungen sollte man in Melle im Herbst auf keinen
            Fall verpassen?"
          </div>
          <div className="flex w-full items-center gap-[40px_100px] justify-between mt-5">
            <div 
              className="text-[rgba(133,133,133,1)] text-xs font-bold leading-none underline self-stretch my-auto cursor-pointer hover:text-[rgba(78,172,229,1)] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setAnswered(!answered);
              }}
            >
              32 Antworten
            </div>
            <div className="self-stretch flex items-center gap-[9px] text-[10px] text-[#858585] font-medium whitespace-nowrap my-auto">
              <div className="self-stretch flex items-center gap-[3px] my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/3adcad42f4e024be9277137ce539b69cebb8c78e1633ee1408d7203867fde929?placeholderIfAbsent=true"
                  alt="Upvote"
                  className={`aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto cursor-pointer ${voted === 'up' ? 'filter brightness-0 saturate-100 invert-[22%] sepia-[99%] saturate-[7451%] hue-rotate-[93deg] brightness-[96%] contrast-[110%]' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVote('up');
                  }}
                />
                <div className={`self-stretch my-auto ${voted === 'up' ? 'text-green-500' : (voted === 'down' ? 'text-red-500' : '')}`}>{votes}</div>
              </div>
              <div className="self-stretch flex items-center gap-[3px] my-auto">
                <Eye size={12} className="text-[#858585]" />
                <div className="self-stretch my-auto">12</div>
              </div>
            </div>
          </div>
          
          {/* Expanded answers section with animation */}
          {expanded && (
            <div className="mt-4 border-t border-gray-200 pt-3 animate-fade-in">
              <h4 className="text-[#393939] text-xl font-dongle mb-2">Antworten:</h4>
              {placeholderAnswers.map((answer) => (
                <div key={answer.id} className="bg-white p-3 rounded-md mb-2 shadow-sm animate-scale-in transition-all hover:shadow-md">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-blue-500 font-medium text-sm">{answer.author}</span>
                    <span className="text-gray-500 text-xs">{answer.likes} Likes</span>
                  </div>
                  <p className="text-gray-700 text-sm">{answer.content}</p>
                </div>
              ))}
              <button 
                className="text-[rgba(78,172,229,1)] text-sm w-full text-center mt-2 hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Alle Antworten anzeigen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeeklyQuestion;

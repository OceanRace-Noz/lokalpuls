
import React, { useState } from "react";
import { Eye } from "lucide-react";

interface QuestionCardProps {
  title: string;
  category: string;
  categoryColor: string;
  question: string;
  votes: number;
  hasExpertAnswer: boolean;
  answerCount: number;
  viewCount: number;
  userName: string;
  userImage: string;
  userStatusImage: string;
  bookmarkImage: string;
  upvoteImage: string;
  downvoteImage: string;
  titleColor?: string;
  categoryType?: 'freizeit' | 'verkehr' | 'politik' | 'wohnen';
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  category,
  categoryColor,
  question,
  votes: initialVotes,
  hasExpertAnswer,
  answerCount,
  viewCount,
  userName,
  userImage,
  userStatusImage,
  bookmarkImage,
  upvoteImage,
  downvoteImage,
  titleColor,
  categoryType = 'freizeit',
}) => {
  const [votes, setVotes] = useState(initialVotes);
  const [voted, setVoted] = useState<'up' | 'down' | null>(null);
  const [bookmarked, setBookmarked] = useState(false);

  // Background styles based on category type
  const bgStyles = {
    freizeit: "linear-gradient(180deg, #040C29 0%, #08164C 100%)",
    verkehr: "linear-gradient(180deg, #042904 0%, #084C11 100%)",
    politik: "linear-gradient(180deg, #29041E 0%, #5F1348 100%)",
    wohnen: "linear-gradient(180deg, #292504 0%, #483704 100%)",
  };
  
  // Title color mapping
  const titleColorMap = {
    'freizeit': '#9EB3FF',
    'verkehr': '#CDE8D0',
    'politik': '#EACAE0',
    'wohnen': '#DBDBDB',
  };
  
  const actualTitleColor = titleColor || titleColorMap[categoryType];

  const handleVote = (voteType: 'up' | 'down', e: React.MouseEvent) => {
    // Stop the event from propagating to parent elements (Link)
    e.stopPropagation();
    e.preventDefault();
    
    if (voted === voteType) {
      // Unvote
      setVoted(null);
      setVotes(initialVotes);
    } else if (voted === null) {
      // New vote
      setVoted(voteType);
      setVotes(voteType === 'up' ? initialVotes + 1 : initialVotes - 1);
    } else {
      // Change vote direction
      setVoted(voteType);
      setVotes(voteType === 'up' ? initialVotes + 2 : initialVotes - 2);
    }
  };
  
  const handleBookmark = (e: React.MouseEvent) => {
    // Stop the event from propagating to parent elements (Link)
    e.stopPropagation();
    e.preventDefault();
    setBookmarked(!bookmarked);
  };
  
  return (
    <div
      className="flex w-full flex-col overflow-hidden items-stretch justify-center px-3 py-[30px] rounded-[10px] transition-transform duration-300 hover:scale-[1.01] cursor-pointer animate-fade-in"
      style={{ background: bgStyles[categoryType] }}
    >
      <div className="w-full">
        <div className="flex w-full flex-col items-stretch">
          <div
            className="flex w-full items-stretch text-xl font-semibold leading-[20px] justify-between font-league-spartan"
            style={{ color: actualTitleColor }}
          >
            <div className="flex-1 shrink basis-[0%]">{title}</div>
            <img
              src={bookmarkImage}
              alt="Bookmark"
              className={`aspect-[1] object-contain w-5 shrink-0 hover:opacity-80 transition-opacity ${bookmarked ? 'filter brightness-0 saturate-100 invert-[22%] sepia-[99%] saturate-[7451%] hue-rotate-[93deg] brightness-[96%] contrast-[110%]' : ''}`}
              onClick={handleBookmark}
            />
          </div>
          <div
            className="inline-block text-sm text-[#F6F6F6] font-normal whitespace-nowrap leading-none mt-3 px-[15px] py-[9px] rounded-sm w-auto self-start"
            style={{ backgroundColor: categoryColor }}
          >
            {category}
          </div>
        </div>
        <div className="flex w-full items-center justify-between mt-[30px]">
          <div className="text-[#C8C8C8] text-2xl font-normal leading-tight self-stretch flex-1 shrink basis-[0%] my-auto">
            {question}
          </div>
          <div className="self-stretch flex items-center gap-2.5 w-[30px] my-auto pl-2.5">
            <div className="self-stretch flex w-5 flex-col items-center my-auto">
              <div className="flex w-5 flex-col items-center text-xl text-[#858585] font-normal whitespace-nowrap leading-none justify-center">
                <img
                  src={upvoteImage}
                  alt="Upvote"
                  className={`aspect-[0.87] object-contain w-full hover:opacity-80 transition-opacity cursor-pointer ${voted === 'up' ? 'filter brightness-0 saturate-100 invert-[22%] sepia-[99%] saturate-[7451%] hue-rotate-[93deg] brightness-[96%] contrast-[110%]' : ''}`}
                  onClick={(e) => handleVote('up', e)}
                />
                <div className={`mt-1.5 ${voted === 'up' ? 'text-green-500' : (voted === 'down' ? 'text-red-500' : '')}`}>{votes}</div>
              </div>
              <div className="border min-h-px w-3 mt-[9px] border-[rgba(57,57,57,1)] border-solid" />
              <div className="flex w-5 items-center gap-0.5 justify-center mt-[9px]">
                <img
                  src={downvoteImage}
                  alt="Downvote"
                  className={`aspect-[0.87] object-contain w-5 self-stretch my-auto hover:opacity-80 transition-opacity cursor-pointer ${voted === 'down' ? 'filter brightness-0 saturate-100 invert-[15%] sepia-[96%] saturate-[7499%] hue-rotate-[350deg] brightness-[103%] contrast-[104%]' : ''}`}
                  onClick={(e) => handleVote('down', e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-end gap-4 justify-between mt-[30px]">
          <div className="flex flex-col items-stretch w-[204px]">
            <div className="flex w-full items-center gap-1 text-sm text-[#858585] font-normal leading-none">
              <img
                src={
                  hasExpertAnswer
                    ? "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/09115157848aede6ae2017c02f3713ccddacf8371250aa21d8d68fb77ba52692?placeholderIfAbsent=true"
                    : "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/b3af46201b8d84b79fad764d012972889c152056d9b5a231860299d508cf6387?placeholderIfAbsent=true"
                }
                alt="Expert"
                className="aspect-[1] object-contain w-[15px] self-stretch shrink-0 my-auto rounded-[1px]"
              />
              <div className="self-stretch my-auto">
                {hasExpertAnswer
                  ? "Vom Expertenteam beantwortet"
                  : "Vom Expertenteam noch nicht beantwortet"}
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-base text-[#C8C8C8] mt-[15px]">
              <div className="self-stretch flex items-center gap-1 font-bold my-auto hover:underline cursor-pointer">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/5c6c02e022f8e3fe38862aa3c1a33582fb29feabe5c1020862f95f8d8cce4d29?placeholderIfAbsent=true"
                  alt="Answers"
                  className="aspect-[1] object-contain w-[15px] self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch my-auto">
                  {answerCount} Antworten
                </div>
              </div>
              <div className="self-stretch flex items-center gap-1 font-medium whitespace-nowrap my-auto ml-2">
                <Eye size={15} className="text-[#858585]" />
                <div className="self-stretch my-auto">{viewCount}</div>
              </div>
            </div>
          </div>
          <div className="flex items-end gap-2 text-xs text-[rgba(57,57,57,1)] font-normal leading-loose">
            <div className="flex items-end gap-1">
              <span className="text-[rgba(200,200,200,1)]">von</span>{" "}
              <span className="font-bold text-[rgba(113,183,206,1)] hover:underline cursor-pointer">
                {userName}
              </span>
            </div>
            <div className="relative">
              <img
                src={userImage}
                alt="User"
                className="aspect-[1] object-contain w-10 shrink-0 rounded-[50%] hover:opacity-90 transition-opacity cursor-pointer"
              />
              <img
                src={userStatusImage}
                alt="Status"
                className="aspect-[0.79] object-contain w-[15px] absolute shrink-0 h-[19px] right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

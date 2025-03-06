import React from "react";

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
  backgroundColor?: string;
  titleColor?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  category,
  categoryColor,
  question,
  votes,
  hasExpertAnswer,
  answerCount,
  viewCount,
  userName,
  userImage,
  userStatusImage,
  bookmarkImage,
  upvoteImage,
  downvoteImage,
  backgroundColor = "linear-gradient(180deg,#040C29_0%,#08164C_100%)",
  titleColor = "#9EB3FF",
}) => {
  return (
    <div
      className="flex w-full flex-col overflow-hidden items-stretch justify-center px-3 py-[30px] rounded-[10px]"
      style={{ background: backgroundColor }}
    >
      <div className="w-full">
        <div className="flex w-full flex-col items-stretch">
          <div
            className="flex w-full items-stretch text-xl font-semibold leading-none justify-between"
            style={{ color: titleColor }}
          >
            <div className="flex-1 shrink basis-[0%]">{title}</div>
            <img
              src={bookmarkImage}
              alt="Bookmark"
              className="aspect-[1] object-contain w-5 shrink-0"
            />
          </div>
          <div
            className="gap-2.5 text-sm text-[#F6F6F6] font-normal whitespace-nowrap leading-none mt-3 px-[15px] py-[9px] rounded-sm"
            style={{ backgroundColor: categoryColor }}
          >
            {category}
          </div>
        </div>
        <div className="flex w-full items-center justify-between mt-[30px]">
          <div className="text-[#C8C8C8] text-2xl font-normal leading-5 self-stretch flex-1 shrink basis-[0%] my-auto">
            {question}
          </div>
          <div className="self-stretch flex items-center gap-2.5 w-[30px] my-auto pl-2.5">
            <div className="self-stretch flex w-5 flex-col items-center my-auto">
              <div className="flex w-5 flex-col items-center text-xl text-[#858585] font-normal whitespace-nowrap leading-none justify-center">
                <img
                  src={upvoteImage}
                  alt="Upvote"
                  className="aspect-[0.87] object-contain w-full"
                />
                <div className="mt-1.5">{votes}</div>
              </div>
              <div className="border min-h-px w-3 mt-[9px] border-[rgba(57,57,57,1)] border-solid" />
              <div className="rotate-[-3.141592653589793rad] flex w-5 items-center gap-0.5 justify-center mt-[9px]">
                <img
                  src={downvoteImage}
                  alt="Downvote"
                  className="aspect-[0.87] object-contain w-5 self-stretch my-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-4 justify-between mt-[30px]">
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
              <div className="self-stretch flex items-center gap-1 font-bold my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/5c6c02e022f8e3fe38862aa3c1a33582fb29feabe5c1020862f95f8d8cce4d29?placeholderIfAbsent=true"
                  alt="Answers"
                  className="aspect-[1] object-contain w-[15px] self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch my-auto">
                  {answerCount} Antworten
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/28d5e78c94b56e5fef31251950ba4098f18269339d311939faf06e17f0c3c388?placeholderIfAbsent=true"
                alt=""
                className="object-contain w-0 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch flex items-center gap-1 font-medium whitespace-nowrap my-auto">
                <div className="self-stretch flex w-[15px] shrink-0 h-[15px] my-auto" />
                <div className="self-stretch my-auto">{viewCount}</div>
              </div>
            </div>
          </div>
          <div className="relative flex gap-2 text-xs text-[rgba(57,57,57,1)] font-normal text-right leading-loose">
            <div className="self-stretch flex-1 shrink basis-[0%] z-0 gap-2.5 w-[67px] pb-1">
              <span className="text-[rgba(200,200,200,1)]">von</span>{" "}
              <span className="font-bold text-[rgba(113,183,206,1)]">
                {userName}
              </span>
            </div>
            <img
              src={userImage}
              alt="User"
              className="aspect-[1] object-contain w-10 z-0 shrink-0 rounded-[50%]"
            />
            <img
              src={userStatusImage}
              alt="Status"
              className="aspect-[0.79] object-contain w-[15px] absolute z-0 shrink-0 h-[19px] right-0 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

import React, { useState } from "react";

interface OpinionOption {
  id: string;
  text: string;
  emoji: string;
}

const options: OpinionOption[] = [
  { id: "unbedingt", text: "unbedingt", emoji: "🤩" },
  { id: "nett", text: "wäre ganz nett", emoji: "😊" },
  { id: "egal", text: "ist mir egal", emoji: "😒" },
  { id: "eher-nein", text: "eher nein", emoji: "😑" },
  { id: "nein", text: "nein", emoji: "🤨" },
];

const OpinionPoll: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  return (
    <div className="w-full rounded-[0px_0px_0px_0px]">
      <div className="bg-[rgba(229,146,78,0.2)] shadow-[0px_2px_10px_rgba(0,0,0,0.15)] flex w-full flex-col pt-[25px] pb-[13px] px-3 rounded-[10px] border-[rgba(229,146,78,0.3)] border-solid border-2">
        <div className="text-[rgba(217,98,0,1)] text-sm font-medium">
          Deine Meinung
        </div>
        <div className="text-[#393939] text-[26px] font-bold leading-none self-stretch mt-[15px]">
          Brauchen wir einen neuen Supermarkt in Gesmold?
        </div>
        <div className="flex flex-wrap gap-2 mt-[21px]">
          {options.slice(0, 2).map((option) => (
            <button
              key={option.id}
              className={`rounded bg-[rgba(255,253,251,1)] border flex items-center gap-[5px] whitespace-nowrap justify-center px-2.5 py-[5px] border-[rgba(210,210,210,1)] border-solid ${
                selectedOption === option.id
                  ? "border-[rgba(78,172,229,1)] border-2"
                  : ""
              }`}
              onClick={() => handleOptionSelect(option.id)}
            >
              <div className="text-[#393939] text-xl leading-none self-stretch my-auto">
                {option.text}
              </div>
              <div className="text-[rgba(57,57,57,1)] text-base leading-none self-stretch my-auto">
                {option.emoji}
              </div>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {options.slice(2).map((option) => (
            <button
              key={option.id}
              className={`rounded bg-[rgba(255,253,251,1)] border flex items-center gap-[5px] px-2.5 py-[5px] border-[rgba(210,210,210,1)] border-solid ${
                selectedOption === option.id
                  ? "border-[rgba(78,172,229,1)] border-2"
                  : ""
              }`}
              onClick={() => handleOptionSelect(option.id)}
            >
              <div className="text-[#393939] text-xl leading-none self-stretch my-auto">
                {option.text}
              </div>
              <div className="text-[rgba(57,57,57,1)] text-base leading-none self-stretch my-auto">
                {option.emoji}
              </div>
            </button>
          ))}
        </div>
        <div className="self-center flex items-center gap-[5px] mt-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/201b8e8d76f9fcd05dac9a2e0c5b056a9ce02d5a9935068ebae6786d999dbd03?placeholderIfAbsent=true"
            alt="Progress"
            className="aspect-[10.99] object-contain w-[22px] self-stretch shrink-0 my-auto"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/3c641b99fbf59f8b821f8a24458cbf5e0f59602689465e1b24b1a2562e64cd3a?placeholderIfAbsent=true"
            alt="Dot"
            className="aspect-[5.99] object-contain w-3 self-stretch shrink-0 my-auto"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/3c641b99fbf59f8b821f8a24458cbf5e0f59602689465e1b24b1a2562e64cd3a?placeholderIfAbsent=true"
            alt="Dot"
            className="aspect-[5.99] object-contain w-3 self-stretch shrink-0 my-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default OpinionPoll;

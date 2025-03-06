
import React, { useState } from "react";

type Topic = {
  id: string;
  number: string;
  title: string;
  color: string;
  icon: string;
};

const topics: Topic[] = [
  {
    id: "1",
    number: "#1",
    title: '"Wo gibt\'s Erdbeeren?"',
    color: "#7bb2e6",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a34f267e9417cb7bcef73766c2d0d6c4d4f52da54a64e521c97ace0688881644?placeholderIfAbsent=true",
  },
  {
    id: "2",
    number: "#2",
    title: '"Neues Hofcafé in Melle"',
    color: "#F1AB7B",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a3bfcb4976dad092ebe9d540a213336e8801e36d0684f66cc6e10526533f4e34?placeholderIfAbsent=true",
  },
  {
    id: "3",
    number: "#3",
    title: '"Vorbereitung der Krankenhäuser"',
    color: "#70B894",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/df9a1fdbc59f9318b4a910bb577c7e13900738e2bb906a094a49bd3dea1d821d?placeholderIfAbsent=true",
  },
  {
    id: "4",
    number: "#4",
    title: '"Neuer Supermarkt in Gesmold"',
    color: "#B984C8",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/28ed1209a7f3ee11bedd572f537d8d78df26d625e4a3d4c537c3f9b1da240796?placeholderIfAbsent=true",
  },
  {
    id: "5",
    number: "#5",
    title: '"Kita-Plätze"',
    color: "#D37B7D",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a75d79a3a85805474216b8881e8bda389fce214d7557bb9849df138e7b568d1a?placeholderIfAbsent=true",
  },
];

type TimeFilterOption = "Heute" | "Gestern" | "Diese Woche" | "Diesen Monat";

const TopicsList: React.FC = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<TimeFilterOption>("Heute");

  return (
    <div className="self-center flex w-[335px] max-w-full flex-col items-stretch mt-[17px]">
      <div className="w-full">
        <div className="text-[rgba(219,219,219,1)] text-base font-medium font-league-spartan">
          Das beschäftigt Melle
        </div>
        <div className="bg-[rgba(50,50,50,1)] flex w-full items-center gap-[7px] text-sm text-[rgba(83,83,83,1)] font-normal leading-none justify-between mt-[19px]">
          {(
            [
              "Heute",
              "Gestern",
              "Diese Woche",
              "Diesen Monat",
            ] as TimeFilterOption[]
          ).map((option) => (
            <button
              key={option}
              className={`self-stretch ${
                selectedFilter === option
                  ? "bg-[rgba(65,125,181,1)] text-[rgba(244,244,244,1)] font-bold"
                  : "bg-[rgba(219,219,219,1)]"
              } gap-2.5 whitespace-nowrap my-auto px-2.5 py-2 rounded-[5px] font-league-spartan transition-all duration-300 hover:opacity-90 active:scale-95`}
              onClick={() => setSelectedFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="self-center w-[311px] max-w-full font-normal mt-[30px]">
        <div className="w-full">
          {topics.map((topic, index) => (
            <React.Fragment key={topic.id}>
              <div className="flex min-h-[18px] w-full items-center gap-[40px_100px] justify-between hover:opacity-80 transition-opacity cursor-pointer">
                <div className="self-stretch flex items-center gap-[5px] my-auto">
                  <div
                    style={{ color: topic.color }}
                    className="text-base self-stretch my-auto"
                  >
                    {topic.number}
                  </div>
                  <div
                    style={{ color: topic.color }}
                    className="text-2xl self-stretch my-auto"
                  >
                    {topic.title}
                  </div>
                </div>
                <img
                  src={topic.icon}
                  alt="Icon"
                  className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
                />
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/381176adfb1801e11719cdb964993289012780f23fdfac0e5f401de76dac903f?placeholderIfAbsent=true"
                alt="Divider"
                className="aspect-[333.33] object-contain w-full mt-3"
              />
              {index < topics.length - 1 && <div className="mt-3"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="text-[rgba(219,219,219,1)] text-lg text-center mt-[5px] cursor-pointer hover:underline transition-all duration-200">
          Alle ansehen
        </div>
      </div>
    </div>
  );
};

export default TopicsList;

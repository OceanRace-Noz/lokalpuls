
import React from "react";
import { Link } from "react-router-dom";
import { Topic } from "@/types/topic";

interface TopicItemProps {
  topic: Topic;
  index: number;
  isLast: boolean;
}

const TopicItem: React.FC<TopicItemProps> = ({ topic, index, isLast }) => {
  // Map the topic ID to the appropriate route
  const getTopicRoute = (topicType: string, id: string) => {
    switch (id) {
      case "1":
        return "/question/1"; // Erdbeeren question
      case "2":
        return "/question/2"; // Hofcafé question
      case "3":
        return "/question/political-participation"; // Political participation
      case "4":
        return "/question/best-districts"; // Best districts
      case "5":
        return "/question/3"; // Kita-Plätze
      default:
        return `/question/${id}`;
    }
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <Link 
          to={getTopicRoute(topic.categoryType, topic.id)}
          className="flex min-h-[18px] w-full items-center gap-[40px_100px] justify-between hover:opacity-80 transition-opacity cursor-pointer hover-scale"
        >
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
        </Link>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/381176adfb1801e11719cdb964993289012780f23fdfac0e5f401de76dac903f?placeholderIfAbsent=true"
        alt="Divider"
        className="aspect-[333.33] object-contain w-full mt-3"
      />
      {!isLast && <div className="mt-3"></div>}
    </>
  );
};

export default TopicItem;

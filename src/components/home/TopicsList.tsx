
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Topic, TimeFilterOption } from "@/types/topic";
import TimeFilter from "./TimeFilter";
import TopicItem from "./TopicItem";

const topics: Topic[] = [
  {
    id: "1",
    number: "#1",
    title: '"Wo gibt\'s Erdbeeren?"',
    color: "#7bb2e6",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a34f267e9417cb7bcef73766c2d0d6c4d4f52da54a64e521c97ace0688881644?placeholderIfAbsent=true",
    categoryType: "freizeit",
    category: "Freizeit",
    answers: [
      { 
        author: "Maria Schmidt", 
        content: "Im Hofladen Meier in Buer gibt es aktuell super leckere Erdbeeren! Die haben noch bis Ende der Woche geöffnet." 
      },
      { 
        author: "Thomas Weber", 
        content: "Auf dem Wochenmarkt am Donnerstag hatte der Stand von Familie Brinkmann noch welche. Unbedingt früh hingehen, die sind schnell weg!" 
      },
      { 
        author: "Sabine Müller", 
        content: "Bei 'Erdbeeren selbst pflücken' an der Oldendorfer Straße kann man noch super Erdbeeren selbst pflücken. Wir waren gestern dort." 
      }
    ]
  },
  {
    id: "2",
    number: "#2",
    title: '"Neues Hofcafé in Melle"',
    color: "#F1AB7B",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a3bfcb4976dad092ebe9d540a213336e8801e36d0684f66cc6e10526533f4e34?placeholderIfAbsent=true",
    categoryType: "freizeit",
    category: "Freizeit",
    answers: [
      { 
        author: "Julia Klein", 
        content: "Das neue Café hat letzten Samstag eröffnet. Die selbstgemachten Kuchen sind fantastisch!" 
      },
      { 
        author: "Michael Berger", 
        content: "Habe gehört, dass sie auch regionale Produkte verkaufen. Hat jemand schon Erfahrungen damit gemacht?" 
      }
    ]
  },
  {
    id: "3",
    number: "#3",
    title: '"Vorbereitung der Krankenhäuser"',
    color: "#70B894",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/df9a1fdbc59f9318b4a910bb577c7e13900738e2bb906a094a49bd3dea1d821d?placeholderIfAbsent=true",
    categoryType: "politik",
    category: "Politik",
  },
  {
    id: "4",
    number: "#4",
    title: '"Neuer Supermarkt in Gesmold"',
    color: "#B984C8",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/28ed1209a7f3ee11bedd572f537d8d78df26d625e4a3d4c537c3f9b1da240796?placeholderIfAbsent=true",
    categoryType: "wohnen",
    category: "Wohnen",
  },
  {
    id: "5",
    number: "#5",
    title: '"Kita-Plätze"',
    color: "#D37B7D",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a75d79a3a85805474216b8881e8bda389fce214d7557bb9849df138e7b568d1a?placeholderIfAbsent=true",
    categoryType: "politik",
    category: "Politik",
  },
];

const TopicsList: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<TimeFilterOption>("Heute");
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const handleFilterChange = (filter: TimeFilterOption) => {
    setSelectedFilter(filter);
  };

  const handleTopicClick = (topicId: string) => {
    if (expandedTopic === topicId) {
      setExpandedTopic(null);
    } else {
      setExpandedTopic(topicId);
      
      // Show toast for topics without answers data
      const topic = topics.find(t => t.id === topicId);
      if (!topic?.answers) {
        toast({
          title: "Information",
          description: "Antworten werden geladen...",
        });
      }
    }
  };

  return (
    <div className="self-center flex w-[335px] max-w-full flex-col items-stretch mt-[17px]">
      <div className="w-full">
        <div className="text-[rgba(219,219,219,1)] text-base font-medium font-league-spartan">
          Das beschäftigt Melle
        </div>
        <TimeFilter 
          selectedFilter={selectedFilter} 
          onFilterChange={handleFilterChange} 
        />
      </div>
      <div className="self-center w-[311px] max-w-full font-normal mt-[30px]">
        <div className="w-full">
          {topics.map((topic, index) => (
            <TopicItem 
              key={topic.id} 
              topic={topic} 
              index={index} 
              isLast={index === topics.length - 1} 
            />
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

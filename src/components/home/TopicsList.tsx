
import React, { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { Topic, TimeFilterOption } from "@/types/topic";
import TimeFilter from "./TimeFilter";
import TopicItem from "./TopicItem";

// Today's topics
const todayTopics: Topic[] = [
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

// Yesterday's topics
const yesterdayTopics: Topic[] = [
  {
    id: "y1",
    number: "#1",
    title: '"Schwimmbad-Öffnungszeiten"',
    color: "#7bb2e6",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a34f267e9417cb7bcef73766c2d0d6c4d4f52da54a64e521c97ace0688881644?placeholderIfAbsent=true",
    categoryType: "freizeit",
    category: "Freizeit",
  },
  {
    id: "y2",
    number: "#2",
    title: '"Straßensperrung Bismarckstraße"',
    color: "#6AC04B",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/df9a1fdbc59f9318b4a910bb577c7e13900738e2bb906a094a49bd3dea1d821d?placeholderIfAbsent=true",
    categoryType: "verkehr",
    category: "Verkehr",
  },
  {
    id: "y3",
    number: "#3",
    title: '"Neue Bäckerei im Zentrum"',
    color: "#F1AB7B",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a3bfcb4976dad092ebe9d540a213336e8801e36d0684f66cc6e10526533f4e34?placeholderIfAbsent=true",
    categoryType: "freizeit",
    category: "Freizeit",
  },
  {
    id: "y4",
    number: "#4",
    title: '"Neue Hundezone im Park"',
    color: "#70B894",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/28ed1209a7f3ee11bedd572f537d8d78df26d625e4a3d4c537c3f9b1da240796?placeholderIfAbsent=true",
    categoryType: "freizeit",
    category: "Freizeit",
  },
  {
    id: "y5",
    number: "#5",
    title: '"Schulbussituation"',
    color: "#6AC04B",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/df9a1fdbc59f9318b4a910bb577c7e13900738e2bb906a094a49bd3dea1d821d?placeholderIfAbsent=true",
    categoryType: "verkehr",
    category: "Verkehr",
  },
];

// This Week's topics
const thisWeekTopics: Topic[] = [
  {
    id: "w1",
    number: "#1",
    title: '"Umleitung Bahnhofstraße"',
    color: "#6AC04B",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/df9a1fdbc59f9318b4a910bb577c7e13900738e2bb906a094a49bd3dea1d821d?placeholderIfAbsent=true",
    categoryType: "verkehr",
    category: "Verkehr",
  },
  {
    id: "w2",
    number: "#2",
    title: '"Wohnungssuche für Studenten"',
    color: "#B984C8",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/28ed1209a7f3ee11bedd572f537d8d78df26d625e4a3d4c537c3f9b1da240796?placeholderIfAbsent=true",
    categoryType: "wohnen",
    category: "Wohnen",
  },
  {
    id: "w3",
    number: "#3",
    title: '"Stadtfest Planung"',
    color: "#D37B7D",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a75d79a3a85805474216b8881e8bda389fce214d7557bb9849df138e7b568d1a?placeholderIfAbsent=true",
    categoryType: "politik",
    category: "Politik",
  },
  {
    id: "w4",
    number: "#4",
    title: '"Kinderbetreuung am Wochenende"',
    color: "#7bb2e6",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a34f267e9417cb7bcef73766c2d0d6c4d4f52da54a64e521c97ace0688881644?placeholderIfAbsent=true",
    categoryType: "freizeit",
    category: "Freizeit",
  },
  {
    id: "w5",
    number: "#5",
    title: '"Renovierung Marktplatz"',
    color: "#D37B7D",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a75d79a3a85805474216b8881e8bda389fce214d7557bb9849df138e7b568d1a?placeholderIfAbsent=true",
    categoryType: "politik",
    category: "Politik",
  },
];

// This Month's topics
const thisMonthTopics: Topic[] = [
  {
    id: "m1",
    number: "#1",
    title: '"Mietpreise Innenstadt"',
    color: "#B984C8",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/28ed1209a7f3ee11bedd572f537d8d78df26d625e4a3d4c537c3f9b1da240796?placeholderIfAbsent=true",
    categoryType: "wohnen",
    category: "Wohnen",
  },
  {
    id: "m2",
    number: "#2",
    title: '"Fahrradwege ausbauen"',
    color: "#6AC04B",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/df9a1fdbc59f9318b4a910bb577c7e13900738e2bb906a094a49bd3dea1d821d?placeholderIfAbsent=true",
    categoryType: "verkehr",
    category: "Verkehr",
  },
  {
    id: "m3",
    number: "#3",
    title: '"Kulturangebot erweitern"',
    color: "#7bb2e6",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a34f267e9417cb7bcef73766c2d0d6c4d4f52da54a64e521c97ace0688881644?placeholderIfAbsent=true",
    categoryType: "freizeit",
    category: "Freizeit",
  },
  {
    id: "m4",
    number: "#4",
    title: '"Sozialwohnungen"',
    color: "#B984C8",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/28ed1209a7f3ee11bedd572f537d8d78df26d625e4a3d4c537c3f9b1da240796?placeholderIfAbsent=true",
    categoryType: "wohnen",
    category: "Wohnen",
  },
  {
    id: "m5",
    number: "#5",
    title: '"Nachhaltige Stadtentwicklung"',
    color: "#D37B7D",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a75d79a3a85805474216b8881e8bda389fce214d7557bb9849df138e7b568d1a?placeholderIfAbsent=true",
    categoryType: "politik",
    category: "Politik",
  },
];

// Osnabrück topics data
const osnabrueckTopics: Record<TimeFilterOption, Topic[]> = {
  "Heute": [
    {
      id: "o1",
      number: "#1",
      title: '"Wo ist der beste Biergarten?"',
      color: "#7bb2e6",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a34f267e9417cb7bcef73766c2d0d6c4d4f52da54a64e521c97ace0688881644?placeholderIfAbsent=true",
      categoryType: "freizeit",
      category: "Freizeit",
    },
    {
      id: "o2",
      number: "#2",
      title: '"Studentenwohnungen gesucht"',
      color: "#B984C8",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/28ed1209a7f3ee11bedd572f537d8d78df26d625e4a3d4c537c3f9b1da240796?placeholderIfAbsent=true",
      categoryType: "wohnen",
      category: "Wohnen",
    },
    {
      id: "o3",
      number: "#3",
      title: '"Verkehr am Neumarkt"',
      color: "#6AC04B",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/df9a1fdbc59f9318b4a910bb577c7e13900738e2bb906a094a49bd3dea1d821d?placeholderIfAbsent=true",
      categoryType: "verkehr",
      category: "Verkehr",
    },
    {
      id: "o4",
      number: "#4",
      title: '"Stadtfest Planung"',
      color: "#D37B7D",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a75d79a3a85805474216b8881e8bda389fce214d7557bb9849df138e7b568d1a?placeholderIfAbsent=true",
      categoryType: "politik",
      category: "Politik",
    },
    {
      id: "o5",
      number: "#5",
      title: '"Zoo Eintrittspreise"',
      color: "#7bb2e6",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a34f267e9417cb7bcef73766c2d0d6c4d4f52da54a64e521c97ace0688881644?placeholderIfAbsent=true",
      categoryType: "freizeit",
      category: "Freizeit",
    },
  ],
  "Gestern": [
    {
      id: "oy1",
      number: "#1",
      title: '"Museum Eröffnung"',
      color: "#7bb2e6",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a34f267e9417cb7bcef73766c2d0d6c4d4f52da54a64e521c97ace0688881644?placeholderIfAbsent=true",
      categoryType: "freizeit",
      category: "Freizeit",
    },
  ],
  "Diese Woche": [
    {
      id: "ow1",
      number: "#1",
      title: '"Baustelle Hauptbahnhof"',
      color: "#6AC04B",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/df9a1fdbc59f9318b4a910bb577c7e13900738e2bb906a094a49bd3dea1d821d?placeholderIfAbsent=true",
      categoryType: "verkehr",
      category: "Verkehr",
    },
  ],
  "Diesen Monat": [
    {
      id: "om1",
      number: "#1",
      title: '"Neue Radwege"',
      color: "#6AC04B",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/df9a1fdbc59f9318b4a910bb577c7e13900738e2bb906a094a49bd3dea1d821d?placeholderIfAbsent=true",
      categoryType: "verkehr",
      category: "Verkehr",
    },
  ],
};

// Bramsche topics data
const bramscheTopics: Record<TimeFilterOption, Topic[]> = {
  "Heute": [
    {
      id: "b1",
      number: "#1",
      title: '"Tückmantel Teich angeln"',
      color: "#7bb2e6",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a34f267e9417cb7bcef73766c2d0d6c4d4f52da54a64e521c97ace0688881644?placeholderIfAbsent=true",
      categoryType: "freizeit",
      category: "Freizeit",
    },
    {
      id: "b2",
      number: "#2",
      title: '"Neuer Kreisverkehr"',
      color: "#6AC04B",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/df9a1fdbc59f9318b4a910bb577c7e13900738e2bb906a094a49bd3dea1d821d?placeholderIfAbsent=true",
      categoryType: "verkehr",
      category: "Verkehr",
    },
    {
      id: "b3",
      number: "#3",
      title: '"Sanierung Grundschule"',
      color: "#D37B7D",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a75d79a3a85805474216b8881e8bda389fce214d7557bb9849df138e7b568d1a?placeholderIfAbsent=true",
      categoryType: "politik",
      category: "Politik",
    },
  ],
  "Gestern": [
    {
      id: "by1",
      number: "#1",
      title: '"Varusschlacht Museum"',
      color: "#7bb2e6",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a34f267e9417cb7bcef73766c2d0d6c4d4f52da54a64e521c97ace0688881644?placeholderIfAbsent=true",
      categoryType: "freizeit",
      category: "Freizeit",
    },
  ],
  "Diese Woche": [
    {
      id: "bw1",
      number: "#1",
      title: '"Freibad Öffnungszeiten"',
      color: "#7bb2e6",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a34f267e9417cb7bcef73766c2d0d6c4d4f52da54a64e521c97ace0688881644?placeholderIfAbsent=true",
      categoryType: "freizeit",
      category: "Freizeit",
    },
  ],
  "Diesen Monat": [
    {
      id: "bm1",
      number: "#1",
      title: '"Wohnungsangebote"',
      color: "#B984C8",
      icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/28ed1209a7f3ee11bedd572f537d8d78df26d625e4a3d4c537c3f9b1da240796?placeholderIfAbsent=true",
      categoryType: "wohnen",
      category: "Wohnen",
    },
  ],
};

// Map city names to topic data
const cityTopics: Record<string, Record<TimeFilterOption, Topic[]>> = {
  "Melle": {
    "Heute": todayTopics,
    "Gestern": yesterdayTopics,
    "Diese Woche": thisWeekTopics,
    "Diesen Monat": thisMonthTopics,
  },
  "Osnabrück": osnabrueckTopics,
  "Bramsche": bramscheTopics,
};

interface TopicsListProps {
  selectedCity?: string;
}

const TopicsList: React.FC<TopicsListProps> = ({ selectedCity = "Melle" }) => {
  const [selectedFilter, setSelectedFilter] = useState<TimeFilterOption>("Heute");
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [currentTopics, setCurrentTopics] = useState<Topic[]>(todayTopics);

  useEffect(() => {
    updateTopicsForCity(selectedCity, selectedFilter);
  }, [selectedCity, selectedFilter]);

  const updateTopicsForCity = (city: string, filter: TimeFilterOption) => {
    const cityData = cityTopics[city] || cityTopics["Melle"];
    const topics = cityData[filter] || [];
    setCurrentTopics(topics);
  };

  const handleFilterChange = (filter: TimeFilterOption) => {
    setSelectedFilter(filter);
    updateTopicsForCity(selectedCity, filter);
    setExpandedTopic(null);
  };

  const handleTopicClick = (topicId: string) => {
    if (expandedTopic === topicId) {
      setExpandedTopic(null);
    } else {
      setExpandedTopic(topicId);
      
      const topic = currentTopics.find(t => t.id === topicId);
      if (!topic?.answers) {
        toast({
          title: "Information",
          description: "Antworten werden geladen...",
        });
      }
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4">
      <div className="w-full flex justify-start">
        <TimeFilter 
          selectedFilter={selectedFilter} 
          onFilterChange={handleFilterChange}
          city={selectedCity}
        />
      </div>
      <div className="w-full font-normal mt-[30px]">
        <div className="w-full flex flex-col items-center">
          {currentTopics.map((topic, index) => (
            <TopicItem 
              key={topic.id} 
              topic={topic} 
              index={index} 
              isLast={index === currentTopics.length - 1} 
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

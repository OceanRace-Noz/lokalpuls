
import React from "react";
import { TimeFilterOption } from "@/types/topic";

interface TimeFilterProps {
  selectedFilter: TimeFilterOption;
  onFilterChange: (filter: TimeFilterOption) => void;
  city?: string;
}

const TimeFilter: React.FC<TimeFilterProps> = ({
  selectedFilter,
  onFilterChange,
  city = "Melle"
}) => {
  const handleFilterClick = (option: TimeFilterOption) => {
    onFilterChange(option);
    // No longer navigating to different pages
  };

  return (
    <div className="space-y-3 flex flex-col w-full">
      <div className="text-[rgba(219,219,219,1)] text-base font-medium font-league-spartan text-center">
        Das beschäftigt {city}
      </div>
      <div className="flex w-full items-center justify-center gap-[7px] text-sm text-[rgba(83,83,83,1)] font-normal leading-none my-0 bg-transparent overflow-x-auto pb-2">
        {(["Heute", "Gestern", "Diese Woche", "Diesen Monat"] as TimeFilterOption[]).map(option => (
          <button 
            key={option} 
            className={`
              ${selectedFilter === option ? "bg-[rgba(65,125,181,1)] text-[rgba(244,244,244,1)] font-bold" : "bg-[rgba(219,219,219,1)]"} 
              gap-2.5 whitespace-nowrap px-2.5 py-2 rounded-[5px] font-league-spartan transition-all duration-300 hover:opacity-90 active:scale-95
            `} 
            onClick={() => handleFilterClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeFilter;

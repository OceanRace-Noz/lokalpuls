
import React from "react";
import { useNavigate } from "react-router-dom";
import { TimeFilterOption } from "@/types/topic";

interface TimeFilterProps {
  selectedFilter: TimeFilterOption;
  onFilterChange: (filter: TimeFilterOption) => void;
}

const TimeFilter: React.FC<TimeFilterProps> = ({
  selectedFilter,
  onFilterChange
}) => {
  const navigate = useNavigate();

  const handleFilterClick = (option: TimeFilterOption) => {
    onFilterChange(option);
    
    // Navigate to the corresponding page based on filter
    if (option !== "Heute") {
      switch(option) {
        case "Gestern":
          navigate("/topics/yesterday");
          break;
        case "Diese Woche":
          navigate("/topics/this-week");
          break;
        case "Diesen Monat":
          navigate("/topics/this-month");
          break;
      }
    }
  };

  return (
    <div className="flex w-full items-center gap-[7px] text-sm text-[rgba(83,83,83,1)] font-normal leading-none mt-[19px] my-0 bg-transparent overflow-x-auto pb-2">
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
      <div className="flex-grow"></div>
    </div>
  );
};

export default TimeFilter;

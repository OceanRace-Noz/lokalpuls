import React from "react";
import { TimeFilterOption } from "@/types/topic";
interface TimeFilterProps {
  selectedFilter: TimeFilterOption;
  onFilterChange: (filter: TimeFilterOption) => void;
}
const TimeFilter: React.FC<TimeFilterProps> = ({
  selectedFilter,
  onFilterChange
}) => {
  return <div className="flex w-full items-center gap-[7px] text-sm text-[rgba(83,83,83,1)] font-normal leading-none justify-between mt-[19px] my-0 bg-transparent">
      {(["Heute", "Gestern", "Diese Woche", "Diesen Monat"] as TimeFilterOption[]).map(option => <button key={option} className={`self-stretch ${selectedFilter === option ? "bg-[rgba(65,125,181,1)] text-[rgba(244,244,244,1)] font-bold" : "bg-[rgba(219,219,219,1)]"} gap-2.5 whitespace-nowrap my-auto px-2.5 py-2 rounded-[5px] font-league-spartan transition-all duration-300 hover:opacity-90 active:scale-95`} onClick={() => onFilterChange(option)}>
          {option}
        </button>)}
    </div>;
};
export default TimeFilter;
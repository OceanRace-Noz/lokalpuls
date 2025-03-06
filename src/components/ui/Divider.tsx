import React from "react";

interface DividerProps {
  className?: string;
  imageSrc: string;
}

const Divider: React.FC<DividerProps> = ({ className = "", imageSrc }) => {
  return (
    <img
      src={imageSrc}
      alt="Divider"
      className={`object-contain w-[335px] self-center max-w-full mt-[17px] ${className}`}
    />
  );
};

export default Divider;


import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/home/Header";

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message = "Lade Frage..." }) => {
  return (
    <div className="bg-[rgba(242,242,242,1)] flex w-full flex-col items-stretch mx-auto pb-[15px] font-dongle min-h-screen">
      <div className="bg-[rgba(44,44,44,1)] flex shrink-0 h-[167px]" />
      <div className="z-10 flex mt-[-167px] flex-col items-center w-full">
        <div className="items-stretch self-stretch bg-[#2C2C2C] flex w-full flex-col pb-2.5">
          <Header />
        </div>
        <div className="container mx-auto max-w-4xl px-4 text-center py-12">
          <p className="text-xl">{message}</p>
        </div>
      </div>
    </div>
  );
};

export const NotFoundState: React.FC = () => {
  return (
    <div className="bg-[rgba(242,242,242,1)] flex w-full flex-col items-stretch mx-auto pb-[15px] font-dongle min-h-screen">
      <div className="bg-[rgba(44,44,44,1)] flex shrink-0 h-[167px]" />
      <div className="z-10 flex mt-[-167px] flex-col items-center w-full">
        <div className="items-stretch self-stretch bg-[#2C2C2C] flex w-full flex-col pb-2.5">
          <Header />
        </div>
        <div className="container mx-auto max-w-4xl px-4 text-center py-12">
          <p className="text-xl">Frage nicht gefunden</p>
          <Link to="/" className="text-blue-500 hover:underline mt-2 inline-block">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
};

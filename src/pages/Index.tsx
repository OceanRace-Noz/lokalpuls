
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, ArrowDownAZ } from "lucide-react";
import Header from "@/components/home/Header";
import TopicsList from "@/components/home/TopicsList";
import QuestionCard from "@/components/home/QuestionCard";
import AskQuestionForm from "@/components/home/AskQuestionForm";
import OpinionPoll from "@/components/home/OpinionPoll";
import WeeklyQuestion from "@/components/home/WeeklyQuestion";
import HamburgerMenu from "@/components/home/HamburgerMenu";
import Footer from "@/components/home/Footer";
import { toast } from "@/components/ui/use-toast";

type City = "Melle" | "Osnabrück" | "Bramsche";

const Index: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City>("Melle");
  
  const handleCityChange = (city: City) => {
    setSelectedCity(city);
    toast({
      title: "Stadt geändert",
      description: `Du siehst jetzt Inhalte aus ${city}`,
    });
  };
  
  const handleFilterClick = () => {
    toast({
      title: "Filter",
      description: "Filteroptionen werden bald verfügbar sein",
    });
  };
  
  const handleSortClick = () => {
    toast({
      title: "Sortieren",
      description: "Sortieroptionen werden bald verfügbar sein",
    });
  };

  return (
    <main className="bg-[rgba(242,242,242,1)] flex max-w-full w-full flex-col items-stretch mx-auto min-h-screen font-dongle">
      <div className="bg-[rgba(44,44,44,1)] flex shrink-0 h-[167px]" />
      <div className="z-10 flex mt-[-167px] flex-col items-center w-full flex-grow">
        <div className="items-stretch self-stretch bg-[#2C2C2C] flex w-full flex-col pb-2.5">
          <Header onCityChange={handleCityChange} />
          <TopicsList selectedCity={selectedCity} />
        </div>

        <div className="container mx-auto max-w-4xl px-4 mt-12">
          <section className="max-w-2xl mb-12">
            <h2 className="text-[rgba(57,57,57,1)] text-xl md:text-2xl font-normal leading-none">
              Entdecke die{" "}
              <span className="font-semibold">spannendsten Fragen</span> aus
              {selectedCity !== "Melle" ? ` ${selectedCity}` : " deiner Region"}
            </h2>
            <p className="text-[#393939] text-[13px] md:text-base font-light leading-[15px] md:leading-relaxed mt-3">
              Hier stellen Bewohner die Fragen, die uns alle betreffen. Sei dabei,
              beteilige dich und erfahre, was in {selectedCity !== "Melle" ? `${selectedCity}` : "deiner Region"} wirklich wichtig
              ist.
            </p>
          </section>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5">
              <button 
                className="items-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)] bg-[#F6F6F6] flex justify-center w-[30px] h-[30px] p-1.5 rounded-[3px] hover:bg-[#E8E8E8] active:scale-95 transition-all"
                onClick={handleFilterClick}
                aria-label="Filter"
              >
                <Filter size={18} className="text-gray-700" />
              </button>
              <button 
                className="items-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)] bg-[#F6F6F6] flex justify-center w-[30px] h-[30px] p-1.5 rounded-[3px] hover:bg-[#E8E8E8] active:scale-95 transition-all"
                onClick={handleSortClick}
                aria-label="Sort"
              >
                <ArrowDownAZ size={18} className="text-gray-700" />
              </button>
            </div>
            
            <Link 
              to="/ask" 
              className="bg-[#4EACE5] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#3897CE] transition-colors ml-auto"
            >
              <span className="mr-1">+</span> Frage stellen
            </Link>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Questions - Span 2 columns on larger screens */}
            <div className="md:col-span-2 space-y-6">
              <Link to="/question/indoor-activities" className="block hover:opacity-95 transition-opacity">
                <QuestionCard
                  title={`Indoor-Aktivitäten in ${selectedCity}`}
                  category="#Freizeit"
                  categoryColor="#1F45CD"
                  question={`Was macht ihr in ${selectedCity} an einem regnerischen Tag? Gibt es coole Indoor-Aktivitäten oder versteckte Orte, die man besuchen sollte?`}
                  votes={34}
                  hasExpertAnswer={true}
                  answerCount={4}
                  viewCount={42}
                  userName="Sarah98"
                  userImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/78ef9f482949556fee014507c039900929e56aec43812f80c22465d974722768?placeholderIfAbsent=true"
                  userStatusImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/f9ed0dcca63f16140b3b8b4bcfac7c4603b013cb7f5634bfc3f38da8325ac837?placeholderIfAbsent=true"
                  bookmarkImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/c05aa67bb6643d7acc1eec5e46ab5454e023473c74883fabd77c191e4f18d75b?placeholderIfAbsent=true"
                  upvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/abfee50c7c9e9eeaaf19cd42a97a348f28b3256c4548514adc5a8f037e84e54f?placeholderIfAbsent=true"
                  downvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/38b85c60b105f61c3ed302f9b6a214689a5a2cdf39b1381f37f39f9dcd6c19ad?placeholderIfAbsent=true"
                  titleColor="#9EB3FF"
                  categoryType="freizeit"
                />
              </Link>

              <Link to="/question/street-construction" className="block hover:opacity-95 transition-opacity">
                <QuestionCard
                  title={`Straßenarbeiten in ${selectedCity}`}
                  category="#Verkehr"
                  categoryColor="rgba(10,157,47,1)"
                  question={`Könnte das Expertenteam mir sagen, wann die Straßenarbeiten in ${selectedCity} abgeschlossen sind? Die Umleitungen verursachen viel Verkehr, und ich würde gerne wissen, wann wir wieder mit normalem Verkehr rechnen können.`}
                  votes={34}
                  hasExpertAnswer={false}
                  answerCount={2}
                  viewCount={15}
                  userName="Tim_tt"
                  userImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a4be9815998d61cd8e7c08f158c34d44e69da7914266ebd03acd8fa6fd6d56ee?placeholderIfAbsent=true"
                  userStatusImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/5aedf115c27453f39478091b6727e886371cda07b2b0c2f1f7d556984e41a35a?placeholderIfAbsent=true"
                  bookmarkImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/88056e827f5c08924fb2a0f697e0fa9b84245ef6b3e9283a5822738ff3e282c0?placeholderIfAbsent=true"
                  upvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/ee96c7b4d1b0d2826a5affe51b6e8f1eaf627aae9824e0edd35034e40f8ca8d9?placeholderIfAbsent=true"
                  downvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/480695f1aaf15e2feec019fb68a3d6b0c109fa96194b27d9a11d6bfb05ea5082?placeholderIfAbsent=true"
                  titleColor="#CDE8D0"
                  categoryType="verkehr"
                />
              </Link>
            </div>

            {/* Sidebar content */}
            <div className="space-y-6">
              <WeeklyQuestion />
              <OpinionPoll />
            </div>

            {/* Full width section */}
            <div className="md:col-span-2 lg:col-span-3">
              <AskQuestionForm />
            </div>

            {/* Additional questions */}
            <Link to="/question/political-participation" className="block hover:opacity-95 transition-opacity md:col-span-2">
              <QuestionCard
                title={`Politische Teilhabe für Jugendliche in ${selectedCity}`}
                category="#Politik"
                categoryColor="rgba(209,44,155,1)"
                question={`Was plant die Stadt ${selectedCity}, um junge Leute stärker in politische Entscheidungen einzubinden? Gibt es bereits Projekte oder Möglichkeiten, wie wir als Bürger mehr mitgestalten können?`}
                votes={34}
                hasExpertAnswer={true}
                answerCount={6}
                viewCount={81}
                userName="Ingrid_v"
                userImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/0ebb4de63fe8279919d49125ec459780476c1b65ff687594126e617b80b4990e?placeholderIfAbsent=true"
                userStatusImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/d89cd4be9bc3bea6ea969df44a5d6454e6997481edc9ab3aa8d45b47df9ba4e4?placeholderIfAbsent=true"
                bookmarkImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a155ab12e9d06a290a0e337419208d560ff916dc2cd8747c3a2e5da5721b0769?placeholderIfAbsent=true"
                upvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/ee96c7b4d1b0d2826a5affe51b6e8f1eaf627aae9824e0edd35034e40f8ca8d9?placeholderIfAbsent=true"
                downvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/dec21c5d526a4e5c31781f71d4972e29e7d7e778c70ed2ff3e01968219b22c35?placeholderIfAbsent=true"
                titleColor="#EACAE0"
                categoryType="politik"
              />
            </Link>

            <Link to="/question/best-districts" className="block hover:opacity-95 transition-opacity">
              <QuestionCard
                title={`Beste Stadtteile für junge Familien in ${selectedCity}?`}
                category="#Wohnen"
                categoryColor="rgba(229,146,78,1)"
                question={`Welche Stadtteile in ${selectedCity} sind am besten für junge Familien zum Wohnen?`}
                votes={34}
                hasExpertAnswer={true}
                answerCount={4}
                viewCount={42}
                userName="Lukas34"
                userImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/1269bfed201292e3b91a2e9456105ff75d02704d44822e05e601c39c7e18041c?placeholderIfAbsent=true"
                userStatusImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/563067b278b1bc6a7ce632cb189e70f7ea772957995c5fba90957937c5920552?placeholderIfAbsent=true"
                bookmarkImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/f7ef53fb5aed52d09234a56e1e0939592d46e7b36be9fab42e64adbb4920fc14?placeholderIfAbsent=true"
                upvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/b01a29d0b9c46b70b12fcf5ef2b78606bb46e80fddd38b180089e92322131891?placeholderIfAbsent=true"
                downvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/70ec92c8d054ac7aaaf7d928be327a094fdfcc80e70e9bca56e93265fbc1b9c3?placeholderIfAbsent=true"
                titleColor="#DBDBDB"
                categoryType="wohnen"
              />
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
      <HamburgerMenu />
    </main>
  );
};

export default Index;

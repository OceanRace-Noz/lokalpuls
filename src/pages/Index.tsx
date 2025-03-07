
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/home/Header";
import TopicsList from "@/components/home/TopicsList";
import QuestionCard from "@/components/home/QuestionCard";
import AskQuestionForm from "@/components/home/AskQuestionForm";
import OpinionPoll from "@/components/home/OpinionPoll";
import WeeklyQuestion from "@/components/home/WeeklyQuestion";
import Divider from "@/components/ui/Divider";
import HamburgerMenu from "@/components/home/HamburgerMenu";

const Index: React.FC = () => {
  return (
    <main className="bg-[rgba(242,242,242,1)] flex max-w-[480px] w-full flex-col items-stretch mx-auto pb-[15px] px-1.5 font-dongle">
      <div className="bg-[rgba(44,44,44,1)] flex shrink-0 h-[167px]" />
      <div className="z-10 flex mt-[-167px] flex-col items-center">
        <div className="items-stretch self-stretch bg-[#2C2C2C] flex w-full flex-col pb-2.5">
          <Header />
          <TopicsList />
        </div>

        <section className="w-[335px] max-w-full mt-[46px]">
          <h2 className="text-[rgba(57,57,57,1)] text-xl font-normal leading-none">
            Entdecke die{" "}
            <span className="font-semibold">spannendsten Fragen</span> aus
            deiner Region
          </h2>
          <p className="text-[#393939] text-[13px] font-light leading-[15px] mt-3">
            Hier stellen Bewohner die Fragen, die uns alle betreffen. Sei dabei,
            beteilige dich und erfahre, was in denier Region wirklich wichtig
            ist.
          </p>
        </section>

        <div className="flex w-full max-w-[359px] flex-col items-stretch mt-[46px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <button className="items-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)] bg-[#F6F6F6] self-stretch flex justify-center w-[30px] h-[30px] p-1.5 rounded-[3px] hover:bg-[#E8E8E8] active:scale-95 transition-all">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/960e1638245b5ae3ed20073cc229a9cf88687c57a47e9387385739758545fa36?placeholderIfAbsent=true"
                  alt="Filter"
                  className="w-full h-full object-contain"
                />
              </button>
              <button className="items-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)] bg-[#F6F6F6] self-stretch flex justify-center w-[30px] h-[30px] p-1.5 rounded-[3px] hover:bg-[#E8E8E8] active:scale-95 transition-all">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/f1e0e4832b879efc84310189889d1f508592804e70b32edc175f4f430b5b973e?placeholderIfAbsent=true"
                  alt="Sort"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
            
            <Link 
              to="/ask" 
              className="bg-[#4EACE5] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#3897CE] transition-colors ml-auto"
            >
              <span className="mr-1">+</span> Frage stellen
            </Link>
          </div>

          <div className="flex w-full flex-col items-stretch mt-[19px]">
            <Link to="/question/1" className="block hover:opacity-95 transition-opacity">
              <QuestionCard
                title="Wo gibt's Erdbeeren?"
                category="#Freizeit"
                categoryColor="#1F45CD"
                question="Ich suche nach guten Erdbeeren in Melle. Hat jemand Empfehlungen, wo man aktuell frische und schmackhafte Erdbeeren kaufen oder selbst pflücken kann?"
                votes={34}
                hasExpertAnswer={true}
                answerCount={3}
                viewCount={42}
                userName="Maria98"
                userImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/78ef9f482949556fee014507c039900929e56aec43812f80c22465d974722768?placeholderIfAbsent=true"
                userStatusImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/f9ed0dcca63f16140b3b8b4bcfac7c4603b013cb7f5634bfc3f38da8325ac837?placeholderIfAbsent=true"
                bookmarkImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/c05aa67bb6643d7acc1eec5e46ab5454e023473c74883fabd77c191e4f18d75b?placeholderIfAbsent=true"
                upvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/abfee50c7c9e9eeaaf19cd42a97a348f28b3256c4548514adc5a8f037e84e54f?placeholderIfAbsent=true"
                downvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/38b85c60b105f61c3ed302f9b6a214689a5a2cdf39b1381f37f39f9dcd6c19ad?placeholderIfAbsent=true"
                titleColor="#9EB3FF"
                categoryType="freizeit"
              />
            </Link>

            <Divider imageSrc="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/484ca79a89bcb7bc652da7fccb68a544bf52aad5c7d239c975b4dd674854a32b?placeholderIfAbsent=true" />

            <Link to="/question/4" className="block hover:opacity-95 transition-opacity">
              <QuestionCard
                title="Neuer Supermarkt in Gesmold"
                category="#Lokales"
                categoryColor="rgba(10,157,47,1)"
                question="Ich habe gehört, dass in Gesmold ein neuer Supermarkt eröffnen soll. Weiß jemand mehr darüber? Wann soll die Eröffnung sein und welche Kette wird es?"
                votes={22}
                hasExpertAnswer={false}
                answerCount={3}
                viewCount={38}
                userName="AnnaM"
                userImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a4be9815998d61cd8e7c08f158c34d44e69da7914266ebd03acd8fa6fd6d56ee?placeholderIfAbsent=true"
                userStatusImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/5aedf115c27453f39478091b6727e886371cda07b2b0c2f1f7d556984e41a35a?placeholderIfAbsent=true"
                bookmarkImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/88056e827f5c08924fb2a0f697e0fa9b84245ef6b3e9283a5822738ff3e282c0?placeholderIfAbsent=true"
                upvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/ee96c7b4d1b0d2826a5affe51b6e8f1eaf627aae9824e0edd35034e40f8ca8d9?placeholderIfAbsent=true"
                downvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/480695f1aaf15e2feec019fb68a3d6b0c109fa96194b27d9a11d6bfb05ea5082?placeholderIfAbsent=true"
                titleColor="#CDE8D0"
                categoryType="lokales"
              />
            </Link>

            <Divider imageSrc="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/484ca79a89bcb7bc652da7fccb68a544bf52aad5c7d239c975b4dd674854a32b?placeholderIfAbsent=true" />

            <Link to="/question/3" className="block hover:opacity-95 transition-opacity">
              <QuestionCard
                title="Vorbereitung der Krankenhäuser"
                category="#Gesundheit"
                categoryColor="rgba(209,44,155,1)"
                question="Wie bereiten sich die Krankenhäuser in Melle auf die kommende Grippesaison vor? Gibt es besondere Maßnahmen oder Empfehlungen für die Bevölkerung?"
                votes={15}
                hasExpertAnswer={true}
                answerCount={1}
                viewCount={27}
                userName="Dr_Mueller"
                userImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/0ebb4de63fe8279919d49125ec459780476c1b65ff687594126e617b80b4990e?placeholderIfAbsent=true"
                userStatusImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/d89cd4be9bc3bea6ea969df44a5d6454e6997481edc9ab3aa8d45b47df9ba4e4?placeholderIfAbsent=true"
                bookmarkImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a155ab12e9d06a290a0e337419208d560ff916dc2cd8747c3a2e5da5721b0769?placeholderIfAbsent=true"
                upvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/ee96c7b4d1b0d2826a5affe51b6e8f1eaf627aae9824e0edd35034e40f8ca8d9?placeholderIfAbsent=true"
                downvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/dec21c5d526a4e5c31781f71d4972e29e7d7e778c70ed2ff3e01968219b22c35?placeholderIfAbsent=true"
                titleColor="#E0B8D3"
                categoryType="gesundheit"
              />
            </Link>

            <Divider imageSrc="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/484ca79a89bcb7bc652da7fccb68a544bf52aad5c7d239c975b4dd674854a32b?placeholderIfAbsent=true" />

            <AskQuestionForm />

            <Divider imageSrc="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/0a5597e7d9ed1ca2f00cb2a9b4b611d0302d82b11db4b7a2c3368f419a676569?placeholderIfAbsent=true" />

            <Link to="/question/5" className="block hover:opacity-95 transition-opacity">
              <QuestionCard
                title="Kita-Plätze"
                category="#Familie"
                categoryColor="rgba(229,146,78,1)"
                question="Wir ziehen demnächst nach Melle und suchen einen Kita-Platz für unsere 3-jährige Tochter. Wie ist die Situation mit Kita-Plätzen? Gibt es lange Wartelisten?"
                votes={19}
                hasExpertAnswer={true}
                answerCount={2}
                viewCount={31}
                userName="Neue_Meller"
                userImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/1269bfed201292e3b91a2e9456105ff75d02704d44822e05e601c39c7e18041c?placeholderIfAbsent=true"
                userStatusImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/563067b278b1bc6a7ce632cb189e70f7ea772957995c5fba90957937c5920552?placeholderIfAbsent=true"
                bookmarkImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/f7ef53fb5aed52d09234a56e1e0939592d46e7b36be9fab42e64adbb4920fc14?placeholderIfAbsent=true"
                upvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/b01a29d0b9c46b70b12fcf5ef2b78606bb46e80fddd38b180089e92322131891?placeholderIfAbsent=true"
                downvoteImage="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/70ec92c8d054ac7aaaf7d928be327a094fdfcc80e70e9bca56e93265fbc1b9c3?placeholderIfAbsent=true"
                titleColor="#F1D3BA"
                categoryType="familie"
              />
            </Link>

            <Divider imageSrc="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/11f66f0a860665edab25c3f9d7c135a2f6e51c4256dfda7817eb95fded088445?placeholderIfAbsent=true" />

            <OpinionPoll />

            <Divider imageSrc="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/b213d8d2d9b61ef93360dfacd418fb64e7b41d76c92c3e72ec01dcb7b526f37e?placeholderIfAbsent=true" />

            <WeeklyQuestion />
          </div>
        </div>
      </div>

      <HamburgerMenu />
    </main>
  );
};

export default Index;

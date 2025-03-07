
import React, { useState } from "react";
import Header from "@/components/home/Header";
import QuestionHeader from "@/components/question/QuestionHeader";
import AnswerForm from "@/components/question/AnswerForm";
import AnswersList from "@/components/question/AnswersList";
import { toast } from "@/components/ui/use-toast";

const BestDistrictsPage: React.FC = () => {
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [voteCount, setVoteCount] = useState<number>(34);
  const [answerText, setAnswerText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [answers, setAnswers] = useState<any[]>([
    { 
      id: 1,
      author: "Frank Weber", 
      content: "Wir wohnen in Buer und sind sehr zufrieden. Es gibt eine gute Grundschule, einen kleinen Spielplatz und ausreichend Einkaufsmöglichkeiten. Die Atmosphäre ist familiär und ruhig.",
      likes: 12,
      date: "Vor 5 Tagen"
    },
    { 
      id: 2,
      author: "Sandra Klein", 
      content: "Melle-Mitte ist für Familien optimal, da hier alle wichtigen Einrichtungen nah beieinander sind: Schulen, Kindergärten, Ärzte, Schwimmbad und Sportvereine.",
      likes: 10,
      date: "Vor 1 Woche" 
    },
    { 
      id: 3,
      author: "Thomas Schmidt", 
      content: "Wir haben uns für Wellingholzhausen entschieden und bereuen es nicht. Viel Natur, gute Nachbarschaft und trotzdem nicht abgeschnitten.",
      likes: 8,
      date: "Vor 1 Woche" 
    }
  ]);

  const question = {
    id: "best-districts",
    title: "Beste Stadtteile für junge Familien?",
    category: "Wohnen",
    categoryType: "wohnen",
    question: "Welche Stadtteile in Melle sind am besten für junge Familien zum Wohnen?",
    votes: 34,
    hasExpertAnswer: true,
    answerCount: 4,
    viewCount: 42,
    userName: "Lukas34",
    userImage: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/1269bfed201292e3b91a2e9456105ff75d02704d44822e05e601c39c7e18041c?placeholderIfAbsent=true"
  };

  const handleVote = (type: 'up' | 'down') => {
    if (voteStatus === type) {
      setVoteStatus(null);
      setVoteCount(34);
    } else if (voteStatus === null) {
      setVoteStatus(type);
      setVoteCount(type === 'up' ? 35 : 33);
    } else {
      setVoteStatus(type);
      setVoteCount(type === 'up' ? 35 : 33);
    }
  };

  const handleAnswerSubmit = () => {
    if (!answerText.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newAnswer = {
        id: Date.now(),
        author: "Du",
        content: answerText,
        likes: 0,
        date: "Gerade eben"
      };
      
      setAnswers(prevAnswers => [newAnswer, ...prevAnswers]);
      setAnswerText('');
      
      toast({
        title: "Antwort gesendet",
        description: "Deine Antwort wurde erfolgreich gesendet.",
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const handleDeleteAnswer = (answerId: number | undefined) => {
    if (!answerId) return;
    setAnswers(prevAnswers => prevAnswers.filter(answer => answer.id !== answerId));
    
    toast({
      title: "Antwort gelöscht",
      description: "Deine Antwort wurde erfolgreich gelöscht.",
    });
  };

  return (
    <div className="bg-[rgba(242,242,242,1)] flex max-w-[480px] w-full flex-col items-stretch mx-auto pb-[15px] px-1.5 font-dongle min-h-screen">
      <div className="bg-[linear-gradient(180deg,_#292504_0%,_#483704_100%)] flex shrink-0 h-[167px]" />
      <div className="z-10 flex mt-[-167px] flex-col items-center">
        <div className="items-stretch self-stretch bg-[#2C2C2C] flex w-full flex-col pb-2.5">
          <Header />
        </div>
        
        <div className="w-full max-w-[359px] mt-4">
          <QuestionHeader 
            question={question}
            voteStatus={voteStatus}
            voteCount={voteCount}
            onVote={handleVote}
          />
          
          <div className="mt-6">
            <AnswerForm
              answerText={answerText}
              setAnswerText={setAnswerText}
              onSubmit={handleAnswerSubmit}
              isSubmitting={isSubmitting}
            />
            
            <AnswersList 
              answers={answers}
              answerCount={answers.length}
              onDeleteAnswer={handleDeleteAnswer}
              currentUser="Du"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDistrictsPage;

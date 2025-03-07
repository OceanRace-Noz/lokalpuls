
import React, { useState } from "react";
import Header from "@/components/home/Header";
import QuestionHeader from "@/components/question/QuestionHeader";
import AnswerForm from "@/components/question/AnswerForm";
import AnswersList from "@/components/question/AnswersList";
import { toast } from "@/components/ui/use-toast";

const StreetConstructionPage: React.FC = () => {
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [voteCount, setVoteCount] = useState<number>(34);
  const [answerText, setAnswerText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [answers, setAnswers] = useState<any[]>([
    { 
      id: 1,
      author: "Michael Berger", 
      content: "Laut Bauamt sollen die Arbeiten auf der B65 bis Ende Oktober abgeschlossen sein. Die Verzögerungen kamen durch unerwartete Probleme mit den Wasserleitungen.",
      likes: 15,
      date: "Vor 1 Tag"
    },
    { 
      id: 2,
      author: "Sabine Müller", 
      content: "Ich habe gestern mit einem der Arbeiter gesprochen. Er meinte, sie arbeiten auf Hochtouren, um die Straße vor dem ersten Frost freizugeben.",
      likes: 7,
      date: "Vor 3 Tagen" 
    }
  ]);

  const question = {
    id: "street-construction",
    title: "Straßenarbeiten auf der B65",
    category: "Verkehr",
    categoryType: "verkehr",
    question: "Könnte das Expertenteam mir sagen, wann die Straßenarbeiten auf der B65 in Melle abgeschlossen sind? Die Umleitungen verursachen viel Verkehr, und ich würde gerne wissen, wann wir wieder mit normalem Verkehr rechnen können.",
    votes: 34,
    hasExpertAnswer: false,
    answerCount: 2,
    viewCount: 15,
    userName: "Tim_tt",
    userImage: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a4be9815998d61cd8e7c08f158c34d44e69da7914266ebd03acd8fa6fd6d56ee?placeholderIfAbsent=true"
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
      <div className="bg-[linear-gradient(180deg,_#042904_0%,_#084C11_100%)] flex shrink-0 h-[167px]" />
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

export default StreetConstructionPage;

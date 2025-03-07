
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/home/Header";
import QuestionHeader from "@/components/question/QuestionHeader";
import AnswerForm from "@/components/question/AnswerForm";
import AnswersList from "@/components/question/AnswersList";
import { toast } from "@/components/ui/use-toast";

const IndoorActivitiesPage: React.FC = () => {
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [voteCount, setVoteCount] = useState<number>(34);
  const [answerText, setAnswerText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [answers, setAnswers] = useState<any[]>([
    { 
      id: 1,
      author: "Maria Schmidt", 
      content: "Das Meller Freizeitbad ist für regnerische Tage super! Es hat verschiedene Becken und einen Saunabereich.",
      likes: 12,
      date: "Vor 2 Tagen"
    },
    { 
      id: 2,
      author: "Thomas Weber", 
      content: "Ich kann das Heimatmuseum Melle empfehlen. Die Ausstellungen wechseln regelmäßig und sind sehr interessant.",
      likes: 8,
      date: "Vor 3 Tagen" 
    },
    { 
      id: 3,
      author: "Julia Klein", 
      content: "Die Bibliothek ist an Regentagen immer eine gute Wahl. Sie haben auch gemütliche Leseecken.",
      likes: 5,
      date: "Vor 5 Tagen" 
    }
  ]);

  const question = {
    id: "indoor-activities",
    title: "Indoor-Aktivitäten in Melle",
    category: "Freizeit",
    categoryType: "freizeit",
    question: "Was macht ihr in Melle an einem regnerischen Tag? Gibt es coole Indoor-Aktivitäten oder versteckte Orte, die man besuchen sollte?",
    votes: 34,
    hasExpertAnswer: true,
    answerCount: 3,
    viewCount: 42,
    userName: "Sarah98",
    userImage: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/78ef9f482949556fee014507c039900929e56aec43812f80c22465d974722768?placeholderIfAbsent=true"
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
      <div className="bg-[linear-gradient(180deg,_#040C29_0%,_#08164C_100%)] flex shrink-0 h-[167px]" />
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

export default IndoorActivitiesPage;

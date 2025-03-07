
import React, { useState } from "react";
import Header from "@/components/home/Header";
import QuestionHeader from "@/components/question/QuestionHeader";
import AnswerForm from "@/components/question/AnswerForm";
import AnswersList from "@/components/question/AnswersList";
import { toast } from "@/components/ui/use-toast";

const PoliticalParticipationPage: React.FC = () => {
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [voteCount, setVoteCount] = useState<number>(34);
  const [answerText, setAnswerText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [answers, setAnswers] = useState<any[]>([
    { 
      id: 1,
      author: "Hans Meyer", 
      content: "Die Stadt Melle plant ein Jugendforum einzurichten, in dem junge Menschen regelmäßig ihre Ideen und Anliegen einbringen können. Die erste Veranstaltung ist für Januar geplant.",
      likes: 22,
      date: "Vor 2 Tagen"
    },
    { 
      id: 2,
      author: "Lisa Schmidt", 
      content: "Es gibt bereits das Projekt 'Melle Mitgestalten', bei dem Bürger online Vorschläge einreichen können. Die besten Ideen werden tatsächlich umgesetzt!",
      likes: 18,
      date: "Vor 3 Tagen" 
    },
    { 
      id: 3,
      author: "Robert Wagner", 
      content: "Als Stadtratsmitglied kann ich sagen, dass wir sehr an der Beteiligung junger Menschen interessiert sind. Wir planen Workshops an Schulen.",
      likes: 14,
      date: "Vor 4 Tagen" 
    }
  ]);

  const question = {
    id: "political-participation",
    title: "Politische Teilhabe für Jugendliche in Melle",
    category: "Politik",
    categoryType: "politik",
    question: "Was plant die Stadt Melle, um junge Leute stärker in politische Entscheidungen einzubinden? Gibt es bereits Projekte oder Möglichkeiten, wie wir als Bürger mehr mitgestalten können?",
    votes: 34,
    hasExpertAnswer: true,
    answerCount: 6,
    viewCount: 81,
    userName: "Ingrid_v",
    userImage: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/0ebb4de63fe8279919d49125ec459780476c1b65ff687594126e617b80b4990e?placeholderIfAbsent=true"
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
      <div className="bg-[linear-gradient(180deg,_#29041E_0%,_#5F1348_100%)] flex shrink-0 h-[167px]" />
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

export default PoliticalParticipationPage;

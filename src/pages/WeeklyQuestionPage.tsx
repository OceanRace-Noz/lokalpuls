
import React, { useState } from "react";
import Header from "@/components/home/Header";
import QuestionHeader from "@/components/question/QuestionHeader";
import AnswerForm from "@/components/question/AnswerForm";
import AnswersList from "@/components/question/AnswersList";
import { toast } from "@/components/ui/use-toast";

const WeeklyQuestionPage: React.FC = () => {
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [voteCount, setVoteCount] = useState<number>(58);
  const [answerText, setAnswerText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [answers, setAnswers] = useState<any[]>([
    { 
      id: 1,
      author: "Peter Müller", 
      content: "Das Stadtfest am letzten Septemberwochenende ist für mich ein absolutes Muss! Live-Musik, gutes Essen und die ganze Stadt auf den Beinen.",
      likes: 24,
      date: "Vor 2 Tagen"
    },
    { 
      id: 2,
      author: "Birgit Meier", 
      content: "Der Herbstmarkt in der Altstadt mit regionalen Anbietern. Dort gibt es wunderbare selbstgemachte Produkte und die Atmosphäre ist immer besonders schön.",
      likes: 19,
      date: "Vor 3 Tagen" 
    },
    { 
      id: 3,
      author: "Klaus Weber", 
      content: "Die Kunstnacht im Oktober sollte man auf keinen Fall verpassen! Alle Galerien haben geöffnet und es gibt überall kleine Konzerte und Performances.",
      likes: 15,
      date: "Vor 4 Tagen" 
    }
  ]);

  const question = {
    id: "weekly",
    title: "Frage der Woche",
    category: "Freizeit",
    categoryType: "freizeit",
    question: "Welche Veranstaltungen sollte man in Melle im Herbst auf keinen Fall verpassen?",
    votes: 58,
    hasExpertAnswer: false,
    answerCount: 32,
    viewCount: 128,
    userName: "MelleEvent",
    userImage: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/78ef9f482949556fee014507c039900929e56aec43812f80c22465d974722768?placeholderIfAbsent=true"
  };

  const handleVote = (type: 'up' | 'down') => {
    if (voteStatus === type) {
      setVoteStatus(null);
      setVoteCount(58);
    } else if (voteStatus === null) {
      setVoteStatus(type);
      setVoteCount(type === 'up' ? 59 : 57);
    } else {
      setVoteStatus(type);
      setVoteCount(type === 'up' ? 59 : 57);
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
    <div className="bg-[rgba(242,242,242,1)] flex w-full flex-col items-stretch mx-auto pb-[15px] font-dongle min-h-screen">
      <div className="bg-[rgba(78,172,229,0.2)] flex shrink-0 h-[167px]" />
      <div className="z-10 flex mt-[-167px] flex-col items-center w-full">
        <div className="items-stretch self-stretch bg-[#2C2C2C] flex w-full flex-col pb-2.5">
          <Header />
        </div>
        
        <div className="container mx-auto max-w-4xl px-4 mt-4">
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

export default WeeklyQuestionPage;

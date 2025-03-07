
import React, { useState } from "react";
import Header from "@/components/home/Header";
import AnswerForm from "@/components/question/AnswerForm";
import AnswersList from "@/components/question/AnswersList";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, ThumbsUp, ThumbsDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const WeeklyQuestionPage: React.FC = () => {
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [voteCount, setVoteCount] = useState<number>(58);
  const [answerText, setAnswerText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [answers, setAnswers] = useState<any[]>([
    {
      id: 1,
      author: "Maria L.",
      content: "Das Meller Herbstfest ist ein absolutes Muss! Tolle Stimmung, leckeres Essen und viele lokale Händler. Unbedingt hingehen!",
      likes: 12,
      date: "Vor 3 Tagen"
    },
    {
      id: 2,
      author: "Thomas K.",
      content: "Die Kürbisausstellung im Gartencenter sollte man auf keinen Fall verpassen. Perfekt für tolle Herbstfotos und die Kinder lieben es.",
      likes: 8,
      date: "Vor 5 Tagen"
    },
  ]);

  const handleVote = (type: 'up' | 'down') => {
    if (voteStatus === type) {
      // Unvote
      setVoteStatus(null);
      setVoteCount(58);
    } else if (voteStatus === null) {
      // New vote
      setVoteStatus(type);
      setVoteCount(type === 'up' ? 59 : 57);
    } else {
      // Change vote direction
      setVoteStatus(type);
      setVoteCount(type === 'up' ? 59 : 57);
    }
  };

  const handleAnswerSubmit = () => {
    if (!answerText.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Add the new answer to the list
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
    }, 500);
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
      <div className="bg-[rgba(78,172,229,1)] flex shrink-0 h-[167px]"></div>
      <div className="z-10 flex mt-[-167px] flex-col items-center">
        <div className="items-stretch self-stretch bg-[#2C2C2C] flex w-full flex-col pb-2.5">
          <Header />
        </div>
        
        <div className="w-full max-w-[359px] mt-4">
          {/* Question Header */}
          <div className="mb-4">
            <Link to="/" className="flex items-center text-[#4EACE5] font-medium hover:underline transition-colors">
              <ArrowLeft size={18} className="mr-1" />
              <span>Zurück</span>
            </Link>
          </div>
          
          <div className="bg-[rgba(78,172,229,1)] rounded-lg p-4 shadow-md animate-scale-in">
            <div className="mb-3 flex items-center">
              <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded inline-block">
                #Frage der Woche
              </div>
            </div>
            
            <h1 className="text-3xl font-medium text-white mb-2 leading-tight">
              Welche Veranstaltungen sollte man in Melle im Herbst auf keinen Fall verpassen?
            </h1>
            
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/78ef9f482949556fee014507c039900929e56aec43812f80c22465d974722768?placeholderIfAbsent=true" 
                    alt="MelleConnect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white/80">MelleConnect</span>
              </div>
              
              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <div className="flex items-center">
                  <ThumbsUp 
                    size={16} 
                    onClick={() => handleVote('up')}
                    className={`cursor-pointer ${voteStatus === 'up' ? 'text-green-400' : 'text-white/80'}`}
                  />
                  <span className="ml-1">{voteCount}</span>
                </div>
                <div className="flex items-center">
                  <ThumbsDown 
                    size={16} 
                    onClick={() => handleVote('down')}
                    className={`cursor-pointer ${voteStatus === 'down' ? 'text-red-400' : 'text-white/80'}`}
                  />
                </div>
                <div className="flex items-center">
                  <Eye size={16} />
                  <span className="ml-1">128</span>
                </div>
              </div>
            </div>
          </div>
          
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

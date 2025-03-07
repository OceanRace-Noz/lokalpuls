
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/home/Header";
import QuestionHeader from "@/components/question/QuestionHeader";
import AnswerForm from "@/components/question/AnswerForm";
import AnswersList from "@/components/question/AnswersList";
import { LoadingState, NotFoundState } from "@/components/question/QuestionDetailStates";
import { getQuestionById, submitAnswer, voteOnQuestion } from "@/services/questionService";

const QuestionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [question, setQuestion] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [voteCount, setVoteCount] = useState<number>(0);
  const [answerText, setAnswerText] = useState<string>('');

  useEffect(() => {
    if (!id) return;
    
    setLoading(true);
    getQuestionById(id)
      .then(questionData => {
        setQuestion(questionData);
        setVoteCount(questionData.votes);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching question:", error);
        setQuestion(null);
        setLoading(false);
      });
  }, [id]);

  const handleVote = (type: 'up' | 'down') => {
    if (!id || !question) return;

    if (voteStatus === type) {
      // Unvote
      setVoteStatus(null);
      setVoteCount(question.votes);
    } else if (voteStatus === null) {
      // New vote
      setVoteStatus(type);
      setVoteCount(type === 'up' ? question.votes + 1 : question.votes - 1);
    } else {
      // Change vote direction
      setVoteStatus(type);
      setVoteCount(type === 'up' ? question.votes + 2 : question.votes - 2);
    }

    // In a real app, this would update the server
    voteOnQuestion(id, type);
  };

  const handleAnswerSubmit = () => {
    if (!id || !answerText.trim()) return;

    submitAnswer(id, answerText)
      .then(() => {
        toast({
          title: "Antwort gesendet",
          description: "Deine Antwort wurde erfolgreich gesendet.",
        });
        setAnswerText('');
      })
      .catch(error => {
        console.error("Error submitting answer:", error);
        toast({
          title: "Fehler",
          description: "Beim Senden deiner Antwort ist ein Fehler aufgetreten.",
          variant: "destructive",
        });
      });
  };

  if (loading) {
    return <LoadingState />;
  }

  if (!question) {
    return <NotFoundState />;
  }

  return (
    <div className="bg-[rgba(242,242,242,1)] flex max-w-[480px] w-full flex-col items-stretch mx-auto pb-[15px] px-1.5 font-dongle min-h-screen">
      <div className="bg-[rgba(44,44,44,1)] flex shrink-0 h-[167px]" />
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
            />
            
            <AnswersList 
              answers={question.answers}
              answerCount={question.answerCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;

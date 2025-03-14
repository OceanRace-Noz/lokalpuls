
import React, { useState, useEffect } from "react";
import { ThumbsUp, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface Answer {
  id?: number;
  author: string;
  content: string;
  likes: number;
  date: string;
}

interface AnswersListProps {
  answers: Answer[];
  answerCount: number;
  onDeleteAnswer?: (answerId: number | undefined) => void;
  currentUser?: string;
}

const AnswersList: React.FC<AnswersListProps> = ({ 
  answers: initialAnswers, 
  answerCount, 
  onDeleteAnswer,
  currentUser = "Du" // Default to "Du" as the current user
}) => {
  const [answers, setAnswers] = useState(initialAnswers);
  const [likedAnswers, setLikedAnswers] = useState<Record<string, boolean>>({});

  // Update answers state when initialAnswers changes
  useEffect(() => {
    setAnswers(initialAnswers);
  }, [initialAnswers]);

  const handleLike = (answerId: number | undefined) => {
    if (!answerId) return;
    
    // Toggle liked state
    const isLiked = likedAnswers[String(answerId)];
    const newLikedAnswers = {
      ...likedAnswers,
      [String(answerId)]: !isLiked
    };
    setLikedAnswers(newLikedAnswers);
    
    // Update answer likes count
    const updatedAnswers = answers.map(answer => {
      if (answer.id === answerId) {
        return {
          ...answer,
          likes: isLiked ? answer.likes - 1 : answer.likes + 1
        };
      }
      return answer;
    });
    
    setAnswers(updatedAnswers);
    
    // Show toast notification
    toast({
      title: isLiked ? "Like entfernt" : "Beitrag geliked",
      description: isLiked ? "Du hast deinen Like zurückgezogen." : "Du hast diesen Beitrag geliked.",
      duration: 1500,
    });
  };

  return (
    <>
      <h2 className="text-2xl font-medium mb-4">Antworten ({answerCount})</h2>
      
      {answers.length === 0 ? (
        <div className="bg-white p-4 rounded-lg shadow text-center text-gray-500">
          Noch keine Antworten. Sei der/die Erste!
        </div>
      ) : (
        answers.map((answer, index) => (
          <div 
            key={answer.id || index} 
            className="bg-white p-4 rounded-lg shadow mb-3 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium text-[#4EACE5]">{answer.author}</div>
              <div className="flex items-center">
                <div className="text-sm text-gray-500 mr-2">{answer.date}</div>
                {answer.author === currentUser && onDeleteAnswer && (
                  <button 
                    onClick={() => onDeleteAnswer(answer.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Antwort löschen"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
            <p className="text-gray-800 text-lg leading-snug">{answer.content}</p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <button 
                className={`flex items-center transition-colors ${likedAnswers[String(answer.id)] ? 'text-[#4EACE5]' : 'hover:text-[#4EACE5]'}`}
                onClick={() => handleLike(answer.id)}
                aria-label={likedAnswers[String(answer.id)] ? "Like entfernen" : "Beitrag liken"}
              >
                <ThumbsUp size={14} className="mr-1" />
                <span>{answer.likes}</span>
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default AnswersList;

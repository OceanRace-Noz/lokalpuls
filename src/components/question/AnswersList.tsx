
import React from "react";
import { ThumbsUp, Trash2 } from "lucide-react";

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
  answers, 
  answerCount, 
  onDeleteAnswer,
  currentUser = "Du" // Default to "Du" as the current user
}) => {
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
              <button className="flex items-center hover:text-[#4EACE5] transition-colors">
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

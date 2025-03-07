
import React from "react";
import { ThumbsUp } from "lucide-react";

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
}

const AnswersList: React.FC<AnswersListProps> = ({ answers, answerCount }) => {
  return (
    <>
      <h2 className="text-2xl font-medium mb-4">Antworten ({answerCount})</h2>
      
      {answers.map((answer, index) => (
        <div 
          key={answer.id || index} 
          className="bg-white p-4 rounded-lg shadow mb-3 animate-fade-in"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="font-medium text-[#4EACE5]">{answer.author}</div>
            <div className="text-sm text-gray-500">{answer.date}</div>
          </div>
          <p className="text-gray-800 text-lg leading-snug">{answer.content}</p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <ThumbsUp size={14} className="mr-1" />
            <span>{answer.likes}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnswersList;

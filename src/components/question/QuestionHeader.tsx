
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, MessageCircle, ThumbsUp, ThumbsDown } from "lucide-react";

interface QuestionHeaderProps {
  question: {
    id: string;
    title: string;
    category: string;
    categoryType: string;
    question: string;
    votes: number;
    answerCount: number;
    viewCount: number;
    userName: string;
    userImage: string;
  };
  voteStatus: 'up' | 'down' | null;
  voteCount: number;
  onVote: (type: 'up' | 'down') => void;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({
  question,
  voteStatus,
  voteCount,
  onVote
}) => {
  return (
    <>
      <div className="flex items-center mb-4">
        <Link to="/" className="flex items-center text-[#4EACE5] font-medium hover:underline transition-colors">
          <ArrowLeft size={18} className="mr-1" />
          <span>Zurück</span>
        </Link>
      </div>
      
      <div className={`bg-${question.categoryType} rounded-lg p-4 shadow-md animate-scale-in`}>
        <div className="mb-3 flex items-center">
          <div className={`category-${question.categoryType} text-white text-xs px-2 py-1 rounded inline-block`}>
            #{question.category}
          </div>
        </div>
        
        <h1 className="text-3xl font-medium text-white mb-2 leading-tight">{question.title}</h1>
        
        <p className="text-white/90 text-lg mb-4 leading-snug">{question.question}</p>
        
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
              <img 
                src={question.userImage} 
                alt={question.userName}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white/80">{question.userName}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-white/80 text-sm">
            <div className="flex items-center">
              <ThumbsUp 
                size={16} 
                onClick={() => onVote('up')}
                className={`cursor-pointer ${voteStatus === 'up' ? 'text-green-400' : 'text-white/80'}`}
              />
              <span className="ml-1">{voteCount}</span>
            </div>
            <div className="flex items-center">
              <ThumbsDown 
                size={16} 
                onClick={() => onVote('down')}
                className={`cursor-pointer ${voteStatus === 'down' ? 'text-red-400' : 'text-white/80'}`}
              />
            </div>
            <div className="flex items-center">
              <MessageCircle size={16} />
              <span className="ml-1">{question.answerCount}</span>
            </div>
            <div className="flex items-center">
              <Eye size={16} />
              <span className="ml-1">{question.viewCount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionHeader;

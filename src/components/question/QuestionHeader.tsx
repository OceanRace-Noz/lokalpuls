
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
  // Map categoryType to its corresponding background color
  const getBgColor = (type: string) => {
    switch (type) {
      case 'freizeit': return 'bg-freizeit';
      case 'verkehr': return 'bg-verkehr';
      case 'politik': return 'bg-politik';
      case 'wohnen': return 'bg-wohnen';
      default: return 'bg-freizeit';
    }
  };

  // Map categoryType to its corresponding tag color
  const getTagColor = (type: string) => {
    switch (type) {
      case 'freizeit': return 'bg-blue-600';
      case 'verkehr': return 'bg-green-600';
      case 'politik': return 'bg-purple-600';
      case 'wohnen': return 'bg-yellow-600';
      default: return 'bg-blue-600';
    }
  };

  return (
    <>
      <div className="flex items-center mb-4">
        <Link to="/" className="flex items-center text-[#4EACE5] font-medium hover:underline transition-colors">
          <ArrowLeft size={18} className="mr-1" />
          <span>Zurück</span>
        </Link>
      </div>
      
      <div className={`${getBgColor(question.categoryType)} rounded-lg p-4 md:p-6 shadow-md animate-scale-in max-w-full md:max-w-4xl mx-auto`}>
        <div className="mb-3 flex items-center">
          <div className={`${getTagColor(question.categoryType)} text-white text-xs px-2 py-1 rounded inline-block`}>
            #{question.category}
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-medium text-white mb-2 leading-tight">{question.title}</h1>
        
        <p className="text-white/90 text-lg md:text-xl mb-4 leading-snug">{question.question}</p>
        
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-2 gap-3 md:gap-0">
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


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/home/Header";
import { Eye, ArrowLeft, MessageCircle, ThumbsUp, ThumbsDown } from "lucide-react";

// Example data - in a real app this would come from an API
const questionsData = {
  "1": {
    id: "1",
    title: "Wo gibt's Erdbeeren?",
    category: "Freizeit",
    categoryColor: "#1F45CD",
    categoryType: "freizeit",
    question: "Ich suche nach guten Erdbeeren in Melle. Hat jemand Empfehlungen, wo man aktuell frische und schmackhafte Erdbeeren kaufen oder selbst pflücken kann?",
    votes: 34,
    answerCount: 3,
    viewCount: 42,
    userName: "Maria98",
    userImage: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/78ef9f482949556fee014507c039900929e56aec43812f80c22465d974722768?placeholderIfAbsent=true",
    answers: [
      { 
        id: 1,
        author: "Maria Schmidt", 
        content: "Im Hofladen Meier in Buer gibt es aktuell super leckere Erdbeeren! Die haben noch bis Ende der Woche geöffnet.",
        likes: 12,
        date: "Vor 2 Tagen"
      },
      { 
        author: "Thomas Weber", 
        content: "Auf dem Wochenmarkt am Donnerstag hatte der Stand von Familie Brinkmann noch welche. Unbedingt früh hingehen, die sind schnell weg!",
        likes: 8,
        date: "Vor 3 Tagen" 
      },
      { 
        author: "Sabine Müller", 
        content: "Bei 'Erdbeeren selbst pflücken' an der Oldendorfer Straße kann man noch super Erdbeeren selbst pflücken. Wir waren gestern dort.",
        likes: 5,
        date: "Vor 5 Tagen"
      }
    ]
  },
  "2": {
    id: "2",
    title: "Neues Hofcafé in Melle",
    category: "Freizeit",
    categoryColor: "#F1AB7B",
    categoryType: "freizeit",
    question: "Hat jemand schon das neue Hofcafé in Melle besucht und kann etwas darüber berichten? Ich überlege am Wochenende hinzugehen.",
    votes: 28,
    answerCount: 2,
    viewCount: 36,
    userName: "Julia34",
    userImage: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a4be9815998d61cd8e7c08f158c34d44e69da7914266ebd03acd8fa6fd6d56ee?placeholderIfAbsent=true",
    answers: [
      { 
        author: "Julia Klein", 
        content: "Das neue Café hat letzten Samstag eröffnet. Die selbstgemachten Kuchen sind fantastisch!",
        likes: 7,
        date: "Vor 1 Tag" 
      },
      { 
        author: "Michael Berger", 
        content: "Habe gehört, dass sie auch regionale Produkte verkaufen. Hat jemand schon Erfahrungen damit gemacht?",
        likes: 3,
        date: "Vor 2 Tagen" 
      }
    ]
  }
};

const QuestionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [question, setQuestion] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [voteCount, setVoteCount] = useState<number>(0);
  const [answerText, setAnswerText] = useState<string>('');

  useEffect(() => {
    // Simulate data loading
    setLoading(true);
    setTimeout(() => {
      if (id && questionsData[id as keyof typeof questionsData]) {
        const questionData = questionsData[id as keyof typeof questionsData];
        setQuestion(questionData);
        setVoteCount(questionData.votes);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleVote = (type: 'up' | 'down') => {
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
  };

  const handleAnswerSubmit = () => {
    if (answerText.trim()) {
      // In a real app, you would send this to the server
      console.log("Submitting answer:", answerText);
      setAnswerText('');
      // Optionally show a success toast here
    }
  };

  if (loading) {
    return (
      <div className="bg-[rgba(242,242,242,1)] flex max-w-[480px] w-full flex-col items-stretch mx-auto pb-[15px] px-1.5 font-dongle min-h-screen">
        <div className="bg-[rgba(44,44,44,1)] flex shrink-0 h-[167px]" />
        <div className="z-10 flex mt-[-167px] flex-col items-center">
          <div className="items-stretch self-stretch bg-[#2C2C2C] flex w-full flex-col pb-2.5">
            <Header />
          </div>
          <div className="w-full text-center py-12">
            <p className="text-xl">Lade Frage...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="bg-[rgba(242,242,242,1)] flex max-w-[480px] w-full flex-col items-stretch mx-auto pb-[15px] px-1.5 font-dongle min-h-screen">
        <div className="bg-[rgba(44,44,44,1)] flex shrink-0 h-[167px]" />
        <div className="z-10 flex mt-[-167px] flex-col items-center">
          <div className="items-stretch self-stretch bg-[#2C2C2C] flex w-full flex-col pb-2.5">
            <Header />
          </div>
          <div className="w-full text-center py-12">
            <p className="text-xl">Frage nicht gefunden</p>
            <Link to="/" className="text-blue-500 hover:underline mt-2 inline-block">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[rgba(242,242,242,1)] flex max-w-[480px] w-full flex-col items-stretch mx-auto pb-[15px] px-1.5 font-dongle min-h-screen">
      <div className="bg-[rgba(44,44,44,1)] flex shrink-0 h-[167px]" />
      <div className="z-10 flex mt-[-167px] flex-col items-center">
        <div className="items-stretch self-stretch bg-[#2C2C2C] flex w-full flex-col pb-2.5">
          <Header />
        </div>
        
        <div className="w-full max-w-[359px] mt-4">
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
          
          <div className="mt-6">
            {/* "Deine Antwort" section moved above the answers list */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="text-xl mb-2 font-medium">Deine Antwort</h3>
              <textarea
                className="w-full border border-gray-300 rounded p-2 min-h-[100px] text-lg"
                placeholder="Deine Antwort hier eingeben..."
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
              />
              <button 
                className="mt-2 bg-[#1A85C6] text-white px-4 py-2 rounded hover:bg-[#1476B0] transition-colors"
                onClick={handleAnswerSubmit}
              >
                Antwort senden
              </button>
            </div>
            
            <h2 className="text-2xl font-medium mb-4">Antworten ({question.answerCount})</h2>
            
            {question.answers.map((answer: any, index: number) => (
              <div 
                key={index} 
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;

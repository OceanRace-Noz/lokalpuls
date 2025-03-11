
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { X, Image, Send } from "lucide-react";

const AskQuestionPage: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: "freizeit", label: "#Freizeit", color: "#1F45CD" },
    { value: "verkehr", label: "#Verkehr", color: "rgba(10,157,47,1)" },
    { value: "politik", label: "#Politik", color: "rgba(209,44,155,1)" },
    { value: "wohnen", label: "#Wohnen", color: "rgba(229,146,78,1)" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !question || !category) {
      toast({
        title: "Fehlende Informationen",
        description: "Bitte fülle alle Felder aus.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Submit to our question service
    submitQuestion(title, question, category)
      .then(() => {
        toast({
          title: "Frage gesendet!",
          description: "Deine Frage wurde erfolgreich gesendet."
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error submitting question:", error);
        toast({
          title: "Fehler",
          description: "Beim Senden deiner Frage ist ein Fehler aufgetreten.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-[rgba(242,242,242,1)] flex max-w-[480px] w-full flex-col items-stretch mx-auto min-h-screen font-dongle">
      {/* Header */}
      <div className="bg-[#2C2C2C] p-4 flex items-center justify-between sticky top-0 z-10">
        <button 
          onClick={() => navigate("/")}
          className="p-2 text-white hover:opacity-80 transition-opacity"
        >
          <X size={24} />
        </button>
        <h1 className="text-white text-xl font-medium">Stelle deine Frage</h1>
        <div className="w-8"></div> {/* For centering the title */}
      </div>

      {/* Form */}
      <div className="p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Title */}
          <div className="rounded-lg overflow-hidden">
            <div className="bg-[rgba(10,35,58,1)] p-4">
              <h2 className="text-[rgba(78,172,229,1)] text-xl font-medium">Jetzt bist du dran!</h2>
              <p className="text-[rgba(133,133,133,1)] text-sm mt-2">
                Stelle deine Fragen an unser Experten-team.
              </p>
            </div>
            
            <div className="bg-white p-4">
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                  Titel
                </label>
                <div className="relative">
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Gib deiner Frage einen Titel..."
                    className="w-full p-3 border-2 border-[rgba(78,172,229,1)] rounded-md focus:border-[rgba(26,133,198,1)] outline-none transition-colors"
                    maxLength={60}
                  />
                  <div className="absolute bottom-3 right-3 text-sm text-gray-500">
                    {title.length}/60
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="question" className="block text-gray-700 text-sm font-bold mb-2">
                  Deine Frage
                </label>
                <div className="relative">
                  <textarea
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Deine Frage hier eingeben..."
                    className="w-full p-3 border-2 border-[rgba(78,172,229,1)] rounded-md focus:border-[rgba(26,133,198,1)] outline-none transition-colors resize-none h-36"
                    maxLength={360}
                  />
                  <div className="flex justify-between p-2">
                    <button 
                      type="button" 
                      className="text-[rgba(78,172,229,1)] hover:text-[rgba(26,133,198,1)] transition-colors"
                    >
                      <Image size={20} />
                    </button>
                    <div className="text-sm text-gray-500">{question.length}/360</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                  Kategorie
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => setCategory(cat.value)}
                      className={`p-2 rounded-md border-2 text-left transition-colors ${
                        category === cat.value
                          ? "border-[rgba(78,172,229,1)] bg-[rgba(78,172,229,0.1)]"
                          : "border-gray-300 hover:border-[rgba(78,172,229,0.5)]"
                      }`}
                    >
                      <span style={{ color: cat.color }} className="font-medium">
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !title || !question || !category}
                className={`w-full flex items-center justify-center gap-2 p-3 rounded-md font-semibold transition-all duration-300 ${
                  isSubmitting || !title || !question || !category
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[rgba(26,133,198,1)] text-white hover:bg-[rgba(20,120,180,1)] active:scale-95"
                }`}
              >
                <span>{isSubmitting ? "Senden..." : "Frage senden"}</span>
                <Send size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestionPage;

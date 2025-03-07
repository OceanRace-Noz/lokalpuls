
import React from "react";

interface AnswerFormProps {
  answerText: string;
  setAnswerText: (text: string) => void;
  onSubmit: () => void;
}

const AnswerForm: React.FC<AnswerFormProps> = ({
  answerText,
  setAnswerText,
  onSubmit
}) => {
  return (
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
        onClick={onSubmit}
      >
        Antwort senden
      </button>
    </div>
  );
};

export default AnswerForm;

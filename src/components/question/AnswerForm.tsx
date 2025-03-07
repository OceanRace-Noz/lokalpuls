
import React from "react";

interface AnswerFormProps {
  answerText: string;
  setAnswerText: (text: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

const AnswerForm: React.FC<AnswerFormProps> = ({
  answerText,
  setAnswerText,
  onSubmit,
  isSubmitting = false
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answerText.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h3 className="text-xl mb-2 font-medium">Deine Antwort</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border border-gray-300 rounded p-2 min-h-[100px] text-lg"
          placeholder="Deine Antwort hier eingeben..."
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
          disabled={isSubmitting}
        />
        <button 
          type="submit"
          className="mt-2 bg-[#1A85C6] text-white px-4 py-2 rounded hover:bg-[#1476B0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!answerText.trim() || isSubmitting}
        >
          {isSubmitting ? "Wird gesendet..." : "Antwort senden"}
        </button>
      </form>
    </div>
  );
};

export default AnswerForm;


import React, { useState } from "react";

const AskQuestionForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ title, question, category });
    // Reset form
    setTitle("");
    setQuestion("");
    setCategory("");
  };

  return (
    <div className="w-full rounded-[0px_0px_0px_0px]">
      <form
        onSubmit={handleSubmit}
        className="bg-[rgba(10,35,58,1)] shadow-[0px_3px_14px_rgba(36,54,66,0.15)] flex w-full flex-col items-stretch pt-[25px] pb-3.5 px-[11px] rounded-[10px]"
      >
        <h3 className="text-[rgba(78,172,229,1)] text-xl font-medium">
          Jetzt bist du dran!
        </h3>
        <p className="text-[rgba(133,133,133,1)] text-sm font-medium mt-3">
          Stelle deine Fragen an unser Experten-team.
        </p>
        <div className="bg-[rgba(228,228,228,1)] flex items-stretch gap-5 text-[#858585] font-normal justify-between mt-[30px] px-4 py-[15px] rounded-[7px] border-[rgba(78,172,229,1)] border-solid border-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Gib deiner Frage einen Titel..."
            className="text-2xl bg-transparent outline-none w-full"
            maxLength={60}
          />
          <div className="text-[15px] text-right my-auto">
            {title.length}/60
          </div>
        </div>
        <div className="bg-[rgba(228,228,228,1)] flex w-full flex-col items-stretch text-[#858585] font-normal mt-[7px] pt-[18px] pb-2.5 px-2.5 rounded-[7px]">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Deine Frage hier eingeben..."
            className="text-2xl bg-transparent outline-none w-full resize-none h-24 leading-tight"
            maxLength={360}
          />
          <div className="flex items-stretch gap-5 text-[15px] whitespace-nowrap text-right justify-between mt-11">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a5b637c6c5f8cb0de2796b6b9056fe7629dbbf9d3340a180f069517a92bf72d2?placeholderIfAbsent=true"
              alt="Attachment"
              className="aspect-[1.04] object-contain w-[25px] shrink-0 cursor-pointer"
            />
            <div className="mt-[15px]">{question.length}/360</div>
          </div>
        </div>
        <div className="flex w-full items-stretch gap-[11px] text-[15px] leading-none mt-[21px]">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[rgba(228,228,228,1)] flex min-h-10 items-center gap-2.5 text-[rgba(133,133,133,1)] font-normal justify-center px-[18px] py-[13px] rounded-[7px] outline-none appearance-none"
          >
            <option value="" disabled>
              Kategorie auswählen
            </option>
            <option value="freizeit">#Freizeit</option>
            <option value="verkehr">#Verkehr</option>
            <option value="politik">#Politik</option>
            <option value="wohnen">#Wohnen</option>
          </select>
          <button
            type="submit"
            className="bg-[rgba(26,133,198,1)] flex min-h-10 items-center gap-2.5 text-[rgba(246,246,246,1)] font-semibold whitespace-nowrap justify-center px-[18px] py-2.5 rounded-[7px]"
          >
            <span className="self-stretch my-auto">Senden</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/6a0395b2dab46b7316339ced3e50af5c72cf5c0c497cb279991c09139edfa662?placeholderIfAbsent=true"
              alt="Send"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AskQuestionForm;

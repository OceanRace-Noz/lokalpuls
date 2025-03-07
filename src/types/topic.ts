
export type Topic = {
  id: string;
  number: string;
  title: string;
  color: string;
  icon: string;
  categoryType: "freizeit" | "verkehr" | "politik" | "wohnen";
  category: string;
  answers?: { author: string; content: string }[];
};

export type TimeFilterOption = "Heute" | "Gestern" | "Diese Woche" | "Diesen Monat";

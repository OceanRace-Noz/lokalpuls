
export type Topic = {
  id: string;
  number: string;
  title: string;
  color: string;
  icon: string;
  answers?: { author: string; content: string }[];
  categoryType?: string;
};

export type TimeFilterOption = "Heute" | "Gestern" | "Diese Woche" | "Diesen Monat";

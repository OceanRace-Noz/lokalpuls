
// Example data - in a real app this would come from an API
export const questionsData = {
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

// Simulates fetching a question by ID
export const getQuestionById = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const question = questionsData[id as keyof typeof questionsData];
      if (question) {
        resolve(question);
      } else {
        reject(new Error("Question not found"));
      }
    }, 500);
  });
};

// Simulates submitting an answer
export const submitAnswer = (questionId: string, answer: string): Promise<void> => {
  return new Promise((resolve) => {
    console.log(`Submitting answer for question ${questionId}:`, answer);
    // In a real app, this would send the data to the server
    setTimeout(() => {
      resolve();
    }, 300);
  });
};

// Simulates voting on a question
export const voteOnQuestion = (questionId: string, voteType: 'up' | 'down'): Promise<void> => {
  return new Promise((resolve) => {
    console.log(`Voting ${voteType} on question ${questionId}`);
    // In a real app, this would send the vote to the server
    setTimeout(() => {
      resolve();
    }, 200);
  });
};

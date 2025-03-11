
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import QuestionDetail from "./pages/QuestionDetail";
import WeeklyQuestionPage from "./pages/WeeklyQuestionPage";
import IndoorActivitiesPage from "./pages/IndoorActivitiesPage";
import StreetConstructionPage from "./pages/StreetConstructionPage";
import PoliticalParticipationPage from "./pages/PoliticalParticipationPage";
import BestDistrictsPage from "./pages/BestDistrictsPage";
import AskQuestionPage from "./pages/AskQuestionPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ask" element={<AskQuestionPage />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          <Route path="/question/weekly" element={<WeeklyQuestionPage />} />
          <Route path="/question/indoor-activities" element={<IndoorActivitiesPage />} />
          <Route path="/question/street-construction" element={<StreetConstructionPage />} />
          <Route path="/question/political-participation" element={<PoliticalParticipationPage />} />
          <Route path="/question/best-districts" element={<BestDistrictsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

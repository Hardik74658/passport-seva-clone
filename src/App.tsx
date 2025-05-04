import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UserDashboard from "./pages/UserDashboard";
import NotFound from "./pages/NotFound";
import Documents from "./pages/Documents";
import PassportServices from "./pages/PassportServices";
import TrackApplication from "./pages/TrackApplication";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import FeeCalculator from "./pages/FeeCalculator";
import PassportOffices from "./pages/PassportOffices";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "@/components/Dashboard";
import UserProfile from "./pages/UserProfile"; // Import the new profile page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/apply" element={<PassportServices />} />
          <Route path="/apply/new" element={<PassportServices />} />
          <Route path="/apply/renew" element={<PassportServices />} />
          <Route path="/apply/tatkaal" element={<PassportServices />} />
          <Route path="/apply/minor" element={<PassportServices />} />
          <Route path="/track" element={<TrackApplication />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/fees" element={<FeeCalculator />} />
          <Route path="/offices" element={<PassportOffices />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/passport-services" element={<PassportServices />} />
          <Route path="/profile/edit" element={<UserProfile />} /> {/* Add the profile edit route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import CustomSoftware from "./pages/services/CustomSoftware";
import WebDevelopment from "./pages/services/WebDevelopment";
import AISolutions from "./pages/services/AISolutions";
import MobileApps from "./pages/services/MobileApps";
import UIUXDesign from "./pages/services/UIUXDesign";
import CloudDevOps from "./pages/services/CloudDevOps";
import SakhiRescue from "./pages/projects/SakhiRescue";
import ObjectDetection from "./pages/projects/ObjectDetection";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ai-solutions" element={<AISolutions />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/cloud-devops" element={<CloudDevOps />} />
          <Route path="/projects/sakhi-rescue" element={<SakhiRescue />} />
          <Route path="/projects/object-detection" element={<ObjectDetection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

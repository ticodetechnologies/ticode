import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import './i18n/config';
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const ITConsultingPage = lazy(() => import("./pages/services/ITConsultingPage"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const AISolutions = lazy(() => import("./pages/AISolutions"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Insights = lazy(() => import("./pages/Insights"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const KuwaitITConsultingPage = lazy(() => import("./pages/KuwaitITConsultingPage"));

// Kuwait IT Consulting Content Cluster — Category Dominance
const ITConsultingCostKuwait = lazy(() => import("./pages/insights/ITConsultingCostKuwait"));
const ChooseITConsultantKuwait = lazy(() => import("./pages/insights/ChooseITConsultantKuwait"));
const BoardLevelITGovernance = lazy(() => import("./pages/insights/BoardLevelITGovernance"));
const ITConsultingVsCIOKuwait = lazy(() => import("./pages/insights/ITConsultingVsCIOKuwait"));
const ITStrategyFrameworkKuwait = lazy(() => import("./pages/insights/ITStrategyFrameworkKuwait"));
const BestITConsultingFirmsKuwait = lazy(() => import("./pages/insights/BestITConsultingFirmsKuwait"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Layout>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services/it-consulting" element={<ITConsultingPage />} />
                <Route path="/services/:slug" element={<ServicePage />} />
                <Route path="/industries/:slug" element={<IndustryPage />} />
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                {/* GCC Country Landing Pages — Phase 3 SEO Expansion */}
                <Route path="/kuwait/it-consulting" element={<KuwaitITConsultingPage />} />
                {/* Kuwait IT Topic Cluster — Category Dominance */}
                <Route path="/insights/it-consulting-cost-kuwait" element={<ITConsultingCostKuwait />} />
                <Route path="/insights/how-to-choose-it-consultant-kuwait" element={<ChooseITConsultantKuwait />} />
                <Route path="/insights/board-level-it-governance-kuwait" element={<BoardLevelITGovernance />} />
                <Route path="/insights/it-consulting-vs-inhouse-cio-kuwait" element={<ITConsultingVsCIOKuwait />} />
                <Route path="/insights/it-strategy-framework-kuwait" element={<ITStrategyFrameworkKuwait />} />
                <Route path="/insights/best-it-consulting-firms-kuwait" element={<BestITConsultingFirmsKuwait />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

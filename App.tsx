import { useState } from "react";
import { Router, Page } from "./components/Router";
import { ToastProvider } from "./components/ToastProvider";
import { useCapacitor } from "./hooks/useCapacitor";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("Home");
  const [pageData, setPageData] = useState<any>(null);
  const { isNative, platform, triggerHaptic } = useCapacitor();

  const handleNavigate = (page: Page, data?: any) => {
    // Add haptic feedback for native apps
    if (isNative) {
      triggerHaptic("light");
    }
    setCurrentPage(page);
    setPageData(data);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex justify-center"
      data-bravo="[container]"
    >
      {/* Mobile Frame Container */}
      <div
        className="w-full max-w-[393px] min-h-[852px] bg-white/80 backdrop-blur-sm relative overflow-hidden shadow-2xl"
        data-bravo="[container]"
        style={{
          background:
            currentPage === "Home"
              ? "black"
              : "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Router
          currentPage={currentPage}
          onNavigate={handleNavigate}
          pageData={pageData}
        />
        <ToastProvider />
      </div>
    </div>
  );
}
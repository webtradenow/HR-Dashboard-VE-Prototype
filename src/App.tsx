import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { NewReview } from "@/components/pages/new-review";
import { PendingReviews } from "@/components/pages/pending-reviews";
import { FinalReports } from "@/components/pages/final-reports";
import { Enterprise } from "@/components/pages/enterprise";
import { Candidate } from "@/components/pages/candidate";
import { Police } from "@/components/pages/police";
import { Settings } from "@/components/pages/settings";
import { UserManagement } from "@/components/pages/user-management";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen w-full">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0 w-full">
          <TopNav>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </TopNav>
          
          <div className="flex-1 overflow-auto bg-gray-100 w-full">
            <Routes>
              <Route path="/" element={<NewReview />} />
              <Route path="/pending-reviews" element={<PendingReviews />} />
              <Route path="/final-reports" element={<FinalReports />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/candidate" element={<Candidate />} />
              <Route path="/police" element={<Police />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<UserManagement />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
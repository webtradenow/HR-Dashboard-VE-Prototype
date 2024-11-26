import { Bell, Settings, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopNavProps {
  children?: React.ReactNode;
}

export function TopNav({ children }: TopNavProps) {
  return (
    <div className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {children}
          <div className="hidden lg:flex items-center gap-x-3">
            <FileText className="h-6 w-6 shrink-0 text-blue-900" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-blue-900">
                Verificationemploi.ca
              </span>
              <span className="text-sm text-gray-600">
                Background checks are easy!
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-blue-50 relative"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-blue-900" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-blue-50"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5 text-blue-900" />
          </Button>
        </div>
      </div>
    </div>
  );
}
import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopNavProps {
  children?: React.ReactNode;
}

export function TopNav({ children }: TopNavProps) {
  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {children}
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-blue-50">
            <Bell className="h-5 w-5 text-blue-900" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-blue-50">
            <Settings className="h-5 w-5 text-blue-900" />
          </Button>
        </div>
      </div>
    </div>
  );
}
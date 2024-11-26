import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  FileText,
  Clock,
  FileCheck,
  Plus,
  Building2,
  User,
  Shield,
  Settings,
  Users,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

interface SidebarProps {
  onClose?: () => void;
}

const navigation = [
  { name: "New Review", href: "/", icon: Plus },
  { name: "Pending Reviews", href: "/pending-reviews", icon: Clock },
  { name: "Final Reports", href: "/final-reports", icon: FileCheck },
];

const sections = [
  { name: "Enterprise", href: "/enterprise", icon: Building2 },
  { name: "Candidate", href: "/candidate", icon: User },
  { name: "Police", href: "/police", icon: Shield },
];

const adminSections = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "User Management", href: "/users", icon: Users },
];

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <span className="text-lg sm:text-xl font-semibold text-blue-900">
        {time.toLocaleTimeString()}
      </span>
      <span className="text-[10px] sm:text-[11px] text-gray-600">
        {time.toLocaleDateString(undefined, { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </span>
    </div>
  );
}

export function Sidebar({ onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="border-b px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <FileText className="h-6 w-6 shrink-0 text-blue-900" />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-semibold text-blue-900 text-left">
                Verificationemploi.ca
              </span>
              <span className="text-xs sm:text-sm text-gray-600 text-left">
                Background checks are easy!
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <nav className="flex-1 space-y-3 px-3 py-3 sm:space-y-4 sm:px-4 sm:py-4">
        <div className="space-y-1">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="default"
              className="w-full justify-start gap-x-3 bg-blue-900 hover:bg-blue-800 text-sm sm:text-base"
              asChild
            >
              <Link to={item.href}>
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white">{item.name}</span>
              </Link>
            </Button>
          ))}
        </div>
        
        <div className="relative py-3 sm:py-4">
          <div className="absolute inset-0 flex items-center px-4">
            <div className="w-full border-t border-gray-200" />
          </div>
        </div>

        <div className="space-y-1">
          {sections.map((item) => (
            <Button
              key={item.name}
              variant="default"
              className="w-full justify-start gap-x-3 bg-blue-900 hover:bg-blue-800 text-sm sm:text-base"
              asChild
            >
              <Link to={item.href}>
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white">{item.name}</span>
              </Link>
            </Button>
          ))}
        </div>

        <div className="relative py-3 sm:py-4">
          <div className="absolute inset-0 flex items-center px-4">
            <div className="w-full border-t border-gray-200" />
          </div>
        </div>

        <div className="space-y-1">
          {adminSections.map((item) => (
            <Button
              key={item.name}
              variant="default"
              className="w-full justify-start gap-x-3 bg-blue-900 hover:bg-blue-800 text-sm sm:text-base"
              asChild
            >
              <Link to={item.href}>
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white">{item.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </nav>

      <div className="border-t px-4 py-3 sm:px-6 sm:py-4">
        <LiveClock />
      </div>
    </div>
  );
}
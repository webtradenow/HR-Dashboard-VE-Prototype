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
    <div className="flex h-full flex-col bg-white shadow-lg border-r">
      {onClose && (
        <div className="flex justify-end p-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}
      
      <div className="flex-1 space-y-6 overflow-y-auto p-4">
        <LiveClock />
        
        <nav className="space-y-6">
          <div>
            <h2 className="mb-2 px-2 text-sm font-semibold text-gray-500">Main Actions</h2>
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                    ${location.pathname === item.href
                      ? "bg-blue-50 text-blue-900"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                    }`}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <h2 className="mb-2 px-2 text-sm font-semibold text-gray-500">Sections</h2>
            <div className="space-y-1">
              {sections.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                    ${location.pathname === item.href
                      ? "bg-blue-50 text-blue-900"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                    }`}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <h2 className="mb-2 px-2 text-sm font-semibold text-gray-500">Administration</h2>
            <div className="space-y-1">
              {adminSections.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                    ${location.pathname === item.href
                      ? "bg-blue-50 text-blue-900"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                    }`}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
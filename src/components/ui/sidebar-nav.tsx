import { cn } from "@/lib/utils";
import { Activity, Brain, Stethoscope, Home, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Symptom Analysis", 
    href: "/symptom-analysis",
    icon: Activity,
  },
  {
    title: "Mind-Bot",
    href: "/mind-bot", 
    icon: Brain,
  },
  {
    title: "Consult Doctor",
    href: "/consult-doctor",
    icon: Stethoscope,
  },
];

export function SidebarNav() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col bg-white/5 backdrop-blur-md border-r border-white/10">
      <div className="flex items-center gap-3 p-6 border-b border-white/10">
        <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <span className="text-2xl font-light text-white tracking-wide">CarePulse</span>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300",
                isActive
                  ? "bg-white/20 text-white backdrop-blur-sm border border-white/20"
                  : "text-white/70 hover:bg-white/10 hover:text-white hover:backdrop-blur-sm"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 text-xs text-white/50 bg-white/5 backdrop-blur-sm m-4 rounded-xl border border-white/10">
        <p className="font-medium mb-1 text-white/70">Educational Use Only</p>
        <p>Always consult healthcare professionals for medical advice.</p>
      </div>
    </div>
  );
}
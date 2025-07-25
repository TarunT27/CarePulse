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
    <div className="flex h-screen w-64 flex-col bg-gradient-primary shadow-glow">
      <div className="flex items-center gap-3 p-6">
        <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
          <Zap className="h-6 w-6 text-primary-foreground" />
        </div>
        <span className="text-2xl font-bold text-primary-foreground tracking-tight">CarePulse</span>
      </div>
      
      <nav className="flex-1 space-y-2 p-4">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300",
                isActive
                  ? "bg-white/25 text-primary-foreground shadow-soft backdrop-blur-sm"
                  : "text-primary-foreground/80 hover:bg-white/15 hover:text-primary-foreground hover:backdrop-blur-sm"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-6 text-xs text-primary-foreground/70 bg-black/10 backdrop-blur-sm m-4 rounded-xl">
        <p className="font-medium mb-1">Educational Use Only</p>
        <p>Always consult healthcare professionals for medical advice.</p>
      </div>
    </div>
  );
}
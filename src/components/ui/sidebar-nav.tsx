import { cn } from "@/lib/utils";
import { Heart, Activity, Brain, Stethoscope, Home } from "lucide-react";
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
    <div className="flex h-screen w-64 flex-col bg-gradient-primary shadow-soft">
      <div className="flex items-center gap-2 p-6">
        <Heart className="h-8 w-8 text-primary-foreground" />
        <span className="text-2xl font-bold text-primary-foreground">HealSmart</span>
      </div>
      
      <nav className="flex-1 space-y-2 p-4">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 text-xs text-primary-foreground/60">
        <p>For educational purposes only.</p>
        <p>Always consult a healthcare professional.</p>
      </div>
    </div>
  );
}
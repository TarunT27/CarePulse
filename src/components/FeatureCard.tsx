import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient?: string;
}

export function FeatureCard({ title, description, icon: Icon, href, gradient = "bg-gradient-card" }: FeatureCardProps) {
  return (
    <Card className={`${gradient} shadow-card border-0 h-full transition-all duration-500 hover:shadow-glow hover:scale-105 group overflow-hidden relative`}>
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-gradient-primary shadow-glow group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-xl text-foreground font-semibold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 relative z-10">
        <CardDescription className="text-muted-foreground leading-relaxed text-base">
          {description}
        </CardDescription>
        <Button asChild className="w-full bg-gradient-primary hover:bg-gradient-accent shadow-soft group-hover:shadow-glow transition-all duration-300">
          <Link to={href}>Get Started</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
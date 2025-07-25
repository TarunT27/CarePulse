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
    <Card className={`${gradient} shadow-card border-0 h-full transition-all duration-300 hover:shadow-soft hover:scale-105`}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
        <Button asChild className="w-full">
          <Link to={href}>Get Started</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
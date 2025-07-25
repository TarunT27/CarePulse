import { FeatureCard } from "@/components/FeatureCard";
import { Activity, Brain, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const Index = () => {
  return (
    <div className="flex-1 p-8 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Heal Smart:
            </h1>
            <h2 className="text-4xl font-bold text-foreground">
              Take Charge of Your Health, Mind & Body
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Feeling under the weather and not sure what's wrong? Don't worry, HealSmart is here to be your friendly health detective!
            </p>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <img 
              src={heroImage} 
              alt="Healthcare AI Assistant" 
              className="w-full h-auto rounded-2xl shadow-card"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Symptom Analysis"
            description="Analyze your symptoms and get assistance powered by AI"
            icon={Activity}
            href="/symptom-analysis"
          />
          <FeatureCard
            title="Mind-Bot"
            description="Your AI Companion for Mental Wellness and guidance"
            icon={Brain}
            href="/mind-bot"
          />
          <FeatureCard
            title="Consult Doctor"
            description="Explore specialists and book appointments hassle-free"
            icon={Stethoscope}
            href="/consult-doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

import { FeatureCard } from "@/components/FeatureCard";
import { Activity, Brain, Stethoscope } from "lucide-react";
import heroImage from "@/assets/carepulse-hero.png";

const Index = () => {
  return (
    <div className="flex-1 p-8 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-accent-foreground text-sm font-medium shadow-glow">
              ✨ AI-Powered Healthcare Assistant
            </div>
            <h1 className="text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
              CarePulse
            </h1>
            <h2 className="text-3xl font-semibold text-foreground/90">
              Your Smart Health Companion
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the future of healthcare with AI-powered symptom analysis, mental wellness support, and seamless doctor consultations - all in one intelligent platform.
            </p>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-20"></div>
            <img 
              src={heroImage} 
              alt="CarePulse AI Healthcare Assistant" 
              className="relative w-full h-auto rounded-3xl shadow-glow border border-white/20"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="AI Symptom Analyzer"
            description="Get instant AI-powered insights into your symptoms with advanced machine learning analysis"
            icon={Activity}
            href="/symptom-analysis"
          />
          <FeatureCard
            title="Mental Wellness Bot"
            description="Your 24/7 AI companion for mental health support, stress management, and emotional guidance"
            icon={Brain}
            href="/mind-bot"
          />
          <FeatureCard
            title="Expert Consultations"
            description="Connect with verified healthcare professionals and book appointments seamlessly"
            icon={Stethoscope}
            href="/consult-doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

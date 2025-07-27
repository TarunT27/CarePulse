import { Activity, Brain, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex-1 min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-8 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
              ⚡ AI Clinical Decision Support
            </div>
            <h1 className="text-7xl font-light text-white leading-tight tracking-tight">
              CarePulse
            </h1>
            <h2 className="text-2xl font-normal text-white/90 tracking-wide">
              AI Clinical Decision Support
            </h2>
            
            {/* Main Search Input */}
            <div className="max-w-2xl mx-auto mt-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/60 text-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                />
                <div className="absolute left-6 -bottom-8 text-white/50 text-sm">
                  💡 Deep Reasoning
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <Link 
            to="/symptom-analysis"
            className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/15 transition-all text-sm"
          >
            <Activity className="h-4 w-4" />
            Symptom Analysis
          </Link>
          <Link 
            to="/mind-bot"
            className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/15 transition-all text-sm"
          >
            <Brain className="h-4 w-4" />
            Mental Wellness
          </Link>
          <Link 
            to="/consult-doctor"
            className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/15 transition-all text-sm"
          >
            <Stethoscope className="h-4 w-4" />
            Consult Doctor
          </Link>
          <button className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/15 transition-all text-sm">
            📊 Ask a Question
          </button>
          <button className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/15 transition-all text-sm">
            📋 Health Summary
          </button>
          <button className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/15 transition-all text-sm">
            📖 Instructions
          </button>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-white/40 text-xs max-w-2xl mx-auto leading-relaxed">
            Our CarePulse AI Clinical Decision Support platform is designed to enhance the clinical decision-making processes of clinicians. Our AI CDS generates drafts of differential diagnoses, assessments & plans, and answers to clinical reference questions. The available core features of the platform are not designed for use and should not be used for acquiring, processing, or analyzing medical images. CarePulse v2.5.42
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

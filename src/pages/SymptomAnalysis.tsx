import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, AlertTriangle, Brain } from "lucide-react";

export default function SymptomAnalysis() {
  const [symptoms, setSymptoms] = useState("");
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return;
    
    setLoading(true);
    
    // Simulate AI analysis (replace with actual AI service)
    setTimeout(() => {
      setAnalysis(
        `Based on your symptoms: "${symptoms}", here are some possible considerations:\n\n` +
        `• This could be related to common conditions like viral infections, stress, or fatigue\n` +
        `• Consider monitoring your symptoms for the next 24-48 hours\n` +
        `• Stay hydrated and get adequate rest\n` +
        `• If symptoms worsen or persist, consult a healthcare professional\n\n` +
        `⚠️ This is an AI-generated analysis for educational purposes only. Always consult with a qualified healthcare provider for proper medical advice.`
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex-1 p-8 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-accent-foreground text-sm font-medium shadow-glow">
            🧠 AI-Powered Analysis
          </div>
          <div className="flex items-center justify-center gap-3">
            <Brain className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Symptom Analyzer
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Describe your symptoms in detail and receive intelligent AI-powered insights to better understand your health condition
          </p>
        </div>

        <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-700 dark:text-amber-300">
            <strong>Medical Disclaimer:</strong> This tool provides educational information only and should not replace professional medical advice, diagnosis, or treatment. Always consult healthcare professionals for medical concerns.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Describe Your Symptoms
              </CardTitle>
              <CardDescription>
                Be as detailed as possible about what you're experiencing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Example: I have been experiencing a headache for 2 days, along with mild fever and fatigue. The headache is mostly in the front of my head and gets worse in bright light..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="min-h-[200px] resize-none"
              />
              <Button 
                onClick={handleAnalyze}
                disabled={!symptoms.trim() || loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Symptoms"
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Analysis Results
              </CardTitle>
              <CardDescription>
                AI-generated insights based on your symptoms
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!analysis && !loading && (
                <div className="text-center py-12 text-muted-foreground">
                  <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter your symptoms and click "Analyze" to get AI insights</p>
                </div>
              )}
              
              {loading && (
                <div className="text-center py-12">
                  <Loader2 className="h-12 w-12 mx-auto mb-4 animate-spin text-primary" />
                  <p className="text-muted-foreground">AI is analyzing your symptoms...</p>
                </div>
              )}
              
              {analysis && (
                <div className="space-y-4">
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">AI Generated</Badge>
                    <Badge variant="outline">Educational Only</Badge>
                  </div>
                  <div className="prose prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap text-sm text-foreground font-sans">
                      {analysis}
                    </pre>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSymptoms("");
                      setAnalysis(null);
                    }}
                    className="w-full mt-4"
                  >
                    Start New Analysis
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
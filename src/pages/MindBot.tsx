import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

export default function MindBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hello! I'm your AI companion for mental wellness. I'm here to listen, provide support, and offer guidance. How are you feeling today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    
    // Simulate AI response (replace with actual AI service)
    setTimeout(() => {
      const botResponse: Message = {
        role: "bot",
        content: generateMentalHealthResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setLoading(false);
    }, 1500);
  };

  const generateMentalHealthResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("anxious") || input.includes("anxiety")) {
      return "I understand you're feeling anxious. Anxiety is very common and manageable. Try taking slow, deep breaths - in for 4 counts, hold for 4, out for 4. Remember that you've gotten through difficult times before, and you can get through this too. Would you like to talk about what's making you feel anxious?";
    }
    
    if (input.includes("sad") || input.includes("depressed") || input.includes("down")) {
      return "I hear that you're feeling down, and I want you to know that your feelings are valid. It's okay to not be okay sometimes. Small steps can make a big difference - even something as simple as getting some sunlight or reaching out to a friend can help. Remember, seeking professional help is a sign of strength, not weakness.";
    }
    
    if (input.includes("stress") || input.includes("overwhelmed")) {
      return "Feeling overwhelmed is tough, but you're not alone in this. Let's break things down into smaller, manageable pieces. What's one small thing you could do today to take care of yourself? Sometimes prioritizing and focusing on one task at a time can help reduce that overwhelming feeling.";
    }
    
    if (input.includes("grateful") || input.includes("good") || input.includes("happy")) {
      return "It's wonderful to hear that you're feeling positive! Gratitude and recognizing good moments are so important for our mental well-being. What specifically is bringing you joy today? Celebrating these moments, both big and small, helps build resilience.";
    }
    
    return "Thank you for sharing with me. Your feelings and experiences matter. Mental wellness is a journey, and it's normal to have ups and downs. Remember to be kind to yourself. If you're struggling with persistent mental health concerns, please consider reaching out to a mental health professional. Is there anything specific you'd like to talk about today?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 p-8 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-accent-foreground text-sm font-medium shadow-glow">
            💝 Mental Wellness Support
          </div>
          <div className="flex items-center justify-center gap-3">
            <Heart className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mental Wellness Bot
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your compassionate AI companion providing 24/7 emotional support, guidance, and mental wellness resources
          </p>
        </div>

        <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
          <Heart className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-700 dark:text-blue-300">
            <strong>Safe Space:</strong> This is a judgment-free zone for your thoughts and feelings. While I can provide support and coping strategies, please reach out to mental health professionals for ongoing concerns.
          </AlertDescription>
        </Alert>

        <Card className="bg-gradient-card shadow-card border-0 h-[600px] flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Mental Wellness Chat
            </CardTitle>
            <CardDescription>
              Share your thoughts and feelings in a safe, supportive environment
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className={`p-2 rounded-full flex-shrink-0 ${
                    message.role === "user" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-accent text-accent-foreground"
                  }`}>
                    {message.role === "user" ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground ml-auto"
                      : "bg-muted"
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex gap-3">
                  <div className="p-2 rounded-full bg-accent text-accent-foreground">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Mind-Bot is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex gap-2">
              <Input
                placeholder="Share what's on your mind..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={loading}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!input.trim() || loading}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
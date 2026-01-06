import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { CheckCircle, ArrowRight, ArrowLeft, Upload, Sparkles } from "lucide-react";
import { useState } from "react";

interface OnboardingPageProps {
  onNavigate: (page: string) => void;
}

export function OnboardingPage({ onNavigate }: OnboardingPageProps) {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const totalSteps = 4;

  const topics = [
    { name: "Technology", emoji: "💻", color: "from-[#6366F1] to-[#8B5CF6]" },
    { name: "Design", emoji: "🎨", color: "from-[#EC4899] to-[#F472B6]" },
    { name: "Development", emoji: "⚙️", color: "from-[#06B6D4] to-[#6366F1]" },
    { name: "Writing", emoji: "✍️", color: "from-[#FB923C] to-[#F472B6]" },
    { name: "Business", emoji: "📈", color: "from-[#8B5CF6] to-[#EC4899]" },
    { name: "Lifestyle", emoji: "✨", color: "from-[#06B6D4] to-[#8B5CF6]" },
    { name: "AI & ML", emoji: "🤖", color: "from-[#6366F1] to-[#EC4899]" },
    { name: "Marketing", emoji: "📱", color: "from-[#FB923C] to-[#6366F1]" },
    { name: "Photography", emoji: "📸", color: "from-[#EC4899] to-[#8B5CF6]" },
    { name: "Travel", emoji: "✈️", color: "from-[#06B6D4] to-[#FB923C]" },
    { name: "Health", emoji: "🏃", color: "from-[#6366F1] to-[#06B6D4]" },
    { name: "Finance", emoji: "💰", color: "from-[#FB923C] to-[#EC4899]" }
  ];

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onNavigate('home');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden py-12 px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 gradient-aurora aurora-animate opacity-10" />
      
      <div className="relative w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Step {step} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground">{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <Card className="border-0 shadow-2xl backdrop-blur-sm bg-card/95">
          <CardContent className="p-8 md:p-12">
            {/* Step 1: Welcome */}
            {step === 1 && (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-2xl gradient-aurora aurora-animate flex items-center justify-center text-white mx-auto shadow-2xl">
                  <Sparkles className="w-10 h-10" />
                </div>
                
                <div>
                  <h2 className="text-4xl font-bold mb-4">
                    Welcome to
                    <span className="block mt-2 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">
                      BlogSphere!
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    Let's set up your profile and customize your experience. This will only take a minute.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  {[
                    { icon: "🎨", label: "Personalize" },
                    { icon: "✍️", label: "Write" },
                    { icon: "🚀", label: "Grow" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-muted/50 text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="text-sm font-medium">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Username & Bio */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">Create Your Profile</h2>
                  <p className="text-muted-foreground">
                    Choose a unique username and tell us about yourself
                  </p>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24 border-4 border-primary/20">
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-[#6366F1] to-[#EC4899] text-white">
                        {username[0]?.toUpperCase() || "?"}
                      </AvatarFallback>
                    </Avatar>
                    <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white flex items-center justify-center hover:scale-110 transition-transform">
                      <Upload className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Username</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
                      <Input
                        type="text"
                        placeholder="johndoe"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="pl-8 h-12 bg-muted/50"
                      />
                    </div>
                    {username && (
                      <p className="text-xs text-green-500 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Username is available
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bio</label>
                    <Textarea
                      placeholder="Tell readers about yourself in a few words..."
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="min-h-[120px] bg-muted/50 resize-none"
                    />
                    <p className="text-xs text-muted-foreground text-right">
                      {bio.length}/160 characters
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Choose Interests */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">Choose Your Interests</h2>
                  <p className="text-muted-foreground">
                    Select topics you're interested in (at least 3)
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {topics.map((topic) => (
                    <button
                      key={topic.name}
                      onClick={() => toggleTopic(topic.name)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedTopics.includes(topic.name)
                          ? `border-transparent bg-gradient-to-br ${topic.color} text-white scale-105`
                          : 'border-border hover:border-primary/50 bg-muted/30'
                      }`}
                    >
                      <div className="text-3xl mb-2">{topic.emoji}</div>
                      <p className="text-sm font-medium">{topic.name}</p>
                      {selectedTopics.includes(topic.name) && (
                        <CheckCircle className="w-4 h-4 mt-2 mx-auto" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="text-center">
                  <Badge className="bg-primary/10 text-primary border-0">
                    {selectedTopics.length} topics selected
                  </Badge>
                </div>
              </div>
            )}

            {/* Step 4: Complete */}
            {step === 4 && (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>

                <div>
                  <h2 className="text-4xl font-bold mb-4">
                    You're All Set! 🎉
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
                    Your profile is ready. Start exploring amazing content and share your own stories with the world.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-2xl p-6 space-y-4">
                  <h3 className="font-semibold">What's Next?</h3>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div className="p-4 rounded-lg bg-card">
                      <div className="text-2xl mb-2">📝</div>
                      <p className="font-medium mb-1">Write Your First Article</p>
                      <p className="text-xs text-muted-foreground">Share your expertise</p>
                    </div>
                    <div className="p-4 rounded-lg bg-card">
                      <div className="text-2xl mb-2">👥</div>
                      <p className="font-medium mb-1">Follow Writers</p>
                      <p className="text-xs text-muted-foreground">Build your network</p>
                    </div>
                    <div className="p-4 rounded-lg bg-card">
                      <div className="text-2xl mb-2">🎯</div>
                      <p className="font-medium mb-1">Explore Content</p>
                      <p className="text-xs text-muted-foreground">Discover articles</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={step === 3 && selectedTopics.length < 3}
                className="gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0"
              >
                {step === totalSteps ? 'Get Started' : 'Continue'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {step === 1 && (
              <button
                onClick={() => onNavigate('home')}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors mt-4"
              >
                Skip for now
              </button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

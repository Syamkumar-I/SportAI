import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Activity, 
  Camera, 
  Shield, 
  History, 
  Zap, 
  Trophy, 
  Target,
  Timer,
  TrendingUp,
  Brain,
  CheckCircle,
  AlertTriangle,
  BarChart3
} from "lucide-react";

const AthleteDashboard = () => {
  const [fitnessMetrics, setFitnessMetrics] = useState({
    sprintTime: "",
    jumpHeight: "", 
    endurance: "",
    agility: "",
    reflex: ""
  });
  
  const [talentScore, setTalentScore] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const calculateTalentScore = () => {
    setIsProcessing(true);
    
    // Mock AI calculation
    setTimeout(() => {
      const score = Math.floor(Math.random() * 30) + 70; // 70-100 range
      setTalentScore(score);
      setIsProcessing(false);
    }, 2000);
  };

  const mockAssessments = [
    { date: "2025-01-08", sport: "Athletics", score: 87, status: "completed" },
    { date: "2025-01-05", sport: "Athletics", score: 82, status: "completed" },
    { date: "2025-01-02", sport: "Athletics", score: 79, status: "flagged" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass border-b border-white/10 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Athlete Dashboard</h1>
              <p className="text-muted-foreground text-sm">Welcome back, Alex</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30">
              <CheckCircle className="w-4 h-4 mr-2" />
              Verified Athlete
            </Badge>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Profile Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="assessment" className="space-y-8">
          <TabsList className="grid grid-cols-5 w-full bg-muted/20">
            <TabsTrigger value="assessment" className="flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Assessment</span>
            </TabsTrigger>
            <TabsTrigger value="camera" className="flex items-center space-x-2">
              <Camera className="w-4 h-4" />
              <span>Camera Test</span>
            </TabsTrigger>
            <TabsTrigger value="cheat" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Cheat Detection</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <History className="w-4 h-4" />
              <span>History</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </TabsTrigger>
          </TabsList>

          {/* Assessment Tab */}
          <TabsContent value="assessment" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Form */}
              <Card className="glass border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Activity className="w-5 h-5" />
                    <span>Fitness Assessment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white">Sprint Time (100m)</Label>
                      <Input
                        placeholder="12.5 seconds"
                        value={fitnessMetrics.sprintTime}
                        onChange={(e) => setFitnessMetrics({...fitnessMetrics, sprintTime: e.target.value})}
                        className="bg-muted/20 border-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Jump Height</Label>
                      <Input
                        placeholder="60 cm"
                        value={fitnessMetrics.jumpHeight}
                        onChange={(e) => setFitnessMetrics({...fitnessMetrics, jumpHeight: e.target.value})}
                        className="bg-muted/20 border-white/20 text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white">Endurance (mins)</Label>
                      <Input
                        placeholder="15 minutes"
                        value={fitnessMetrics.endurance}
                        onChange={(e) => setFitnessMetrics({...fitnessMetrics, endurance: e.target.value})}
                        className="bg-muted/20 border-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Agility Score</Label>
                      <Input
                        placeholder="8.5/10"
                        value={fitnessMetrics.agility}
                        onChange={(e) => setFitnessMetrics({...fitnessMetrics, agility: e.target.value})}
                        className="bg-muted/20 border-white/20 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Reflex Time (ms)</Label>
                    <Input
                      placeholder="250ms"
                      value={fitnessMetrics.reflex}
                      onChange={(e) => setFitnessMetrics({...fitnessMetrics, reflex: e.target.value})}
                      className="bg-muted/20 border-white/20 text-white"
                    />
                  </div>

                  <Button 
                    onClick={calculateTalentScore}
                    disabled={isProcessing}
                    className="w-full bg-gradient-primary hover:glow-primary text-white py-6"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        AI Processing...
                      </>
                    ) : (
                      <>
                        <Brain className="w-4 h-4 mr-2" />
                        Calculate Talent Score
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="glass border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Target className="w-5 h-5" />
                    <span>AI Analysis Results</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {talentScore ? (
                    <>
                      <div className="text-center">
                        <div className="text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                          {talentScore}
                        </div>
                        <div className="text-muted-foreground">Talent Score</div>
                        <Progress value={talentScore} className="mt-4 h-3" />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white">Speed</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={85} className="w-20 h-2" />
                            <span className="text-sm text-muted-foreground">85%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white">Endurance</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={78} className="w-20 h-2" />
                            <span className="text-sm text-muted-foreground">78%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white">Agility</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={92} className="w-20 h-2" />
                            <span className="text-sm text-muted-foreground">92%</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                        <h4 className="font-semibold text-secondary mb-2 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          AI Recommendation
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Excellent agility scores! Focus on endurance training to reach elite level.
                          Consider specialized sprint coaching for speed improvement.
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <Brain className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Enter your fitness metrics and run AI analysis to get your talent score
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Camera Test Tab */}
          <TabsContent value="camera" className="space-y-8">
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Camera className="w-5 h-5" />
                  <span>Live Pose Estimation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-12">
                <div className="bg-muted/10 rounded-lg p-8 mb-6">
                  <Camera className="w-24 h-24 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-white mb-2">Camera Test Ready</p>
                  <p className="text-muted-foreground mb-6">
                    Enable camera access for real-time pose estimation and movement analysis
                  </p>
                  <Button className="bg-gradient-secondary hover:glow-secondary text-white">
                    <Camera className="w-4 h-4 mr-2" />
                    Start Camera Test
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  {["Posture Analysis", "Movement Tracking", "Form Correction"].map((feature, index) => (
                    <div key={index} className="p-3 bg-muted/10 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-secondary mx-auto mb-2" />
                      <p className="text-white">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cheat Detection Tab */}
          <TabsContent value="cheat" className="space-y-8">
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Shield className="w-5 h-5" />
                  <span>Cheat Detection System</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-8 border-2 border-dashed border-muted/30 rounded-lg">
                  <Shield className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-white mb-2">Upload Assessment Video</p>
                  <p className="text-muted-foreground mb-6">
                    AI will analyze the video for any manipulation or incorrect movements
                  </p>
                  <Button className="bg-gradient-accent hover:glow-accent text-white">
                    <Zap className="w-4 h-4 mr-2" />
                    Upload Video
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                    <h4 className="font-semibold text-secondary mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Detection Features
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Movement authenticity verification</li>
                      <li>• Speed manipulation detection</li>
                      <li>• Environmental tampering analysis</li>
                      <li>• Real-time confidence scoring</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-accent mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Fair Play Guidelines
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Use natural lighting conditions</li>
                      <li>• Ensure clear camera visibility</li>
                      <li>• No video editing or filters</li>
                      <li>• Single continuous recording</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-8">
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <History className="w-5 h-5" />
                  <span>Assessment History</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAssessments.map((assessment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/10 rounded-lg hover-lift">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{assessment.sport} Assessment</p>
                          <p className="text-sm text-muted-foreground">{assessment.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                            {assessment.score}
                          </div>
                          <div className="text-xs text-muted-foreground">Talent Score</div>
                        </div>
                        
                        <Badge 
                          className={
                            assessment.status === "completed" 
                              ? "bg-secondary/20 text-secondary border-secondary/30"
                              : "bg-destructive/20 text-destructive border-destructive/30"
                          }
                        >
                          {assessment.status === "completed" ? (
                            <CheckCircle className="w-3 h-3 mr-1" />
                          ) : (
                            <AlertTriangle className="w-3 h-3 mr-1" />
                          )}
                          {assessment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-8">
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <User className="w-5 h-5" />
                  <span>Athlete Profile</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-white">Full Name</Label>
                      <Input value="Alex Johnson" className="bg-muted/20 border-white/20 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Email</Label>
                      <Input value="alex.johnson@email.com" className="bg-muted/20 border-white/20 text-white" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-white">Age</Label>
                        <Input value="24" className="bg-muted/20 border-white/20 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white">Gender</Label>
                        <Input value="Male" className="bg-muted/20 border-white/20 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-white">Primary Sport</Label>
                      <Input value="Athletics - Sprinting" className="bg-muted/20 border-white/20 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">State/Region</Label>
                      <Input value="Maharashtra" className="bg-muted/20 border-white/20 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Contact Number</Label>
                      <Input value="+91 98765 43210" className="bg-muted/20 border-white/20 text-white" />
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-primary hover:glow-primary text-white">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AthleteDashboard;
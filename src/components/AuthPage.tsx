import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, User, Shield, ArrowLeft, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [userRole, setUserRole] = useState<"athlete" | "admin">("athlete");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - redirect based on role
    if (userRole === "athlete") {
      navigate("/athlete-dashboard");
    } else {
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5 animate-gradient-shift bg-300%"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-secondary rounded-full opacity-15 animate-float" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-md mx-auto animate-slide-up">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                SportAI
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-2">
              {isLogin ? "Welcome Back" : "Join SportAI"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin ? "Sign in to your account" : "Create your account to get started"}
            </p>
          </div>

          <Card className="glass border-white/10 hover-lift">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-white">
                {isLogin ? "Sign In" : "Create Account"}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-3">
                  <Label className="text-white">I am a</Label>
                  <Tabs value={userRole} onValueChange={(value) => setUserRole(value as "athlete" | "admin")}>
                    <TabsList className="grid w-full grid-cols-2 bg-muted/20">
                      <TabsTrigger value="athlete" className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Athlete</span>
                      </TabsTrigger>
                      <TabsTrigger value="admin" className="flex items-center space-x-2">
                        <Shield className="w-4 h-4" />
                        <span>SAI Admin</span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-muted/20 border-white/20 text-white placeholder:text-muted-foreground"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-muted/20 border-white/20 text-white placeholder:text-muted-foreground"
                    required
                  />
                </div>

                {/* Registration Fields */}
                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className="bg-muted/20 border-white/20 text-white placeholder:text-muted-foreground"
                        required
                      />
                    </div>

                    {userRole === "athlete" && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="age" className="text-white">Age</Label>
                            <Input
                              id="age"
                              type="number"
                              placeholder="25"
                              className="bg-muted/20 border-white/20 text-white placeholder:text-muted-foreground"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-white">Gender</Label>
                            <Select>
                              <SelectTrigger className="bg-muted/20 border-white/20 text-white">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-white">Sport</Label>
                          <Select>
                            <SelectTrigger className="bg-muted/20 border-white/20 text-white">
                              <SelectValue placeholder="Select your sport" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="athletics">Athletics</SelectItem>
                              <SelectItem value="cricket">Cricket</SelectItem>
                              <SelectItem value="football">Football</SelectItem>
                              <SelectItem value="badminton">Badminton</SelectItem>
                              <SelectItem value="wrestling">Wrestling</SelectItem>
                              <SelectItem value="boxing">Boxing</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-white">State/Region</Label>
                          <Input
                            placeholder="Your state or region"
                            className="bg-muted/20 border-white/20 text-white placeholder:text-muted-foreground"
                          />
                        </div>
                      </>
                    )}
                  </>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:glow-primary text-white py-6"
                  size="lg"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                  <Zap className="w-4 h-4 ml-2" />
                </Button>

                {/* Toggle Mode */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Role Benefits */}
          <div className="mt-6 space-y-3">
            {userRole === "athlete" && (
              <Badge className="w-full justify-start bg-primary/20 text-primary border-primary/30 p-3">
                <User className="w-4 h-4 mr-2" />
                Access AI fitness scoring, cheat detection, and direct SAI submissions
              </Badge>
            )}
            {userRole === "admin" && (
              <Badge className="w-full justify-start bg-secondary/20 text-secondary border-secondary/30 p-3">
                <Shield className="w-4 h-4 mr-2" />
                Manage athlete assessments, review reports, and access analytics
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Checkbox } from "./ui/checkbox";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Github, Chrome, Sparkles, Shield, Zap, CheckCircle } from "lucide-react";
import { useState } from "react";

interface AuthPagesProps {
  onNavigate: (page: string) => void;
}

// Login Page
export function LoginPage({ onNavigate }: AuthPagesProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden py-12 px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 gradient-aurora aurora-animate opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#EC4899]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl gradient-aurora aurora-animate flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-3xl">B</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                  BlogSphere
                </h1>
                <p className="text-muted-foreground">Where Ideas Come Alive</p>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Welcome Back to Your
            <span className="block mt-2 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">
              Creative Space
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Continue your journey with 50,000+ writers and 1M+ readers on the world's most beautiful blogging platform.
          </p>

          {/* Features */}
          <div className="space-y-4">
            {[
              { icon: <Sparkles className="w-5 h-5" />, text: "AI-powered writing assistant", color: "from-[#6366F1] to-[#8B5CF6]" },
              { icon: <Shield className="w-5 h-5" />, text: "Your data is secure with us", color: "from-[#EC4899] to-[#F472B6]" },
              { icon: <Zap className="w-5 h-5" />, text: "Lightning-fast performance", color: "from-[#06B6D4] to-[#6366F1]" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>
                <span className="text-muted-foreground">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: "50K+", label: "Writers" },
              { value: "1M+", label: "Readers" },
              { value: "4.9/5", label: "Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-muted/50">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Login Form */}
        <Card className="border-0 shadow-2xl backdrop-blur-sm bg-card/95">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Social Login */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full h-12 gap-3 hover:bg-muted/50 transition-all group">
                <Chrome className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full h-12 gap-3 hover:bg-muted/50 transition-all group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-4 text-sm text-muted-foreground">
                Or continue with email
              </span>
            </div>

            {/* Email/Password Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 h-12 bg-muted/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 pr-11 h-12 bg-muted/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('forgot-password')}
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
                className="w-full h-12 bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] hover:shadow-xl hover:shadow-primary/25 text-white border-0 group"
              >
                Sign In
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button
                onClick={() => onNavigate('signup')}
                className="text-primary hover:underline font-medium"
              >
                Sign up for free
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Signup Page
export function SignupPage({ onNavigate }: AuthPagesProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden py-12 px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 gradient-aurora aurora-animate opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#EC4899]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Benefits */}
        <div className="hidden lg:block">
          <Badge className="mb-6 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white border-0 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Join 50,000+ Writers
          </Badge>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Start Your Journey as a
            <span className="block mt-2 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">
              Professional Writer
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Everything you need to write, publish, and grow your audience in one beautiful platform.
          </p>

          {/* Benefits List */}
          <div className="space-y-4 mb-8">
            {[
              { icon: <CheckCircle className="w-5 h-5" />, text: "Free forever with unlimited articles", color: "from-[#6366F1] to-[#8B5CF6]" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "AI-powered writing tools & suggestions", color: "from-[#EC4899] to-[#F472B6]" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "Advanced analytics & insights", color: "from-[#06B6D4] to-[#6366F1]" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "Monetization & earning opportunities", color: "from-[#FB923C] to-[#F472B6]" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "Engaged community of readers", color: "from-[#8B5CF6] to-[#EC4899]" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white`}>
                  {benefit.icon}
                </div>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-500" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <Card className="border-0 shadow-2xl backdrop-blur-sm bg-card/95">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
            <p className="text-muted-foreground">Start writing in less than 60 seconds</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Social Signup */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full h-12 gap-3 hover:bg-muted/50 transition-all group">
                <Chrome className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Sign up with Google
              </Button>
              <Button variant="outline" className="w-full h-12 gap-3 hover:bg-muted/50 transition-all group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Sign up with GitHub
              </Button>
            </div>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-4 text-sm text-muted-foreground">
                Or sign up with email
              </span>
            </div>

            {/* Signup Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="pl-11 h-12 bg-muted/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 h-12 bg-muted/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 pr-11 h-12 bg-muted/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox 
                  id="terms" 
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                  I agree to the{" "}
                  <button type="button" onClick={() => onNavigate('terms')} className="text-primary hover:underline">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button type="button" onClick={() => onNavigate('privacy')} className="text-primary hover:underline">
                    Privacy Policy
                  </button>
                </label>
              </div>

              <Button
                type="submit"
                onClick={(e) => { e.preventDefault(); onNavigate('onboarding'); }}
                disabled={!agreedToTerms}
                className="w-full h-12 bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] hover:shadow-xl hover:shadow-primary/25 text-white border-0 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Account
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <button
                onClick={() => onNavigate('login')}
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Forgot Password Page
export function ForgotPasswordPage({ onNavigate }: AuthPagesProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden py-12 px-4">
      <div className="absolute inset-0 gradient-aurora aurora-animate opacity-10" />
      
      <div className="relative w-full max-w-md">
        <Card className="border-0 shadow-2xl backdrop-blur-sm bg-card/95">
          <CardHeader className="space-y-1 pb-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#EC4899] flex items-center justify-center text-white mx-auto mb-4">
              <Lock className="w-8 h-8" />
            </div>
            <CardTitle className="text-3xl font-bold">Reset Password</CardTitle>
            <p className="text-muted-foreground">
              {sent 
                ? "Check your email for reset instructions"
                : "Enter your email to receive a password reset link"
              }
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {!sent ? (
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-11 h-12 bg-muted/50"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  onClick={(e) => { e.preventDefault(); setSent(true); }}
                  className="w-full h-12 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:shadow-xl hover:shadow-primary/25 text-white border-0"
                >
                  Send Reset Link
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-muted-foreground">
                  We've sent a password reset link to <strong>{email}</strong>. 
                  Please check your inbox and follow the instructions.
                </p>
                <p className="text-sm text-muted-foreground">
                  Didn't receive the email? Check your spam folder or{" "}
                  <button onClick={() => setSent(false)} className="text-primary hover:underline">
                    try again
                  </button>
                </p>
              </div>
            )}

            <div className="text-center text-sm">
              <button
                onClick={() => onNavigate('login')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Sign In
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

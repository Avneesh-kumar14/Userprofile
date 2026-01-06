import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { 
  CheckCircle, 
  X, 
  Sparkles, 
  Zap, 
  Crown, 
  Search,
  BookOpen,
  HelpCircle,
  MessageCircle,
  Mail,
  Users,
  Award,
  Target,
  Heart,
  TrendingUp,
  Shield,
  Globe,
  ChevronDown,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

interface PageProps {
  onNavigate?: (page: string) => void;
}

// Pricing Page
export function PricingPage({ onNavigate }: PageProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: { monthly: 0, yearly: 0 },
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-[#6366F1] to-[#8B5CF6]",
      popular: false,
      features: [
        { text: "Unlimited articles", included: true },
        { text: "Basic analytics", included: true },
        { text: "Community access", included: true },
        { text: "Standard support", included: true },
        { text: "Custom domain", included: false },
        { text: "Advanced analytics", included: false },
        { text: "Monetization", included: false },
        { text: "Priority support", included: false }
      ]
    },
    {
      name: "Pro",
      description: "For serious writers",
      price: { monthly: 9, yearly: 90 },
      icon: <Zap className="w-6 h-6" />,
      color: "from-[#EC4899] to-[#F472B6]",
      popular: true,
      features: [
        { text: "Everything in Free", included: true },
        { text: "Custom domain", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Remove branding", included: true },
        { text: "Newsletter integration", included: true },
        { text: "Monetization", included: true },
        { text: "Priority support", included: true },
        { text: "API access", included: false }
      ]
    },
    {
      name: "Business",
      description: "For teams and publishers",
      price: { monthly: 29, yearly: 290 },
      icon: <Crown className="w-6 h-6" />,
      color: "from-[#FB923C] to-[#F472B6]",
      popular: false,
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Team collaboration (5 members)", included: true },
        { text: "White-label solution", included: true },
        { text: "API access", included: true },
        { text: "Custom integrations", included: true },
        { text: "Dedicated support", included: true },
        { text: "SLA guarantee", included: true },
        { text: "Custom contracts", included: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white border-0 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Simple, Transparent Pricing
          </Badge>

          <h1 className="text-5xl font-bold mb-6">
            Choose Your
            <span className="block mt-2 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Start free and upgrade as you grow. All plans include a 14-day money-back guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-muted rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <Badge className="absolute -top-2 -right-2 bg-green-500 text-white border-0 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-xl hover:shadow-2xl transition-all ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white border-0 px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${plan.color}`} />

              <CardHeader className="text-center pb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mx-auto mb-4`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-muted-foreground">
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    )}
                  </div>
                  {billingCycle === 'yearly' && plan.price.monthly > 0 && (
                    <p className="text-sm text-muted-foreground mt-2">
                      ${(plan.price.yearly / 12).toFixed(2)}/month billed annually
                    </p>
                  )}
                </div>

                <Button
                  onClick={() => onNavigate?.('signup')}
                  className={`w-full h-12 mb-6 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} hover:shadow-xl hover:shadow-primary/25 text-white border-0`
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.price.monthly === 0 ? 'Get Started Free' : 'Start Free Trial'}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? '' : 'text-muted-foreground'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, MasterCard, Amex) and PayPal. Enterprise customers can pay via invoice."
              },
              {
                q: "Is there a refund policy?",
                a: "Yes, we offer a 14-day money-back guarantee on all paid plans. No questions asked."
              },
              {
                q: "Do you offer discounts for non-profits?",
                a: "Yes! We offer 50% off all paid plans for registered non-profit organizations. Contact us for details."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#EC4899] flex items-center justify-center text-white flex-shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground text-sm">{faq.a}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Help Center Page
export function HelpPage({ onNavigate }: PageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Getting Started",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-[#6366F1] to-[#8B5CF6]",
      articles: [
        "Creating your first article",
        "Setting up your profile",
        "Understanding the editor",
        "Publishing your content"
      ]
    },
    {
      title: "Writing & Publishing",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-[#EC4899] to-[#F472B6]",
      articles: [
        "Using the rich text editor",
        "Adding images and media",
        "SEO best practices",
        "Scheduling posts"
      ]
    },
    {
      title: "Analytics & Growth",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-[#06B6D4] to-[#6366F1]",
      articles: [
        "Understanding your analytics",
        "Growing your audience",
        "Engagement strategies",
        "Monetization options"
      ]
    },
    {
      title: "Account & Billing",
      icon: <Shield className="w-6 h-6" />,
      color: "from-[#FB923C] to-[#F472B6]",
      articles: [
        "Managing your subscription",
        "Security settings",
        "Privacy controls",
        "Deleting your account"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white border-0 px-4 py-2">
            <HelpCircle className="w-4 h-4 mr-2" />
            24/7 Support
          </Badge>

          <h1 className="text-5xl font-bold mb-6">
            How Can We
            <span className="block mt-2 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card border-2 border-border/50 focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
              <div className={`h-2 bg-gradient-to-r ${category.color}`} />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.articles.map((article, i) => (
                    <li key={i}>
                      <button className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                        {article}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <MessageCircle className="w-6 h-6" />,
              title: "Live Chat",
              description: "Chat with our support team",
              action: "Start Chat",
              color: "from-[#6366F1] to-[#8B5CF6]"
            },
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email Support",
              description: "Get help via email",
              action: "Send Email",
              color: "from-[#EC4899] to-[#F472B6]"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Community",
              description: "Ask the community",
              action: "Visit Forum",
              color: "from-[#06B6D4] to-[#6366F1]"
            }
          ].map((option, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center text-white mx-auto mb-4`}>
                  {option.icon}
                </div>
                <h3 className="font-bold mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                <Button variant="outline" className="w-full">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// About Page
export function AboutPage({ onNavigate }: PageProps) {
  const stats = [
    { value: "50K+", label: "Active Writers", icon: <Users className="w-6 h-6" /> },
    { value: "1M+", label: "Monthly Readers", icon: <Globe className="w-6 h-6" /> },
    { value: "100K+", label: "Articles Published", icon: <BookOpen className="w-6 h-6" /> },
    { value: "4.9/5", label: "User Rating", icon: <Award className="w-6 h-6" /> }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Former journalist with 15 years of experience in digital publishing"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Tech innovator passionate about building tools for creators"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Award-winning designer focused on user-centric experiences"
    },
    {
      name: "David Kim",
      role: "Head of Community",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Building inclusive communities for writers worldwide"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Writers First",
      description: "Everything we build is designed to empower writers and help them succeed.",
      color: "from-[#EC4899] to-[#F472B6]"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy & Trust",
      description: "Your data and content are yours. We never sell or share your information.",
      color: "from-[#6366F1] to-[#8B5CF6]"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "We believe in the power of community and meaningful connections.",
      color: "from-[#06B6D4] to-[#6366F1]"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      description: "Constantly pushing boundaries to create the best writing experience.",
      color: "from-[#FB923C] to-[#F472B6]"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 gradient-aurora aurora-animate opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white border-0 px-4 py-2">
            <Target className="w-4 h-4 mr-2" />
            Our Mission
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empowering Writers to
            <span className="block mt-2 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">
              Share Their Stories
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            BlogSphere was born from a simple belief: every voice deserves to be heard. 
            We're building the most beautiful and powerful platform for writers to create, 
            share, and monetize their content.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const gradients = [
                "from-[#6366F1] to-[#8B5CF6]",
                "from-[#EC4899] to-[#F472B6]",
                "from-[#06B6D4] to-[#6366F1]",
                "from-[#FB923C] to-[#F472B6]"
              ];
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white mx-auto mb-4`}>
                    {stat.icon}
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2020, BlogSphere started as a small project by a group of writers and developers 
              who were frustrated with existing blogging platforms. We wanted something better – a platform 
              that was beautiful, fast, and actually cared about writers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              What began as a side project quickly grew into a thriving community of 50,000+ writers from 
              around the world. Today, we're proud to be the fastest-growing content platform, serving over 
              1 million readers every month.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But we're just getting started. Our vision is to create a world where anyone with a story to 
              tell has the tools and audience to make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <div className={`h-2 bg-gradient-to-r ${value.color}`} />
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mx-auto mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're a diverse team of writers, designers, and developers united by our passion for helping creators succeed.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#6366F1]/10 via-[#EC4899]/10 to-[#8B5CF6]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your writing journey today and become part of something special.
          </p>
          <Button 
            onClick={() => onNavigate?.('signup')}
            size="lg"
            className="bg-gradient-to-r from-[#6366F1] to-[#EC4899] hover:shadow-xl hover:shadow-primary/25 text-white border-0 h-14 px-8 text-lg"
          >
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  );
}

// 404 Error Page
export function NotFoundPage({ onNavigate }: PageProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-bold bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent mb-8">
          404
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => onNavigate?.('home')}
            className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0"
          >
            Go Home
          </Button>
          <Button 
            onClick={() => onNavigate?.('help')}
            variant="outline"
          >
            Get Help
          </Button>
        </div>
      </div>
    </div>
  );
}

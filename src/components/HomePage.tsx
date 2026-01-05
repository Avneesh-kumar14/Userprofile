import { TrendingUp, Clock, Heart, MessageCircle, Bookmark, Eye, Zap, Sparkles, Star, Award, Users, BookOpen, ArrowRight, Play, Quote, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredPost = {
    id: 1,
    title: "The Future of Web Development: What's Next in 2026",
    excerpt: "Explore the cutting-edge technologies and trends shaping the future of web development, from AI-powered tools to revolutionary frameworks that are changing how we build for the web.",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      username: "@sarahchen",
      verified: true
    },
    image: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?w=1200&h=600&fit=crop",
    category: "Technology",
    readTime: "8 min read",
    date: "Jan 5, 2026",
    likes: 2143,
    comments: 189,
    views: 12453
  };

  const trendingPosts = [
    {
      id: 2,
      title: "Mastering React Hooks: Complete Guide for 2026",
      excerpt: "Everything you need to know about React Hooks with real-world examples",
      author: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      category: "Development",
      readTime: "12 min",
      likes: 1892,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      gradient: "from-[#6366F1] to-[#8B5CF6]"
    },
    {
      id: 3,
      title: "Building Scalable Design Systems from Scratch",
      excerpt: "A comprehensive approach to creating design systems that grow with your team",
      author: "Maya Patel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      category: "Design",
      readTime: "10 min",
      likes: 1654,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      gradient: "from-[#EC4899] to-[#F472B6]"
    },
    {
      id: 4,
      title: "TypeScript Best Practices for Enterprise Apps",
      excerpt: "Write maintainable, type-safe code that scales with your organization",
      author: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      category: "TypeScript",
      readTime: "15 min",
      likes: 1421,
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
      gradient: "from-[#06B6D4] to-[#6366F1]"
    }
  ];

  const categories = [
    { name: "Technology", icon: "💻", count: "2.3K articles", color: "from-[#6366F1] to-[#8B5CF6]", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop" },
    { name: "Design", icon: "🎨", count: "1.8K articles", color: "from-[#EC4899] to-[#F472B6]", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop" },
    { name: "Business", icon: "📈", count: "1.5K articles", color: "from-[#06B6D4] to-[#6366F1]", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop" },
    { name: "Lifestyle", icon: "✨", count: "1.2K articles", color: "from-[#FB923C] to-[#F472B6]", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=300&fit=crop" }
  ];

  const recentArticles = [
    {
      id: 5,
      title: "The Art of Minimalist UI Design",
      excerpt: "Learn how to create beautiful, functional interfaces with less",
      author: "Sophie Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      category: "Design",
      readTime: "7 min",
      likes: 892,
      comments: 45,
      image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Modern Authentication Strategies",
      excerpt: "Secure your applications with the latest auth patterns",
      author: "Ryan Martinez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      category: "Security",
      readTime: "10 min",
      likes: 721,
      comments: 38,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop"
    },
    {
      id: 7,
      title: "CSS Grid vs Flexbox in 2026",
      excerpt: "When to use each layout system for maximum efficiency",
      author: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      category: "CSS",
      readTime: "8 min",
      likes: 654,
      comments: 29,
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop"
    }
  ];

  const topWriters = [
    {
      name: "Sarah Chen",
      username: "@sarahchen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      followers: "15.2K",
      articles: 156,
      specialty: "Tech & Innovation",
      verified: true
    },
    {
      name: "Alex Rivera",
      username: "@alexrivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      followers: "12.8K",
      articles: 128,
      specialty: "Web Development",
      verified: true
    },
    {
      name: "Maya Patel",
      username: "@mayapatel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      followers: "10.5K",
      articles: 94,
      specialty: "Design Systems",
      verified: true
    }
  ];

  const testimonials = [
    {
      quote: "BlogSphere has transformed how I share my knowledge. The platform is intuitive, beautiful, and the community is incredibly supportive.",
      author: "Jessica Williams",
      role: "Senior Developer at TechCorp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      quote: "I've tried many platforms, but BlogSphere stands out with its clean design and powerful features. It's perfect for professional writers.",
      author: "Michael Brown",
      role: "UX Designer & Author",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      quote: "The analytics dashboard helps me understand my audience better. I've grown my following by 300% in just 3 months!",
      author: "Emily Parker",
      role: "Content Strategist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Editor",
      description: "Write better with intelligent suggestions and formatting"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Track your growth with detailed insights and metrics"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Engaged Community",
      description: "Connect with readers and writers who share your interests"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Monetization",
      description: "Earn from your content with our partner program"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-aurora aurora-animate opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#6366F1]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#EC4899]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B5CF6]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white border-0 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                #1 Platform for Modern Writers
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Share Your
                <span className="block mt-2 bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                  Ideas with the World
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join 50,000+ writers sharing stories, building audiences, and earning from their content on the most beautiful blogging platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  size="lg"
                  onClick={() => onNavigate('create')}
                  className="bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] hover:shadow-2xl hover:shadow-primary/25 text-white border-0 h-14 px-8 text-lg group"
                >
                  Start Writing Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('explore')}
                  className="border-2 border-primary/50 hover:bg-primary/5 h-14 px-8 text-lg group"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">Free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Article */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#EC4899]/20 rounded-3xl blur-3xl" />
              <Card 
                className="relative group overflow-hidden border-0 shadow-2xl cursor-pointer interactive-card"
                onClick={() => onNavigate('article')}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0">
                    {featuredPost.category}
                  </Badge>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 line-clamp-2">
                      {featuredPost.title}
                    </h3>
                    <p className="text-white/90 mb-4 line-clamp-2">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border-2 border-white/50">
                          <AvatarImage src={featuredPost.author.avatar} />
                          <AvatarFallback>{featuredPost.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-1">
                            <p className="font-medium">{featuredPost.author.name}</p>
                            {featuredPost.author.verified && (
                              <CheckCircle className="w-4 h-4 text-blue-400 fill-blue-400" />
                            )}
                          </div>
                          <p className="text-xs text-white/70">{featuredPost.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {featuredPost.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {featuredPost.views}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 border-y bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, value: "50K+", label: "Articles Published", color: "from-[#6366F1] to-[#8B5CF6]" },
              { icon: Users, value: "1M+", label: "Active Readers", color: "from-[#EC4899] to-[#F472B6]" },
              { icon: TrendingUp, value: "10K+", label: "Writers", color: "from-[#06B6D4] to-[#6366F1]" },
              { icon: Award, value: "4.9/5", label: "User Rating", color: "from-[#FB923C] to-[#F472B6]" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trending Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold">Trending Now</h2>
              </div>
              <p className="text-muted-foreground text-lg">Most popular articles this week</p>
            </div>
            <Button 
              variant="outline"
              onClick={() => onNavigate('explore')}
              className="hidden md:flex gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trendingPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all interactive-card cursor-pointer"
                onClick={() => onNavigate('article')}
              >
                <div className={`h-1 bg-gradient-to-r ${post.gradient}`} />
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${post.gradient} text-white border-0`}>
                    {post.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.readTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Heart className="w-4 h-4 text-secondary" />
                      {post.likes}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore by Category</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover amazing content across different topics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all interactive-card cursor-pointer"
                onClick={() => onNavigate('categories')}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="text-5xl mb-3">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm text-white/90">{category.count}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white border-0 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to
              <span className="block mt-2 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">
                Succeed as a Writer
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional tools and features designed to help you create, grow, and monetize your content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const gradients = [
                "from-[#6366F1] to-[#8B5CF6]",
                "from-[#EC4899] to-[#F472B6]",
                "from-[#06B6D4] to-[#6366F1]",
                "from-[#FB923C] to-[#F472B6]"
              ];
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all interactive-card p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Writers */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold">Featured Writers</h2>
              </div>
              <p className="text-muted-foreground text-lg">Join our community of talented creators</p>
            </div>
            <Button 
              variant="outline"
              onClick={() => onNavigate('following')}
              className="hidden md:flex gap-2"
            >
              View All Writers
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topWriters.map((writer, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all interactive-card overflow-hidden"
              >
                <div className="h-24 bg-gradient-to-br from-[#6366F1] via-[#EC4899] to-[#8B5CF6]" />
                <CardContent className="p-6 -mt-12 relative">
                  <div className="relative inline-block mb-4">
                    <Avatar className="w-24 h-24 border-4 border-card shadow-xl">
                      <AvatarImage src={writer.avatar} />
                      <AvatarFallback>{writer.name[0]}</AvatarFallback>
                    </Avatar>
                    {writer.verified && (
                      <div className="absolute bottom-0 right-0 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center border-4 border-card">
                        <CheckCircle className="w-4 h-4 text-white fill-white" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-1">{writer.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{writer.username}</p>
                  <Badge className="mb-4 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white border-0">
                    {writer.specialty}
                  </Badge>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xl font-bold">{writer.followers}</p>
                      <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xl font-bold">{writer.articles}</p>
                      <p className="text-xs text-muted-foreground">Articles</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0">
                    Follow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold">Latest Articles</h2>
              </div>
              <p className="text-muted-foreground text-lg">Fresh content from our community</p>
            </div>
            <Button 
              variant="outline"
              onClick={() => onNavigate('explore')}
              className="hidden md:flex gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <Card 
                key={article.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all interactive-card cursor-pointer"
                onClick={() => onNavigate('article')}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/90 hover:bg-white">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary border-0">
                    {article.category}
                  </Badge>

                  <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={article.avatar} />
                        <AvatarFallback>{article.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{article.author}</p>
                        <p className="text-xs text-muted-foreground">{article.readTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {article.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {article.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white border-0 px-4 py-2">
              <Star className="w-4 h-4 mr-2 fill-white" />
              Loved by Writers
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of happy writers who've found their home on BlogSphere
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-aurora aurora-animate opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 via-[#EC4899]/10 to-[#8B5CF6]/10" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white border-0 px-6 py-3">
            <Sparkles className="w-4 h-4 mr-2" />
            Start Your Journey Today
          </Badge>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Share
            <span className="block mt-2 bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
              Your Story?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our community of passionate writers and start building your audience today. 
            It's free, easy, and takes less than a minute.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('create')}
              className="bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] hover:shadow-2xl hover:shadow-primary/25 text-white border-0 h-14 px-8 text-lg group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('explore')}
              className="border-2 border-primary/50 hover:bg-primary/5 h-14 px-8 text-lg"
            >
              Explore Articles
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Free forever • 50,000+ active writers
          </p>
        </div>
      </section>
    </div>
  );
}

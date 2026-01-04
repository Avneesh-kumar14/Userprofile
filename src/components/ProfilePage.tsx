import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { 
  Mail, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Users, 
  BookOpen, 
  Heart, 
  Award, 
  TrendingUp, 
  Eye,
  MessageCircle,
  Share2,
  Link2,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Settings,
  Edit,
  MoreHorizontal,
  Star,
  Trophy
} from "lucide-react";

interface ProfilePageProps {
  onNavigate?: (page: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const userStats = [
    { label: "Followers", value: "2.8K", change: "+12%", icon: Users, gradient: "from-[#6366F1] to-[#8B5CF6]" },
    { label: "Articles", value: "156", change: "+8", icon: BookOpen, gradient: "from-[#EC4899] to-[#F472B6]" },
    { label: "Total Likes", value: "12.4K", change: "+15%", icon: Heart, gradient: "from-[#FB923C] to-[#F472B6]" },
    { label: "Total Views", value: "45K", change: "+23%", icon: Eye, gradient: "from-[#06B6D4] to-[#6366F1]" }
  ];

  const achievements = [
    { title: "Featured Writer", icon: "🌟", color: "from-amber-400 to-yellow-600", unlocked: true },
    { title: "Top Contributor", icon: "🏆", color: "from-purple-400 to-pink-600", unlocked: true },
    { title: "1000+ Followers", icon: "👥", color: "from-blue-400 to-cyan-600", unlocked: true },
    { title: "50 Articles", icon: "📝", color: "from-green-400 to-emerald-600", unlocked: true },
    { title: "Viral Post", icon: "🚀", color: "from-red-400 to-orange-600", unlocked: false },
    { title: "Community Hero", icon: "💎", color: "from-indigo-400 to-purple-600", unlocked: false }
  ];

  const articles = [
    {
      id: 1,
      title: "The Future of Web Development: What's Next in 2026",
      excerpt: "Exploring cutting-edge technologies and trends shaping modern web development...",
      image: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?w=800&h=400&fit=crop",
      category: "Technology",
      readTime: "8 min",
      publishedDate: "Jan 4, 2026",
      views: 12453,
      likes: 1243,
      comments: 89,
      gradient: "from-[#6366F1] to-[#8B5CF6]"
    },
    {
      id: 2,
      title: "Building Scalable Design Systems from Scratch",
      excerpt: "A comprehensive guide to creating design systems that grow with your organization...",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
      category: "Design",
      readTime: "12 min",
      publishedDate: "Dec 28, 2025",
      views: 8932,
      likes: 892,
      comments: 67,
      gradient: "from-[#EC4899] to-[#F472B6]"
    },
    {
      id: 3,
      title: "TypeScript Best Practices for Large Applications",
      excerpt: "Learn how to write maintainable, type-safe TypeScript code at scale...",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      category: "Development",
      readTime: "10 min",
      publishedDate: "Dec 20, 2025",
      views: 6543,
      likes: 721,
      comments: 52,
      gradient: "from-[#06B6D4] to-[#6366F1]"
    },
    {
      id: 4,
      title: "The Art of Minimalist UI Design",
      excerpt: "Discover the principles of creating clean, effective user interfaces...",
      image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=800&h=400&fit=crop",
      category: "Design",
      readTime: "6 min",
      publishedDate: "Dec 15, 2025",
      views: 7621,
      likes: 654,
      comments: 45,
      gradient: "from-[#FB923C] to-[#F472B6]"
    }
  ];

  const skills = [
    "UI/UX Design", "Product Strategy", "Design Systems", "Figma", "Sketch", 
    "Adobe XD", "User Research", "Prototyping", "Wireframing", 
    "Interaction Design", "Accessibility", "HTML/CSS", "React", "Typography"
  ];

  const experience = [
    {
      title: "Senior Product Designer",
      company: "Tech Corp Inc.",
      period: "2021 - Present",
      description: "Leading design for enterprise analytics platform. Built comprehensive design system used by 50+ designers.",
      logo: "🏢"
    },
    {
      title: "Product Designer",
      company: "Creative Studio",
      period: "2018 - 2021",
      description: "Designed mobile and web experiences for various clients. Collaborated with development teams on implementation.",
      logo: "🎨"
    },
    {
      title: "Junior Designer",
      company: "Design Agency",
      period: "2016 - 2018",
      description: "Started career designing marketing materials and simple web interfaces.",
      logo: "✏️"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Cover */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-72 relative overflow-hidden">
          <div className="absolute inset-0 gradient-aurora aurora-animate" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          
          {/* Floating Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute bottom-10 left-1/3 w-36 h-36 rounded-full bg-white/25 blur-3xl" />
          </div>
        </div>

        {/* Profile Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          <Card className="border-0 shadow-2xl backdrop-blur-sm bg-card/95">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Avatar with Status Ring */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent rounded-full animate-pulse blur-sm" />
                  <Avatar className="relative w-32 h-32 border-4 border-card shadow-2xl">
                    <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" />
                    <AvatarFallback className="text-3xl bg-gradient-to-br from-[#6366F1] to-[#EC4899] text-white">
                      SA
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-card" />
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl md:text-4xl font-bold">Sarah Anderson</h1>
                        <Badge className="bg-gradient-to-r from-amber-400 to-yellow-600 text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Pro
                        </Badge>
                      </div>
                      <p className="text-lg text-muted-foreground mb-3">
                        Senior Product Designer & Content Creator
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0">
                          UI/UX Design
                        </Badge>
                        <Badge className="bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white border-0">
                          Product Strategy
                        </Badge>
                        <Badge className="bg-gradient-to-r from-[#06B6D4] to-[#6366F1] text-white border-0">
                          Design Systems
                        </Badge>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        onClick={() => onNavigate?.('settings')}
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => onNavigate?.('settings')}
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>Tech Corp Inc.</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4 text-accent" />
                      <span>sarah@email.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-[#FB923C]" />
                      <span>Joined March 2020</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Connect:</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10">
                        <Globe className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10">
                        <Link2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-0 shadow-lg overflow-hidden interactive-card group">
                <div className={`h-1 bg-gradient-to-r ${stat.gradient}`} />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-green-500/10 text-green-600 border-0 text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements Banner */}
        <Card className="border-0 shadow-lg mb-8 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-amber-500" />
                <div>
                  <h3 className="text-xl font-bold">Achievements</h3>
                  <p className="text-sm text-muted-foreground">Unlock badges by reaching milestones</p>
                </div>
              </div>
              <Badge className="bg-amber-500/10 text-amber-600 border-0">
                4 of 6 Unlocked
              </Badge>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer ${
                    achievement.unlocked ? 'opacity-100' : 'opacity-40 grayscale'
                  }`}
                >
                  <div className={`p-4 rounded-xl border-2 ${
                    achievement.unlocked 
                      ? 'border-transparent bg-gradient-to-br ' + achievement.color
                      : 'border-dashed border-muted'
                  } text-center transition-all hover:scale-105`}>
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <p className={`text-xs font-medium ${achievement.unlocked ? 'text-white' : 'text-muted-foreground'}`}>
                      {achievement.title}
                    </p>
                  </div>
                  {achievement.unlocked && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white fill-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs Content */}
        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList className="bg-card border shadow-sm w-full justify-start overflow-x-auto">
            <TabsTrigger value="articles" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#6366F1] data-[state=active]:to-[#8B5CF6] data-[state=active]:text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="about" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#EC4899] data-[state=active]:to-[#F472B6] data-[state=active]:text-white">
              About
            </TabsTrigger>
            <TabsTrigger value="experience" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#06B6D4] data-[state=active]:to-[#6366F1] data-[state=active]:text-white">
              Experience
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FB923C] data-[state=active]:to-[#F472B6] data-[state=active]:text-white">
              Skills
            </TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card 
                  key={article.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all interactive-card cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${article.gradient} text-white border-0`}>
                      {article.category}
                    </Badge>
                    <div className="absolute top-4 right-4">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/90 hover:bg-white">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>{article.publishedDate}</span>
                      <span>•</span>
                      <span>{article.readTime} read</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4 text-secondary" />
                          <span>{article.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4 text-primary" />
                          <span>{article.comments}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Passionate product designer with over 8 years of experience creating intuitive and beautiful digital experiences. 
                  I specialize in design systems, user research, and cross-functional collaboration. Currently leading design 
                  initiatives at Tech Corp Inc., focusing on enterprise SaaS products.
                </p>
                <p>
                  My approach combines data-driven insights with creative problem-solving to deliver products that users love. 
                  I believe in the power of good design to transform businesses and improve people's lives.
                </p>
                <p>
                  When I'm not designing, you can find me mentoring aspiring designers, contributing to open-source design projects, 
                  or exploring new coffee shops around the city. I'm also an avid writer and love sharing my knowledge through 
                  articles and talks.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-4">
            {experience.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden interactive-card">
                <div className={`h-1 bg-gradient-to-r ${userStats[index % 4].gradient}`} />
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="text-4xl">{job.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <p className="text-muted-foreground">{job.company}</p>
                        </div>
                        <Badge variant="outline" className="whitespace-nowrap">{job.period}</Badge>
                      </div>
                      <p className="text-muted-foreground mt-3">{job.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#FB923C] to-[#F472B6] rounded-full" />
                  Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => {
                    const gradients = [
                      "from-[#6366F1] to-[#8B5CF6]",
                      "from-[#EC4899] to-[#F472B6]",
                      "from-[#06B6D4] to-[#6366F1]",
                      "from-[#FB923C] to-[#F472B6]"
                    ];
                    return (
                      <Badge
                        key={skill}
                        className={`bg-gradient-to-r ${gradients[index % 4]} text-white border-0 px-4 py-2 text-sm hover:scale-105 transition-transform cursor-pointer`}
                      >
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

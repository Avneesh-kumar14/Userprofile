import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  TrendingUp, 
  Eye, 
  Heart, 
  MessageCircle, 
  Users, 
  FileEdit, 
  BarChart3,
  Award,
  Zap,
  ArrowUp,
  ArrowDown,
  MoreVertical
} from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const stats = [
    {
      title: "Total Views",
      value: "45,231",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "from-[#6366F1] to-[#8B5CF6]"
    },
    {
      title: "Article Likes",
      value: "8,492",
      change: "+8.2%",
      trend: "up",
      icon: Heart,
      color: "from-[#EC4899] to-[#F472B6]"
    },
    {
      title: "Comments",
      value: "1,234",
      change: "+15.3%",
      trend: "up",
      icon: MessageCircle,
      color: "from-[#06B6D4] to-[#6366F1]"
    },
    {
      title: "Followers",
      value: "2,847",
      change: "+5.1%",
      trend: "up",
      icon: Users,
      color: "from-[#FB923C] to-[#F472B6]"
    }
  ];

  const viewsData = [
    { name: 'Mon', views: 2400, likes: 400 },
    { name: 'Tue', views: 1398, likes: 300 },
    { name: 'Wed', views: 9800, likes: 800 },
    { name: 'Thu', views: 3908, likes: 500 },
    { name: 'Fri', views: 4800, likes: 600 },
    { name: 'Sat', views: 3800, likes: 550 },
    { name: 'Sun', views: 4300, likes: 700 }
  ];

  const topArticles = [
    {
      title: "The Future of Web Development",
      views: 12453,
      likes: 1243,
      comments: 89,
      trend: "up",
      change: "+23%"
    },
    {
      title: "Building Scalable Applications",
      views: 8932,
      likes: 892,
      comments: 67,
      trend: "up",
      change: "+15%"
    },
    {
      title: "Design Systems Guide",
      views: 7621,
      likes: 654,
      comments: 45,
      trend: "down",
      change: "-5%"
    },
    {
      title: "TypeScript Best Practices",
      views: 6543,
      likes: 721,
      comments: 52,
      trend: "up",
      change: "+8%"
    }
  ];

  const recentActivity = [
    {
      user: "Emily Parker",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      action: "commented on",
      target: "The Future of Web Development",
      time: "5 minutes ago"
    },
    {
      user: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      action: "liked",
      target: "Building Scalable Applications",
      time: "1 hour ago"
    },
    {
      user: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      action: "started following you",
      time: "3 hours ago"
    },
    {
      user: "Michael Brown",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      action: "bookmarked",
      target: "Design Systems Guide",
      time: "5 hours ago"
    }
  ];

  const achievements = [
    { title: "First Article", description: "Published your first article", icon: "🎉", unlocked: true },
    { title: "100 Views", description: "Reached 100 total views", icon: "👀", unlocked: true },
    { title: "10 Followers", description: "Got 10 followers", icon: "👥", unlocked: true },
    { title: "Popular Writer", description: "Get 1000 views on one article", icon: "🔥", unlocked: true },
    { title: "Influencer", description: "Reach 1000 followers", icon: "⭐", unlocked: false },
    { title: "Viral Post", description: "Get 10K views on one article", icon: "🚀", unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
                <div>
                  <h1 className="text-4xl font-bold">Dashboard</h1>
                  <p className="text-muted-foreground mt-1">Welcome back, Sarah!</p>
                </div>
              </div>
            </div>
            <Button 
              onClick={() => onNavigate('create')}
              className="gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0"
            >
              <FileEdit className="w-4 h-4" />
              Write New Article
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === 'up' ? ArrowUp : ArrowDown;
            return (
              <Card key={index} className="border-0 shadow-lg overflow-hidden interactive-card">
                <div className={`h-1 bg-gradient-to-r ${stat.color}`} />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className={`${stat.trend === 'up' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'} border-0 gap-1`}>
                      <TrendIcon className="w-3 h-3" />
                      {stat.change}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Views Chart */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
                  Views & Engagement
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-8 text-xs">7D</Button>
                  <Button variant="ghost" size="sm" className="h-8 text-xs bg-primary/10">30D</Button>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">90D</Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={viewsData}>
                  <defs>
                    <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="likesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EC4899" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#EC4899" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#6366F1" 
                    fill="url(#viewsGradient)" 
                    strokeWidth={2}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="likes" 
                    stroke="#EC4899" 
                    fill="url(#likesGradient)" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#EC4899] to-[#F472B6] rounded-full" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                    <FileEdit className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Published</p>
                    <p className="text-xs text-muted-foreground">Articles</p>
                  </div>
                </div>
                <p className="text-2xl font-bold">24</p>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#EC4899] to-[#F472B6] flex items-center justify-center">
                    <FileEdit className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Drafts</p>
                    <p className="text-xs text-muted-foreground">In progress</p>
                  </div>
                </div>
                <p className="text-2xl font-bold">7</p>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#6366F1] flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Avg. Views</p>
                    <p className="text-xs text-muted-foreground">Per article</p>
                  </div>
                </div>
                <p className="text-2xl font-bold">1.8K</p>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FB923C] to-[#F472B6] flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Engagement</p>
                    <p className="text-xs text-muted-foreground">Rate</p>
                  </div>
                </div>
                <p className="text-2xl font-bold">8.4%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Top Articles */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
                  Top Performing Articles
                </div>
                <Button variant="ghost" size="sm" onClick={() => onNavigate('profile')}>
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topArticles.map((article, index) => (
                <div key={index} className="p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{article.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {article.likes.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {article.comments}
                        </div>
                      </div>
                    </div>
                    <Badge className={`${article.trend === 'up' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'} border-0 gap-1`}>
                      {article.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                      {article.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity & Achievements */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#EC4899] to-[#F472B6] rounded-full" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.slice(0, 4).map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>{activity.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{" "}
                        <span className="text-muted-foreground">{activity.action}</span>
                        {activity.target && (
                          <span className="font-medium"> "{activity.target}"</span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements Preview */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#FB923C] to-[#F472B6]" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#FB923C]" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-2 rounded-lg ${achievement.unlocked ? 'bg-muted/50' : 'opacity-50'}`}
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                    {achievement.unlocked && (
                      <Badge className="bg-green-500/10 text-green-600 border-0 text-xs">
                        Unlocked
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

import { TrendingUp, Clock, Heart, MessageCircle, Bookmark, Eye, Zap, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
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
    excerpt: "Explore the cutting-edge technologies and trends shaping the future of web development, from AI-powered tools to revolutionary frameworks.",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      username: "@sarahchen"
    },
    image: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwbGFwdG9wfGVufDF8fHx8MTc2NzQ0NzcxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Technology",
    readTime: "8 min read",
    date: "Jan 1, 2026",
    likes: 1243,
    comments: 89
  };

  const trendingPosts = [
    {
      id: 2,
      title: "Mastering React Hooks: A Complete Guide",
      author: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      category: "Development",
      readTime: "12 min",
      likes: 892,
      gradient: "from-[#6366F1] to-[#8B5CF6]"
    },
    {
      id: 3,
      title: "Design Systems That Scale",
      author: "Maya Patel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      category: "Design",
      readTime: "6 min",
      likes: 654,
      gradient: "from-[#EC4899] to-[#F472B6]"
    },
    {
      id: 4,
      title: "AI in Creative Writing",
      author: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      category: "AI",
      readTime: "10 min",
      likes: 721,
      gradient: "from-[#06B6D4] to-[#6366F1]"
    }
  ];

  const recentPosts = [
    {
      id: 5,
      title: "Building Accessible Web Applications",
      excerpt: "Learn how to create inclusive digital experiences that work for everyone.",
      author: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      image: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdyaXRpbmclMjBkZXNrfGVufDF8fHx8MTc2NzMzNTgxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Web Development",
      readTime: "7 min",
      date: "2 days ago",
      views: 2341
    },
    {
      id: 6,
      title: "The Art of Minimalist UI Design",
      excerpt: "Discover the principles of creating clean, effective user interfaces.",
      author: "Lucas Martinez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      image: "https://images.unsplash.com/photo-1590212151175-e58edd96185b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzayUyMHNldHVwfGVufDF8fHx8MTc2NzQxNTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Design",
      readTime: "5 min",
      date: "3 days ago",
      views: 1872
    },
    {
      id: 7,
      title: "Performance Optimization Techniques",
      excerpt: "Speed up your web applications with these proven strategies.",
      author: "Nina Kumar",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      image: "https://images.unsplash.com/photo-1718007075505-4fc9a4fcded8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjczNDEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Performance",
      readTime: "9 min",
      date: "5 days ago",
      views: 3156
    }
  ];

  const categories = [
    { name: "Technology", icon: Zap, color: "from-[#6366F1] to-[#8B5CF6]", count: 234 },
    { name: "Design", icon: Sparkles, color: "from-[#EC4899] to-[#F472B6]", count: 189 },
    { name: "Development", icon: TrendingUp, color: "from-[#06B6D4] to-[#6366F1]", count: 312 },
    { name: "Writing", icon: Heart, color: "from-[#FB923C] to-[#F472B6]", count: 156 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg5OSwgMTAyLCAyNDEsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">Featured Story</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover Stories That{" "}
                <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  Inspire
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Join our community of writers and readers. Share your thoughts, learn from others, and be part of something amazing.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button 
                  size="lg"
                  onClick={() => onNavigate('explore')}
                  className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0"
                >
                  Start Reading
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('create')}
                  className="border-primary/50 hover:bg-primary/5"
                >
                  Start Writing
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                    10K+
                  </div>
                  <div className="text-sm text-muted-foreground">Articles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent">
                    50K+
                  </div>
                  <div className="text-sm text-muted-foreground">Readers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#06B6D4] to-[#6366F1] bg-clip-text text-transparent">
                    2K+
                  </div>
                  <div className="text-sm text-muted-foreground">Writers</div>
                </div>
              </div>
            </div>

            {/* Featured Post Card */}
            <Card className="group overflow-hidden border-0 shadow-2xl interactive-card cursor-pointer" onClick={() => onNavigate('article')}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0">
                  {featuredPost.category}
                </Badge>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border-2 border-primary/20">
                      <AvatarImage src={featuredPost.author.avatar} />
                      <AvatarFallback>{featuredPost.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{featuredPost.author.name}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trending Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
              <h2 className="text-3xl font-bold">Trending Now</h2>
            </div>
            <Button variant="ghost" onClick={() => onNavigate('explore')}>
              View All
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group interactive-card cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl"
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                <div className="p-6 space-y-4">
                  <Badge variant="secondary" className="bg-muted">
                    {post.category}
                  </Badge>
                  
                  <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-[#EC4899] to-[#FB923C] rounded-full" />
            <h2 className="text-3xl font-bold">Explore Categories</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={category.name}
                  className="group interactive-card cursor-pointer border-0 shadow-md hover:shadow-lg overflow-hidden"
                  onClick={() => onNavigate('categories')}
                >
                  <div className="p-6 space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} articles</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-[#06B6D4] to-[#8B5CF6] rounded-full" />
            <h2 className="text-3xl font-bold">Recent Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card 
                key={post.id}
                className="group interactive-card cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Button 
                      size="icon" 
                      variant="secondary"
                      className="rounded-full bg-white/90 hover:bg-white shadow-lg"
                    >
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>

                  <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('explore')}
              className="border-primary/50 hover:bg-primary/5"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZG90cyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-30" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Share Your Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of writers who are already sharing their knowledge and creativity with the world.
          </p>
          <Button 
            size="lg"
            onClick={() => onNavigate('create')}
            className="bg-white text-primary hover:bg-white/90 border-0"
          >
            Start Writing Today
          </Button>
        </div>
      </section>
    </div>
  );
}
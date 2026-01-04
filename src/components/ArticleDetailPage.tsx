import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Heart, MessageCircle, Bookmark, Share2, Twitter, Facebook, Link2, ThumbsUp, Flag, Clock, Eye, TrendingUp } from "lucide-react";
import { Textarea } from "./ui/textarea";

interface ArticleDetailPageProps {
  onNavigate: (page: string) => void;
}

export function ArticleDetailPage({ onNavigate }: ArticleDetailPageProps) {
  const article = {
    title: "The Future of Web Development: What's Next in 2026",
    subtitle: "Exploring cutting-edge technologies and trends shaping modern web development",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      bio: "Tech writer & full-stack developer. Passionate about sharing knowledge.",
      followers: "12.5K"
    },
    publishedDate: "January 4, 2026",
    readTime: "8 min read",
    views: 3421,
    likes: 1243,
    comments: 89,
    bookmarks: 234,
    category: "Technology",
    tags: ["Web Development", "React", "AI", "Future Tech"],
    coverImage: "https://images.unsplash.com/photo-1737868131581-6379cdee4ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
  };

  const relatedArticles = [
    {
      title: "Mastering React Hooks in 2026",
      author: "Alex Rivera",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop"
    },
    {
      title: "Building Scalable Applications",
      author: "Maya Patel",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop"
    },
    {
      title: "TypeScript Best Practices",
      author: "James Wilson",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=200&fit=crop"
    }
  ];

  const comments = [
    {
      author: "John Doe",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      content: "Great article! Really insightful perspective on the future of web dev. The section about AI integration was particularly interesting.",
      time: "2 hours ago",
      likes: 24
    },
    {
      author: "Emily Parker",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content: "Thanks for sharing this! I've been wondering about these trends. Do you think WebAssembly will become more mainstream?",
      time: "5 hours ago",
      likes: 18
    },
    {
      author: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content: "Excellent breakdown of upcoming technologies. Looking forward to more articles like this!",
      time: "1 day ago",
      likes: 32
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image */}
      <div className="relative h-[300px] md:h-[500px] overflow-hidden bg-gradient-to-br from-[#6366F1] to-[#EC4899]">
        <img 
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        {/* Article Header */}
        <Card className="border-0 shadow-2xl mb-8">
          <CardContent className="p-8 md:p-12">
            {/* Category Badge */}
            <Badge className="mb-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0">
              {article.category}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-6">
              {article.subtitle}
            </p>

            {/* Author Info & Meta */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14 border-2 border-primary/20 cursor-pointer" onClick={() => onNavigate('profile')}>
                  <AvatarImage src={article.author.avatar} />
                  <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold cursor-pointer hover:text-primary transition-colors" onClick={() => onNavigate('profile')}>
                    {article.author.name}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{article.publishedDate}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {article.views} views
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="w-4 h-4 text-secondary" />
                <span>{article.likes} likes</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>{article.comments} comments</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Bookmark className="w-4 h-4 text-accent" />
                <span>{article.bookmarks} saves</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-8 md:p-12 prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  The landscape of web development is evolving at an unprecedented pace. As we move through 2026, 
                  developers are witnessing a transformative shift in how we build, deploy, and maintain web applications. 
                  This article explores the cutting-edge technologies and paradigms that are reshaping our industry.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">
                  The Rise of AI-Powered Development
                </h2>
                <p className="text-muted-foreground mb-6">
                  Artificial Intelligence has moved beyond simple code suggestions to become an integral part of the 
                  development workflow. Modern AI tools can now understand context, refactor entire codebases, and even 
                  suggest architectural improvements. This isn't about replacing developers—it's about augmenting our 
                  capabilities and allowing us to focus on solving complex problems.
                </p>

                <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border-l-4 border-primary">
                  <p className="text-muted-foreground italic">
                    "The best developers of tomorrow won't be those who can write the most code, but those who can 
                    effectively collaborate with AI to create innovative solutions."
                  </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-[#EC4899] to-[#FB923C] bg-clip-text text-transparent">
                  WebAssembly Goes Mainstream
                </h2>
                <p className="text-muted-foreground mb-6">
                  WebAssembly (Wasm) has finally hit its stride in 2026. Major frameworks now offer first-class Wasm 
                  support, enabling near-native performance in the browser. This opens up possibilities for running 
                  complex applications—from video editors to 3D modeling tools—entirely in the browser.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
                  The Evolution of Component-Driven Architecture
                </h2>
                <p className="text-muted-foreground mb-6">
                  Component-driven development has evolved beyond React and Vue. We're seeing a convergence of ideas 
                  from different frameworks, leading to more interoperable and reusable components. The introduction of 
                  Web Components 2.0 has bridged the gap between framework-specific and framework-agnostic approaches.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-[#FB923C] to-[#F472B6] bg-clip-text text-transparent">
                  Edge Computing and Serverless 2.0
                </h2>
                <p className="text-muted-foreground mb-6">
                  The serverless paradigm has matured significantly. Edge computing brings computation closer to users, 
                  resulting in dramatically reduced latency. New platforms make it easier than ever to deploy globally 
                  distributed applications without managing infrastructure.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p className="text-muted-foreground mb-6">
                  The future of web development is bright and full of possibilities. As these technologies mature and 
                  new ones emerge, the key to success will be staying curious, embracing change, and continuously learning. 
                  The tools may change, but the fundamental goal remains the same: building great experiences for users.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t">
                  {article.tags.map((tag, index) => {
                    const gradients = [
                      "from-[#6366F1] to-[#8B5CF6]",
                      "from-[#EC4899] to-[#F472B6]",
                      "from-[#06B6D4] to-[#6366F1]",
                      "from-[#FB923C] to-[#F472B6]"
                    ];
                    return (
                      <Badge 
                        key={tag}
                        className={`bg-gradient-to-r ${gradients[index % gradients.length]} text-white border-0 cursor-pointer hover:scale-105 transition-transform`}
                      >
                        #{tag}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Engagement Actions */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted-foreground">Did you find this article helpful?</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="gap-2 border-primary/50 hover:bg-primary/5">
                      <ThumbsUp className="w-4 h-4" />
                      Helpful
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Flag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/5 border-primary/30">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/5 border-primary/30">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/5 border-primary/30">
                    <Link2 className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground ml-2">Share this article</span>
                </div>
              </CardContent>
            </Card>

            {/* Author Card */}
            <Card className="border-0 shadow-lg mb-8 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#6366F1] to-[#EC4899]" />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16 border-2 border-primary/20 cursor-pointer" onClick={() => onNavigate('profile')}>
                    <AvatarImage src={article.author.avatar} />
                    <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-bold text-lg mb-1 cursor-pointer hover:text-primary transition-colors" onClick={() => onNavigate('profile')}>
                      {article.author.name}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">{article.author.bio}</p>
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-muted-foreground">{article.author.followers} followers</p>
                      <Button size="sm" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0">
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Comments ({article.comments})
                </h3>

                {/* Add Comment */}
                <div className="mb-6">
                  <Textarea 
                    placeholder="Share your thoughts..."
                    className="mb-3 min-h-[100px]"
                  />
                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0">
                      Post Comment
                    </Button>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={comment.avatar} />
                          <AvatarFallback>{comment.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold">{comment.author}</p>
                            <span className="text-xs text-muted-foreground">{comment.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{comment.content}</p>
                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="h-8 gap-1 text-muted-foreground hover:text-primary">
                              <Heart className="w-3 h-3" />
                              <span className="text-xs">{comment.likes}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground hover:text-primary">
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                      {index < comments.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Table of Contents */}
            <Card className="border-0 shadow-lg sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Table of Contents
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      AI-Powered Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-secondary" />
                      WebAssembly Goes Mainstream
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      Component-Driven Architecture
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#FB923C]" />
                      Edge Computing & Serverless
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((related, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative h-24 rounded-lg overflow-hidden mb-2">
                        <img 
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{related.author}</span>
                        <span>•</span>
                        <span>{related.readTime}</span>
                      </div>
                      {index < relatedArticles.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

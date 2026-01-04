import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Heart, MessageCircle, Bookmark, Clock, TrendingUp, Filter, SlidersHorizontal, X } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

export function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", "React", "Design", "TypeScript", "CSS", "Performance", "Security", "AI", "Web3", "Mobile"];
  
  const sortOptions = [
    { label: "Latest", icon: Clock },
    { label: "Trending", icon: TrendingUp },
    { label: "Popular", icon: Heart },
    { label: "Most Discussed", icon: MessageCircle }
  ];

  const [selectedSort, setSelectedSort] = useState("Trending");

  const posts = [
    {
      id: 1,
      title: "Advanced React Patterns You Should Know in 2026",
      excerpt:
        "Explore advanced patterns like compound components, render props, and hooks composition to level up your React skills.",
      author: "Michael Brown",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      category: "React",
      readTime: "8 min",
      likes: 432,
      comments: 28,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Building Scalable Design Systems from Scratch",
      excerpt:
        "A comprehensive guide to creating design systems that grow with your organization and maintain consistency.",
      author: "Emily Parker",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      category: "Design",
      readTime: "12 min",
      likes: 789,
      comments: 45,
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "The Complete Guide to TypeScript Best Practices",
      excerpt:
        "Learn how to write maintainable, type-safe TypeScript code with these proven patterns and techniques.",
      author: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      category: "TypeScript",
      readTime: "10 min",
      likes: 654,
      comments: 32,
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Mastering CSS Grid and Flexbox Together",
      excerpt:
        "Discover how to combine CSS Grid and Flexbox to create powerful, responsive layouts with ease.",
      author: "Sophie Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      category: "CSS",
      readTime: "6 min",
      likes: 521,
      comments: 19,
      image:
        "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=800&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Introduction to Web Performance Optimization",
      excerpt:
        "Speed up your websites with these essential performance optimization techniques and tools.",
      author: "Ryan Martinez",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      category: "Performance",
      readTime: "9 min",
      likes: 876,
      comments: 52,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Modern Authentication Strategies for Web Apps",
      excerpt:
        "Implement secure authentication using JWT, OAuth, and modern best practices.",
      author: "Lisa Wang",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      category: "Security",
      readTime: "11 min",
      likes: 698,
      comments: 41,
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-10 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
            <h1 className="text-4xl font-bold">
              Explore Articles
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Discover amazing content from our community of
            writers
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search articles..."
              className="bg-card border-border/50"
            />
          </div>
          <Button
            variant="outline"
            className="border-primary/50 hover:bg-primary/5"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button
            variant="outline"
            className="border-primary/50 hover:bg-primary/5"
            onClick={() => setSelectedSort("Trending")}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending
          </Button>
        </div>

        {/* Category Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category, index) => {
            const gradients = [
              "from-[#6366F1] to-[#8B5CF6]",
              "from-[#EC4899] to-[#F472B6]",
              "from-[#06B6D4] to-[#6366F1]",
              "from-[#FB923C] to-[#F472B6]",
            ];
            return (
              <Badge
                key={category}
                variant={
                  category === "All" ? "default" : "outline"
                }
                className={
                  category === "All"
                    ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0 cursor-pointer px-4 py-2"
                    : "cursor-pointer hover:bg-muted px-4 py-2"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            );
          })}
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mb-8 p-4 bg-card border-border/50 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Filters</h3>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-white/90 hover:bg-white"
                onClick={() => setShowFilters(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="mb-4">
              <h4 className="text-sm font-bold mb-2">Sort By</h4>
              <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => (
                  <Badge
                    key={option.label}
                    variant={
                      selectedSort === option.label ? "default" : "outline"
                    }
                    className={
                      selectedSort === option.label
                        ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0 cursor-pointer px-4 py-2"
                        : "cursor-pointer hover:bg-muted px-4 py-2"
                    }
                    onClick={() => setSelectedSort(option.label)}
                  >
                    <option.icon className="w-4 h-4 mr-1" />
                    {option.label}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-sm font-bold mb-2">Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const gradients = [
                    "from-[#6366F1] to-[#8B5CF6]",
                    "from-[#EC4899] to-[#F472B6]",
                    "from-[#06B6D4] to-[#6366F1]",
                    "from-[#FB923C] to-[#F472B6]",
                  ];
                  return (
                    <Badge
                      key={category}
                      variant={
                        category === "All" ? "default" : "outline"
                      }
                      className={
                        category === "All"
                          ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0 cursor-pointer px-4 py-2"
                          : "cursor-pointer hover:bg-muted px-4 py-2"
                      }
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0">
                  {post.category}
                </Badge>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 rounded-full bg-white/90 hover:bg-white"
                >
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border-2 border-primary/20">
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>
                        {post.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">
                        {post.author}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/5"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}
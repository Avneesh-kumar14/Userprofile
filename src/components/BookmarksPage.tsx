import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Bookmark, Heart, Clock, Trash2, FolderOpen, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function BookmarksPage() {
  const bookmarkedArticles = [
    {
      id: 1,
      title: "Advanced React Patterns You Should Know in 2026",
      excerpt: "Explore advanced patterns like compound components, render props, and hooks composition.",
      author: "Michael Brown",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      category: "React",
      readTime: "8 min",
      savedDate: "2 days ago",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      collection: "Development"
    },
    {
      id: 2,
      title: "Building Scalable Design Systems",
      excerpt: "A comprehensive guide to creating design systems that grow with your organization.",
      author: "Emily Parker",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      category: "Design",
      readTime: "12 min",
      savedDate: "1 week ago",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
      collection: "Design"
    },
    {
      id: 3,
      title: "TypeScript Best Practices Guide",
      excerpt: "Learn how to write maintainable, type-safe TypeScript code with proven patterns.",
      author: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      category: "TypeScript",
      readTime: "10 min",
      savedDate: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      collection: "Development"
    },
    {
      id: 4,
      title: "The Art of Minimalist UI Design",
      excerpt: "Discover the principles of creating clean, effective user interfaces.",
      author: "Sophie Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      category: "UI Design",
      readTime: "6 min",
      savedDate: "3 weeks ago",
      image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=800&h=400&fit=crop",
      collection: "Design"
    }
  ];

  const collections = [
    { name: "Development", count: 12, color: "from-[#6366F1] to-[#8B5CF6]" },
    { name: "Design", count: 8, color: "from-[#EC4899] to-[#F472B6]" },
    { name: "Business", count: 5, color: "from-[#06B6D4] to-[#6366F1]" },
    { name: "Reading List", count: 15, color: "from-[#FB923C] to-[#F472B6]" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-10 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
            <h1 className="text-4xl font-bold">My Bookmarks</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Your saved articles and reading lists
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Collections */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold flex items-center gap-2">
                    <FolderOpen className="w-4 h-4 text-primary" />
                    Collections
                  </h3>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    + New
                  </Button>
                </div>

                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 border border-primary/20 hover:border-primary/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">All Bookmarks</span>
                      <Badge variant="secondary" className="text-xs">40</Badge>
                    </div>
                  </button>

                  {collections.map((collection) => (
                    <button 
                      key={collection.name}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${collection.color}`} />
                          <span className="text-sm">{collection.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">{collection.count}</Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="mb-6">
              <div className="flex items-center justify-between mb-6">
                <TabsList className="bg-card border shadow-sm">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">Unread</TabsTrigger>
                  <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>

                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="space-y-4">
                  {bookmarkedArticles.map((article) => (
                    <Card key={article.id} className="group interactive-card cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl">
                      <div className="flex flex-col sm:flex-row">
                        {/* Image */}
                        <div className="relative w-full sm:w-64 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                          <img 
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0">
                            {article.category}
                          </Badge>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                {article.title}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                {article.excerpt}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar className="w-8 h-8">
                                <AvatarImage src={article.avatar} />
                                <AvatarFallback>{article.author[0]}</AvatarFallback>
                              </Avatar>
                              <div className="text-sm">
                                <p className="font-medium">{article.author}</p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Clock className="w-3 h-3" />
                                  {article.readTime}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {article.collection}
                              </Badge>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Heart className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t">
                            <p className="text-xs text-muted-foreground">
                              Saved {article.savedDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Empty State Placeholder */}
                {bookmarkedArticles.length === 0 && (
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-12 text-center">
                      <Bookmark className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <h3 className="text-xl font-bold mb-2">No bookmarks yet</h3>
                      <p className="text-muted-foreground mb-6">
                        Start saving articles you want to read later
                      </p>
                      <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0">
                        Explore Articles
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="unread">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-12 text-center">
                    <Bookmark className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <h3 className="text-xl font-bold mb-2">All caught up!</h3>
                    <p className="text-muted-foreground">
                      No unread bookmarks
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="archived">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-12 text-center">
                    <Bookmark className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <h3 className="text-xl font-bold mb-2">No archived items</h3>
                    <p className="text-muted-foreground">
                      Articles you archive will appear here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

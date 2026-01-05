import { useState } from "react";
import { BlogHeader } from "./components/BlogHeader";
import { BlogFooter } from "./components/BlogFooter";
import { HomePage } from "./components/HomePage";
import { ExplorePage } from "./components/ExplorePage";
import { ProfilePage } from "./components/ProfilePage";
import { CreatePostPage } from "./components/CreatePostPage";
import { ArticleDetailPage } from "./components/ArticleDetailPage";
import { BookmarksPage } from "./components/BookmarksPage";
import { NotificationsPage } from "./components/NotificationsPage";
import { SettingsPage } from "./components/SettingsPage";
import { DashboardPage } from "./components/DashboardPage";
import { FollowingPage } from "./components/FollowingPage";
import { Card, CardContent } from "./components/ui/card";
import { Sparkles, BookOpen, Users, Zap } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "explore":
        return <ExplorePage />;
      case "profile":
        return <ProfilePage onNavigate={handleNavigate} />;
      case "create":
        return <CreatePostPage />;
      case "categories":
        return <CategoriesPage />;
      case "article":
        return <ArticleDetailPage onNavigate={handleNavigate} />;
      case "bookmarks":
        return <BookmarksPage />;
      case "notifications":
        return <NotificationsPage />;
      case "settings":
        return <SettingsPage />;
      case "dashboard":
        return <DashboardPage onNavigate={handleNavigate} />;
      case "following":
        return <FollowingPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader onNavigate={handleNavigate} currentPage={currentPage} />
      {renderPage()}
      <BlogFooter onNavigate={handleNavigate} />
    </div>
  );
}

// Categories Page Component
function CategoriesPage() {
  const categories = [
    {
      name: "Technology",
      description: "Latest trends in tech, software, and innovation",
      icon: Zap,
      gradient: "from-[#6366F1] to-[#8B5CF6]",
      count: 234,
      posts: ["AI and Machine Learning", "Cloud Computing", "Cybersecurity"]
    },
    {
      name: "Design",
      description: "UI/UX, graphic design, and creative inspiration",
      icon: Sparkles,
      gradient: "from-[#EC4899] to-[#F472B6]",
      count: 189,
      posts: ["Design Systems", "Color Theory", "Typography"]
    },
    {
      name: "Development",
      description: "Programming tutorials, tips, and best practices",
      icon: BookOpen,
      gradient: "from-[#06B6D4] to-[#6366F1]",
      count: 312,
      posts: ["React Hooks", "Node.js", "Database Design"]
    },
    {
      name: "Writing",
      description: "Creative writing, storytelling, and content creation",
      icon: Users,
      gradient: "from-[#FB923C] to-[#F472B6]",
      count: 156,
      posts: ["Fiction Writing", "Blogging Tips", "Content Strategy"]
    },
    {
      name: "Business",
      description: "Entrepreneurship, startups, and business insights",
      icon: Zap,
      gradient: "from-[#8B5CF6] to-[#EC4899]",
      count: 198,
      posts: ["Startup Guide", "Marketing", "Leadership"]
    },
    {
      name: "Lifestyle",
      description: "Health, wellness, travel, and personal growth",
      icon: Sparkles,
      gradient: "from-[#06B6D4] to-[#8B5CF6]",
      count: 145,
      posts: ["Productivity", "Travel Tips", "Wellness"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Browse by Topic</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore{" "}
            <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              Categories
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find articles that match your interests across our diverse range of topics
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="group interactive-card cursor-pointer border-0 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${category.gradient}`} />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.count} articles
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Popular Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.posts.map((post, index) => (
                        <span 
                          key={index}
                          className="text-xs px-3 py-1 rounded-full bg-muted hover:bg-muted/70 transition-colors"
                        >
                          {post}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-muted/50 to-muted/30 overflow-hidden">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're constantly adding new categories and topics. Let us know what interests you!
              </p>
              <div className="flex gap-3 justify-center">
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:from-[#5558E3] hover:to-[#7C4EE8] transition-all">
                  Suggest a Category
                </button>
                <button className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors">
                  Browse All Articles
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
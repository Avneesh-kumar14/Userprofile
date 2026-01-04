import { useState } from "react";
import { BlogHeader } from "./components/BlogHeader";
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
      <Footer />
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

// Footer Component
function Footer() {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">About</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Features</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Tutorials</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Support</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Community</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Team</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Partners</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Terms</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Guidelines</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Licenses</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-aurora flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="font-bold bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              BlogSphere
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2026 BlogSphere. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
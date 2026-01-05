import { Search, PenSquare, Menu, Moon, Sun, Bell, Bookmark, Settings, User, X, ChevronDown, TrendingUp, Sparkles, Zap, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

interface BlogHeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BlogHeader({ currentPage, onNavigate }: BlogHeaderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const trendingTopics = [
    { name: "Web Development", count: "2.3K articles", icon: "💻", color: "from-[#6366F1] to-[#8B5CF6]" },
    { name: "UI/UX Design", count: "1.8K articles", icon: "🎨", color: "from-[#EC4899] to-[#F472B6]" },
    { name: "AI & Machine Learning", count: "1.5K articles", icon: "🤖", color: "from-[#06B6D4] to-[#6366F1]" },
    { name: "Mobile Development", count: "1.2K articles", icon: "📱", color: "from-[#FB923C] to-[#F472B6]" }
  ];

  const quickLinks = [
    { title: "Getting Started", desc: "New to blogging?" },
    { title: "Writing Guide", desc: "Tips for great content" },
    { title: "Community Guidelines", desc: "Our community rules" },
    { title: "Success Stories", desc: "Inspiring journeys" }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] text-white py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">New: AI-powered writing assistant is now available!</span>
          <button className="underline hover:no-underline">Learn More</button>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
        <div className="max-w-7xl mx-auto">
          {/* Primary Navigation */}
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div 
                onClick={() => onNavigate('home')}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1] via-[#EC4899] to-[#8B5CF6] rounded-2xl blur-md group-hover:blur-lg transition-all" />
                  <div className="relative w-12 h-12 rounded-2xl gradient-aurora aurora-animate flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-2xl">B</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                    BlogSphere
                  </h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">Where Ideas Come Alive</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavButton 
                onClick={() => onNavigate('home')} 
                active={currentPage === 'home'}
                icon={<Sparkles className="w-4 h-4" />}
              >
                Home
              </NavButton>
              
              <div 
                className="relative"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <NavButton 
                  onClick={() => onNavigate('explore')} 
                  active={currentPage === 'explore'}
                  icon={<TrendingUp className="w-4 h-4" />}
                  hasDropdown
                >
                  Explore
                </NavButton>

                {/* Mega Menu */}
                {showMegaMenu && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-card border shadow-2xl rounded-2xl overflow-hidden">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Trending Topics */}
                        <div>
                          <h3 className="font-bold mb-4 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            Trending Topics
                          </h3>
                          <div className="space-y-2">
                            {trendingTopics.map((topic) => (
                              <button
                                key={topic.name}
                                onClick={() => onNavigate('explore')}
                                className="w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                                    {topic.icon}
                                  </div>
                                  <div>
                                    <p className="font-medium text-sm">{topic.name}</p>
                                    <p className="text-xs text-muted-foreground">{topic.count}</p>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                          <h3 className="font-bold mb-4 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-accent" />
                            Quick Links
                          </h3>
                          <div className="space-y-2">
                            {quickLinks.map((link) => (
                              <button
                                key={link.title}
                                className="w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors"
                              >
                                <p className="font-medium text-sm">{link.title}</p>
                                <p className="text-xs text-muted-foreground">{link.desc}</p>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/30 p-4 border-t">
                      <Button 
                        onClick={() => onNavigate('categories')}
                        className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Browse All Categories
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <NavButton 
                onClick={() => onNavigate('dashboard')} 
                active={currentPage === 'dashboard'}
              >
                Dashboard
              </NavButton>
              <NavButton 
                onClick={() => onNavigate('following')} 
                active={currentPage === 'following'}
              >
                Following
              </NavButton>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="hidden md:block">
                {searchOpen ? (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/30 animate-in slide-in-from-right">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Search articles..."
                      autoFocus
                      className="bg-transparent border-none outline-none text-sm w-64 placeholder:text-muted-foreground"
                    />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6"
                      onClick={() => setSearchOpen(false)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSearchOpen(true)}
                    className="rounded-full"
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                )}
              </div>

              {/* Notifications */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onNavigate('notifications')}
                className="relative rounded-full hidden sm:flex"
              >
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white border-0 text-xs animate-pulse">
                  3
                </Badge>
              </Button>

              {/* Bookmarks */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onNavigate('bookmarks')}
                className="rounded-full hidden sm:flex"
              >
                <Bookmark className="w-5 h-5" />
              </Button>

              {/* Write Button */}
              <Button 
                onClick={() => onNavigate('create')}
                className="hidden md:flex gap-2 bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] hover:shadow-lg hover:shadow-primary/25 text-white border-0 transition-all"
              >
                <PenSquare className="w-4 h-4" />
                Write
              </Button>

              {/* User Menu */}
              <div className="hidden sm:block relative group">
                <div className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-muted/50 cursor-pointer transition-all">
                  <Avatar className="w-9 h-9 border-2 border-transparent group-hover:border-primary/50 transition-all ring-2 ring-primary/10">
                    <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" />
                    <AvatarFallback className="bg-gradient-to-br from-[#6366F1] to-[#EC4899] text-white">SA</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-64 bg-card border shadow-2xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {/* Profile Section */}
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 border-b">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                        <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" />
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold">Sarah Anderson</p>
                        <p className="text-xs text-muted-foreground">@sarahchen</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-card/50 rounded-lg p-2">
                        <p className="text-sm font-bold">156</p>
                        <p className="text-xs text-muted-foreground">Posts</p>
                      </div>
                      <div className="bg-card/50 rounded-lg p-2">
                        <p className="text-sm font-bold">2.8K</p>
                        <p className="text-xs text-muted-foreground">Followers</p>
                      </div>
                      <div className="bg-card/50 rounded-lg p-2">
                        <p className="text-sm font-bold">12.4K</p>
                        <p className="text-xs text-muted-foreground">Likes</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <MenuItem 
                      icon={<User className="w-4 h-4" />}
                      onClick={() => onNavigate('profile')}
                    >
                      View Profile
                    </MenuItem>
                    <MenuItem 
                      icon={<PenSquare className="w-4 h-4" />}
                      onClick={() => onNavigate('dashboard')}
                    >
                      Dashboard
                    </MenuItem>
                    <MenuItem 
                      icon={<Bookmark className="w-4 h-4" />}
                      onClick={() => onNavigate('bookmarks')}
                    >
                      Bookmarks
                    </MenuItem>
                    <MenuItem 
                      icon={<Settings className="w-4 h-4" />}
                      onClick={() => onNavigate('settings')}
                    >
                      Settings
                    </MenuItem>
                  </div>

                  {/* Theme Toggle */}
                  <div className="border-t p-2">
                    <button
                      onClick={toggleDarkMode}
                      className="w-full flex items-center justify-between px-4 py-2 hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      <span className="text-sm">Dark Mode</span>
                      <div className="flex items-center gap-2">
                        {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                      </div>
                    </button>
                  </div>

                  {/* Sign Out */}
                  <div className="border-t p-2">
                    <button className="w-full text-left px-4 py-2 hover:bg-destructive/10 rounded-lg transition-colors text-destructive text-sm">
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-card/95 backdrop-blur-xl animate-in slide-in-from-top">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-muted/50 border border-border/50">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
                />
              </div>

              {/* Mobile Nav Links */}
              <div className="space-y-1">
                <MobileNavItem onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}>
                  Home
                </MobileNavItem>
                <MobileNavItem onClick={() => { onNavigate('explore'); setMobileMenuOpen(false); }}>
                  Explore
                </MobileNavItem>
                <MobileNavItem onClick={() => { onNavigate('dashboard'); setMobileMenuOpen(false); }}>
                  Dashboard
                </MobileNavItem>
                <MobileNavItem onClick={() => { onNavigate('following'); setMobileMenuOpen(false); }}>
                  Following
                </MobileNavItem>
                <MobileNavItem onClick={() => { onNavigate('categories'); setMobileMenuOpen(false); }}>
                  Categories
                </MobileNavItem>
                <MobileNavItem onClick={() => { onNavigate('notifications'); setMobileMenuOpen(false); }}>
                  Notifications
                  <Badge className="ml-2 bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white border-0">3</Badge>
                </MobileNavItem>
              </div>

              {/* Mobile Write Button */}
              <Button 
                onClick={() => { onNavigate('create'); setMobileMenuOpen(false); }}
                className="w-full gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0"
              >
                <PenSquare className="w-4 h-4" />
                Write Article
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

// Helper Components
function NavButton({ children, onClick, active, icon, hasDropdown }: any) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
        active 
          ? 'text-primary bg-primary/10' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
      }`}
    >
      {icon}
      <span className="font-medium">{children}</span>
      {hasDropdown && <ChevronDown className="w-3 h-3" />}
      {active && (
        <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-full" />
      )}
    </button>
  );
}

function MenuItem({ children, icon, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-2 hover:bg-muted/50 transition-colors flex items-center gap-3 text-sm"
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

function MobileNavItem({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors font-medium flex items-center justify-between"
    >
      {children}
    </button>
  );
}

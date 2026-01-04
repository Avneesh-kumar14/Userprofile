import { Search, PenSquare, Menu, Moon, Sun, Bell, Bookmark, Settings, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

interface BlogHeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function BlogHeader({ onNavigate, currentPage }: BlogHeaderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')}
            className="cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-aurora aurora-animate flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  BlogSphere
                </h1>
                <p className="text-xs text-muted-foreground">Share Your Stories</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`relative px-3 py-2 transition-colors ${
                currentPage === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366F1] to-[#EC4899]" />
              )}
            </button>
            <button
              onClick={() => onNavigate('explore')}
              className={`relative px-3 py-2 transition-colors ${
                currentPage === 'explore' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Explore
              {currentPage === 'explore' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366F1] to-[#EC4899]" />
              )}
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className={`relative px-3 py-2 transition-colors ${
                currentPage === 'dashboard' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Dashboard
              {currentPage === 'dashboard' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366F1] to-[#EC4899]" />
              )}
            </button>
            <button
              onClick={() => onNavigate('following')}
              className={`relative px-3 py-2 transition-colors ${
                currentPage === 'following' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Following
              {currentPage === 'following' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366F1] to-[#EC4899]" />
              )}
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className={`relative px-3 py-2 transition-colors ${
                currentPage === 'categories' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Categories
              {currentPage === 'categories' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366F1] to-[#EC4899]" />
              )}
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search - Desktop */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 min-w-[240px]">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
              />
            </div>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate('notifications')}
              className="relative rounded-full hidden sm:flex"
            >
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-secondary text-white border-0 text-xs">
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
              className="hidden sm:flex gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0"
            >
              <PenSquare className="w-4 h-4" />
              Write
            </Button>

            {/* User Menu */}
            <div className="hidden sm:block relative group">
              <Avatar className="w-9 h-9 cursor-pointer border-2 border-transparent hover:border-primary/50 transition-all">
                <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-56 bg-card border shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 border-b bg-muted/30">
                  <p className="font-semibold">Sarah Anderson</p>
                  <p className="text-sm text-muted-foreground">@sarahchen</p>
                </div>
                <div className="py-2">
                  <button
                    onClick={() => onNavigate('profile')}
                    className="w-full text-left px-4 py-2 hover:bg-muted transition-colors flex items-center gap-3"
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={() => onNavigate('bookmarks')}
                    className="w-full text-left px-4 py-2 hover:bg-muted transition-colors flex items-center gap-3"
                  >
                    <Bookmark className="w-4 h-4" />
                    <span>Bookmarks</span>
                  </button>
                  <button
                    onClick={() => onNavigate('settings')}
                    className="w-full text-left px-4 py-2 hover:bg-muted transition-colors flex items-center gap-3"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>
                </div>
                <div className="border-t py-2">
                  <button className="w-full text-left px-4 py-2 hover:bg-muted transition-colors text-destructive">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full hidden sm:flex"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-in slide-in-from-top">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
              />
            </div>
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('explore');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Explore
            </button>
            <button
              onClick={() => {
                onNavigate('categories');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Categories
            </button>
            <button
              onClick={() => {
                onNavigate('profile');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Profile
            </button>
            <Button 
              onClick={() => {
                onNavigate('create');
                setMobileMenuOpen(false);
              }}
              className="w-full gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0"
            >
              <PenSquare className="w-4 h-4" />
              Write Article
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
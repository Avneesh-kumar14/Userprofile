import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { UserPlus, UserMinus, MessageCircle, Mail } from "lucide-react";

export function FollowingPage() {
  const following = [
    {
      name: "Alex Rivera",
      username: "@alexrivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      bio: "Full-stack developer & tech enthusiast. Building the future one line at a time.",
      followers: "15.2K",
      articles: 89,
      tags: ["React", "Node.js", "TypeScript"],
      isFollowing: true
    },
    {
      name: "Maya Patel",
      username: "@mayapatel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      bio: "UX Designer passionate about creating beautiful, accessible interfaces.",
      followers: "12.8K",
      articles: 67,
      tags: ["Design", "UX", "Figma"],
      isFollowing: true
    },
    {
      name: "David Kim",
      username: "@davidkim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      bio: "Software architect sharing insights on scalable systems and best practices.",
      followers: "18.5K",
      articles: 124,
      tags: ["Architecture", "Cloud", "DevOps"],
      isFollowing: true
    },
    {
      name: "Emma Wilson",
      username: "@emmawilson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      bio: "Tech writer & developer advocate. Making complex topics simple.",
      followers: "10.3K",
      articles: 45,
      tags: ["Writing", "Education", "JavaScript"],
      isFollowing: true
    }
  ];

  const followers = [
    {
      name: "John Doe",
      username: "@johndoe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      bio: "Frontend developer learning and sharing everyday.",
      followers: "2.5K",
      articles: 23,
      tags: ["HTML", "CSS", "JavaScript"],
      isFollowing: false
    },
    {
      name: "Lisa Wang",
      username: "@lisawang",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      bio: "Mobile app developer | React Native enthusiast",
      followers: "5.7K",
      articles: 34,
      tags: ["React Native", "Mobile", "iOS"],
      isFollowing: true
    },
    {
      name: "Michael Chen",
      username: "@michaelchen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      bio: "Backend engineer passionate about performance optimization.",
      followers: "8.2K",
      articles: 56,
      tags: ["Backend", "Python", "Performance"],
      isFollowing: false
    }
  ];

  const suggestions = [
    {
      name: "Sophie Turner",
      username: "@sophieturner",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      bio: "Product designer crafting delightful user experiences.",
      followers: "9.4K",
      articles: 42,
      tags: ["Product Design", "UI/UX"],
      reason: "Writes about Design"
    },
    {
      name: "James Anderson",
      username: "@jamesanderson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      bio: "DevOps engineer automating everything possible.",
      followers: "11.6K",
      articles: 78,
      tags: ["DevOps", "Docker", "Kubernetes"],
      reason: "Popular in Cloud"
    },
    {
      name: "Nina Kumar",
      username: "@ninakumar",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      bio: "AI/ML researcher sharing cutting-edge developments.",
      followers: "14.2K",
      articles: 91,
      tags: ["AI", "Machine Learning", "Python"],
      reason: "Trending in AI"
    }
  ];

  const UserCard = ({ user, showFollowButton = true, showReason = false }: any) => (
    <Card className="border-0 shadow-md hover:shadow-lg transition-all interactive-card">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="w-16 h-16 border-2 border-primary/20">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1">
                <h3 className="font-bold text-lg hover:text-primary cursor-pointer transition-colors">
                  {user.name}
                </h3>
                <p className="text-sm text-muted-foreground">{user.username}</p>
              </div>
              {showFollowButton && (
                <Button
                  size="sm"
                  variant={user.isFollowing ? "outline" : "default"}
                  className={user.isFollowing 
                    ? "border-primary/50 hover:bg-destructive hover:text-white hover:border-destructive" 
                    : "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0"
                  }
                >
                  {user.isFollowing ? (
                    <>
                      <UserMinus className="w-4 h-4 mr-1" />
                      Unfollow
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4 mr-1" />
                      Follow
                    </>
                  )}
                </Button>
              )}
            </div>

            {showReason && user.reason && (
              <Badge className="mb-2 bg-primary/10 text-primary border-0 text-xs">
                {user.reason}
              </Badge>
            )}

            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {user.bio}
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <div>
                <span className="font-semibold text-foreground">{user.followers}</span> followers
              </div>
              <div>
                <span className="font-semibold text-foreground">{user.articles}</span> articles
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {user.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4 pt-4 border-t">
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <MessageCircle className="w-4 h-4" />
            Message
          </Button>
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <Mail className="w-4 h-4" />
            Email
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-10 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
            <h1 className="text-4xl font-bold">Connections</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Manage your network and discover new writers
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                {following.length}
              </div>
              <p className="text-sm text-muted-foreground">Following</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent mb-2">
                2,847
              </div>
              <p className="text-sm text-muted-foreground">Followers</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md col-span-2 md:col-span-1">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#06B6D4] to-[#6366F1] bg-clip-text text-transparent mb-2">
                89%
              </div>
              <p className="text-sm text-muted-foreground">Engagement Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="following" className="space-y-6">
          <TabsList className="bg-card border shadow-sm">
            <TabsTrigger value="following">
              Following ({following.length})
            </TabsTrigger>
            <TabsTrigger value="followers">
              Followers ({followers.length})
            </TabsTrigger>
            <TabsTrigger value="suggestions">
              Suggested
            </TabsTrigger>
          </TabsList>

          <TabsContent value="following" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {following.map((user, index) => (
                <UserCard key={index} user={user} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="followers" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {followers.map((user, index) => (
                <UserCard key={index} user={user} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-4">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10 mb-6">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Discover Amazing Writers</h3>
                <p className="text-sm text-muted-foreground">
                  We've curated a list of writers based on your interests and reading history.
                  Follow them to see their latest articles in your feed!
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {suggestions.map((user, index) => (
                <UserCard key={index} user={user} showReason={true} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

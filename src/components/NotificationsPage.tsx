import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Bell, Heart, MessageCircle, UserPlus, Bookmark, TrendingUp, Check, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "like",
      icon: Heart,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      user: {
        name: "Emily Parker",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
      },
      action: "liked your article",
      target: "The Future of Web Development",
      time: "5 minutes ago",
      unread: true
    },
    {
      id: 2,
      type: "comment",
      icon: MessageCircle,
      color: "text-primary",
      bgColor: "bg-primary/10",
      user: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
      },
      action: "commented on your article",
      target: "Building Scalable Applications",
      comment: "Great insights! This really helped me understand the concept better.",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 3,
      type: "follow",
      icon: UserPlus,
      color: "text-accent",
      bgColor: "bg-accent/10",
      user: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
      },
      action: "started following you",
      time: "5 hours ago",
      unread: true
    },
    {
      id: 4,
      type: "bookmark",
      icon: Bookmark,
      color: "text-[#FB923C]",
      bgColor: "bg-[#FB923C]/10",
      user: {
        name: "Michael Brown",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
      },
      action: "bookmarked your article",
      target: "TypeScript Best Practices",
      time: "1 day ago",
      unread: false
    },
    {
      id: 5,
      type: "trending",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
      action: "Your article is trending!",
      target: "Advanced React Patterns",
      description: "Your article has reached 1,000 views",
      time: "2 days ago",
      unread: false
    },
    {
      id: 6,
      type: "like",
      icon: Heart,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      user: {
        name: "Lisa Wang",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
      },
      action: "and 23 others liked your article",
      target: "Design Systems Guide",
      time: "3 days ago",
      unread: false
    },
    {
      id: 7,
      type: "comment",
      icon: MessageCircle,
      color: "text-primary",
      bgColor: "bg-primary/10",
      user: {
        name: "Alex Rivera",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
      },
      action: "replied to your comment",
      target: "CSS Grid vs Flexbox",
      comment: "Thanks for the clarification! Makes sense now.",
      time: "1 week ago",
      unread: false
    }
  ];

  const NotificationItem = ({ notification }: { notification: any }) => {
    const Icon = notification.icon;

    return (
      <Card className={`border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer ${notification.unread ? 'bg-primary/5' : ''}`}>
        <CardContent className="p-4">
          <div className="flex gap-4">
            {/* Icon */}
            <div className={`w-10 h-10 rounded-full ${notification.bgColor} flex items-center justify-center flex-shrink-0`}>
              <Icon className={`w-5 h-5 ${notification.color}`} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  {notification.user && (
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={notification.user.avatar} />
                      <AvatarFallback>{notification.user.name[0]}</AvatarFallback>
                    </Avatar>
                  )}
                  <p className="text-sm">
                    {notification.user && (
                      <span className="font-semibold">{notification.user.name} </span>
                    )}
                    <span className="text-muted-foreground">{notification.action}</span>
                    {notification.target && (
                      <span className="font-medium"> "{notification.target}"</span>
                    )}
                  </p>
                </div>
                {notification.unread && (
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                )}
              </div>

              {notification.comment && (
                <p className="text-sm text-muted-foreground bg-muted/50 p-2 rounded-lg mb-2 italic">
                  "{notification.comment}"
                </p>
              )}

              {notification.description && (
                <p className="text-sm text-muted-foreground mb-2">
                  {notification.description}
                </p>
              )}

              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{notification.time}</p>
                {notification.type === "follow" && (
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    Follow Back
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
              <div>
                <h1 className="text-4xl font-bold">Notifications</h1>
                {unreadCount > 0 && (
                  <p className="text-muted-foreground text-sm mt-1">
                    You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Check className="w-4 h-4" />
                Mark all read
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <Heart className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <div className="text-2xl font-bold bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent">
                342
              </div>
              <div className="text-xs text-muted-foreground">Total Likes</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <MessageCircle className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                128
              </div>
              <div className="text-xs text-muted-foreground">Comments</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <UserPlus className="w-6 h-6 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold bg-gradient-to-r from-[#06B6D4] to-[#6366F1] bg-clip-text text-transparent">
                89
              </div>
              <div className="text-xs text-muted-foreground">New Followers</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <Bookmark className="w-6 h-6 mx-auto mb-2 text-[#FB923C]" />
              <div className="text-2xl font-bold bg-gradient-to-r from-[#FB923C] to-[#F472B6] bg-clip-text text-transparent">
                156
              </div>
              <div className="text-xs text-muted-foreground">Bookmarks</div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="bg-card border shadow-sm mb-6">
            <TabsTrigger value="all">
              All
              {unreadCount > 0 && (
                <Badge className="ml-2 bg-primary text-white border-0 h-5 px-1.5 text-xs">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="mentions">Mentions</TabsTrigger>
            <TabsTrigger value="follows">Follows</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            {notifications.map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </TabsContent>

          <TabsContent value="unread" className="space-y-3">
            {notifications.filter(n => n.unread).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
            {notifications.filter(n => n.unread).length === 0 && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-12 text-center">
                  <Bell className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-xl font-bold mb-2">All caught up!</h3>
                  <p className="text-muted-foreground">
                    You have no unread notifications
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="mentions" className="space-y-3">
            {notifications.filter(n => n.type === "comment").map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </TabsContent>

          <TabsContent value="follows" className="space-y-3">
            {notifications.filter(n => n.type === "follow").map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

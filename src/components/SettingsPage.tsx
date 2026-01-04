import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Bell, Lock, User, Palette, Globe, Shield, Mail, Eye, EyeOff, Upload } from "lucide-react";
import { Badge } from "./ui/badge";

export function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-10 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
            <h1 className="text-4xl font-bold">Settings</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Manage your account settings and preferences
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-card border shadow-sm">
            <TabsTrigger value="profile" className="gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="account" className="gap-2">
              <Shield className="w-4 h-4" />
              Account
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="appearance" className="gap-2">
              <Palette className="w-4 h-4" />
              Appearance
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
                  Public Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24 border-4 border-primary/20">
                    <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button className="gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0 mb-2">
                      <Upload className="w-4 h-4" />
                      Upload new photo
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      JPG, GIF or PNG. Max size 2MB
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Form Fields */}
                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Sarah" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Anderson" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="flex gap-2">
                      <Input id="username" defaultValue="@sarahchen" />
                      <Button variant="outline">Check availability</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Tell us about yourself..."
                      defaultValue="Passionate product designer with over 8 years of experience creating intuitive and beautiful digital experiences."
                      rows={4}
                    />
                    <p className="text-xs text-muted-foreground">
                      Brief description for your profile. Max 160 characters.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" type="url" placeholder="https://yourwebsite.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" />
                  </div>

                  <div className="space-y-2">
                    <Label>Social Links</Label>
                    <div className="grid gap-3">
                      <Input placeholder="Twitter username" />
                      <Input placeholder="GitHub username" />
                      <Input placeholder="LinkedIn profile" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#EC4899] to-[#F472B6] rounded-full" />
                  Writing Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Allow comments on articles</Label>
                    <p className="text-sm text-muted-foreground">Let readers comment on your posts</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show reading time</Label>
                    <p className="text-sm text-muted-foreground">Display estimated reading time on articles</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto-save drafts</Label>
                    <p className="text-sm text-muted-foreground">Automatically save your work as you write</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Settings */}
          <TabsContent value="account" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
                  Account Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="sarah.anderson@email.com" />
                  <p className="text-xs text-muted-foreground">
                    Your email is verified <Badge className="ml-2 bg-green-500/10 text-green-600 border-0">Verified</Badge>
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Change Password</h3>
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0">
                    Update Password
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#EC4899] to-[#F472B6] rounded-full" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Profile visibility</Label>
                    <p className="text-sm text-muted-foreground">Make your profile visible to everyone</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show activity status</Label>
                    <p className="text-sm text-muted-foreground">Let others see when you're active</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-factor authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg border-destructive/50">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <div className="w-1 h-6 bg-destructive rounded-full" />
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Delete Account</Label>
                    <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive" size="sm">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
                  Email Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>New followers</Label>
                    <p className="text-sm text-muted-foreground">Get notified when someone follows you</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Comments on your articles</Label>
                    <p className="text-sm text-muted-foreground">Get notified when someone comments</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Article likes</Label>
                    <p className="text-sm text-muted-foreground">Get notified when someone likes your article</p>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Weekly digest</Label>
                    <p className="text-sm text-muted-foreground">Receive a weekly summary of activity</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#EC4899] to-[#F472B6] rounded-full" />
                  Push Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable push notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Mentions and replies</Label>
                    <p className="text-sm text-muted-foreground">Get notified when someone mentions you</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
                  Theme
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="cursor-pointer border-2 border-primary rounded-lg p-4 text-center hover:bg-muted/50 transition-colors">
                    <div className="w-full h-20 rounded bg-gradient-to-br from-background to-muted mb-2"></div>
                    <p className="font-medium">Light</p>
                  </div>
                  <div className="cursor-pointer border-2 border-border rounded-lg p-4 text-center hover:bg-muted/50 transition-colors">
                    <div className="w-full h-20 rounded bg-gradient-to-br from-gray-900 to-gray-800 mb-2"></div>
                    <p className="font-medium">Dark</p>
                  </div>
                  <div className="cursor-pointer border-2 border-border rounded-lg p-4 text-center hover:bg-muted/50 transition-colors">
                    <div className="w-full h-20 rounded bg-gradient-to-br from-background via-gray-800 to-background mb-2"></div>
                    <p className="font-medium">Auto</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#EC4899] to-[#F472B6] rounded-full" />
                  Display
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Font Size</Label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Small</Button>
                    <Button variant="outline" size="sm" className="border-primary">Medium</Button>
                    <Button variant="outline" size="sm">Large</Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Reading Width</Label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Narrow</Button>
                    <Button variant="outline" size="sm" className="border-primary">Standard</Button>
                    <Button variant="outline" size="sm">Wide</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

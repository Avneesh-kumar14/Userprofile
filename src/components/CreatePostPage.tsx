import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Image, Type, Code, List, Quote, Bold, Italic, Eye, Send } from "lucide-react";
import { Separator } from "./ui/separator";

export function CreatePostPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 bg-gradient-to-b from-[#6366F1] to-[#EC4899] rounded-full" />
              <h1 className="text-4xl font-bold">Create New Article</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Eye className="w-4 h-4" />
                Preview
              </Button>
              <Button className="gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C4EE8] text-white border-0">
                <Send className="w-4 h-4" />
                Publish
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Editor */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b">
                <CardTitle>Article Details</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Title</label>
                  <Input 
                    placeholder="Enter your article title..."
                    className="text-2xl border-0 border-b border-border/50 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Excerpt</label>
                  <Textarea 
                    placeholder="Write a short description..."
                    className="resize-none min-h-[80px]"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>Content</CardTitle>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Bold className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Italic className="w-4 h-4" />
                    </Button>
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Type className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <List className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Quote className="w-4 h-4" />
                    </Button>
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Code className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Image className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <Textarea 
                  placeholder="Start writing your article..."
                  className="min-h-[500px] resize-none border-0 focus-visible:ring-0 text-base leading-relaxed"
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b">
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>Select category...</option>
                    <option>Technology</option>
                    <option>Design</option>
                    <option>Development</option>
                    <option>Writing</option>
                    <option>Business</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Tags</label>
                  <Input 
                    placeholder="Add tags (comma separated)"
                    className="mb-2"
                  />
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0">
                      React
                    </Badge>
                    <Badge className="bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white border-0">
                      Web Dev
                    </Badge>
                    <Badge className="bg-gradient-to-r from-[#06B6D4] to-[#6366F1] text-white border-0">
                      Tutorial
                    </Badge>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Featured Image</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Image className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload image
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b">
                <CardTitle>Publishing Options</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Save as draft</span>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Allow comments</span>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Feature this article</span>
                  <input type="checkbox" className="rounded" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#6366F1]/10 to-[#EC4899]/10">
              <CardContent className="p-6">
                <h4 className="font-medium mb-2">💡 Writing Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Keep paragraphs short and scannable</li>
                  <li>• Use headings to organize content</li>
                  <li>• Add images to break up text</li>
                  <li>• Include code examples if relevant</li>
                  <li>• Proofread before publishing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

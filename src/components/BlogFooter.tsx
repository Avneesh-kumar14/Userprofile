import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  Send,
  Heart,
  TrendingUp,
  BookOpen,
  Users,
  Award,
  Sparkles
} from "lucide-react";

interface BlogFooterProps {
  onNavigate: (page: string) => void;
}

export function BlogFooter({ onNavigate }: BlogFooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", page: "home" },
      { label: "Explore", page: "explore" },
      { label: "Categories", page: "categories" },
      { label: "Pricing", page: "home" },
      { label: "Write", page: "create" }
    ],
    company: [
      { label: "About Us", page: "about" },
      { label: "Careers", page: "home" },
      { label: "Press Kit", page: "home" },
      { label: "Contact", page: "home" },
      { label: "Partners", page: "home" }
    ],
    resources: [
      { label: "Blog", page: "home" },
      { label: "Help Center", page: "help" },
      { label: "Community", page: "following" },
      { label: "Guidelines", page: "home" },
      { label: "API Docs", page: "home" }
    ],
    legal: [
      { label: "Privacy Policy", page: "privacy" },
      { label: "Terms of Service", page: "terms" },
      { label: "Cookie Policy", page: "home" },
      { label: "DMCA", page: "home" },
      { label: "Licenses", page: "home" }
    ]
  };

  const stats = [
    { icon: BookOpen, label: "Articles", value: "50K+" },
    { icon: Users, label: "Writers", value: "10K+" },
    { icon: TrendingUp, label: "Readers", value: "1M+" },
    { icon: Award, label: "Awards", value: "25+" }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-[#4267B2]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#E4405F]" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0077B5]" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-foreground" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-[#FF0000]" }
  ];

  const popularTopics = [
    "React", "TypeScript", "UI/UX Design", "Web Development", 
    "JavaScript", "CSS", "Node.js", "Python", "AI/ML", "DevOps"
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-muted/50">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#EC4899] to-[#F472B6] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="bg-gradient-to-br from-[#6366F1] via-[#EC4899] to-[#8B5CF6] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
            </div>
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6" />
                  <Badge className="bg-white/20 text-white border-0">Premium Content</Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get the Best Stories Weekly
                </h2>
                <p className="text-white/90 text-lg">
                  Join 50,000+ subscribers getting curated content, writing tips, and exclusive insights delivered to their inbox.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex gap-2 mb-4">
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/90 border-0 text-foreground placeholder:text-muted-foreground h-12"
                  />
                  <Button className="bg-white text-primary hover:bg-white/90 h-12 px-6">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-white/70 text-xs">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
                <div className="flex items-center gap-4 mt-4 text-white/90 text-sm">
                  <div className="flex items-center gap-1">
                    ✓ <span>Weekly digest</span>
                  </div>
                  <div className="flex items-center gap-1">
                    ✓ <span>No spam</span>
                  </div>
                  <div className="flex items-center gap-1">
                    ✓ <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 border-y">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const gradients = [
                "from-[#6366F1] to-[#8B5CF6]",
                "from-[#EC4899] to-[#F472B6]",
                "from-[#06B6D4] to-[#6366F1]",
                "from-[#FB923C] to-[#F472B6]"
              ];
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index]} mb-3`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl gradient-aurora aurora-animate flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl">B</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                    BlogSphere
                  </h2>
                  <p className="text-xs text-muted-foreground">Where Ideas Come Alive</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The ultimate platform for writers, readers, and thinkers. Share your stories, 
                discover amazing content, and join a thriving community of creative minds.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-all ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 border-t">
          <h3 className="font-bold mb-4 text-center">Popular Topics</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {popularTopics.map((topic, index) => {
              const gradients = [
                "from-[#6366F1] to-[#8B5CF6]",
                "from-[#EC4899] to-[#F472B6]",
                "from-[#06B6D4] to-[#6366F1]",
                "from-[#FB923C] to-[#F472B6]"
              ];
              return (
                <Badge
                  key={topic}
                  className={`bg-gradient-to-r ${gradients[index % 4]} text-white border-0 cursor-pointer hover:scale-105 transition-transform`}
                  onClick={() => onNavigate('explore')}
                >
                  {topic}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 border-t">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:hello@blogsphere.com" className="hover:text-primary transition-colors">
                hello@blogsphere.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" />
              <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>© {currentYear} BlogSphere. Made with</span>
              <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
              <span>in San Francisco</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('privacy')}
                className="hover:text-primary transition-colors"
              >
                Privacy
              </button>
              <span>•</span>
              <button 
                onClick={() => onNavigate('terms')}
                className="hover:text-primary transition-colors"
              >
                Terms
              </button>
              <span>•</span>
              <button className="hover:text-primary transition-colors">
                Sitemap
              </button>
              <span>•</span>
              <button className="hover:text-primary transition-colors">
                Accessibility
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group z-40"
          aria-label="Back to top"
        >
          <TrendingUp className="w-5 h-5 rotate-[-90deg] group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </footer>
  );
}

import { 
  Brain, 
  Calendar, 
  LayoutDashboard, 
  Users, 
  Share2, 
  BarChart3 
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Smart Scheduling",
      description: "AI analyzes your audience behavior to find the optimal posting times for maximum engagement.",
    },
    {
      icon: Calendar,
      title: "AI Content Inspiration", 
      description: "Get personalized content suggestions based on trending topics and your brand voice.",
    },
    {
      icon: LayoutDashboard,
      title: "Unified Dashboard",
      description: "Manage all your social platforms from one beautiful, intuitive interface.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Streamline workflows with role-based permissions and approval processes.",
    },
    {
      icon: Share2,
      title: "Cross-Platform Posting",
      description: "Publish to all major social networks simultaneously with platform-specific optimization.",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Track performance with comprehensive insights and actionable recommendations.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-[#B8E4FF]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-gray-900 mb-6">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] bg-clip-text text-transparent">
              dominate social media
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to simplify your workflow and amplify your reach across all platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-white/60 transition-all duration-300 hover:-translate-y-2 hover:border-gradient-to-r hover:from-[#5AB8FF]/30 hover:to-[#B084F9]/30"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5AB8FF]/20 to-[#B084F9]/20 rounded-2xl flex items-center justify-center group-hover:from-[#5AB8FF]/30 group-hover:to-[#B084F9]/30 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-7 h-7 text-[#5AB8FF] group-hover:text-[#B084F9] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl text-gray-900 group-hover:text-[#5AB8FF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
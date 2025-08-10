import { Button } from "./ui/button";
import { Check, Brain, Calendar, BarChart3, Users } from "lucide-react";

export function SolutionOverview() {
  const features = [
    { icon: Brain, text: "AI-powered content suggestions and optimization" },
    { icon: Calendar, text: "Smart scheduling based on audience behavior" },
    { icon: BarChart3, text: "Comprehensive analytics and performance tracking" },
    { icon: Users, text: "Team collaboration and workflow management" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#B8E4FF]/10 to-[#E4D7FF]/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl text-gray-900 leading-tight">
                Meet MetraSocial —{" "}
                <span className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] bg-clip-text text-transparent">
                  Your AI Social Media Co-Pilot
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your social media strategy with intelligent automation that learns from your audience and optimizes every post.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#5AB8FF]/20 to-[#B084F9]/20 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#5AB8FF]" />
                    </div>
                    <p className="text-gray-700 text-lg">{feature.text}</p>
                  </div>
                );
              })}
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] hover:from-[#4AA7EE] hover:to-[#9F73E8] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6"
            >
              See How It Works
            </Button>
          </div>

          {/* Right Column - Floating Mockups */}
          <div className="relative">
            {/* Main Dashboard Mockup */}
            <div className="backdrop-blur-xl bg-white/20 rounded-3xl border border-white/30 shadow-2xl p-6 transform hover:scale-105 transition-transform duration-500">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] h-3"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-6 bg-gradient-to-r from-[#5AB8FF]/30 to-[#B084F9]/30 rounded w-32"></div>
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                  </div>
                  
                  {/* Analytics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="h-20 bg-gradient-to-br from-[#B8E4FF] to-[#E4D7FF] rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-3 bg-white/60 rounded w-12 mx-auto mb-1"></div>
                        <div className="h-2 bg-white/40 rounded w-8 mx-auto"></div>
                      </div>
                    </div>
                    <div className="h-20 bg-gradient-to-br from-[#E4D7FF] to-[#B8E4FF] rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-3 bg-white/60 rounded w-12 mx-auto mb-1"></div>
                        <div className="h-2 bg-white/40 rounded w-8 mx-auto"></div>
                      </div>
                    </div>
                  </div>

                  {/* Schedule Preview */}
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gradient-to-r from-[#5AB8FF]/10 to-[#B084F9]/10 rounded-lg border-l-4 border-[#5AB8FF] p-2">
                        <div className="h-2 bg-[#5AB8FF]/30 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="h-12 bg-gradient-to-r from-[#B084F9]/10 to-[#5AB8FF]/10 rounded-lg border-l-4 border-[#B084F9] p-2">
                        <div className="h-2 bg-[#B084F9]/30 rounded w-2/3 mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI Assistant */}
            <div className="absolute -top-6 -right-6 backdrop-blur-xl bg-white/30 rounded-2xl border border-white/40 shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="w-24 h-24 bg-gradient-to-br from-[#5AB8FF] to-[#B084F9] rounded-xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="mt-2 text-center">
                <div className="h-2 bg-white/60 rounded w-16 mx-auto mb-1"></div>
                <div className="h-1 bg-white/40 rounded w-12 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}